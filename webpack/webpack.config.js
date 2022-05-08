const webpack = require("webpack");
const MiniCssExtractPuglin = require("mini-css-extract-plugin")

module.exports = {
    mode: "development",
    entry: "./src/principal.js",
    output: {
        filename: "principal.js",
        path: __dirname + "/public",
    },
    plugins: [
        new MiniCssExtractPuglin({
            filename: "estilo.css"
        })
    ],
    module: {
        rules: [{
            test: /\.css$/,
            use: [
                MiniCssExtractPuglin.loader,
                //'style-loader', //adiciona a DOM injetando a tag <style>, é conflitante com o acima
                'css-loader' // interpreta @import, url()
            ]
        }],
    },
};
