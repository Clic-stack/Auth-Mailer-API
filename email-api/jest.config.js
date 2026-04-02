/*import 'dotenv/config';

export default {
  testEnvironment: 'node',
  transform: {
    "^.+\\.(t|j)sx?$": "@swc/jest",
  },
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1',
  },
};*/

import 'dotenv/config';

export default {
  testEnvironment: 'node',
  transform: {
    "^.+\\.jsx?$": ["@swc/jest", {
      jsc: {
        parser: {
          syntax: "ecmascript",
          jsx: true,
        },
        transform: {},
      },
    }],
  },
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1',
  },
};