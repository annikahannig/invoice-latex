'use strict';

/**
 * pdfLaTeX wrapper
 *
 * (c) 2015 Matthias Hannig
 */


var cp    = require('child_process');
var sym   = require('log-symbols');


var Promise = require('promise');


var compileTexSource = function(tmpFile) {
  var texFile = tmpFile + '.tex';
  return function(invoice) {
    var promise = new Promise(function(resolve, reject) {
    
      var cmd = 'pdflatex -interaction=nonstopmode ' + texFile;
      var opt = {
        cwd: '/tmp'
      };

      cp.exec(cmd, opt, function(err, stdout, stderr){
        if(err) { 
          console.log(sym.error + ' Error while executing tex');
          reject(err);
          return;
        }

        console.log(sym.success + ' Compiled tex -> pdf.');
        resolve(invoice);
      });

    });
    return promise;
  };
};

// == Export
module.exports = compileTexSource;

