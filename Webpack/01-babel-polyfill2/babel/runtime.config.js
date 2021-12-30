module.exports = {
    presets: [["@babel/preset-env", {module: false}]],
    plugins: [["@babel/plugin-transform-runtime",{
        corejs: 2
    }]]
}