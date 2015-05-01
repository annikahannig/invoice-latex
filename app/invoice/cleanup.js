'use strict';

/**
 * Cleanup TMP fs
 */

var fs   = require('fs');
var path = require('path');
var glob = require('glob');
var sym  = require('log-symbols');

var remove = require('remove');

var Promise = require('promise');

// == Clear all tmp files and other stuff.
var cleanup = function(path) {
  return function(invoice) {
    var promise = new Promise(function(resolve, reject){
      
      // Remove letterpaper
      remove.removeSync('/tmp/letterpaper.pdf',function(err) {
        if(err) {
          console.error(sym.error + ' Error while deleting files.');
          reject(err);
        }
      });

      // Glob all tmp files
      glob(path + '*', function(err, files) {
        if(err) {
          console.error(sym.error + ' Error while deleting files.');
          reject(err);
          return;
        }

        files.forEach(function(file){
          remove.removeSync(file, function(err) {
            if(err) {
              console.error(
                sym.error+' Error while deleting files.'
              );
              reject(err);
            }
          });
        });

        // Wer are done here.
        console.log(sym.success + ' Cleanup finished.');
        resolve(invoice);
      });

    });
    return promise;
  };
};

// == Export
module.exports = cleanup;

