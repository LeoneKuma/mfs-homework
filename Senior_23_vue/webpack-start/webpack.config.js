var path=require("path");
var HtmlWebpackPlugin=require("html-webpack-plugin");

module.exports={
    entry:"./src/main.js",
    output:{
        path:path.resolve(__dirname,"build"),
        filename:"bundle.js"
    },
    devtool:"cheap-eval-source-map",
    module:{
        rules:[
            {test:/\.txt$/, use: 'raw-loader'},
            {test:/\.styl$/,use:[
                {loader:"style-loader"},
                {loader:"css-loader"},
                {loader:"stylus-loader"}
            ]},
            {test:/\.png$/,use:"file-loader"}

        ]
    },
    plugins:[
        new HtmlWebpackPlugin({template:"./src/index.html"})
    ]
    
};