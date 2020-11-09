const path = require('path')
const NodemonPlugin = require('nodemon-webpack-plugin')
const nodeExternals = require('webpack-node-externals')

module.exports = {
	entry: './src/index.js',
	mode: 'development',
	target: 'node',
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist'),
	},
	externals: [nodeExternals()],
	plugins: [new NodemonPlugin()],
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
		],
	},
}
