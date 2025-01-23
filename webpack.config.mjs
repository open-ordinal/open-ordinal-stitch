import path from 'path';
import { dirname } from 'path';
import TerserPlugin from "terser-webpack-plugin";
import webpack from 'webpack';
import packageJson from './package.json' with { type: "json" };
import { fileURLToPath } from 'url';

//const mode = "development";
const mode = "production";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default env => {
    let minify = env.minify;
    if (minify == undefined) minify = false;

    let entry = minify ? {
        "open-ordinal-stitch.min": "./lib/browser/OOST.js"
    } : {
        "open-ordinal-stitch": "./lib/browser/OOST.js"
    }

    return {
        mode: mode,
        entry: entry,
        output: {
            path: path.resolve(__dirname, "dist"),
            filename: '[name].js',
            libraryTarget: 'module',
            clean: false,
        },
        experiments: {
            // asyncWebAssembly: true,
            // buildHttp: true,
            // layers: true,
            // lazyCompilation: true,
            outputModule: true,
            // syncWebAssembly: true,
            // topLevelAwait: true,
        },
        resolve: {
            extensions: ['.ts', '.tsx', '.js', '.jsx']
        },
        devServer: {
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "*",
                "Access-Control-Allow-Methods": "*"
            },
            headers: {
                'Cache-Control': 'no-store',
            },
            static: [
                {
                    directory: path.join(__dirname, 'test'),
                    publicPath: "/test",
                    watch: true,
                },
                {
                    directory: path.join(__dirname, 'dist'),
                    watch: true,
                },
                {
                    directory: path.join(__dirname, 'lib'),
                    watch: true,
                },
            ],
            allowedHosts: "all",
            compress: true,
            port: 9999,
            proxy: [
                {
                    context: ['/preview', '/inscription', '/content', '/r'],
                    target: 'https://ordinals.com/',
                    pathRewrite: {
                        '^/preview': '/preview',
                        '^/inscription': '/inscription',
                        '^/content': '/content',
                        '^/r': '/r'
                    },
                    secure: false,
                    changeOrigin: true
                },
            ],
            historyApiFallback: {
                index: 'index.html'
            },
            client: {
                logging: 'none', // 'none', 'error', 'warn', 'info', 'log', 'verbose'
                reconnect: true,
                overlay: {
                    errors: true,
                    warnings: true,
                    runtimeErrors: true,
                },
            },
        },
        //devtool: 'source-map',
        optimization: {
            minimize: minify,
            usedExports: false,
            minimizer: [
                new TerserPlugin({
                    terserOptions: {
                        compress: {
                            unused: true,
                            dead_code: true,
                        },
                    },
                    extractComments: false,
                })
            ],
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                },
            ],
        },
        plugins: [
            new webpack.BannerPlugin({
                banner: `/*! 
* Open Ordinal Stitch ${packageJson.version}
*/`,
                raw: true
            }),
            new webpack.DefinePlugin({
                'process.env': {
                    NODE_ENV: JSON.stringify(mode),
                    APP_ENV: JSON.stringify('browser')
                }
            }),
        ],
        performance: {
            hints: mode === 'production' ? 'warning' : false, // Disable performance hints in development
            maxAssetSize: 1512000,
            maxEntrypointSize: 1512000,
        },
    }
};