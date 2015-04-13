'use strict';

/**
 * LaTeX Invoice Generator from JSON source
 * ----------------------------------------
 *
 * Generates a pdf invoice from your json source file
 * using a LaTeX template file.
 *
 * (c) 2015 Matthias Hannig
 */

var fs   = require('fs');
var argv = require('yargs').argv;

// Load modules
var invoice_init     = require('./generator/init');
var invoice_compile  = require('./generator/compile');
var invoice_config   = require('./generator/config');
var invoice_usage    = require('./generator/usage');

// Switch action based on arguments
var actions = {
  'init':    invoice_init,
  'config':  invoice_config,
  'compile': invoice_compile,
  'help':    invoice_usage
};

console.log(process.cwd());

var action = argv['_'][0]
var run = actions[action]||actions['help'];

run(argv);

