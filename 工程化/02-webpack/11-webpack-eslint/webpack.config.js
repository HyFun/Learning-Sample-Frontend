/* eslint-disable @typescript-eslint/no-var-requires */
const { resolve } = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const WebpackBar = require('webpackbar')

module.exports = {
	mode: 'development',
	entry: ['./src/index.ts'],
	output: {
		filename: 'js/bundle.js',
		path: resolve(__dirname, 'dist')
	},
	devServer: {
		port: 8090
	},
	resolve: {
		extensions: ['.ts', '.js']
	},
	module: {
		rules: [
			{
				test: /\.html$/,
				use: ['html-loader']
			},
			{
				test: /\.js$/,
				use: ['babel-loader', 'eslint-loader'],
				exclude: /node_modules/
			},
			{
				test: /\.ts$/,
				use: ['babel-loader', 'ts-loader', 'eslint-loader'],
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader']
			},
			{
				test: /\.less$/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					'postcss-loader',
					'less-loader'
				]
			},
			{
				test: /\.(png|gif|jpg|jpeg)$/,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 10 * 1024,
							esModule: false,
							name: 'images/[hash:8].[ext]'
						}
					}
				]
			},
			{
				test: /\.ttf$/,
				type: `asset/resource`,
				generator: {
					filename: `fonts/[hash:8].[ext]`
				}
			}
		]
	},
	plugins: [
		new WebpackBar(),
		new CleanWebpackPlugin(),
		new OptimizeCssAssetsWebpackPlugin(),
		new MiniCssExtractPlugin({
			filename: `css/index.css`
		}),
		new HtmlWebpackPlugin({
			template: './index.html'
		})
	]
}
