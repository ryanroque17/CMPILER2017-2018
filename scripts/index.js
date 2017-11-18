var editor = ace.edit('editor');
editor.setTheme("ace/theme/twilight");
editor.getSession().setMode('ace/mode/my-mode');

var antlr4 = require('antlr4/index');
var QwertyLexer = require('../generated-parser/QwertyLexer');
var QwertyParser = require('../generated-parser/QwertyParser');

// Parsing
var AssignmentListener = require('/scripts/AssignmentListener').AssignmentListener;
var TypeChecker = require('/scripts/TypeChecker').TypeChecker;
// Syntax Analyzer
var ErrorListenerExtended = require('/scripts/ErrorListenerExtended').ErrorListenerExtended;

var SymbolTable = require("/node_modules/symbol-table/stack");

var consoleBox = document.getElementById("consoleBox");

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
    var tree = parser.program();

    // For errors
    // var errorListener = new ErrorListenerExtended();
    // parser.removeErrorListeners();
    // parser.addErrorListener(errorListener);

    // Semantic Analyzer 
    // Scope Management
    var s = SymbolTable();
    var tokenType = tokens.getTokens(0, tokens.getNumberOfOnChannelTokens());
    var symbolNames = parser.symbolicNames;
    var inputSplitted = input.split("");

    var identifierBefore;
    var identifier;
    var numOfScopes = 0;

    // Lexical
    // updateConsole(input, tokens, symbolNames);

    // // Parser (edit JavaListenerExtended.js)
    var assignmentListener = new AssignmentListener();
    var test = antlr4.tree.ParseTreeWalker.DEFAULT.walk(assignmentListener, tree);

    // var typeChecker = new TypeChecker();
    // typeChecker.visit(tree);

  //   sTable = [];
  //   stackNumber = 0;
  //   for(var i=0; i<tokens.getNumberOfOnChannelTokens()-1; i++){
  //   	type = symbolNames[tokenType[i].type];
  //   	identifier = inputSplitted.slice(tokenType[i].start, tokenType[i].stop + 1).join("");

		// if(type == "VARIABLE_IDENTIFIER"){
  //           console.log("identifier: " + identifier);
  //           console.log("identifierBEFORE: " + identifierBefore);
  //           if(identifierBefore == "int") {
  //               s.set(identifier, i); 
  //           } else {
  //               if(s.has(identifier)) {

  //               } else {
  //                   console.log("!!! ERRROR !!!");
  //               }
  //           }
  //       }else if(type == "OPEN_BRACE"){
		// 	sTable[stackNumber] = s.push();
  //           stackNumber++; 
		// 	numOfScopes;
		// }else if(type == "CLOSE_BRACE"){
  //           stackNumber--;
  //           sTable[stackNumber] = s.pop();
		// }

  //       identifierBefore = inputSplitted.slice(tokenType[i].start, tokenType[i].stop + 1).join("");
  //   }
});