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

var sym  = require('log-symbols');
var fs   = require('fs-extra');
var path = require('path');

// == Modules
var loadInvoice       = require('../invoice/load-invoice');
var generateTexSource = require('../invoice/generate-tex-source');
var compileTexSource  = require('../invoice/compile-tex-source');
var receiveInvoice    = require('../invoice/receive');
var cleanup           = require('../invoice/cleanup');

// == Compile invoice
var cliInvoiceCompile = function(argv) {  
  console.log( sym.info + ' Compiling invoice.');

  // Invoice TMP Prefix
  var tmpFile = 'invoice-' +
    (Math.random()*10e16).toString(36);

  // copy letter paper
  fs.copySync(
    path.join(__dirname, '../../templates', 'letterpaper.pdf'),
    '/tmp/letterpaper.pdf'
  );

  loadInvoice('invoice.yml')
    .then(generateTexSource('/tmp/' + tmpFile))
    .then(compileTexSource('/tmp/' + tmpFile))
    .then(receiveInvoice('/tmp/' + tmpFile))
    .then(cleanup('/tmp/'+tmpFile))
    .then(  
      function(invoice) {
        console.log(
          sym.success +
          ' Invoice: ' + invoice.nr + ' ready.'
        );
      },
      function(err) {
        console.log("ERROR.");
        console.log(err);
      }
    );

    /*
    .then(moveResult('/tmp', process.cwd()));
  
  */

};


// == Export function
module.exports = cliInvoiceCompile;

