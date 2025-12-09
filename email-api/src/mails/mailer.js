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