import bcrypt from 'bcrypt'
import crypto from 'crypto'
import jwt from 'jsonwebtoken'
import { catchError } from '../middlewares/catchError.js'
import { User } from '../models/user.model.js'
import { sendEmail } from '../mails/mailer.js'
import { EmailCode } from '../models/emailcode.model.js'
import { env } from '../config/env.js'
import { token } from 'morgan'

export const getAll = catchError(async(req, res) => {
    const results = await User.findAll()
    return res.json(results)
})

export const create = catchError(async(req, res) => {
    const { password, email, firstName, lastName, frontBaseUrl, ...rest } = req.body

    const hashedPassword = await bcrypt.hash(password, 10)

    const user = await User.create({ 
        email, 
        firstName, 
        lastName, 
        password: hashedPassword, 
        ...rest 
    })

    const code = crypto.randomBytes(32).toString('hex')
    
    await EmailCode.create({
        code,
        userId: user.id
    })
    
    const link = `${frontBaseUrl}/${code}`

    await sendEmail({
        to: email,
        subject: `Welcome ${firstName} ${lastName} to our platform`,
        html: `
        <h1>Hello ${firstName}!</h1>
        <p>Thanks for your preference. We are grateful to have you with us!</p>
        <p>Please verify your email in the next link:</p>
        <a href="${link}">Verify email</a>
        <p>${link}</p>
        <p>If you have any questions or need help, please don't hesitate to contact us.</p>
        <p>Enjoy your experience.</p>
        <p>Kind regards, <br/> The Team.</p>
        `
    })

    return res.status(201).json({ message: 'User created successfully!', user})
})

export const login = catchError(async(req, res) => {
    const { email, password } = req.body

    const existingUser = await User.findOne({ where: { email } })
    if(!existingUser) return res.status(401).json({ message: 'Invalid Credentials' })

    const isValid = await bcrypt.compare(password, existingUser.password)
    if(!isValid) return res.status(401).json({ message: 'Invalid Credentials' })

    if (!existingUser.isVerified) return res.status(401).json({ message: 'Unverified user'})

    const token = jwt.sign({ user: existingUser }, env.SECRET_KEY, {
        expiresIn: env.EXPIRE_IN
    })

    return res.json({ 
        message: 'Correct Login', 
        token,
        user: existingUser
    })
})

export const getOne = catchError(async(req, res) => {
    const { id } = req.params
    const result = await User.findByPk(id)
    if(!result) return res.sendStatus(404)
    return res.json(result)
})

export const remove = catchError(async(req, res) => {
    const { id } = req.params
    await User.destroy({ where: {id} })
    return res.sendStatus(204)
})

export const update = catchError(async(req, res) => {
    const { id } = req.params
    const { password, isVerified, ...rest } = req.body
    const result = await User.update(
        { ...rest },
        { where: {id}, returning: true }
    )
    if(result[0] === 0) return res.sendStatus(404)
    return res.json(result[1][0])
})

export const verifyEmail = catchError(async (req, res) => {
    const { code } = req.params

    const emailCode = await EmailCode.findOne({where: { code }})
    if (!emailCode) return res.status(401).json({ message: 'Invalid Code' })

    const user = await User.update(
        { isVerified: true }, 
        { where: { id: emailCode.userId }, returning: true }
    )

    await emailCode.destroy()
    return res.json({ message: 'Email verified successfully', user: user[1][0] })
})

export const userLogged = catchError(async (req, res) => {
    const user = req.user
    return res.json(user)
})

// Reto opcional: Crear el endpoint para resetear la contraseña

export const resetPasswordRequest = catchError(async (req, res) => {
    const { email, frontBaseUrl } = req.body

    // 1. Buscar usuario por email
    const user = await User.findOne({ where: { email } })
    if (!user) return res.status(401).json({ message: 'User not found' })

    // 2. Generar código único
    const code = crypto.randomBytes(32).toString('hex')

    // 3. Guardar el código en EmailCode
    await EmailCode.create({
        code,
        userId: user.id
    });

    // 4. Crear link para resetear contraseña
    const link = `${frontBaseUrl}/${code}`

    // 5. Enviar correo al usuario
    await sendEmail({
        to: email,
        subject: 'Password Reset Request',
        html: `
        <h1>Hello ${user.firstName}!</h1>
        <p>You requested to reset your password.</p>
        <p>Please click the following link to reset it:</p>
        <a href="${link}">Reset Password</a>
        <p>${link}</p>
        <p>If you did not request this, please ignore this email.</p>
        `
    })

    return res.json({ message: 'Password reset email sent successfully!' })
})

// Reto opcional: Crear el endpoint para Actualizar la contraseña

export const resetPasswordConfirm = catchError(async (req, res) => {
    const { code } = req.params
    const { password } = req.body

    // 1. Buscar el código en EmailCode
    const emailCode = await EmailCode.findOne({ where: { code } });
    if (!emailCode) return res.status(401).json({ message: 'Invalid or expired code' })

    // 2. Encriptar la nueva contraseña
    const hashedPassword = await bcrypt.hash(password, 10)

    // 3. Actualizar contraseña del usuario
    await User.update(
        { password: hashedPassword },
        { where: { id: emailCode.userId } }
    )

    // 4. Eliminar el código usado
    await emailCode.destroy()

    return res.json({ message: 'Password updated successfully!' })
})

