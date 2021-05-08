const path = require('path');
const webpack = require('webpack');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports =(env, argv) => {
    return {
        mode: argv.mode == 'production' ? 'production' : 'development',
        entry: "./src/assets/packs/default.js",
		output: {
	    path:path.resolve(__dirname, "dist"),
	        filename: (argv.mode == 'production' ? '[name].bundle.[contenthash].js' : '[name].bundle.js'),
	    },
	    resolve: {
	  	    alias: {
                data: path.resolve(__dirname, 'src/assets/data/'),
                media: path.resolve(__dirname, 'src/assets/media/'),
                scripts: path.resolve(__dirname, 'src/assets/scripts/'),
                styles: path.resolve(__dirname, 'src/assets/styles/')
            },
            extensions: [".js", ".json",".xml",".csv",".yml",".tsv",".jsx", ".css",".jsx",".scss",".ts",".tsx",".svg",".gif",".jpg",".jpeg",".png",".woff",".woff2",".eot",".ttf",".otf"],
        },
        performance: {
        },
        devtool: "source-map",
        devServer: {
            contentBase: './build',
        },
        module: {
            rules: [
                {
                    test: /\.(scss)$/,
                    use: [
                      'style-loader',
                      'css-loader',
                      'postcss-loader',
                      'sass-loader',
                      'resolve-url-loader']
                },
                {
					test: /\.css$/,
					use: ['style-loader','css-loader','postcss-loader', 'resolve-url-loader']
                },
                {
                    test: /\.(js|jsx)$/,
                    exclude: /[\\/]node_modules[\\/]/,
                    use: ['babel-loader']
                },
                {
                    test: /\.(ts|tsx)$/,
                    exclude: /[\\/]node_modules[\\/]/,
                    use: ['babel-loader', 'ts-loader']
                }
            ]
        },
        plugins: [            
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery',
                jquery: 'jquery'
            }),
            new HtmlWebpackPlugin({
				filename: 'index.html',
	  		template: "src\\assets\\documents\\index.html"
	  	}),
        ]
    };
};