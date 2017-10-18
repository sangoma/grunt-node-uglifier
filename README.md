# grunt-node-uglifier
[![npm Version](https://badge.fury.io/js/grunt-node-uglifier.png)](https://npmjs.org/package/grunt-node-uglifier)
> A grunt task for node-uglifier. Fully auto merging and obfuscating (uglify) a whole NodeJs project into one file with external files option.

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-node-uglifier --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-node-uglifier');
```

## The "node_uglifier" task

### Overview
In your project's Gruntfile, add a section named `node_uglifier` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  node_uglifier: {
    options: {
      mergeFileFilter: [], //https://github.com/zsoltszabo/node-uglifier#leave-out-files-from-merging
      uglify: true //Runs .merge().uglify, if false just runs .merge()
    },
    files: {
      'main.optimized.js': 'build/index.js' // dest: entry_point
    },
  },
});
```

### Options
See: https://github.com/zsoltszabo/node-uglifier

#### options.mergeFileFilter
Type: `Array`
Default value: `[]`

Leave files out from merging.
See: https://github.com/zsoltszabo/node-uglifier#leave-out-files-from-merging

#### options.uglify
Type: `Boolean`
Default value: `true`

After merge uglify files. Otherwise just leave them merged without uglifying

## Contributing
If you have anything to contribute, or functionality that you lack - you are more than welcome to participate in this! If anyone wishes to contribute unit tests - that also would be great
