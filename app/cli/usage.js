'use strict';

/**
 * Invoice Usage
 * -------------
 *
 * Prints usage / help screen.
 */

var usage = [
  '',
  'Usage: invoice <command>',
  '',
  'where <command> is one of:',
  '    init, config, compile, help',
  '',
  'invoice init      create a new invoice',
  'invoice config    setup global configuration options',
  'invoice compile   invoke invoice generation',
  'invoice help      display this help text',
  ''
];

var invoiceUsage = function(argv) {
  console.log(usage.join('\n'));  
};

// == Export
module.exports = invoiceUsage;

