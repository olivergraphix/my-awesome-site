const postcssPresetEnv = require(`postcss-preset-env`)

module.exports = () => ({
    plugins: [
        postcssPresetEnv({
            stage: 0,
            importFrom: "src/styles/global.module.css",
            features: {
              "custom-media-queries": true,
              "custom-selectors": true,
            },
        }),
    ],
})