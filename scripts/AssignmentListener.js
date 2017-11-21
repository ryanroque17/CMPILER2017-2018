var antlr4 = require('antlr4/index');
var QwertyLexer = require('../generated-parser/QwertyLexer');
var QwertyParser = require('../generated-parser/QwertyParser');
var QwertyListener = require('../generated-parser/QwertyListener').QwertyListener;
var SymbolTable = require("/node_modules/symbol-table/stack");
var s = SymbolTable()
var QwertyValue = require('/scripts/QwertyValue');
var consoleBox = document.getElementById("consoleBox");

function getIdentifiers(input){
	var tokenList = [];
	var chars = new antlr4.InputStream(input);
	var lexer = new QwertyLexer.QwertyLexer(chars);
	var tokens  = new antlr4.CommonTokenStream(lexer);
	var parser = new QwertyParser.QwertyParser(tokens);
	var symbolNames = parser.symbolicNames;
	var inputSplitted = input.split("");
	var test = tokens.getTokens(0, tokens.getNumberOfOnChannelTokens());
	var token;
	var type;

	for(var i=0; i<tokens.getNumberOfOnChannelTokens() - 1; i++) {
    	token = inputSplitted.slice(test[i].start, test[i].stop + 1).join("");

    	type = symbolNames[test[i].type];

    	if(type.includes("VARIABLE_IDENTIFIER")){
    		if(s.has(token)){
    	    	tokenList.push(token);
    		}else{
    			console.log("ERROR!! Undeclared variable " + token);
    		}
    	}    	
    }  
	return tokenList;
}

function checkIfHasIdentifier(input){
	var chars = new antlr4.InputStream(input);
	var lexer = new QwertyLexer.QwertyLexer(chars);
	var tokens  = new antlr4.CommonTokenStream(lexer);
	var parser = new QwertyParser.QwertyParser(tokens);
	var symbolNames = parser.symbolicNames;
	var inputSplitted = input.split("");
	var test = tokens.getTokens(0, tokens.getNumberOfOnChannelTokens());
	var token;
	var type;

	var hasIntegerLiteral = false;

	var tokenList = [];

    for(var i=0; i<tokens.getNumberOfOnChannelTokens() - 1; i++) {
    	token = inputSplitted.slice(test[i].start, test[i].stop + 1).join("");

    	type = symbolNames[test[i].type];
    	//input = input.replace(token, token.concat(""));
    	////console.log(input);
    	if(type.includes("VARIABLE_IDENTIFIER")){
    		////console.log("token: " + token);
    		if(s.has(token)){
    			input = input.replace(token, s.get(token).getValue());
    			if(typeof s.get(token).getValue() == "number"){
    	    		hasIntegerLiteral = true;
    	    	}
    	    	tokenList.push(s.get(token).getValue());
    		}else{
    			console.log("ERROR!! Undeclared variable " + token);
    		}
    	}else
        	tokenList.push(token);

    	if(type.includes("INTEGER_LITERAL")){
    		hasIntegerLiteral = true;
    	}else if(type.includes("STRING_LITERAL")){
    		token = token.split('"').join("");
    		
    	//	console.log(token);
    	}
    }  

    ////console.log(tokenList.length + ' = ' + (tokens.getNumberOfOnChannelTokens() - 1));
    // console.log("yard " + yard(input, tokenList));
    if(hasIntegerLiteral) {
    	//console.log("rpn " + rpn(yard(input, tokenList)));
    	return rpn(yard(input, tokenList)); 
    }
    else 
    	return input;	
}

