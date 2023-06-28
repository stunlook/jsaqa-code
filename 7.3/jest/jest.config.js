/** @type {import('jest').Config} */
const config = {
    collectCoverageFrom: [
      '!**/jest.config.js/**',
      '**/*.{js,jsx}',
      '!**/node_modules/**',
      '!**/vendor/**',
      '!**/coverage/**'
    ],
  };
  
  module.exports = config;