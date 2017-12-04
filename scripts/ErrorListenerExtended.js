var antlr4 = require('antlr4/error/index');
var ErrorListener = require('antlr4/error/index').ErrorListener;
var QwertyLexer = require('../generated-parser/QwertyLexer');
var QwertyParser = require('../generated-parser/QwertyParser');
var ConsoleErrorListener = require('antlr4/error/index').ConsoleErrorListener;

ErrorListenerExtended = function() {
    ErrorListener.call(this); // inherit default listener
    return this;
};

ErrorListenerExtended.prototype.syntaxError = function(recognizer, offendingSymbol, line, column, msg, e) {
    console.error(msg + " at line " + line);
    
    var offSymbol = recognizer.literalNames[offendingSymbol.type];
    if(offSymbol == null) {
    	offSymbol = "N/A"
    }
    var errorHtml = "<tr><td>Error<td>" + parseInt(line) + "</td><td>" + offSymbol + "</td><td>" + msg + "</td></tr>";

    consoleBox.innerHTML += errorHtml;
    
};

exports.ErrorListenerExtended = ErrorListenerExtended;