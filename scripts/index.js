var editor = ace.edit('editor');
editor.setTheme("ace/theme/twilight");
editor.getSession().setMode('ace/mode/my-mode');

var antlr4 = require('antlr4/index');
var JavaLexer = require('../generated-parser/javaLexer');
var JavaParser = require('../generated-parser/javaParser');
var JavaListenerExtended = require('/scripts/JavaListenerExtended').JavaListenerExtended;
var ErrorListenerExtended = require('/scripts/ErrorListenerExtended').ErrorListenerExtended;
var consoleBox = document.getElementById("consoleBox");
var SymbolTable = require("/symbol-table/stack");

var updateConsole = function(input, tokens, symbolicNames) {
    var inputSplitted = input.split("");
    var test = tokens.getTokens(0, tokens.getNumberOfOnChannelTokens());
    for(var i=0; i<tokens.getNumberOfOnChannelTokens() - 1; i++) {
        consoleBox.innerHTML += (inputSplitted.slice(test[i].start, test[i].stop + 1)).join("") + " is of type " + symbolicNames[test[i].type] +"<br>";
    }
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
    
    // Symbol Table
    var s = SymbolTable();
    var tokenType = tokens.getTokens(0, tokens.getNumberOfOnChannelTokens());
    var symbolNames = parser.symbolicNames;
    var inputSplitted = input.split("");
    var identifier;
    var identifierCtr = 0;
    var numOfScopes = 0;
    for(var i=0; i<tokens.getNumberOfOnChannelTokens()-1; i++){
    	type = symbolNames[tokenType[i].type];
    	identifier = inputSplitted.slice(tokenType[i].start, tokenType[i].stop + 1).join("");
    	
		if(type == "Identifier"){
    		s.set(identifier, i);   		
    		
    		identifierCtr++;
		}else if(type == "LBRACE"){
			s.push();
			console.log("push");
			numOfScopes;
		}else if(type == "RBRACE"){
			s.pop();
			console.log("pop");
		}
		console.log(identifier + i +" " + s.get("n") + " " + s.has("n"));
    }
    
    // Interpreter
    updateConsole(input, tokens, symbolNames);

    // // Parser (edit JavaListenerExtended.js)
    var javaExtended = new JavaListenerExtended();
    antlr4.tree.ParseTreeWalker.DEFAULT.walk(javaExtended, tree);
});