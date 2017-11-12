var antlr4 = require('antlr4/index');
var QwertyLexer = require('../generated-parser/QwertyLexer');
var QwertyParser = require('../generated-parser/QwertyParser');
var QwertyListener = require('../generated-parser/QwertyListener').QwertyListener;

QwertyListenerExtended = function() {
    QwertyListener.call(this); // inherit default listener
    return this;
};

// inherit default listener
QwertyListenerExtended.prototype = Object.create(QwertyListener.prototype);
QwertyListenerExtended.prototype.constructor = QwertyListenerExtended;

exports.QwertyListenerExtended = QwertyListenerExtended;