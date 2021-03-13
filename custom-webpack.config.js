const path = require('path');

module.exports = {
    entry: {
        polyfills: './src/polyfills.ts',
        main: './src/main.ts'
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
            },
        ],
    },
    resolve: {
        extensions: [
            '.ts',
        ],
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './build'),
    },
};