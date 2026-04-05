import app from './app.js'
// CAMBIO: Importamos el objeto sequelize por defecto (sin llaves)
import sequelize from './db/connect.js' 

const serverStart = async () => {
  try {
    // CAMBIO: Usamos authenticate() para verificar la conexión
    await sequelize.authenticate()
    console.log('Database connected successfully')
    
    // Opcional: Si quieres que se sincronicen las tablas al arrancar:
    // await sequelize.sync() 

    app.listen(app.get('port'), () => {
      console.log(`Server running on port http://localhost:${app.get('port')}`)
    })
  } catch (error) {
    console.error('Error starting server:', error)
    process.exit(1)
  }
}

serverStart()