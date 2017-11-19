var antlr4 = require('antlr4/index');
var QwertyLexer = require('../generated-parser/QwertyLexer');
var QwertyParser = require('../generated-parser/QwertyParser');
var QwertyListener = require('../generated-parser/QwertyListener').QwertyListener;
var SymbolTable = require("/node_modules/symbol-table/stack");
var s = SymbolTable()
var QwertyValue = require('/scripts/QwertyValue');
var consoleBox = document.getElementById("consoleBox");


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
    	tokenList.push(token);

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
    	}
    	if(type.includes("INTEGER_LITERAL")){
    		hasIntegerLiteral = true;
    	}
    }  

    ////console.log(tokenList.length + ' = ' + (tokens.getNumberOfOnChannelTokens() - 1));
    ////console.log("yard " + yard(input, tokenList));
   //// console.log("rpn " + rpn(yard(input, tokenList)));
    if(hasIntegerLiteral) 
    	return rpn(yard(input, tokenList)); 
    else 
    	return input;	
}
let yard = (infix, tokenList) => {
	  let ops = {'+': 1, '-': 1, '*': 2, '/': 2};
	  let peek = (a) => a[a.length - 1];
	  let stack = [];
	  let output = [];
	  let token;
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
	}
	
	if(s.has(varName)) {
		//console.log("variable " + varName + " already in stack");
	} else {		
		s.set(varName, varValue);
		//console.log("value and data type of " +varName+ ":" + s.get(varName).getValue() + " & " + typeof s.get(varName).getValue());
	}
};

// Enter a parse tree produced by QwertyParser#assignment_statement.
QwertyListener.prototype.enterAssignment_statement = function(ctx) {
	
	var varName = ctx.getChild(0).getText();
	var varValue;
	var heightDiff;
	var height;
	var varHeight;
	if(!s.has(varName)) {
		//console.log("variable " + varName + " NOT in stack!");
	}else{
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
			//console.log(ctx.getChild(2));
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
	}
};

//Enter a parse tree produced by QwertyParser#var_assignment_statement
QwertyListener.prototype.enterVar_assignment_statement = function(ctx) {

};


//Enter a parse tree produced by QwertyParser#assignment_statement.
QwertyListener.prototype.enterAssignment_factor = function(ctx) {
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
				if(s.get(exp[0]).getValue() <= exp[1]) {
	    
				} else {
				    return false;
				}
			} else if(poe.split("").includes(">")) {
				// >=
				var exp = arr[i].split(">=");
				if(s.get(exp[0]).getValue() >= exp[1]) {
	    
				} else {
				    return false;
				}
			} else {
				var exp = arr[i].split("==");
			    if(s.get(exp[0]).getValue() == exp[1]) {
			     
			    } else {
			        return false;
			    }
			}	
		} else if(poe.split("").includes("<")) {
			// <
			var exp = arr[i].split("<");
			console.log(s.get(exp[0]).getValue() + " AND " + exp[1]);
		    if(s.get(exp[0]).getValue() < (parseInt(exp[1])) - 1) {
		     
		    } else {
		        return false;
		    }
		} else if(poe.split("").includes(">")) {
			// >
			var exp = arr[i].split(">");
			console.log(s.get(exp[0]).getValue() + " AND " + exp[1]);
		    if(s.get(exp[0]).getValue() > (parseInt(exp[1])) + 1) {
		     
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

// Enter a parse tree produced by QwertyParser#while_statement.
AssignmentListener.prototype.enterWhile_statement = function(ctx) {
	s.push();
};

// Exit a parse tree produced by QwertyParser#while_statement.
AssignmentListener.prototype.exitWhile_statement = function(ctx) {
	s.pop();
};


// Enter a parse tree produced by QwertyParser#do_while_statement.
AssignmentListener.prototype.enterDo_while_statement = function(ctx) {
	s.push();
};

// Exit a parse tree produced by QwertyParser#do_while_statement.
AssignmentListener.prototype.exitDo_while_statement = function(ctx) {
	s.pop();
};


// Enter a parse tree produced by QwertyParser#for_statement.
AssignmentListener.prototype.enterFor_statement = function(ctx) {
	s.push();
	var assignBlock = ctx.getChild(6);
	var codeBlock = ctx.getChild(ctx.getChildCount() - 1);

	// i = 0;
	var init = ctx.var_decl().var_identifier_list().getText();
	var expFirst = checkIfHasIdentifier(ctx.var_decl().getText());		
	var typeName = ctx.var_decl().data_type().getText();
	var varName = ctx.var_decl().var_identifier_list().getText().split("=")[0];
	var varValue = new QwertyValue(typeName, expFirst);
	s.set(varName, varValue);

	// i<10;
	var exprSecond = ctx.bool_expression().getText();

	// i++;
	var exprThird = ctx.assignment_statement().getText();
	var incrementDecrement = exprThird.split(varName)[1];

	var forCon = "for(var " + init + ";" + exprSecond + ";" + exprThird + ") { ctx.addChild(assignBlock); ctx.addChild(codeBlock); }";

	eval(forCon);
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
	console.log(ctx);
	var variable = ctx.VARIABLE_IDENTIFIER().getText();
	consoleBox.innerHTML += "<input type='text' id='" + variable + "' value='Patrick Gan'>";
};

// Exit a parse tree produced by QwertyParser#scan_statement.
AssignmentListener.prototype.exitScan_statement = function(ctx) {
	// s.get(variable).setValue();
	var variable = ctx.VARIABLE_IDENTIFIER().getText();
	var input = document.getElementById(variable).value;
	s.get(variable).setValue(input);
};

// Enter a parse tree produced by QwertyParser#print_statement.
AssignmentListener.prototype.enterPrint_statement = function(ctx) {
	var statement = checkIfHasIdentifier(ctx.expression().getText());
	console.log(statement);	
};