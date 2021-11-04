module.exports = {
  roots: ['<rootDir>/changelog/', '<rootDir>/draft-release/'],
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/*-test.ts'],
  moduleFileExtensions: ['ts', 'js', 'jsx', 'json', 'node'],
  collectCoverageFrom: [
    '**/*.{js,jsx,ts,tsx}',
    '!**/node_modules/**',
    '!**/vendor/**',
    '!**/*.d.*',
    // ignore index files
    '!**/index.ts',
  ],
  reporters: ['default', '<rootDir>/jest-actions-reporter.js'],
  coverageReporters: ['text-summary', 'json', 'html', 'cobertura'],
  globals: {
    'ts-jest': {
      useBabelConfig: true,
    },
  },
}
