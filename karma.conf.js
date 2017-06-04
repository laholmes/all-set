module.exports = function(config) {
    config.set({
        browsers: ['Chrome'],
        files: [
            'test/*.js'
        ],
        frameworks: ['jasmine'],
        preprocessors: {
            'test/*.js': ['webpack']
        },
        webpack: {
            module: {
                loaders: [
                    { test: /\.js/, exclude: /node_modules/, loader: 'babel-loader' }
                ]
            },
            watch: true
        },
        webpackServer: {
            noInfo: false
        },
        runOnce: true
    });
};