/* eslint-disable no-undef */
/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
	parser: "@typescript-eslint/parser",
	extends: [
		"plugin:@next/next/recommended",
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:react/jsx-runtime",
	],
	env: { browser: true },
	parserOptions: {
		sourceType: "module",
		ecmaVersion: 2020,
	},
	plugins: ["import", "react"],
	settings: {
		react: {
			version: "detect",
		},
	},
	rules: {},
};
