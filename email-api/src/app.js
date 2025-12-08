import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import routes from './routes/index.js'
import { errorHandler } from './middlewares/errorHandler.js'
import { env } from './config/env.js'
import { sendEmail } from './mails/mailer.js'

const app = express()

app.set('port', env.PORT || 3000)

app.use(cors())
app.use(helmet())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Debug SMTP (temporal)
app.get('/debug/send-mail', async (req, res) => {
  try {
    await sendEmail({
      to: env.EMAIL, // o tu correo de prueba
      subject: 'Test desde Render (SSL 465)',
      html: '<p>Si ves este correo, SMTP funciona en producción</p>'
    })
    res.json({ message: 'Correo enviado' })
  } catch (err) {
    res.status(500).json({ message: 'Error enviando correo', error: err.message })
  }
})

// Routes
app.use('/', routes)

// Error handler
app.use(errorHandler)

export default app