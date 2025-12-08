import { Router } from 'express'
import emailsRoutes from './emails.routes.js'
import usersRouter from './users.routes.js'

const router = Router()

router.get('/', (req, res) => {
  res.json({ message: 'Welcome to the API' })
})

router.use('/emails', emailsRoutes)
router.use('/users', usersRouter)

export default router