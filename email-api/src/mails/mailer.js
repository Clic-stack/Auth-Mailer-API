import nodemailer from 'nodemailer' // Se cambia la librería
import { env } from '../config/env.js'
import DOMPurify from 'isomorphic-dompurify'; // Esta librería ya trae su propio DOM interno

const transporter = nodemailer.createTransport({
  host: env.SMTP_HOST, 
  port: parseInt(env.SMTP_PORT),    
  secure: false, // true para puerto 465, false para otros
  auth: {
    user: env.EMAIL,
    pass: env.GOOGLE_APP_PASSWORD,
  },
  tls: {
    rejectUnauthorized: false, // Esto ayuda a evitar bloqueos de certificados en Render
    servername: env.SMTP_HOST,
  },
  connectionTimeout: 20000, // Aumentamos a 40 segundos
});

export const sendEmail = async ({ to, subject, html }) => {
  // Ahora DOMPurify funciona directamente sin configurar nada más
  const cleanHtml = DOMPurify.sanitize(html || '');

  const mailOptions = {
    from: 'clioanahi@gmail.com',
    to,
    subject,
    html: cleanHtml // Usamos la versión limpia
  }

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent safely to:", to);
    return info; // Es importante retornar algo para que el test lo vea
  } catch (err) {
    console.error("Mailer Error:", err.message); // <-- Limpiamos el nombre "Gmail"
    throw err;
  }
}