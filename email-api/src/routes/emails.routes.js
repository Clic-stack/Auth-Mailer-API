import { Router } from 'express'
import { sayHi } from '../controllers/emails.controller.js'

const emailsRoutes = Router()

emailsRoutes.post('/contact', sayHi)

export default emailsRoutes