import 'dotenv/config';

export default {
  testEnvironment: 'node',
  transform: {
    "^.+\\.(t|j)sx?$": "@swc/jest",
  },
  transformIgnorePatterns: [
    "/node_modules/(?!(dompurify|jsdom|@exodus/bytes|html-encoding-sniffer|encoding-lite|abab|tr46|whatwg-url|data-urls|decimal.js)/)"
  ],
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1',
  },
};