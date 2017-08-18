'use strict';

const { exec } = require('child_process');

var DEPS_WRITER_CMD = './node_modules/google-closure-library/closure/bin/build/depswriter.py';
var DIR = process.argv[2];

let command = DEPS_WRITER_CMD +
              ' --root_with_prefix="src/js/' + DIR + ' ../../../../src/js/' + DIR  + '"' +
              ' > src/js/' +
              DIR + '/deps.js';
console.log(command)
exec(command, (err, stdout, stderr) => {
  if (err) {
    // node couldn't execute the command
    process.exit(err);
  } else {
    console.log(stderr);
  }
});
