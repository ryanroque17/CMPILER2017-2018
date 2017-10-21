var antlr4 = require('antlr4/error/index');
var ErrorStrategy = require('../antlr4/error/ErrorStrategy').DefaultErrorStrategy;
var JavaLexer = require('../generated-parser/javaLexer');
var JavaParser = require('../generated-parser/javaParser');

ErrorStrategyExtended = function() {
    ErrorStrategy.call(this); // inherit default listener
    
    return this;
};

ErrorStrategyExtended.prototype.reportNoViableAlternative = function(recognizer, e) {
    var tokens = recognizer.getTokenStream();
    var input;
    if(tokens !== null) {
        if (e.startToken.type===Token.EOF) {
            input = "<EOF>";
        } else {
            input = tokens.getText(new Interval(e.startToken, e.offendingToken));
        }
    } else {
        input = "<unknown input>";
    }
    var msg = "no zzzviable alternative at input " + this.escapeWSAndQuote(input);
    recognizer.notifyErrorListeners(msg, e.offendingToken, e);
};

exports.ErrorStrategyExtended = ErrorStrategyExtended;