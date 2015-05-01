'use strict';

/**
 * Get compiled PDF from temp directory.
 * Rename pdf to 'invoice.pdf'
 *
 * (c) 2015 Matthias Hannig
 */

var fs    = require('fs-extra');
var path  = require('path');
var sym   = require('log-symbols');

var Promise = require('promise');

// == Receive invoice
var receive = function(tmpFile) {
  var tmpPdf = tmpFile + '.pdf';

  return function(invoice) {
    var p = new Promise(function(resolve, reject){

      // Copy invoice 
      fs.copy(
        tmpPdf,
        path.join(process.cwd(), 'invoice.pdf'),
        function(err) {
          if(err) {
            console.log(sym.error + ' Could not get invoice pdf');
            reject(err);
          }
          else {
            resolve(invoice);
          }
        }
      );

    });
    return p;
  };
};

// == Export
module.exports = receive;

