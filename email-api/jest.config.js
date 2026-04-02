import 'dotenv/config'; // Esto cargará el archivo .env de la raíz

export default {
  testEnvironment: 'node',
  transform: {
    "^.+\\.(t|j)sx?$": "@swc/jest",
  },
  transformIgnorePatterns: [
    "/node_modules/(?!(dompurify|jsdom|@exodus/bytes)/)"
  ],
  
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1',
  },
  // Aseguramos que cargue el setup si fuera necesario
};