var editor = ace.edit('editor');
editor.setTheme("ace/theme/twilight");
editor.getSession().setMode('ace/mode/my-mode');

var antlr4 = require('antlr4/index');
var QwertyLexer = require('../generated-parser/QwertyLexer');
var QwertyParser = require('../generated-parser/QwertyParser');
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
    var lexer = new QwertyLexer.QwertyLexer(chars);
    var tokens  = new antlr4.CommonTokenStream(lexer);
    var parser = new QwertyParser.QwertyParser(tokens);
	parser.buildParseTrees = true;

    // For errors
    var errorListener = new ErrorListenerExtended();
    parser.removeErrorListeners();
    parser.addErrorListener(errorListener);
    
    var tree = parser.program();
    
    // Symbol Table
    var s = SymbolTable();
    var tokenType = tokens.getTokens(0, tokens.getNumberOfOnChannelTokens());
    var symbolNames = parser.symbolicNames;
    var inputSplitted = input.split("");
    var identifier;
    var numOfScopes = 0;

    sTable = [];
    stackNumber = 0;
    for(var i=0; i<tokens.getNumberOfOnChannelTokens()-1; i++){
    	type = symbolNames[tokenType[i].type];
    	identifier = inputSplitted.slice(tokenType[i].start, tokenType[i].stop + 1).join("");
		if(type == "Identifier"){
            console.log("identifier: " + identifier);
            if(s.has(identifier)) {
                console.log("!!! IDENTIFIER SET !!!");
                s.set(identifier, i);       
            } else {
                console.log("!!! ERROR ERROR !!!");
            }		
		}else if(type == "LBRACE"){
			sTable[stackNumber] = s.push();
            stackNumber++; 
			numOfScopes;
		}else if(type == "RBRACE"){
            stackNumber--;
            sTable[stackNumber] = s.pop();
		}
    }
    
    // Interpreter
    updateConsole(input, tokens, symbolNames);

    // // Parser (edit JavaListenerExtended.js)
    var javaExtended = new JavaListenerExtended();
    antlr4.tree.ParseTreeWalker.DEFAULT.walk(javaExtended, tree);
});