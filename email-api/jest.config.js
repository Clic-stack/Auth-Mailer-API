import 'dotenv/config';

export default {
  testEnvironment: 'node',
  // ESTA LÍNEA ES LA CLAVE:
  extensionsToTreatAsEsm: ['.js'], 
  transform: {
    "^.+\\.(t|j)sx?$": "@swc/jest",
  },
  transformIgnorePatterns: [
    "/node_modules/(?!(dompurify|jsdom|@exodus/bytes|html-encoding-sniffer|encoding-lite)/)"
  ],
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1',
  },
};