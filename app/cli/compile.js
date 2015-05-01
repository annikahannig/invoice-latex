'use strict';

/**
 * Invoice compiler
 * ----------------
 *
 * Create temporary TeX sourcefile, run pdflatex
 * and write output to folder.
 *
 * Ask if output will be overwritten.
 *
 * (c) 2015 Matthias Hannig
 */

var sym = require('log-symbols');


// == Modules
var loadInvoice = require('../invoice/load-invoice');

// == Compile invoice
var cliInvoiceCompile = function(argv) {  
  console.log( sym.info + ' Compiling invoice.');
  loadInvoice('invoice.yml')
    .then(  
      function(res) {
        console.log(res);
      },
      function(err) {
        console.log("ERROR.");
        console.log(err);
      }
    );

    /*
    .then(compileTexSource('/tmp/' + tmpFile))
    .then(moveResult('/tmp', process.cwd()));
  
  */

};


// == Export function
module.exports = cliInvoiceCompile;

