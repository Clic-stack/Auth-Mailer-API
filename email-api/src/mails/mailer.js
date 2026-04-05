import nodemailer from 'nodemailer' // Se cambia la librería
import { env } from '../config/env.js'
import DOMPurify from 'isomorphic-dompurify'; // Esta librería ya trae su propio DOM interno

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // true para puerto 465, false para otros
  pool: true, // Reutiliza la conexión (más eficiente en Render)
  family: 4,
  auth: {
    user: env.EMAIL,
    pass: env.GOOGLE_APP_PASSWORD,
  },
  tls: {
    rejectUnauthorized: false, // Esto ayuda a evitar bloqueos de certificados en Render
    servername: "smtp.gmail.com",
    minVersion: 'TLSv1.2'
  },
  connectionTimeout: 40000, // Aumentamos a 40 segundos
  greetingTimeout: 30000,   // 30 segundos para el saludo
  socketTimeout: 60000     // 60 segundos de socket abierto
});

export const sendEmail = async ({ to, subject, html }) => {
  // Ahora DOMPurify funciona directamente sin configurar nada más
  const cleanHtml = DOMPurify.sanitize(html || '');

  const mailOptions = {
    from: env.EMAIL,
    to,
    subject,
    html: cleanHtml // Usamos la versión limpia
  }

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent safely to:", to);
    return info; // Es importante retornar algo para que el test lo vea
  } catch (err) {
    console.error("Gmail/Nodemailer error:", err.message);
    throw err; // ¡CRÍTICO! Si no lanzas el error, el controller piensa que todo salió bien
  }
}