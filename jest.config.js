module.exports = {
  moduleDirectories: [
    'node_modules',
    'src'
  ],
  testURL: 'http://localhost/',
  transform: {
    '^.+\\.(js|jsx)$': '<rootDir>/node_modules/babel-jest',
  },
  verbose: false,
};
