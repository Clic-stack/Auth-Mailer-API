import rateLimit from 'express-rate-limit';

const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 100, // Límite de 100 peticiones por IP
  message: {
    status: 429,
    message: 'Demasiadas peticiones. Por seguridad, intenta de nuevo en 15 minutos.'
  },
  standardHeaders: true, 
  legacyHeaders: false,
});

export default apiLimiter;