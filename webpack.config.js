const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const SRC_DIR = path.join(__dirname, '/src');
const DIST_DIR = path.join(__dirname, '/dist');

module.exports = {
	mode: 'development',
	entry: {
		index: path.join(SRC_DIR, '/index.jsx'),
	},
	devtool: 'inline-source-map',
	devServer: {
		static: './dist',
	},
	output: {
		filename: 'js/[name].bundle.js',
		path: DIST_DIR,
		clean: true,
		assetModuleFilename: 'assets/[hash][ext][query]',
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
			{
				test: /\.s[ac]ss$/i,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: {
							sourceMap: true,
						},
					},
					'postcss-loader',
				],
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: 'asset/resource',
				generator: {
					filename: 'assets/images/[hash][ext][query]',
				},
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				type: 'asset/resource',
				generator: {
					filename: 'assets/fonts/[hash][ext][query]',
				},
			},
			{
				test: /\.m?js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
					},
				},
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Development',
			template: 'index.html',
		}),
	],
	resolve: {
		extensions: ['.js', '.jsx'],
	},
};
