module.exports = {
  moduleDirectories: [
    'node_modules',
    'src',
  ],
  moduleNameMapper: {
    '\\.s?css$': '<rootDir>/src/__mocks__/stylesMock.js',
    // Map Webpack Aliases eg: '@/components/*' to './src/components/*'
    '@/(.*)$': '<rootDir>/src/$1',
  },
  setupFiles: ['<rootDir>/jest.setup.suites.js'],
  testURL: 'http://localhost/',
  verbose: false,
};
