module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testMatch: ['<rootDir>/src/**/*.test.ts'],
    moduleFileExtensions: ['ts', 'js', 'json', 'node'],
  };
  

module.exports = {
  // Backend configuration
  projects: [
    {
      displayName: 'backend',
      preset: 'ts-jest',
      testEnvironment: 'node',
      testMatch: ['<rootDir>/src/**/*.test.ts'],
      moduleFileExtensions: ['ts', 'js', 'json', 'node'],
    },
    // Frontend configuration
    {
      displayName: 'frontend',
      preset: 'ts-jest',
      testEnvironment: 'jest-environment-jsdom',
      testMatch: ['<rootDir>/src/client/tests/**/**/*.test.tsx'],
      moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    },
  ],
};