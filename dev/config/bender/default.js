'use strict';

const plugin = 'placeholdertext';
const appBaseDir = `/apps/ckeditor/plugins/${ plugin }/`;
const testBaseDir = `/plugins/${ plugin }/tests/`;

const config = {
	applications: {
		ckeditor: {
			path: '.',
			files: [
				'ckeditor.js'
			]
		}
	},

	framework: 'yui',

	plugins: [
		'benderjs-coverage',
		'benderjs-yui',
		'benderjs-sinon',
		'benderjs-jquery',
		'tests/_benderjs/ckeditor',
		'benderjs-yui-beautified'
	],

	tests: {
		'placeholdertext tests': {
			applications: [ 'ckeditor' ],
			basePath: `plugins/${ plugin }/`,
			paths: [
				'tests/**',
				'!**/_*/**'
			]
		}
	}
};

module.exports = config;
