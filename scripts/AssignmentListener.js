var antlr4 = require('antlr4/index');
var QwertyLexer = require('../generated-parser/QwertyLexer');
var QwertyParser = require('../generated-parser/QwertyParser');
var QwertyListener = require('../generated-parser/QwertyListener').QwertyListener;
var SymbolTable = require("/node_modules/symbol-table/stack");
var s = SymbolTable()
var QwertyValue = require('/scripts/QwertyValue');
var IdentifierHandler = require('/scripts/IdentifierHandler');

var identifierHandler = new IdentifierHandler();
var consoleBox = document.getElementById("consoleBox");

var lastPrint;

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
	console.log("VAR NAME" + varName);
	// variable value
	if(ctx.getChild(1).getChildCount() == 1){ // ex. int i;
		var varValue = new QwertyValue(typeName, "null");
	}
	else{	// ex. int i = 1;		
		var input = identifierHandler.convertVarToVal(ctx.var_identifier_list().getChild(1).getChild(1).getText(), s);	
		//console.log("input " + input);
		//console.log("typeofinput" + typeof(input));
		var varValue = new QwertyValue(typeName, input);
		/*if(!isValidAssignment(typeName, input)) {
			var errorHtml = "<tr><td>Type Check Error<td></td><td>" + varName + "</td><td>Change var type or change value.</td></tr>";
				consoleBox.innerHTML += errorHtml;
		}*/
	}
	
	if(s.has(varName)) {
		console.log("variable " + varName + " already in stack");
		var errorHtml = "<tr><td>Variable Already In Stack<td></td><td>" + varName + "</td><td>Change variable name.</td></tr>";
		consoleBox.innerHTML += errorHtml;
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
		var errorHtml = "<tr><td>Variable Already In Stack<td></td><td>" + varName + "</td><td>Change variable name.</td></tr>";
		consoleBox.innerHTML += errorHtml;
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
		if(s.get(varName).getDataType() == "constant") {
			console.log("ERROR! Cannot re-assign constant");
			var errorHtml = "<tr><td>Cannot change constant value<td></td><td>" + varName + "</td><td>Change constant to data type.</td></tr>";
			consoleBox.innerHTML += errorHtml;
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
			varValue = identifierHandler.convertVarToVal(varValue, s);
			//console.log(varValue);
			//varValue = rpn(yard(varValue));
			/*if(!isValidAssignment(s.get(varName).getDataType(), varValue)) {
				console.log("Type Checking Error for variable " + varName);
				var errorHtml = "<tr><td>Type Check Error<td></td><td>" + varName + "</td><td>Change var type or change value.</td></tr>";
				consoleBox.innerHTML += errorHtml;
			} else {
				s.get(varName).setValue(varValue);
			}*/

			//console.log("value and data type of " +varName+ ":" + s.get(varName).getValue() + " & " + typeof s.get(varName).getValue());
			if(height != varHeight){
				for(var i=0; i<heightDiff ;i++){
					s.push();
				}
			}
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
				if(exp[0] <= exp[1]) {
	    
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
				if(exp[0] >= exp[1]) {
	    
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
				if(exp[0] != exp[1]) {
	    
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
				console.log(ctx);
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

function execWhile(ctx){
	var codeBlock = ctx.conditional_block().statement();
	var expression = ctx.conditional_block().conditional_factor();
	var conditionalBlock = ctx.conditional_block();
	
	console.log(expression.getText());
	//ctx.removeLastChild();
	console.log(codeBlock);
	antlr4.tree.ParseTreeWalker.DEFAULT.exitRule(this, conditionalBlock);
	if(evaluateBoolean(expression.getText())){
		ctx.addChild(ctx);
		/*for(var i=0; i<codeBlock.length; i++){
			//console.log(codeBlock[i]);
			ctx.addChild(codeBlock[i]);	

			console.log("ey");
		}*/
		//ctx.addChild();	
	}else
		for(var i=0; i<ctx.getChildCount(); i++){
			ctx.removeLastChild();
		}

}
AssignmentListener.prototype.enterWhile_statement = function(ctx) {
	s.push();
	console.log(ctx);
	
	execWhile(ctx);
};

// Exit a parse tree produced by QwertyParser#while_statement.
AssignmentListener.prototype.exitWhile_statement = function(ctx) {
	s.pop();
};


// Enter a parse tree produced by QwertyParser#do_while_statement.
AssignmentListener.prototype.enterDo_while_statement = function(ctx) {
	s.push();
	//console.log("dowhile");
	console.log(ctx);
	var codeBlock = ctx.code_block();
	var expression = ctx.conditional_factor().getText();
	console.log(evaluateBoolean(expression));
	
	if(evaluateBoolean(expression)){
		console.log("ey1");

		//ctx.removeLastChild()
		//console.log(ctx);
		ctx.addChild(codeBlock);	

		ctx.addChild(ctx);
		//ctr++;

		//ctx.addChild(codeBlock);
	}else{
		console.log("ey");

		for(var i=0; i<ctx.getChildCount(); i++){
			ctx.removeLastChild();
		}
	}	

};

// Exit a parse tree produced by QwertyParser#do_while_statement.
AssignmentListener.prototype.exitDo_while_statement = function(ctx) {
	s.pop();
};


function forSecondExpression(input) {
  var varName = input.split("")[input.length-1];
  
  var newString = input.split(varName)[0];
  
  if(typeof(s.get(varName)) == "object") {
      varName = s.get(varName).getValue();
  }
  
  return newString + varName;
   
}

// Enter a parse tree produced by QwertyParser#for_statement.
AssignmentListener.prototype.enterFor_statement = function(ctx) {
	s.push();
	console.log(ctx);
	var assignBlock = ctx.getChild(6);
	var codeBlock = ctx.getChild(ctx.getChildCount() - 1);
	console.log(assignBlock.getText());
	// i = 0;
	var init = ctx.var_decl().var_identifier_list().getText();
	var expFirst = identifierHandler.convertVarToVal(ctx.var_decl().getText(), 1);		
	var typeName = ctx.var_decl().data_type().getText();
	var varName = ctx.var_decl().var_identifier_list().getText().split("=")[0];
	var varValue = new QwertyValue(typeName, expFirst);

	// i<10;
	var exprSecond = forSecondExpression(ctx.bool_expression().getText());
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
	//console.log(ctx);
	var variable = ctx.VARIABLE_IDENTIFIER().getText();
	var message = ctx.STRING_LITERAL().getText();
	//console.log(variable);
	//console.log(message);
	message = message.split('"').join("");
	/*consoleBox.innerHTML += "<input type='text' id='" + variable + "' value='Patrick Gan'>";
	wait(7)*/
	var input = prompt(message);
	
	inputVal = identifierHandler.convertVarToVal(input, s);
	//console.log("TYPE: " + typeof(inputVal));
	s.get(variable).setValue(inputVal);
};

// Exit a parse tree produced by QwertyParser#scan_statement.
AssignmentListener.prototype.exitScan_statement = function(ctx) {
	// s.get(variable).setValue();
/*	var variable = ctx.VARIABLE_IDENTIFIER().getText();
	var input = document.getElementById(variable).value;
	s.get(variable).setValue(input);*/
};


// Enter a parse tree produced by QwertyParser#print_statement.
AssignmentListener.prototype.enterPrint_statement = function(ctx) {
	//console.log(ctx);
	/*var stringExpCtx = ctx.expression();
	do{
		console.log(stringExpCtx);

		console.log(stringExpCtx.getChildCount());
		if(stringExpCtx.getChildCount()>1){
			console.log("A");
			console.log(stringExpCtx.string_expression());

			stringExpCtx = stringExpCtx.string_expression()[1];
		}
		else{
			console.log("eyaa");
			stringExpCtx = stringExpCtx.string_expression();
		}
		console.log("ey" +stringExpCtx.getText());
	}while(stringExpCtx != null)*/
	
	
	var statement = identifierHandler.evaluatePrintExpression(ctx.expression().getText(), s);
	var split = statement.split("+").join("").split('"').join("");
	lastPrint = split;
	//console.log(split);
	var errorHtml = "<tr><td>(NOT ERROR) Print<td></td><td></td><td>" + split + "</td></tr>";
	consoleBox.innerHTML += errorHtml;
};