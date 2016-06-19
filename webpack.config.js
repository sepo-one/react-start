var PATH_APP = __dirname + '/src/';

var config = {
    entry: PATH_APP + 'index.js',
    output: {
        path: './public',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                test: /\.jsx?$/,
                include: PATH_APP,
                query: {presets: ['es2015', 'react']}
            }
        ]
    }
};

module.exports = config;
