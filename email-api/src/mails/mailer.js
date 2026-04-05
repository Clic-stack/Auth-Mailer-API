import nodemailer from 'nodemailer' // Se cambia la librería
import { env } from '../config/env.js'
import DOMPurify from 'isomorphic-dompurify'; // Esta librería ya trae su propio DOM interno

const transporter = nodemailer.createTransport({
  //pool: true, // Reutiliza la conexión (más eficiente en Render)
  host: env.SMTP_HOST, 
  port: parseInt(env.SMTP_PORT),    
  secure: false, // true para puerto 465, false para otros
  //family: 4,
  auth: {
    user: env.EMAIL,
    pass: env.GOOGLE_APP_PASSWORD,
  },
  tls: {
    rejectUnauthorized: false, // Esto ayuda a evitar bloqueos de certificados en Render
    servername: env.SMTP_HOST,
    //minVersion: 'TLSv1.2'
  },
  connectionTimeout: 20000, // Aumentamos a 40 segundos
  //greetingTimeout: 30000,   // 30 segundos para el saludo
  //socketTimeout: 60000     // 60 segundos de socket abierto
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
    console.error("Mailer Error:", err.message); // <-- Limpiamos el nombre "Gmail"
    throw err;
  }
}