import path from 'path';
import webpack from 'webpack';
import OpenBrowserPlugin from 'open-browser-webpack-plugin';

const env = process.env;
const version = env.npm_package_version;
const buildPath = env.npm_package_config_appWebpackBuildPath;
const baseUrl = env.npm_package_config_appWebpackBaseUrl;

let config = {
    entry: [
        'babel-core/polyfill',
        path.resolve('app/client.js')
    ],
    output: {
        path: path.resolve(`${buildPath}/${version}`),
        filename: '[name].js',
        publicPath: `${baseUrl}/${version}/`
    },
    module: {
        loaders: [
            {test: /\.js(x)?$/, loaders: ['react-hot', 'babel?stage=1&optional=runtime&externalHelpers'], exclude: /node_modules/},
            {test: /\.json$/, loaders: ['json']}
        ]
    },
    plugins: [
        new webpack.NoErrorsPlugin(),
        new webpack.EnvironmentPlugin(Object.keys(env)),
        new OpenBrowserPlugin({url: 'http://localhost:4444'}),
    ]
};

export default config;
