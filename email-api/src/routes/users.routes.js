import { getAll, create, getOne, remove, update, verifyEmail, login, userLogged, resetPasswordRequest, resetPasswordConfirm } from '../controllers/users.controller.js'
import {Router} from 'express'
import { auth } from '../middlewares/auth.js'

const usersRouter = Router()
// Rutas públicas:
usersRouter.post('/', create)
usersRouter.post('/login', login)
usersRouter.post('/reset_password', resetPasswordRequest)
usersRouter.post('/reset_password/:code', resetPasswordConfirm)
usersRouter.get('/verify_email/:code', verifyEmail)


//Rutas protegidas:
usersRouter.use(auth)
usersRouter.get('/', getAll)
usersRouter.get('/me', userLogged)
usersRouter.route('/:id')
    .get(getOne)
    .delete(remove)
    .put(update)

export default usersRouter