var antlr4 = require('antlr4/error/index');
var ErrorListener = require('antlr4/error/index').ErrorListener;
var JavaLexer = require('../generated-parser/javaLexer');
var JavaParser = require('../generated-parser/javaParser');

ErrorListenerExtended = function() {
    ErrorListener.call(this); // inherit default listener
    return this;
};

ErrorListenerExtended.prototype.syntaxError = function(recognizer, offendingSymbol, line, column, msg, e) {
    console.error(msg + " at line " + line);
    consoleBox.innerHTML += "Error at line " + (parseInt(line)-1) + " : " + msg + " <br>" ;
};

exports.ErrorListenerExtended = ErrorListenerExtended;