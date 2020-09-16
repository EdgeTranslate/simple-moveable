"use strict";
const path = require("path");

module.exports = {
	entry: "./src/moveable.ts",
	output: {
		filename: "index.js",
		path: path.resolve(__dirname, "../dist"),
		library: "moveable",
		libraryExport: "default",
		libraryTarget: "umd",
	},
	module: {
		rules: [
			{
				test: [/\.css$/],
				loader: "raw-loader",
			},
			{ test: /\.tsx?$/, loader: "ts-loader" },
		],
	},
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "../src"),
		},
	},
	node: {
		fs: "empty",
	},
};
