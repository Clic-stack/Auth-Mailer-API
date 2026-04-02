import nodemailer from 'nodemailer' // Se cambia la librería
import { env } from '../config/env.js'

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // true para puerto 465, false para otros
  auth: {
    user: env.EMAIL,
    pass: env.GOOGLE_APP_PASSWORD,
  },
  tls: {
    rejectUnauthorized: false // Esto ayuda a evitar bloqueos de certificados en Render
  }
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
    // Importante: No lanzamos el error (throw) para que el registro del usuario en el controller no se detenga si el mail falla.
  }
}