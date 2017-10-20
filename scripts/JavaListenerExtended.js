var antlr4 = require('antlr4/index');
var JavaLexer = require('../generated-parser/javaLexer');
var JavaParser = require('../generated-parser/javaParser');
var JavaListener = require('../generated-parser/javaListener').javaListener;

JavaListenerExtended = function() {
    JavaListener.call(this); // inherit default listener
    return this;
};

// inherit default listener
JavaListenerExtended.prototype = Object.create(JavaListener.prototype);
JavaListenerExtended.prototype.constructor = JavaListenerExtended;

exports.JavaListenerExtended = JavaListenerExtended;