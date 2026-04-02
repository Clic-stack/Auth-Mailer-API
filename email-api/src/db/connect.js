import { Sequelize } from 'sequelize'
import { env } from '../config/env.js'
import 'dotenv/config' 

// Si env.DATABASE_URL está vacío, Sequelize lanza el error de "password must be a string"
const dbUrl = env.DATABASE_URL || process.env.DATABASE_URL;

const sequelize = new Sequelize(dbUrl, {
  dialect: 'postgres',
  logging: false,
  dialectOptions: env.NODE_ENV === 'production' ? {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  } : {} // En desarrollo/test local a veces no necesitas SSL
})

export default sequelize;