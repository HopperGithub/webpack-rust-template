const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const WasmPackPlugin = require("@wasm-tool/wasm-pack-plugin");

const isEnvProduction = process.env.NODE_ENV === "production";
const PUBLIC_URL = process.env.PUBLIC_URL;
const cratePkgDirectory = path.resolve(__dirname, "../crate/pkg");
const crateDirectory = path.resolve(__dirname, "../crate/pkg");

module.exports = {
    mode: process.env.NODE_ENV,
    entry: {
        app: './src/index.tsx',
    },
    output: {
        publicPath: isEnvProduction ? PUBLIC_URL : "/",
        path: path.resolve(__dirname, `../dist`),
        filename: '[name].bundle.[fullhash:6].js',
    },
    module: {
        rules: [
            {
                test: /\.(j|t)sx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        babelrc: false,
                        presets: ['@babel/preset-env', '@babel/preset-typescript', '@babel/preset-react'],
                        plugins: [
                            ['@babel/plugin-transform-runtime'],
                            ['@babel/plugin-proposal-decorators', { legacy: true }], 
                        ],
                    },
                },
            },
            {
                test: /\.(css|less)$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'less-loader',
                        options: {
                            lessOptions: {
                                javascriptEnabled: true,
                            },
                        },
                    },
                ],
            },
            // Images
            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                type: 'asset/resource',
            },
            // Fonts and SVGs
            {
                test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
                type: 'asset/inline',
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new WasmPackPlugin({
            outDir: cratePkgDirectory,
            crateDirectory,
        }),
        new HtmlWebpackPlugin({
            title: 'Your App',
            template: path.resolve(__dirname, '../public/index.html'),
            filename: 'index.html',
        }),
        new ForkTsCheckerWebpackPlugin({
            // required - same as command `eslint ./src/**/*.{ts,tsx,js,jsx} --ext .ts,.tsx,.js,.jsx`
            // eslint: {
            //     files: './src/**/*.{ts,tsx,js,jsx}',
            // },
        }),
    ],
    resolve: {
        alias: { "@pkg": cratePkgDirectory },
        extensions: ['.js', '.json', '.ts', '.tsx', '.jsx'],
    },
    experiments: { 
        asyncWebAssembly: true,
        syncWebAssembly: true,
    }
};
