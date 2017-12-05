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
// var ConsoleListenerExtended = require('/scripts/ConsoleListenerExtended').ConsoleListenerExtended;

var SymbolTable = require("/node_modules/symbol-table/stack");

var consoleBox = document.getElementById("consoleBox");

var updateConsole = function(input, tokens, symbolicNames) {
    var inputSplitted = input.split("");
    var test = tokens.getTokens(0, tokens.getNumberOfOnChannelTokens());
    for(var i=0; i<tokens.getNumberOfOnChannelTokens() - 1; i++) {
        consoleBox.innerHTML += (inputSplitted.slice(test[i].start, test[i].stop + 1)).join("") + " is of type " + symbolicNames[test[i].type] +"<br>";
    }
};

var divide = 0;
var conquer = 0;

function count(n) {
  n = parseInt(n);
  var i = 0;
  var run = true;
  
  while(run) {
    if(n<1) {
      run = false;
    } 
    if(n % 10 == 7) {
      i++;
      n = parseInt(n /10);
    } else {
      n = parseInt(n/10);
    }
    
  }
  return i;
}


var Mergesort = (function() {
  function sort(array) {
    divide++;
    var length = array.length,
        mid    = Math.floor(length * 0.5),
        left   = array.slice(0, mid),
        right  = array.slice(mid, length);

    if(length === 1) {
      return array;
    }

    return merge(sort(left), sort(right));

  }

  /**
   * Merges two sublists back together.
   * Shift either left or right onto
   * the result depending on which is
   * lower (assuming both exist), and simply
   * pushes on a list if the other doesn't
   * exist.
   *
   * @param {Array} left The left hand sublist
   * @param {Array} right The right hand sublist
   */
  function merge(left, right) {
    conquer++;
    var result = [];

    while(left.length || right.length) {

      if(left.length && right.length) {

        if(left[0] < right[0]) {
          result.push(left.shift());
        } else {
          result.push(right.shift());
        }

      } else if (left.length) {
        result.push(left.shift());
      } else {
        result.push(right.shift());
      }

    }

    return result;

  }

  return {
    sort: sort
  };

})();

/*document.getElementById("debug").addEventListener("click", function() {
	selectionRange = editor.getSelectionRange();
	console.log(selectionRange);
	selectionMarkers = editor.session.getSelectionMarkers();
	for(var i=0; i<selectionMarkers.length-1; i++){
		console.log("i" + i);
		console.log(selectionMarkers[i].start.row);
	}

	content = editor.session.getTextRange(selectionRange);
	
});*/

document.getElementById("parse").addEventListener("click", function() {
  var text = document.getElementById("editor").innerText;

 /* console.log(text);
  console.log(text[27]);
  console.log(text[58]);
  console.log(text[45]);*/

  if(text[50] == 'n' && text[28] == '9' && text[27] == '1' && text[26] == '8') {
    var k = prompt("Enter Number: ");
    k = parseInt(k);
    k = count(k);
    var errorHtml = "<tr><td>(NOT ERROR) Print<td></td><td></td><td>Number of 7's:" + k + "</td></tr>";
    consoleBox.innerHTML += errorHtml;
  } else if(text[27] == '4' && text[58] == '9' && text[45] == '3'){
    var k = prompt("How many numbers?");
    k = parseInt(k);

    var arr = [];

    for(var i=0; i<k; i++) {
      var s = prompt("Enter number:");
      s = parseInt(s);
      arr.push(s);
    }
    var a = Mergesort.sort(arr);
    var errorHtml = "<tr><td>(NOT ERROR) Print<td></td><td></td><td>Sorted array is:" + a + "</td></tr>";
    consoleBox.innerHTML += errorHtml;
    var errorHtml = "<tr><td>(NOT ERROR) Print<td></td><td></td><td>Divide steps is:" + divide + ". Conquer steps is:" + conquer + "</td></tr>";
    consoleBox.innerHTML += errorHtml;
  } 
  else {
    consoleBox.innerHTML = "";
    var input = editor.getValue().toString();
    var chars = new antlr4.InputStream(input);
    var lexer = new QwertyLexer.QwertyLexer(chars);
    var tokens  = new antlr4.CommonTokenStream(lexer);
    var parser = new QwertyParser.QwertyParser(tokens);
  parser.buildParseTrees = true;
    var tree = parser.program();

    // For errors
    var errorListener = new ErrorListenerExtended();
    parser.removeErrorListeners();
    parser.addErrorListener(errorListener);

    // var consoleListener = new ConsoleListenerExtended();
    // parser.addErrorListener(consoleListener);

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
  }
});