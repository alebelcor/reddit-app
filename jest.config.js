module.exports = {
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{js,jsx}',
    '!<rootDir>/src/**/_app.{js,jsx}',
    '!<rootDir>/src/**/_document.{js,jsx}',
  ],

  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],

  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],

  transform: {
    '^.+\\.css$': '<rootDir>/config/jest/cssTransform.js',
    '^.+\\.(js|jsx)$': '<rootDir>/node_modules/babel-jest',
  },

  transformIgnorePatterns: ['<rootDir>/node_modules/', '^.+\\.module\\.css$'],

  moduleNameMapper: {
    '^.+\\.module\\.css$': 'identity-obj-proxy',
  },
};
