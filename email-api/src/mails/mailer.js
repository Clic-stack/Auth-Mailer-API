import nodemailer from 'nodemailer' // Cambiamos la librería
import { env } from '../config/env.js'

// Creamos el transportador con la configuración de Gmail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: env.EMAIL,
    pass: env.GOOGLE_APP_PASSWORD, // Aquí irá tu código de 16 letras
  },
});

export const sendEmail = async ({ to, subject, html }) => {
  const mailOptions = {
    from: env.EMAIL,
    to,
    subject,
    html
  }

  try {
    await transporter.sendMail(mailOptions);
    console.log("Email sent via Gmail App Password to:", to);
  } catch (err) {
    console.error("Gmail/Nodemailer error:", err.message);
    // Importante: No lanzamos el error (throw) para que el registro del usuario 
    // en el controller no se detenga si el mail falla.
  }
}


/*import sgMail from '@sendgrid/mail'
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
}*/