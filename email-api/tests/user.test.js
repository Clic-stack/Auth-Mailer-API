import { jest } from '@jest/globals';

// 1. LOS MOCKS DEBEN IR ANTES QUE CUALQUIER IMPORT DE LA APP
// Uso de unstable_mockModule para librerías que fallan por ser ESM
jest.unstable_mockModule('isomorphic-dompurify', () => ({
  default: {
    sanitize: (html) => html
  },
  sanitize: (html) => html
}));

// Mock de nodemailer
jest.unstable_mockModule('nodemailer', () => ({
  default: {
    createTransport: jest.fn().mockReturnValue({
      sendMail: jest.fn().mockResolvedValue({ messageId: 'test-id' })
    })
  }
}));

// 2. AHORA IMPORTAMOS LO DEMÁS USANDO 'AWAIT IMPORT' O IMPORT NORMAL
// (Si usas experimental-vm-modules, a veces es más seguro importar así)
const request = (await import('supertest')).default;
const app = (await import('../src/app.js')).default;
const sequelize = (await import('../src/db/connect.js')).default;
const nodemailer = (await import('nodemailer')).default;

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
  await sequelize.sync({ force: true });
});

afterAll(async () => {
  await sequelize.close();
});

describe('User Auth & Management API', () => {
  test('POST /users should create a user and "send" an email', async () => {
    const res = await request(app)
      .post('/users')
      .send(userTest);

    expect(res.status).toBe(201);
    expect(res.body.user).toHaveProperty('id');
    
    userId = res.body.user.id;

    const transport = nodemailer.createTransport();
    expect(transport.sendMail).toHaveBeenCalled();
  });

  test('POST /users/login should fail if user is not verified', async () => {
    const res = await request(app)
      .post('/users/login')
      .send({
        email: userTest.email,
        password: userTest.password
      });

    expect(res.status).toBe(401);
    expect(res.body.message).toBe('Unverified user');
  });

  test('GET /users/verify/:code should verify the user', async () => {
    const { EmailCode } = await import('../src/models/emailcode.model.js');
    const codeObj = await EmailCode.findOne({ where: { userId } });
    verificationCode = codeObj.code;

    const res = await request(app)
      .get(`/users/verify/${verificationCode}`);

    expect(res.status).toBe(200);    
    expect(res.body.user.isVerified).toBe(true);
  });

  test('POST /users/login should return a JWT', async () => {
    const res = await request(app)
      .post('/users/login')
      .send({
        email: userTest.email,
        password: userTest.password
      });

    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('token');
    token = res.body.token;
  });

  test('GET /users/me should return user data with valid token', async () => {
    const res = await request(app)
      .get('/users/me')
      .set('Authorization', `Bearer ${token}`);

    expect(res.status).toBe(200);
    expect(res.body.email).toBe(userTest.email);
  });

  test('GET /users/me should return 401 without token', async () => {
    const res = await request(app).get('/users/me');
    expect(res.status).toBe(401);
  });
  
  describe('Emails Controller - Auth-Mailer-API', () => {
    test('POST /emails/contact should trigger Nodemailer and return 200', async () => {
      const contactData = {
        name: 'Test User',
        email: 'test@example.com',
        phone: '1234567890',
        message: 'Testing the Auth-Mailer-API'
      };

      const res = await request(app)
        .post('/emails/contact')
        .send(contactData);

      expect(res.status).toBe(200);
      expect(res.body.message).toBe('Email sent successfully!');

      const transport = nodemailer.createTransport();
      expect(transport.sendMail).toHaveBeenCalledWith(expect.objectContaining({    
        to: contactData.email
      }));
    });
  });
  
  describe('EmailCode Model Logic', () => {
    test('Should create and store a verification code linked to a user', async () => {
      const { EmailCode } = await import('../src/models/emailcode.model.js');
      const newCode = await EmailCode.create({
        code: 'verification-test-code-999',
        userId: userId 
      });

      expect(newCode.code).toBe('verification-test-code-999');
      expect(newCode.userId).toBe(userId);
    });

    test('Should fail if code is null (Database Constraint)', async () => {
      const { EmailCode } = await import('../src/models/emailcode.model.js');
      try {
        await EmailCode.create({ userId: userId });
      } catch (error) {
        expect(error.name).toBe('SequelizeValidationError');
      }
    });
  });
});
