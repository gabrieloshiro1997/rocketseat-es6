module.exports = {
	entry: './main.js', // arquivo principal
	output: {	//diretorio e arquivo para onde onde enviar o código convertido 
		path: __dirname, 
		filename: 'bundle.js'
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