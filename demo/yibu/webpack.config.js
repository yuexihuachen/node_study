module.exports = [
    {
        name: 'mobile',
        entry: {
            vendor: 'server.js',
            main: ['webpack-hot-middleware/client?name=mobile', 'server.js']
        }
    },
    {
        name: 'desktop',
        entry: {
            vendor: 'server.js',
            main: ['webpack-hot-middleware/client?name=desktop', 'server.js']
        }
    }
]