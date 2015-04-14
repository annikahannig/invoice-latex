'use strict';

/**
 * Init invoice
 * ------------
 *
 * Create new json template.
 * Prefill it with current date and config
 *
 * (c) 2015 Matthias Hannig
 */

var fs   = require('fs');
var path = require('path');
var ejs  = require('ejs');

var logSymbols = require('log-symbols');

var invoiceInit = function(argv) {
  
  // Create new invoice json in current working directory.
  var cwd = process.cwd();

  // Configure invoice.
  var invoiceConfig = {
    from: {
      name: "Ben Utzer",
      address: ""
    },
    to: {
      address: ""
    }
  };

  // Get json template
  var invoiceJsonTmpl = fs.readFileSync(
    path.join(__dirname, '../../templates', '_invoice.json.ejs'),
    { 'encoding': 'utf8' }
  );
   
  // Compile template and render to file
  var template = ejs.compile(invoiceJsonTmpl);
  var result   = template(invoiceConfig);
  console.log(logSymbols.success, 'compiled invoice json template');

  // Check if 

  
};

// == Export
module.exports = invoiceInit;

