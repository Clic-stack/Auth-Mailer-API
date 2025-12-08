import jwt from 'jsonwebtoken'
import { env } from '../config/env.js'

export const auth = (req, res, next) => {
    let token = req.headers.authorization || req.headers.Authorization
    if (!token) return res.status(401).json({ message: 'Required Token' })

    if (token.toLowerCase().startsWith('bearer ')) token = token.split(' ')[1]
    else return res.status(401).json({ message: 'Invalid token format'})

    try{
        const decoded = jwt.verify(token, env.SECRET_KEY)
        req.user = decoded.user
        next()
    } catch (error){
        return res.status(401).json({ message: 'Invalid or Expired Token' })
    }
}