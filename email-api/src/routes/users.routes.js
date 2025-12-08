import { getAll, create, getOne, remove, update, verifyEmail, login, userLogged, resetPasswordRequest, resetPasswordConfirm } from '../controllers/users.controller.js'
import {Router} from 'express'
import { auth } from '../middlewares/auth.js'

const usersRouter = Router()

usersRouter.route('/')
    .get(auth, getAll)
    .post(create)

usersRouter.post('/login', login)

usersRouter.post('/reset_password', resetPasswordRequest)
usersRouter.post('/reset_password/:code', resetPasswordConfirm)

usersRouter.get('/me', auth, userLogged)

usersRouter.get('/verify/:code', verifyEmail)

usersRouter.use(auth)
usersRouter.route('/:id', auth) 
    .get(getOne)
    .delete(remove)
    .put(update)

export default usersRouter