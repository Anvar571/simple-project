module.exports = {
  roots: ['<rootDir>/src', '<rootDir>/test'], // Specify multiple roots for tests
  testEnvironment: 'node',
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'js'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  testRegex: '(/test/.*|(\\.|/)(test|spec))\\.ts$',
  // Other configuration options...
};
