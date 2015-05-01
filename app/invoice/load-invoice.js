'use strict';

/**
 * Load raw invoice yaml and parse it.
 *
 * (c) 2015 Matthias Hannig
 */

var Promise = require('promise');
var fs      = require('fs');
var sym     = require('log-symbols');
var yaml    = require('js-yaml');


var loadInvoice = function(file) {
  var promise = new Promise(function(resolve, reject) {
    fs.readFile(process.cwd() + '/' + file, function(err, data) {
      if(err) {
        console.error( 
          sym.error + ' Could not load config: ' + err
        );
        reject(err);
        return;
      }
      var invoice = yaml.safeLoad(data);
      console.log(
        sym.success + ' Invoice: ' + invoice.nr + ' loaded.'
      );
      resolve(invoice);
    });

  });
  return promise;
};

// == Expor
module.exports = loadInvoice;


