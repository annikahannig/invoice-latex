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

// Switch action based on arguments
var actions = {
  'init':    invoice_init,
  'compile': invoice_compile,
  'help'
};


var action = argv['_'][0]




