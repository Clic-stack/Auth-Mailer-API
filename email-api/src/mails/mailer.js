import nodemailer from 'nodemailer'
import { env } from '../config/env.js'

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: env.EMAIL,
        pass: env.GOOGLE_APP_PASSWORD
    }
})

export const sendEmail = async (options) => {
    const mailOptions = { from: env.EMAIL, ...options }
    await transporter.sendMail(mailOptions)
}