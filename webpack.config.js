const path = require("path")

module.exports = {
    entry: {
	index: path.join( __dirname, "src", "index.js" )
    },
    output: {
	path: path.join(__dirname, "out"),
	filename: "[name].js"
    },
    devtool: 'source-map', 
    module: {
     	rules: [
     	     {
     	 	test: /.js$/,
    	 	loader: "babel-loader",
     	 	options: {
     	 	    presets: ["@babel/preset-env", "@babel/preset-react"],
	     	}
     	     }
     	]
    }
};
