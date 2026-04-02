import nodemailer from 'nodemailer' // Se cambia la librería
import { env } from '../config/env.js'
//import DOMPurify from 'isomorphic-dompurify'; // Esta librería ya trae su propio DOM interno

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
  // Ahora DOMPurify funciona directamente sin configurar nada más
  //const cleanHtml = DOMPurify.sanitize(html);

  const mailOptions = {
    from: env.EMAIL,
    to,
    subject,
    html //: cleanHtml // Usamos la versión limpia
  }

  try {
    await transporter.sendMail(mailOptions);
    console.log("Email sent safely to:", to);
  } catch (err) {
    console.error("Gmail/Nodemailer error:", err.message);
  }
}