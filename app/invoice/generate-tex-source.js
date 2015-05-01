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


// == Helper
var loadAndCompileTemplate = function(file) {
  // Load template
  var template = fs.readFileSync(
    path.join(
      __dirname,
      '../../templates', 
      file
    ),
    { encoding: 'utf8' }  
  );

  return ejs.compile(template);
};


var genreateTexSource = function(dstFile) {
  dstFile += '.tex';

  return function(invoice) {
    var promise = new Promise(function(resolve, reject) {

      // Load templates 
      // -> Invoice
      var invoiceTmpl = loadAndCompileTemplate(
        'invoice-tmpl.tex.ejs'
      );
      // -> Account
      var accountTmpl = loadAndCompileTemplate(
        'invoice-tmpl.account.tex.ejs'
      );
      // -> Items
      var itemsTmpl = loadAndCompileTemplate(
        'invoice-tmpl.items.tex.ejs'
      );

      // Build invoice body: Replace Subtemplates
      var content = {
        '[[ACCOUNT]]': accountTmpl({invoice: invoice}),
        '[[ITEMS]]':   itemsTmpl({invoice:   invoice})
      };
      var invoiceBody = invoice.text.replace(
        /\[\[(.*?)\]\]/g,  
        function(match) {
          return content[match];    
        }
      );

      // Render invoice 
      var result = invoiceTmpl({
        invoice: invoice,
        invoiceBody: invoiceBody
      });
    
      // Write result to file
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


