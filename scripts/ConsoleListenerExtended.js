var antlr4 = require('antlr4/error/index');
var ErrorListener = require('antlr4/error/index').ErrorListener;
var ConsoleErrorListener = require('antlr4/error/index').ConsoleErrorListener;
var QwertyLexer = require('../generated-parser/QwertyLexer');
var QwertyParser = require('../generated-parser/QwertyParser');

// // ConsoleListenerExtended = function() {
// //     ErrorListener.call(); // inherit default listener
// //     return this;
// // };

ConsoleListenerExtended = function() {
    QwertyVisitor.call(this);
    return this;
};

// inherit default listener
ConsoleListenerExtended.prototype = Object.create(ConsoleErrorListener.prototype);
ConsoleListenerExtended.prototype.constructor = ConsoleListenerExtended;

exports.ConsoleListenerExtended = ConsoleListenerExtended;

// ConsoleListenerExtended.prototype = Object.create(antlr4.error.Errlr.prototype);
ConsoleListenerExtended.prototype.constructor = ConsoleListenerExtended;