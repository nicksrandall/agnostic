module.exports = {
	parser: 'babel-eslint',
	extends: 'eslint:recommended',
	plugins: [
		'react'
	],
	env: {
		browser: true,
		node: true,
		jest: true,
		es6: true
	},
	parserOptions: {
		ecmaFeatures: {
			modules: true,
			jsx: true
		}
	},
	rules: {
		'react/jsx-uses-react': 2,
		'react/jsx-uses-vars': 2,
		'no-unused-vars': [1, { varsIgnorePattern: '^h$' }],
		'no-cond-assign': 1,
		'no-empty': 0,
		'no-console': 1,
		semi: 2,
		camelcase: 0,
		'comma-style': 2,
		'comma-dangle': [2, 'only-multiline'],
		indent: ['error', 2],
		'no-mixed-spaces-and-tabs': [2, 'smart-tabs'],
		'no-trailing-spaces': [2, { skipBlankLines: true }],
		'max-nested-callbacks': [2, 3],
		'no-eval': 2,
		'no-implied-eval': 2,
		'no-new-func': 2,
		'guard-for-in': 0,
		eqeqeq: 0,
		'no-else-return': 2,
		'no-redeclare': 2,
		'no-dupe-keys': 2,
		radix: 2,
		strict: [2, 'never'],
		'no-shadow': 0,
		'callback-return': [1, ['callback', 'cb', 'next', 'done']],
		'no-delete-var': 2,
		'no-undef-init': 2,
		'no-shadow-restricted-names': 2,
		'handle-callback-err': 0,
		'no-lonely-if': 2,
		'keyword-spacing': 2,
		'constructor-super': 2,
		'no-this-before-super': 2,
		'no-dupe-class-members': 2,
		'no-const-assign': 2,
		'prefer-spread': 2,
		'no-useless-concat': 2,
		'no-var': 2,
		'object-shorthand': 2,
		'prefer-arrow-callback': 2
	}
};
