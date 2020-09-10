module.exports = {
	entry: './src/main.js', // arquivo principal
	output: {	//diretorio e arquivo para onde onde enviar o código convertido 
		path: __dirname + '/public', 
		filename: 'bundle.js'
	},
	devServer: {
		contentBase: __dirname + '/public'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			}
		]
	}
};