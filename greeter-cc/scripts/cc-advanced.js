'use strict';

const { exec } = require('child_process');
var mkdirp = require('mkdirp');

var CALC_DEPS_CMD = './node_modules/google-closure-library/closure/bin/calcdeps.py';
var INPUT_PATH = process.argv[2];
var INPUT_FILE = process.argv[3];
var OUTPUT_PATH = process.argv[4];
var OUTPUT_FILE = process.argv[5];

let command = CALC_DEPS_CMD +
              ' --compiler_jar ./node_modules/google-closure-compiler/compiler.jar' +
              ' --path node_modules/google-closure-library/closure' +
              ' --path ' + INPUT_PATH +
              ' --input ' + INPUT_PATH + '/' + INPUT_FILE +
              ' --compiler_flags "--compilation_level=ADVANCED"' +
              // Have to wrap the compiled output in a Immediately-Invoked Function Expression so the
              // compiled symbols do not collide with existing symbols
              ' --compiler_flags "--output_wrapper=\\"(function(){%output%})();\\""' +
              // This next flag means the @export jsdoc annotation works
              ' --compiler_flags "--generate_exports"' +
              ' --output_mode compiled' +
              ' > ' + OUTPUT_PATH + '/' + OUTPUT_FILE;

mkdirp.sync(OUTPUT_PATH);

exec(command, (err, stdout, stderr) => {
  if (err) {
    // node couldn't execute the command
    process.exit(err);
  } else {
    console.log(stderr);
  }
});
