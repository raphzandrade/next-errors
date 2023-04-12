import nextJest from 'next/jest'

const createJestConfig = nextJest({
  dir: 'apps/my-app',
})

const baseJestConfig = {
  displayName: "my-app",
  preset: "../../jest.preset.js",
  transform: {
    "^(?!.*\\.(js|jsx|ts|tsx|css|json)$)": "@nrwl/react/plugins/jest",
    "^.+\\.[tj]sx?$": ["babel-jest", { presets: ["@nrwl/next/babel"] }],
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  coverageDirectory: "../../coverage/apps/my-app",
}

// export default baseJestConfig;
export default createJestConfig(baseJestConfig)
