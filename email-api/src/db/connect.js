import { Sequelize } from 'sequelize'
import { env } from '../config/env.js'

const sequelize = new Sequelize(env.DATABASE_URL || 'postgres://localhost:5432/test_db', {
  dialect: 'postgres',
  logging: false,
  dialectOptions: env.NODE_ENV === 'production' ? {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  } : {} // En desarrollo/test local a veces no necesitas SSL
})

export const connectDB = async () => {
  await sequelize.authenticate()
  console.log('Conexión a la base de datos establecida correctamente')
  await sequelize.sync({ alter: false, force: false })
  console.log('Tablas sincronizadas correctamente')
}

export default sequelize