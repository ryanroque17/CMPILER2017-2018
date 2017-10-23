var editor = ace.edit('editor');
editor.setTheme("ace/theme/twilight");
editor.getSession().setMode('ace/mode/my-mode');

var antlr4 = require('antlr4/index');
var JavaLexer = require('../generated-parser/javaLexer');
var JavaParser = require('../generated-parser/javaParser');
var JavaListenerExtended = require('scripts/JavaListenerExtended').JavaListenerExtended;
var ErrorListenerExtended = require('scripts/ErrorListenerExtended').ErrorListenerExtended;
var consoleBox = document.getElementById("consoleBox");

var updateConsole = function(input, tokens, symbolicNames) {
    var inputSplitted = input.split("");
    var test = tokens.getTokens(0, tokens.getNumberOfOnChannelTokens());
    /*for(var i=0; i<tokens.getNumberOfOnChannelTokens() - 1; i++) {
        consoleBox.innerHTML += (inputSplitted.slice(test[i].start, test[i].stop + 1)).join("") + " is of type " + symbolicNames[test[i].type] +"<br>";
    }*/
};

document.getElementById("parse").addEventListener("click", function() {
	consoleBox.innerHTML = "";
    var input = editor.getValue().toString();
    var chars = new antlr4.InputStream(input);
    var lexer = new JavaLexer.javaLexer(chars);
    var tokens  = new antlr4.CommonTokenStream(lexer);
    var parser = new JavaParser.javaParser(tokens);
	parser.buildParseTrees = true;

    // For errors
    var errorListener = new ErrorListenerExtended();
    parser.removeErrorListeners();
    parser.addErrorListener(errorListener);
    
    var tree = parser.compilationUnit();

    // Interpreter
    updateConsole(input, tokens, parser.symbolicNames);

    // // Parser (edit JavaListenerExtended.js)
    var javaExtended = new JavaListenerExtended();
    antlr4.tree.ParseTreeWalker.DEFAULT.walk(javaExtended, tree);
});