import nodemailer from 'nodemailer'
import { env } from '../config/env.js'

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    //service: "gmail",
    auth: {
        user: env.EMAIL,
        pass: env.GOOGLE_APP_PASSWORD
    }
})

export const sendEmail = async (options) => {
    const mailOptions = { from: env.EMAIL, ...options }
    try {
    await transporter.sendMail(mailOptions)
    console.log("Email sent:", options.to)
  } catch (err) {
    console.error("Error sending email:", err)
    throw err
  }
}