const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
	template: './client/index.html',
	filename: 'index.html',
	inject: 'body'
});

const ExtractTextPluginConfig = new ExtractTextPlugin({
	filename: 'dist/[name].bundle.css',
	allChunks: true
});

module.exports = {
	entry: ['babel-polyfill', './client/index.js', './client/main.scss'],
	output: {
		filename: 'index_bundle.js'
	},
	devtool: 'source-map', // For debug in browser
	module: {
		loaders: [
			{ test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
			{ test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/ },
			{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract('css-loader?importLoaders=1')
			},
			{
				test: /\.(sass|scss)$/,
				loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
			},
			{
				test: /\.(woff2?|ttf|eot|svg)(\?v=[a-z0-9]\.[a-z0-9]\.[a-z0-9])?$/,
				loader: 'url-loader?limit=100000'
			}
		]
	},

	plugins: [HtmlWebpackPluginConfig, ExtractTextPluginConfig]
};
