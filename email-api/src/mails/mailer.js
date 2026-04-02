import nodemailer from 'nodemailer' // Se cambia la librería
import { env } from '../config/env.js'
import createDOMPurify from 'dompurify'; // Librería para limpiar HTML
import { JSDOM } from 'jsdom';           // Necesaria para que dompurify funcione en Node

// Configuración del limpiador
const window = new JSDOM('').window;
const DOMPurify = createDOMPurify(window);

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
  // LIMPIEZA: Sanitizamos el HTML antes de enviarlo
  const cleanHtml = DOMPurify.sanitize(html);

  const mailOptions = {
    from: env.EMAIL,
    to,
    subject,
    html: cleanHtml // Usamos la versión limpia
  }

  try {
    await transporter.sendMail(mailOptions);
    console.log("Email sent safely to:", to);
  } catch (err) {
    console.error("Gmail/Nodemailer error:", err.message);
  }
}