module.exports = {
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		project: "./tsconfig.json",
	},
	plugins: ["@typescript-eslint"],
	extends: [
		"prettier",
		"prettier/@typescript-eslint",
		"plugin:@typescript-eslint/recommended",
		"plugin:@typescript-eslint/eslint-recommended",
		"plugin:@typescript-eslint/recommended-requiring-type-checking",
		"plugin:prettier/recommended",
	],
	env: {
		node: false,
		browser: true,
		jest: true,
	},
	globals: {
		document: false,
		window: false,
	},
	rules: {
		"@typescript-eslint/no-var-requires": 1,
		"@typescript-eslint/explicit-function-return-type": 2,
		"@typescript-eslint/class-name-casing": 0,
		"no-unused-vars": 2,
		semi: [2, "always", { omitLastInOneLineBlock: true }],
		indent: ["error", "tab", { SwitchCase: 1 }],
		quotes: ["error", "double"],
		// 空行最多不能超过100行
		"no-multiple-empty-lines": [0, { max: 120 }],
	},
};
