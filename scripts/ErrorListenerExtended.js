var antlr4 = require('antlr4/error/index');
var ErrorListener = require('antlr4/error/index').ErrorListener;
var JavaLexer = require('../generated-parser/javaLexer');
var JavaParser = require('../generated-parser/javaParser');

ErrorListenerExtended = function() {
    ErrorListener.call(this); // inherit default listener
    return this;
};

ErrorListenerExtended.prototype.syntaxError = function(recognizer, offendingSymbol, line, column, msg, e) {
    console.log("Syntax error at line " + offendingSymbol);
};

exports.ErrorListenerExtended = ErrorListenerExtended;