function changeNegative(tokenList){
	var newTokenList = [];
	var token;
	
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
let yard = (infix, tokenList) => {
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

AssignmentListener = function(res) {
	this.Res = res;
    QwertyListener.call(this);
    return this;
};

// inherit default listener
AssignmentListener.prototype = Object.create(QwertyListener.prototype);
AssignmentListener.prototype.constructor = AssignmentListener;

exports.AssignmentListener = AssignmentListener;

// Enter a parse tree produced by QwertyParser#program.
AssignmentListener.prototype.enterProgram = function(ctx) {
	s.push();
};

// Exit a parse tree produced by QwertyParser#program.
AssignmentListener.prototype.exitProgram = function(ctx) {
};

function isValidAssignment(dataType, input) {
	// Set the input as its value if ever it is a variable
	var isVariable = false;;
	if(typeof(s.get(input)) == "object") {
		input = s.get(input);
		isVariable = true;
	}

	if(isVariable) {
		if(dataType == "string" && input.getDataType() != "string") {
			return false;
		}
		if(dataType =="int" && input.getDataType() != "int") {
			return false;
		}
		if(dataType == "float" && input.getDataType() != "float") {
			return false;
		}
	} else {
		if(dataType == "string") {
			if(typeof(input) == "number") {
				return false;
			} else {
				if(!(input.split("").includes('"') || input.split("").includes("'"))) {
					return false;
				}
			}
		} 
		if(dataType == "int" && typeof(input) == "string") {
			return false;
		}
		if(dataType == "float" && !input.split("").includes('.')) {
			return false;
		}
	}

	return true;
}

// Enter a parse tree produced by QwertyParser#var_decl.
AssignmentListener.prototype.enterVar_decl = function(ctx) {
	// int, string, etc
	var typeName = ctx.data_type().start.text;
	// variable name
	var varName = ctx.var_identifier_list().start.text;
	
	// variable value
	if(ctx.getChild(1).getChildCount() == 1){ // ex. int i;
		var varValue = new QwertyValue(typeName, "null");
	}
	else{	// ex. int i = 1;		
		var input = checkIfHasIdentifier(ctx.var_identifier_list().getChild(1).getChild(1).getText());		
		var varValue = new QwertyValue(typeName, input);
		if(!isValidAssignment(typeName, input)) {
			console.log("Type Checking Error for variable " + varName);
		}
	}
	
	if(s.has(varName)) {
		console.log("variable " + varName + " already in stack");
	} else {		
		s.set(varName, varValue);
		//console.log("value and data type of " +varName+ ":" + s.get(varName).getValue() + " & " + typeof s.get(varName).getValue());
	}
};

// Enter a parse tree produced by QwertyParser#const_statement.
AssignmentListener.prototype.enterConst_statement = function(ctx) {
	// int, string, etc
	// variable name
	var typeName = "constant";
	var varName = ctx.VARIABLE_IDENTIFIER().getText();
	var value = ctx.var_assignment_statement().getText().split('=')[1];
			
	var varValue = new QwertyValue(typeName, value);
	
	if(s.has(varName)) {
		console.log("variable " + varName + " already in stack");
	} else {		
		s.set(varName, varValue);
		//console.log("value and data type of " +varName+ ":" + s.get(varName).getValue() + " & " + typeof s.get(varName).getValue());
	}
};

// Enter a parse tree produced by QwertyParser#assignment_statement.
AssignmentListener.prototype.enterAssignment_statement = function(ctx) {
	// var input = ctx.assignment_factor().getText();
	var varName = ctx.getChild(0).getText();
	var varValue;
	var heightDiff;
	var height;
	var varHeight;
	if(!s.has(varName)) {
		console.log("variable " + varName + " NOT in stack!");
	}else{
		// if(!isValidAssignment(s.get(varName).getDataType(), input)) {
		// 	console.log("Type Checking Error for variable " + varName);
		// } else {
			if(s.get(varName).getDataType() == "constant") {
				console.log("ERROR! Cannot re-assign constant");
			} else {
				height = s.height();
				varHeight = s.getItsHeight(varName);
				
				if(height != varHeight){
					heightDiff = height - varHeight;
					for(var i=0; i<heightDiff ;i++){
						s.pop();
					}
				}
				////console.log(ctx.getChild(ctx.getChildCount()-1).getRuleIndex() +" aaaa");
				if(ctx.getChild(1).getText() == "="){
					varValue = ctx.getChild(2).getText();
				}else if(ctx.getChild(1).getText() == "++"){
					varValue = s.get(varName).getValue() + "+1";
				}else if(ctx.getChild(1).getText() == "--"){
					varValue = s.get(varName).getValue() + "-1";
				}else if(ctx.getChild(1).getText() == "+="){
					varValue = s.get(varName).getValue() + "+" + ctx.getChild(2).getText();
				}else if(ctx.getChild(1).getText() == "-="){
					varValue = s.get(varName).getValue() + "-" + ctx.getChild(2).getText();
				}else if(ctx.getChild(1).getText() == "*="){
					varValue = s.get(varName).getValue() + "*" + ctx.getChild(2).getText();
				}else if(ctx.getChild(1).getText() == "/="){
					varValue = s.get(varName).getValue() + "/" + ctx.getChild(2).getText();
				}else if(ctx.getChild(1).getText() == "%="){
					varValue = s.get(varName).getValue() + "%" + ctx.getChild(2).getText();
				}
				varValue = checkIfHasIdentifier(varValue);
				s.get(varName).setValue(varValue);

				//console.log("value and data type of " +varName+ ":" + s.get(varName).getValue() + " & " + typeof s.get(varName).getValue());
				if(height != varHeight){
					for(var i=0; i<heightDiff ;i++){
						s.push();
					}
				}
			// }
		}
	}
};

//Enter a parse tree produced by QwertyParser#funccall_statement.
AssignmentListener.prototype.enterFunccall_statement = function(ctx) {
	console.log(ctx);
	console.log(ctx.getText());

};


function evaluateBoolean(input) {
	var hasAnd = false;
	var arr;

	if(input.split("").includes("&")) {
	  arr = input.split("&&");
	  hasAnd = true;
	} else {
		arr = [input];
	}
	  
	for(var i=0; i<arr.length; i++) {
		var poe = arr[i];
		if(poe.split("").includes("=")) {
			if(poe.split("").includes("<")) {
				// <=
				var exp = arr[i].split("<=");
				if(typeof(s.get(exp[0])) == "object") {
					exp[0] = s.get(exp[0]).getValue();
				}
				if(typeof(s.get(exp[1])) == "object") {
					exp[1] = s.get(exp[1]).getValue();
				}
				if(s.get(exp[0]).getValue() <= exp[1]) {
	    
				} else {
				    return false;
				}
			} else if(poe.split("").includes(">")) {
				// >=
				var exp = arr[i].split(">=");
				if(typeof(s.get(exp[0])) == "object") {
					exp[0] = s.get(exp[0]).getValue();
				}
				if(typeof(s.get(exp[1])) == "object") {
					exp[1] = s.get(exp[1]).getValue();
				}
				if(s.get(exp[0]).getValue() >= exp[1]) {
	    
				} else {
				    return false;
				}
			} else if(poe.split("").includes("!")) {
				// >=
				var exp = arr[i].split("!=");
				if(typeof(s.get(exp[0])) == "object") {
					exp[0] = s.get(exp[0]).getValue();
				}
				if(typeof(s.get(exp[1])) == "object") {
					exp[1] = s.get(exp[1]).getValue();
				}
				if(s.get(exp[0]).getValue() != exp[1]) {
	    
				} else {
				    return false;
				}
			}else {
				var exp = arr[i].split("==");
				if(typeof(s.get(exp[0])) == "object") {
					exp[0] = s.get(exp[0]).getValue();
				}
				if(typeof(s.get(exp[1])) == "object") {
					exp[1] = s.get(exp[1]).getValue();
				}
			    if(exp[0] == exp[1]) {
			     
			    } else {
			        return false;
			    }
			}	
		} else if(poe.split("").includes("<")) {
			// <
			var exp = arr[i].split("<");
			if(typeof(s.get(exp[0])) == "object") {
					exp[0] = s.get(exp[0]).getValue();
				}
				if(typeof(s.get(exp[1])) == "object") {
					exp[1] = s.get(exp[1]).getValue();
				}

		    if(exp[0] < exp[1]) {
		     
		    } else {
		        return false;
		    }
		} else if(poe.split("").includes(">")) {
			// >
			var exp = arr[i].split(">");
			if(typeof(s.get(exp[0])) == "object") {
					exp[0] = s.get(exp[0]).getValue();
				}
				if(typeof(s.get(exp[1])) == "object") {
					exp[1] = s.get(exp[1]).getValue();
				}

		    if(exp[0] > exp[1]) {
		     
		    } else {
		        return false;
		    }
		}
	}

	return true;
};

// Enter a parse tree produced by QwertyParser#if_statement.
AssignmentListener.prototype.enterIf_statement = function(ctx) {
	s.push();
	var noOfIf = ctx.getChildCount();
	var condition; 
	var hasTrue = false;
	for(var i=0; i<noOfIf; i++){
		var count = ctx.getChild(i).getChildCount();
		if(hasTrue){
			for(var j=0; j<count;j++){
				ctx.getChild(i).removeLastChild();
			}
		}else{		
			if(ctx.getChild(i).constructor.name.includes("Conditional_blockContext")){
				condition = ctx.getChild(i).getChild(1).getText();
	
				if(evaluateBoolean(condition) == false){
					for(var j=0; j<count;j++){
						ctx.getChild(i).removeLastChild();
					}
				}else{
					hasTrue = true;
				}
			}	
		}
		
	}
};

// Exit a parse tree produced by QwertyParser#if_statement.
AssignmentListener.prototype.exitIf_statement = function(ctx) {
	s.pop();
};

//Enter a parse tree produced by QwertyParser#code_block.
AssignmentListener.prototype.enterCode_block = function(ctx) {
	//console.log("CODE BLOC");
};

// Enter a parse tree produced by QwertyParser#while_statement.
AssignmentListener.prototype.enterWhile_statement = function(ctx) {
	s.push();
	console.log(ctx);
	
	var codeBlock = ctx.getChild(1).getChild(3);
	var expression = ctx.getChild(1).getChild(1).getText();
	console.log(expression);
	var hey = 0;
	/*var identifiers = getIdentifiers(expression);
	var identifiersInit = "";
	for(var i=0; i<identifiers.length;i++){
		identifiersInit = identifiersInit.concat("var " + identifiers[i] + "=" + s.get(identifiers[i]).getValue() + "; ");
	}
	console.log(codeBlock.getText());
	console.log(identifiersInit);
	var whileStmt = identifiersInit.concat("while("+expression+"){ctx.addChild(codeBlock); }");
	console.log(whileStmt);*/
	while(hey<10){
		console.log("heyo " + codeBlock.constructor.name);
		AssignmentListener.prototype.enterCode_block(codeBlock);
		hey++;
		console.log(evaluateBoolean(expression))
	}
	console.log(ctx);
	/*while(hey<5){
		this.visitTerminal(codeBlock);
		console.log(evaluateBoolean(expression));
		hey++;
	}*/

	//eval(whileStmt);
	//eval("var i=0; while(i<2){console.log('hey'); i++;}");

};

// Exit a parse tree produced by QwertyParser#while_statement.
AssignmentListener.prototype.exitWhile_statement = function(ctx) {
	s.pop();
};


// Enter a parse tree produced by QwertyParser#do_while_statement.
AssignmentListener.prototype.enterDo_while_statement = function(ctx) {
	s.push();
	console.log("dowhile");
	
	var codeBlock = ctx.code_block();
	var expression = ctx.conditional_factor().getText();
	console.log(expression);
	
	var identifiers = getIdentifiers(expression);
	var identifiersInit = "";
	for(var i=0; i<identifiers.length;i++){
		identifiersInit = identifiersInit.concat("var " + identifiers[i] + "=" + s.get(identifiers[i]).getValue() + "; ");
	}
	console.log(codeBlock.getText());
	console.log(identifiersInit);
	var doWhileStmt = identifiersInit.concat("do{ctx.addChild(codeBlock); }while("+expression+");");
	console.log(doWhileStmt);
	
	//eval(doWhileStmt);

	//eval("var i=0; do{console.log('hey'); i++;} while(i<2);");	

};

// Exit a parse tree produced by QwertyParser#do_while_statement.
AssignmentListener.prototype.exitDo_while_statement = function(ctx) {
	s.pop();
};


// Enter a parse tree produced by QwertyParser#for_statement.
AssignmentListener.prototype.enterFor_statement = function(ctx) {
	s.push();
	console.log(ctx);
	var assignBlock = ctx.getChild(6);
	var codeBlock = ctx.getChild(ctx.getChildCount() - 1);
	console.log(assignBlock.getText());
	// i = 0;
	var init = ctx.var_decl().var_identifier_list().getText();
	var expFirst = checkIfHasIdentifier(ctx.var_decl().getText());		
	var typeName = ctx.var_decl().data_type().getText();
	var varName = ctx.var_decl().var_identifier_list().getText().split("=")[0];
	var varValue = new QwertyValue(typeName, expFirst);

	// i<10;
	var exprSecond = ctx.bool_expression().getText();

	// i++;
	var exprThird = ctx.assignment_statement().getText();
	var incrementDecrement = exprThird.split(varName)[1];

	var forCon = "for(var " + init + ";" + exprSecond + "-1;" + exprThird + ") { ctx.addChild(assignBlock); ctx.addChild(codeBlock); }";
	eval(forCon);
	console.log(forCon);
};

// Exit a parse tree produced by QwertyParser#for_statement.
AssignmentListener.prototype.exitFor_statement = function(ctx) {
	s.pop();
};

//Exit a parse tree produced by QwertyParser#program.
AssignmentListener.prototype.exitProgram = function(ctx) {
	s.pop();
};

// Enter a parse tree produced by QwertyParser#scan_statement.
AssignmentListener.prototype.enterScan_statement = function(ctx) {
	var variable = ctx.VARIABLE_IDENTIFIER().getText();
	/*consoleBox.innerHTML += "<input type='text' id='" + variable + "' value='Patrick Gan'>";
	wait(7)*/
	var input = prompt("");
	inputVal = input;
	s.get(variable).setValue(inputVal);
};

// Exit a parse tree produced by QwertyParser#scan_statement.
AssignmentListener.prototype.exitScan_statement = function(ctx) {
	// s.get(variable).setValue();
/*	var variable = ctx.VARIABLE_IDENTIFIER().getText();
	var input = document.getElementById(variable).value;
	s.get(variable).setValue(input);*/
};

function checkIfPrintHasIdentifier(input){
	var printArgs = input.split("+");
	var expression;
	var printStmt = "";
	for(var i=0; i<printArgs.length; i++){
		
		expression = checkIfHasIdentifier(printArgs[i]);
		printStmt = printStmt.concat(expression);
	}
	//console.log("WWW" + printStmt);
	printStmt = printStmt.split('"').join("");
	
	return printStmt;
}
// Enter a parse tree produced by QwertyParser#print_statement.
AssignmentListener.prototype.enterPrint_statement = function(ctx) {
	//console.log(ctx);
	var statement = checkIfPrintHasIdentifier(ctx.expression().getText());
	console.log(statement);
	//var split = statement.split("+").join("").split('"').join("");
	//console.log(split);
	//consoleBox.innerHTML += split + "<br>";
};