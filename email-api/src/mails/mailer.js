import sgMail from '@sendgrid/mail'
import { env } from '../config/env.js'

sgMail.setApiKey(env.SENDGRID_API_KEY)

export const sendEmail = async ({ to, subject, html }) => {
  const msg = {
    to,
    from: env.EMAIL, // debe ser el correo verificado en SendGrid
    subject,
    html
  }
  try {
    await sgMail.send(msg)
    console.log("Email sent via SendGrid:", to)
  } catch (err) {
    console.error("SendGrid error:", err.response?.body || err.message)
    throw err
  }
}

/*import nodemailer from 'nodemailer'
import { env } from '../config/env.js'

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    //service: "gmail",
    auth: {
        user: env.EMAIL,
        pass: env.GOOGLE_APP_PASSWORD
    }
})

export const sendEmail = async (options) => {
    const mailOptions = { from: env.EMAIL, ...options }
    try {
    const info = await transporter.sendMail(mailOptions)
    console.log("Email sent:", info.response)
  } catch (err) {
    console.error("SMTP error", err.code, err.message)
    throw err
  }
}*/