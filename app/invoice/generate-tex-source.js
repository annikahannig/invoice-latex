'use strict';

/**
 * Generate LaTeX source from invoice data.
 * Configuration: Output file.
 *
 * (c) 2015 Matthias Hannig
 */

var Promise = require('promise');
var fs      = require('fs');
var ejs     = require('ejs');
var path    = require('path');

var sym     = require('log-symbols');

var genreateTexSource = function(dstFile) {
  return function(invoice) {
    var promise = new Promise(function(resolve, reject) {

      // Load template
      var invoiceTexTemplate = fs.readFileSync(
        path.join(
          __dirname,
          '../../templates', 
          'invoice-tmpl.tex.ejs'         
        ),
        { encoding: 'utf8' }  
      );

      // Load subtemplates
      // -> Account
      //
      // -> Items

      // Compile template and render to file
      var invoiceTmpl = ejs.compile(invoiceTexTemplate);
      // var accountTmpl = ejs.compile(accountTexTemplate);
      // var itemsTmpl   = ejs.compile(itemsTexTemplate);

      var result = invoiceTmpl({
        invoice: invoice,
        invoiceBody: 'Mooooo'
      });
    
      fs.writeFile(
        dstFile, result, { encoding: 'utf8' }, function(err) {
          if(err) {
            reject(err);
          }
          else {
            console.log(
              sym.success + ' ' + dstFile + '  generated.'
            );
            resolve(invoice);
          }
        }
      );
    });
    return promise;
  };
};

// == Export
module.exports = genreateTexSource;


