const ENV = process.env.ENV || process.env.NODE_ENV || 'development'

export const env = {
  ENV,
  PORT: process.env.PORT || 3000,
  DATABASE_URL: process.env.DATABASE_URL || '',
  SMTP_HOST: process.env.SMTP_HOST || 'smtp-relay.brevo.com',
  SMTP_PORT: process.env.SMTP_PORT || '2525', // Actualiza el default a 2525
  EMAIL: process.env.EMAIL || 'a735a0001@smtp-brevo.com',
  GOOGLE_APP_PASSWORD: process.env.GOOGLE_APP_PASSWORD || '', // Aquí irá API Key de Brevo
  SECRET_KEY: process.env.SECRET_KEY || '',
  EXPIRE_IN: process.env.EXPIRE_IN || '1d'
}