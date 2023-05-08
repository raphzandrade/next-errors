//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { composePlugins } = require('@nx/next');
const { withNx } = require('@nx/next/plugins/with-nx');

const removeImports = require('next-remove-imports')({
  test: /node_modules([\s\S]*?)\.(tsx|ts|js|mjs|jsx)$/,
  matchImports: '\\.(less|css|scss|sass|styl)$',
});

const plugins = [
  removeImports,
  withNx
]

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
};

// module.exports = removeImports(withNx(nextConfig));
// module.exports = withNx(nextConfig);
module.exports = composePlugins(...plugins)({
  nextConfig
})
