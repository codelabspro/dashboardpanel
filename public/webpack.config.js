module.exports = {  
    entry: './app/js/app.js',
    output: {
        filename: './dist/js/app-bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel'
            }
        ]
    }
};