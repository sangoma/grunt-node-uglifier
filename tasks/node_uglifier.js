/*
* grunt-node-uglifier
* https://github.com/root/grunt-node-uglifier
*
* Copyright (c) 2017 Sangoma Technologies, Inc
* Licensed under the MIT license.
*/

'use strict';

module.exports = function(grunt) {

	// Please see the Grunt documentation for more information regarding task
	// creation: http://gruntjs.com/creating-tasks

	grunt.registerMultiTask('node_uglifier', 'grunt-node-uglifier', function() {
		// Merge task-specific and/or target-specific options with these defaults.
		var options = this.options({
			mergeFileFilter: [],
			uglify: true
		});

		var NodeUglifier = require('node-uglifier');

		this.files.forEach( function(file) {

			file.src.forEach(function (fileSrc) {

				var nodeUglifier = new NodeUglifier(fileSrc,options);
				if(options.uglify) {
					nodeUglifier.merge().uglify();
				} else {
					nodeUglifier.merge();
				}


				var merged = nodeUglifier.toString();

				var dest = file.dest;

				if (grunt.file.isDir(file.dest)) {
					dest = file.dest + (/[/\\]$/.test(file.dest) ? '' : '/') + path.basename(fileSrc);

					grunt.file.mkdir(file.dest);
					grunt.file.write(dest, merged);
				} else {
					grunt.file.write(dest, merged);
				}

				grunt.log.writeln('"' + dest + '" created.');

			});

		});
	});

};
