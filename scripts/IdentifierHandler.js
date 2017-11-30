var antlr4 = require('antlr4/index');
var QwertyLexer = require('../generated-parser/QwertyLexer');
var QwertyParser = require('../generated-parser/QwertyParser');
var QwertyListener = require('../generated-parser/QwertyListener').QwertyListener;
var QwertyValue = require('/scripts/QwertyValue');

var AssignmentListener = require('/scripts/AssignmentListener');


var hasString = false;
var IdentifierHandler = function () {

};

IdentifierHandler.prototype.convertVarToVal = function(input, s, f, ctx){
	//console.log("INPUUUUUT " + input);
	return generateTokenList(input, s, f, ctx);
	/*//console.log("tokenList " + tokenList)
	if(hasString) 
		return buildInputString(tokenList);
	else 
		return evaluateExpression(tokenList);*/
}

function convertArrToVal(input, s, f) {
	var splitForVariable = input.split("[");
	var varName = splitForVariable[0];
	var splitForIndex = splitForVariable[1].split("]");
	var index = splitForIndex[0];

	if(typeof(s.get(index)) == "object") {
		index = s.get(index).getValue();
	}
	
	var arrValue = s.get(varName).getValue();
	var returnThis;

	if(arrValue != null)
		returnThis = arrValue[parseInt(index)];
	else 
		returnThis = null;
	
	////console.log("RETURN THIS " +returnThis);
	return returnThis;
}

function moduloConverter(input, s, f) {
	var toEval = "";

	var splitForVariable = input.split("%");
	var varName = splitForVariable[0];


	if(typeof(s.get(varName)) == "object") {
		toEval += s.get(varName).getValue();
	}

	toEval += "%" + splitForVariable[1];

	//console.log("FOUND MODULO" + toEval);

	return eval(toEval);
}

