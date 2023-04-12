import nextJest from 'next/jest'

const createJestConfig = nextJest({
  dir: 'apps/my-app',
})

const baseJestConfig =
  {
    displayName: 'my-app-my-lib',
    preset: '../../../jest.preset.js',
    transform: {
      '^.+\\.[tj]sx?$': [
        '@swc/jest',
        { jsc: { transform: { react: { runtime: 'automatic' } } } },
      ],
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
    coverageDirectory: '../../../coverage/libs/my-app/my-lib',
  }


// export default createJestConfig(baseJestConfig);
// export default baseJestConfig
