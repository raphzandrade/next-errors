import nextJest from 'next/jest';

const createJestConfig = nextJest({
  dir: 'apps/my-app',
});

const baseJestConfig = {
  displayName: 'my-app',
  preset: '../../jest.preset.js',
  transform: {
    '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': '@nx/react/plugins/jest',
    '^.+\\.[tj]sx?$': ['babel-jest', { presets: ['@nx/next/babel'] }],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../coverage/apps/my-app',
};

// export default baseJestConfig;
export default createJestConfig(baseJestConfig);
