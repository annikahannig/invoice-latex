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
var invoice_init     = require('./cli/init');
var invoice_compile  = require('./cli/compile');
var invoice_config   = require('./cli/config');
var invoice_usage    = require('./cli/usage');

// Switch action based on arguments
var actions = {
  'init':    invoice_init,
  'config':  invoice_config,
  'compile': invoice_compile,
  'help':    invoice_usage
};

var action = argv['_'][0]
var run = actions[action]||actions['help'];

run(argv);

