module.exports = {
    root: true,
    parser: "babel-eslint",
    parserOptions: {
        //设置"script"（默认）或"module"如果你的代码是在ECMAScript中的模块。
        sourceType: "module"
    },
    env: {
        node: true,
        browser: true,
        es6: true,
        jest: true
    },
    extends: ["plugin:prettier/recommended", "eslint:recommended"],
    globals: {
        document: false,
        window: false,
        chrome: false,
        browser: false,
        BROWSER_ENV: false
    },
    // required to lint *.vue files
    plugins: ["html", "prettier"],
    // add your custom rules here
    rules: {
        indent: ["error", 4, { SwitchCase: 1 }],
        quotes: ["error", "double"],
        // 空行最多不能超过100行
        "no-multiple-empty-lines": [0, { max: 100 }]
    }
};

module.exports = {
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        project: "./tsconfig.json"
    },
    plugins: ["@typescript-eslint"],
    extends: [
        "prettier",
        "prettier/@typescript-eslint",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "plugin:prettier/recommended"
    ],
    env: {
        node: false,
        browser: true,
        jest: true
    },
    globals: {
        document: false,
        window: false
    },
    rules: {
        "@typescript-eslint/no-var-requires": 1,
        "@typescript-eslint/explicit-function-return-type": 2,
        "@typescript-eslint/explicit-member-accessibility": 2,
        "no-unused-vars": 2,
		semi: [2, "always", { omitLastInOneLineBlock: true }],
		indent: ["error", 4, { SwitchCase: 1 }],
        quotes: ["error", "double"],
        // 空行最多不能超过100行
        "no-multiple-empty-lines": [0, { max: 120 }]
    }
};
