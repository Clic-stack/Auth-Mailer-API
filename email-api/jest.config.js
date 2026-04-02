import 'dotenv/config';

export default {
  testEnvironment: 'node',
  transform: {
    "^.+\\.(t|j)sx?$": "@swc/jest",
  },
  // Añadimos esta línea para ayudar a Jest a encontrar los módulos
  moduleDirectories: ['node_modules', 'src'],
  transformIgnorePatterns: [
    // Esta expresión regular le dice a Jest: "Transforma todo lo que esté en node_modules EXCEPTO estas librerías"
    "/node_modules/(?!(dompurify|jsdom|@exodus/bytes|html-encoding-sniffer|encoding-lite|abab|tr46|whatwg-url|data-urls|decimal.js|saxes)/)"
  ],
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1',
  },
};