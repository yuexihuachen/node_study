module.exports = {
    entry: {
        a: "./assets/src/a.js",
        b: "./assets/src/b.js"
    },
    output: {
        filename: "[name].[chunkhash].bundle.js",
        path: __dirname + "/assets/dist"
    },
    optimization: {
        splitChunks: {
            chunks: "all",
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10
                },
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true
                }
            }
        }
    }
};