import replace from 'rollup-plugin-replace';
import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import memory from 'rollup-plugin-memory';

export default {
	exports: 'named',
	useStrict: false,
	plugins: [
		replace({
      'process.env.NODE_ENV': process.env.NODE_ENV
		}),
		memory({
			path: 'src/bundle',
			contents: "export * from './index';"
		}),
		nodeResolve({
			main: true,
			jsnext: true,
		}),
		commonjs({
			include: 'node_modules/**',
		}),
		babel({
			"babelrc": false,
			"presets": [
				["es2015", { "loose": true, "modules": false }]
			],
			plugins: [
				'babel-style-autoprefix',
				["transform-react-jsx", { "pragma":"h" }]
			],
			"sourceMap": true,
		})
	]
};
