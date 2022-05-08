const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
    mode: "production",
    entry: "./src/principal.js",
    output: {
        filename: "principal.js",
        path: __dirname + "/public",
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "estilo.css"
        })
    ],
    module: {
        rules: [{
            test: /\.s?[ac]ss$/,
            use: [
                MiniCssExtractPlugin.loader,
                //'style-loader', //adiciona a DOM injetando a tag <style>, é conflitante com o acima
                'css-loader', // interpreta @import, url()
                'sass-loader',
            ]
        }],
    },
};
