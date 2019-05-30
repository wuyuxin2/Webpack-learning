'use strict';

const path = require('path');

module.exports = {
    entry: {
        index: './src/index.js',
        search: './src/search.js'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js'
    },
    mode: 'production',
    module: {
        rules: [
            {
                test: /.js$/,
                use: 'babel-loader'
            },
            {
                test: /.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /.less$/,
                use: [
                    'style-loader', //将js字符串生成style节点（最后执行）
                    'css-loader',   //将css转成CommonJS模块（其次执行）
                    'less-loader'   //将sass转成css（最先执行）
                ]
            }
        ]
    }
}