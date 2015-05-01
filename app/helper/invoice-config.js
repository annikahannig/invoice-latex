'use strict';

/**
 * Invoice Config Helper
 * ---------------------
 *
 * Load and write configuration.
 * 
 * (c) 2015 Matthias Hannig
 *
 */

var InvoiceConfig = function(options) {
  this.options = options||{}; 
  this.attrs   = {};

};

InvoiceConfig.prototype.save = function() {
  console.log("write to file.");
  console.log(this);
};