function generateTokenList(input, s, f, ctx){
	var assignmentListener = new AssignmentListener.AssignmentListener();
	if(input != null)
		input = input.toString();
	var chars = new antlr4.InputStream("");
	var lexer = new QwertyLexer.QwertyLexer(chars);
	var tokens  = new antlr4.CommonTokenStream(lexer);
	var parser = new QwertyParser.QwertyParser(tokens);
	var symbolNames = parser.symbolicNames;
	var inputSplitted = input.split("");
	var test = tokens.getTokens(0, tokens.getNumberOfOnChannelTokens());

	var searchArray = false;
	var tempArr = "";
	
	var token;
	var type;
	var tokenList = [];
	var hasString = false;
	var hasFunction = false;
    for(var i=0; i<tokens.getNumberOfOnChannelTokens() - 1; i++) {
    	token = inputSplitted.slice(test[i].start, test[i].stop + 1).join("");
    	
    	type = symbolNames[test[i].type];
    	////console.log("CURRENT TYPE " + type);
    	////console.log("CURRENT TOKEN " + token);
    	if(type.includes("VARIABLE_IDENTIFIER") && !hasFunction){
    		// s contains the token 
    		if(s.has(token)) {  	

    			// if value is a variable then char after is '[' means its an array!
    			if(i != (tokens.getNumberOfOnChannelTokens() - 1) && inputSplitted.slice(test[i].start + 1, test[i].stop + 2).join("") == '%') {
    				////console.log("ARRAY!!!!");
    				//console.log("FOUND MODULO!!! " + input);
    				//console.log("FOUND MODULO!!!");
    				return moduloConverter(input, s, f);
    			}

    			// if value is a variable then char after is '[' means its an array!
    			if(i != (tokens.getNumberOfOnChannelTokens() - 1) && inputSplitted.slice(test[i].start + 1, test[i].stop + 2).join("") == '[') {
    				////console.log("ARRAY!!!!");
    				searchArray = true;
    				tempArr += token;
    				var j = 1;
    				// loop through the tokens until you reach a ']' 
    				// once you reach that, add into 'i' how many times you looped so you don't have to revisit them in the token list
    				// continue -- so you continue AFTER the ']'
    				do {
    					tempArr += inputSplitted.slice(test[i].start + j, test[i].stop + (j+1)).join("");
    					if(inputSplitted.slice(test[i].start + j, test[i].stop + (j+1)).join("") == ']') {
    						
    						tokenList.push(convertArrToVal(tempArr, s, f));
    						searchArray = false;
    						i += j;
    						tempArr = "";
    					}
    					j++;
    				} while(searchArray);
    				continue;
    			}

    			if(s.get(token).getValue() != null){
    				tokenList.push(s.get(token).getValue());
    			}
    			else
    				tokenList.push('"null"');
    			
    			if(s.get(token).getDataType().includes("string")){
    				hasString=true;
    			}
    		}
    		else{
    			//tokenList.push('"nullval"');
    			if(token.includes("null")){
    				tokenList.push('"null"');
    			}else{
    				tokenList.push('"null"');

    				parser.notifyErrorListeners("Undeclared variable " + token + "!", ctx.start);
    			}
    		}
    	} 
		else if(type.includes("FUNCTION_IDENTIFIER")){
			
    		if(f.has(token)){
    			////console.log(f.get(token).getCodeBlock());
    			//console.log("f token " + token);

    			//console.log("f ret valu" + f.get(token).getReturnValue());
    			//antlr4.tree.ParseTreeWalker.DEFAULT.walk(assignmentListener, f.get(token).getCodeBlock());
    			////console.log("VALUEEEEEEEEEEEEE " + f.get(token).getReturnValue());
    			if(f.get(token).getReturnValue() != null){
    				tokenList.push(f.get(token).getReturnValue());
        		//	//console.log("func ident " + f.get(token).getReturnValue());

    			}
    			else
    				tokenList.push('"null"');
    		}
    		else{ 
    			if(token.includes("null")){
    				tokenList.push('"null"');
    			}else{
    				tokenList.push('"null"');

    				parser.notifyErrorListeners("Undeclared function " + token + "!", ctx.start);
    			}	
    		}
    		hasFunction=true;
    	}else{
    		if(!hasFunction)
    			tokenList.push(token);
    		else{
    			if(token.includes(")"))
    				hasFunction=false;
    		}
    	}
    	if(type.includes("STRING_LITERAL")){
    		hasString = true;
    	}
    }    
    ////console.log(tokenList.toString())
  //  //console.log(tokenList.length);
    ////console.log("zz" + tokenList.toString());
    if(hasString){
    	////console.log("buildInputString");
		return buildInputString(tokenList);
    }  
	else {
    	////console.log("evaluateExpression " +tokenList);
		return evaluateExpression(tokenList);
	}
    
    return true;
}


function buildInputString(tokenList){
	var input ="";
	for(var i=0; i<tokenList.length; i++){
		input = input.concat(tokenList[i]);
	}
	////console.log("buildInputString result " + input);
	return input;
}

IdentifierHandler.prototype.evaluatePrintExpression = function(input, s, f, ctx){
	var printArgs = input.split("+");
	var expression;
	var printStmt = "";
	
	for(var i=0; i<printArgs.length; i++){
		expression = generateTokenList(printArgs[i], s, f, ctx);
		////console.log("@evalprint" + expression);
		if(expression == null){
			printStmt = printStmt.concat("null");
		}
		else
			printStmt = printStmt.concat(expression.toString());
	}
	////console.log("WWW" + printStmt);

	printStmt = printStmt.split('"').join("");
	////console.log(printStmt);
	
	return printStmt;
}

function evaluateExpression (input){
    if(input.toString().includes("null")){
    	//console.log("AS");
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
	 
	  return s[0];
	}

function changeNegative(tokenList){
	var newTokenList = [];
	var token;
	//tokenList.toString();
	for(var i=0; i<tokenList.length; i++){
		token = tokenList[i];
		if(token == '-' && !(tokenList[i-1]>=0) && tokenList[i-1] != ')'){
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
