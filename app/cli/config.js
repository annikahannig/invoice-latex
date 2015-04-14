'use strict';

/**
 * Configure invoice
 * -----------------
 *
 * Set global configuration parameters, like
 * your own name and address or your last invoice number.
 *
 * (c) 2015 Matthias Hannig
 * 
 */

var inquirer       = require('inquirer');
var logSymbols     = require('log-symbols');

var InvoiceConfig  = require('../helper/invoice-config');


/**
 * == Load config from file and inquire
 *    new configuration.
 */
var invoiceConfig = function(argv) {
  
  // Load config from file
  var config = loadConfig();

  // Get all configuration from user
  var options = [
    {
      type: 'input',
      name: 'name',
      message: 'Your name',
      default: config.name
    },
    {
      type: 'input',
      name: 'address',
      message: 'Your address (Semicolon-separated)',
      default: config.address,
      filter: function(addr) {
        return addr.split(';').map(function(l){ return l.trim() });
      }
    },
    {
      type: 'confirm',
      name: 'saveConfig',
      default: true,
      message: 'Save this?'
    }
  ];

  inquirer.prompt( options, function(result) {
    
    if(result.saveConfig) {
          
    }

  });

};

// == Export function
module.exports = invoiceConfig;

