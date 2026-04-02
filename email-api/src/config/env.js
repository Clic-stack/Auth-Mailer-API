const ENV = process.env.ENV || process.env.NODE_ENV || 'development'

export const env = {
  ENV,
  PORT: process.env.PORT || 3000,
  DATABASE_URL: process.env.DATABASE_URL || '',
  EMAIL: process.env.EMAIL || '',
  GOOGLE_APP_PASSWORD: process.env.GOOGLE_APP_PASSWORD || '',
  SECRET_KEY: process.env.SECRET_KEY || '',
  EXPIRE_IN: process.env.EXPIRE_IN || '1d'
}