import 'dotenv/config';

export default {
  testEnvironment: 'node',
  // Esto asegura que las variables se carguen antes de cada test
  setupFiles: ['dotenv/config']
};