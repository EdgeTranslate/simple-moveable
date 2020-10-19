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
			{ test: /\.tsx?$/, use: ["ts-loader"], exclude: /node_modules/ },
		],
	},
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "../src"),
		},
		extensions: [".tsx", ".ts", ".js", ".json"],
	},
	node: {
		fs: "empty",
	},
};
