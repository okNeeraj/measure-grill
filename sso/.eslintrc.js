module.exports = {
	parser: '@typescript-eslint/parser',
	plugins: [
		'@typescript-eslint',
		'prettier'],
	extends: [
		'plugin:@typescript-eslint/recommended',
		'prettier'
	],
	rules: {
		// Add or override rules as needed
		'prettier/prettier': 'error',
	},
};
