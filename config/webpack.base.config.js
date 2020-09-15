"use strict";
const path = require("path");

module.exports = {
	entry: "./src/moveable.ts",
	output: {
		filename: "[name].js",
		path: path.resolve(__dirname, "../build"),
	},
	module: {
		rules: [
			{
				test: [/\.css$/],
				use: "raw-loader",
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
