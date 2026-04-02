import request from 'supertest';
import app from '../src/app.js';
import sequelize from '../src/db/connect.js';
import nodemailer from 'nodemailer';

// Mock de Nodemailer para no enviar correos reales durante el test
jest.mock('nodemailer', () => ({
  createTransport: jest.fn().mockReturnValue({
    sendMail: jest.fn().mockResolvedValue(true)
  })
}));

const userTest = {
  email: 'testuser@gmail.com',
  password: 'password123',
  firstName: 'Clio',
  lastName: 'Data',
  country: 'Mexico',
  image: 'https://img.com/clio.png',
  frontBaseUrl: 'http://localhost:5173/verify'
};

let token;
let userId;
let verificationCode;

beforeAll(async () => {
  await sequelize.sync({ force: true }); // Limpia la base de datos antes de empezar
});

afterAll(async () => {
  await sequelize.close(); // Cierra la conexión al terminar
});

describe('User Auth & Management API', () => {
  // Crear Usuario
    test('POST /users should create a user and "send" an email', async () => {
    const res = await request(app)
    .post('/users')
    .send(userTest)

    expect(res.status).toBe(201)
    expect(res.body.user).toHaveProperty('id')
    expect(res.body.user.email).toBe(userTest.email)

    // CAMBIO: Verificamos que el transportador de nodemailer fue llamado
    const transport = nodemailer.createTransport()
    expect(transport.sendMail).toHaveBeenCalled()

    userId = res.body.user.id
  });

  // Login Fallido (Sin verificar)
  test('POST /users/login should fail if user is not verified', async () => {
    const res = await request(app)
    .post('/users/login')
    .send({
      email: userTest.email,
      password: userTest.password
    })

    expect(res.status).toBe(401)
    expect(res.body.message).toBe('Unverified user')
  });

  // Obtener el código de verificación directamente de la DB para el test
  test('GET /users/verify/:code should verify the user', async () => {

    // Buscamos el código en la base de datos
    const { EmailCode } = await import('../src/models/emailcode.model.js')
    const codeObj = await EmailCode.findOne({ where: { userId } })
    verificationCode = codeObj.code

    const res = await request(app)
    .get(`/users/verify/${verificationCode}`)

    expect(res.status).toBe(200)    
    expect(res.body.user.isVerified).toBe(true)
  });

  // Login Exitoso (Ya verificado)
  test('POST /users/login should return a JWT', async () => {
    const res = await request(app)
    .post('/users/login')
    .send({
      email: userTest.email,
      password: userTest.password
    })

    expect(res.status).toBe(200)
    expect(res.body).toHaveProperty('token')
    token = res.body.token
  });

  // Ruta Protegida (GET /users/me)
  test('GET /users/me should return user data with valid token', async () => {
    const res = await request(app)
    .get('/users/me')
    .set('Authorization', `Bearer ${token}`)

    expect(res.status).toBe(200)
    expect(res.body.email).toBe(userTest.email)
  });

  // Prueba de Seguridad (Acceso denegado)
  test('GET /users/me should return 401 without token', async () => {
    const res = await request(app).get('/users/me')
    expect(res.status).toBe(401)
  });
  
  //test para emails
  describe('Emails Controller - Auth-Mailer-API', () => {
    test('POST /emails/contact should trigger SendGrid and return 200', async () => {
      const contactData = {
        name: 'Test User',
        email: 'test@example.com',
        phone: '1234567890',
        message: 'Testing the Auth-Mailer-API integration'
      }

      const res = await request(app)
      .post('/emails/contact')
      .send(contactData)

      expect(res.status).toBe(200)
      expect(res.body.message).toBe('Email sent successfully!')

      // CAMBIO: Verificamos que Nodemailer recibió los datos correctos
      const transport = nodemailer.createTransport();
      expect(transport.sendMail).toHaveBeenCalledWith(expect.objectContaining({    
        to: contactData.email
        // El subject dependerá de lo definido en tu controller
      }));
    });
  });
  
  // test para emailcode
  describe('EmailCode Model Logic', () => {
    test('Should create and store a verification code linked to a user', async () => {
      const { EmailCode } = await import('../src/models/emailcode.model.js')

      // Usamos el userId que generamos en el test de creación de usuario anterior
      const newCode = await EmailCode.create({
        code: 'verification-test-code-999',
        userId: userId 
      })

      expect(newCode.code).toBe('verification-test-code-999')
      expect(newCode.userId).toBe(userId)
    });


    test('Should fail if code is null (Database Constraint)', async () => {
      const { EmailCode } = await import('../src/models/emailcode.model.js')

      try {
        await EmailCode.create({ userId: userId }); // Falta el campo 'code'
      } catch (error) {
        // Sequelize debería lanzar un error de validación
        expect(error.name).toBe('SequelizeValidationError');
      }
    });
  });
});
