var antlr4 = require('antlr4/index');
var QwertyLexer = require('../generated-parser/QwertyLexer');
var QwertyParser = require('../generated-parser/QwertyParser');
var QwertyListener = require('../generated-parser/QwertyListener').QwertyListener;
var QwertyValue = require('/scripts/QwertyValue');

var hasString = false;
var IdentifierHandler = function () {

};

IdentifierHandler.prototype.convertVarToVal = function(input, s){
	var tokenList = generateTokenList(input, s);
	if(hasString)
		return buildInputString(tokenList);	
	else
		return evaluateExpression(tokenList);
}

function generateTokenList(input ,s){
	var chars = new antlr4.InputStream(input);
	var lexer = new QwertyLexer.QwertyLexer(chars);
	var tokens  = new antlr4.CommonTokenStream(lexer);
	var parser = new QwertyParser.QwertyParser(tokens);
	var symbolNames = parser.symbolicNames;
	var inputSplitted = input.split("");
	var test = tokens.getTokens(0, tokens.getNumberOfOnChannelTokens());
	
	var token;
	var type;
	var tokenList = [];
	hasString = false;
    for(var i=0; i<tokens.getNumberOfOnChannelTokens() - 1; i++) {
    	token = inputSplitted.slice(test[i].start, test[i].stop + 1).join("");

    	type = symbolNames[test[i].type];

    	if(type.includes("VARIABLE_IDENTIFIER")){
    		if(s.has(token)) {  		
    			if(s.get(token).getValue())
    				tokenList.push(s.get(token).getValue());
    			else
    				tokenList.push('"null"');
    		}
    		else{
    			//tokenList.push('"nullval"');
    			if(token.includes("null")){
    				tokenList.push('"null"');
    			}else
    				console.log("Undeclared variable " + token + "!");
    		}
    	}else
        	tokenList.push(token);
    	
    	if(type.includes("STRING_LITERAL"))
    		hasString = true;
    }    
    //console.log(tokenList.toString())
  //  console.log(tokenList.length);
    //console.log("zz" + tokenList.toString());
    return tokenList;
}


function buildInputString(tokenList){
	var input ="";
	
	for(var i=0; i<tokenList.length; i++){
		input = input.concat(tokenList[i]);
	}
	
	return input;
}

IdentifierHandler.prototype.evaluatePrintExpression = function(input, s){
	var printArgs = input.split("+");
	var expression;
	var printStmt = "";
	for(var i=0; i<printArgs.length; i++){
		//console.log("args" + printArgs[i]);
		expression = generateTokenList(printArgs[i], s);
		printStmt = printStmt.concat(expression.toString());
	}
	//console.log("WWW" + printStmt);

	printStmt = printStmt.split('"').join("");
	console.log(printStmt);
	
	return printStmt;
}

function evaluateExpression (input){
	//console.log("ps" + input.toString());
    if(input.toString().includes("null")){
    	console.log("AS");
    	return null;
    }else if(input.toString().includes("true") || input.toString().includes("false")){
    	return input;
    }
    else{
    	return rpn(yard(input));    	
    }
}

let yard = (tokenList) => {
	  let ops = {'+': 1, '-': 1, '*': 2, '/': 2};
	  let peek = (a) => a[a.length - 1];
	  let stack = [];
	  let output = [];
	  let token;
	 // console.log(tokenList.toString());
	  tokenList = changeNegative(tokenList);
	  for(var i=0; i<tokenList.length; i++){
		  token = tokenList[i];
		  if (!isNaN(parseFloat(token))) {

	        output.push(token);
	      }

	      if (token in ops) {
	    	
		    while (peek(stack) in ops && ops[token] <= ops[peek(stack)])
		      output.push(stack.pop());
		    stack.push(token);
	    	
	      }
	      /*if(token == '-' && !(tokenList[i-1]>=0)){
	    	  stack.push("0");
	      }*/
	      if (token == '(') {
	        stack.push(token);
	      }

	      if (token == ')') {
	        while (peek(stack) != '(')
	          output.push(stack.pop());
	        stack.pop();
	      }
	  }
	  let result = output.concat(stack.reverse()).join(' ')

	  return result;
};

let rpn = (ts, s = []) => {
	if(ts.length == 1){
		ts = ts.concat(" 0 +");
	}

	ts.split(' ').forEach(t =>

	  s.push(t == +t ? t : eval(s.splice(-2,1)[0] + t + s.pop())));
	 
	  return parseFloat(s[0]);
	}

function changeNegative(tokenList){
	var newTokenList = [];
	var token;
	//tokenList.toString();
	for(var i=0; i<tokenList.length; i++){
		token = tokenList[i];
		if(token == '-' && !(tokenList[i-1]>=0)){
			newTokenList.push("(");
			newTokenList.push("0");
			newTokenList.push("-");
			newTokenList.push(tokenList[i+1]);
			newTokenList.push(")");
			i++;
		}else
			newTokenList.push(token);
	}
	
	return newTokenList;
	
}


module.exports = IdentifierHandler;
