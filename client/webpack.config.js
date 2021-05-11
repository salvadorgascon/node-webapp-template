const path = require('path');
const webpack = require('webpack');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports =(env, argv) => {
    return {
        mode: argv.mode == 'production' ? 'production' : 'development',
        entry: "./src/packs/default.js",
		output: {
	    path:path.resolve(__dirname, "build"),
	        filename: (argv.mode == 'production' ? '[name].bundle.[contenthash].js' : '[name].bundle.js'),
	    },
	    resolve: {
	  	    alias: {
                data: path.resolve(__dirname, 'src/data/'),
                media: path.resolve(__dirname, 'src/media/'),
                scripts: path.resolve(__dirname, 'src/scripts/'),
                styles: path.resolve(__dirname, 'src/styles/')
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
                },
                {
                    test: /\.(png|svg|jpg|jpeg|gif)$/i,
                    type: 'asset/resource',
                  },
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
	  		    template: "src\\documents\\index.html"
	  	    }),
            new HtmlWebpackPlugin({
				filename: 'error-404.html',
	  		    template: "src\\documents\\error-404.html"
	  	    }),
            new HtmlWebpackPlugin({
				filename: 'error-500.html',
	  		    template: "src\\documents\\error-500.html"
	  	    }),
            new HtmlWebpackPlugin({
                filename: 'not-logged.html',
                template: "src\\documents\\not-logged.html"
	  	    }),
        ]
    };
};