var antlr4 = require('antlr4/index');
var QwertyLexer = require('../generated-parser/QwertyLexer');
var QwertyParser = require('../generated-parser/QwertyParser');
var QwertyListener = require('../generated-parser/QwertyListener').QwertyListener;
var SymbolTable = require("/node_modules/symbol-table/stack");
var s = SymbolTable();
var functionTable = SymbolTable();
var QwertyValue = require('/scripts/QwertyValue');
var QwertyFunction	 = require('/scripts/QwertyFunction');

var IdentifierHandler = require('/scripts/IdentifierHandler');

var identifierHandler = new IdentifierHandler();
var consoleBox = document.getElementById("consoleBox");

var lastPrint;

AssignmentListener = function(res) {
	this.Res = res;
    QwertyListener.call(this);
    return this;
};
var assignmentListener = new AssignmentListener();

// inherit default listener
AssignmentListener.prototype = Object.create(QwertyListener.prototype);
AssignmentListener.prototype.constructor = AssignmentListener;

exports.AssignmentListener = AssignmentListener;

// Enter a parse tree produced by QwertyParser#program.
AssignmentListener.prototype.enterProgram = function(ctx) {
	s.push();
	functionTable.push();
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
		var input = identifierHandler.convertVarToVal(ctx.var_identifier_list().getChild(1).getChild(1).getText(), s, functionTable);	
		var varValue = new QwertyValue(typeName, input);
	}
	
	if(s.has(varName)) {
		console.log("variable " + varName + " already in stack");
		var errorHtml = "<tr><td>Variable Already In Stack<td></td><td>" + varName + "</td><td>Change variable name.</td></tr>";
		consoleBox.innerHTML += errorHtml;
	} else {		
		s.set(varName, varValue);
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
	console.log(ctx);
	var varName = ctx.VARIABLE_IDENTIFIER().getText();
	var varValue;
	var heightDiff;
	var height;
	var varHeight;
	var funcCalls;
	
	if(ctx.assignment_factor() != null) {
		funcCalls = ctx.assignment_factor().expression().var_func_expression();
		console.log(funcCalls);
	}

	//Code below yung pangkuha ng context
	//funcCall = ctx.assignment_factor().expression().var_func_expression().var_func_factor().funccall_statement();
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
			
			//loop thru lahat ng funcCall context tapos walk
			if(funcCalls != null){
				if(funcCalls.length > 0)
					for(var i=0; i<funcCalls.length;i++){
						antlr4.tree.ParseTreeWalker.DEFAULT.walk(this, funcCalls[i]);
					}
				else{
					console.log(funcCalls.var_func_factor().funccall_statement());
					antlr4.tree.ParseTreeWalker.DEFAULT.walk(this, funcCalls.var_func_factor().funccall_statement());
				}
			}
			
			varValue = identifierHandler.convertVarToVal(varValue, s, functionTable);
			
			s.get(varName).setValue(varValue);
			
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

		}
	}
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
	console.log("exp[0]" + exp[0] + " exp[1]" + exp[1])
	return true;
};

var temporaryIfCodeBlocks;
var temporaryIfConditions;
// Enter a parse tree produced by QwertyParser#if_statement.
AssignmentListener.prototype.enterIf_statement = function(ctx) {
	s.push();
	var ctxChildCount = ctx.getChildCount();

	var codeBlocks = ctx.code_block();
	var conditions = ctx.conditional_factor();
	var hasTrue = false;
	
	if(codeBlocks.length>0){
		temporaryIfCodeBlocks = codeBlocks;
		temporaryIfConditions = conditions;
	}
	else{
		codeBlocks = temporaryIfCodeBlocks;
		conditions = temporaryIfConditions;
	}	
	
	for(var i=0; i<ctxChildCount;i++){
		ctx.removeLastChild();
	}
	
	for(var i=0; i<conditions.length;i++){
		if(evaluateBoolean(conditions[i].getText())){
			antlr4.tree.ParseTreeWalker.DEFAULT.walk(this, codeBlocks[i]);
			
			hasTrue = true;
			break;
		}
	}
	
	if(codeBlocks.length != conditions.length && !hasTrue){
		antlr4.tree.ParseTreeWalker.DEFAULT.walk(this, codeBlocks[codeBlocks.length-1]);
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

var temporaryWhileCodeBlock;
var temporaryExpression;
var holdCtx;

AssignmentListener.prototype.enterWhile_statement = function(ctx) {
	s.push();
	holdCtx = ctx;


	var codeBlock = ctx.code_block();
	var expression = ctx.conditional_factor().getText();

	if(codeBlock!=null){
		temporaryWhileCodeBlock = codeBlock;
	}
	else{
		codeBlock = temporaryWhileCodeBlock;
	}	
	console.log(codeBlock);
	console.log("Expression: " + expression);

	if(expression!=null){
		temporaryExpression = expression;
	}else{
		expression = temporaryExpression;
	}
	ctx.removeLastChild();

	while(evaluateBoolean(expression)){
		antlr4.tree.ParseTreeWalker.DEFAULT.walk(this, codeBlock);
	}
};

// Exit a parse tree produced by QwertyParser#while_statement.
AssignmentListener.prototype.exitWhile_statement = function(ctx) {
	s.pop();
};


// Enter a parse tree produced by QwertyParser#do_while_statement.
AssignmentListener.prototype.enterDo_while_statement = function(ctx) {
	s.push();
	//console.log("dowhile");
	var codeBlock = ctx.code_block();
	var codeBlockHolder = ctx.code_block();
	var expression = ctx.conditional_factor().getText();
	console.log(evaluateBoolean(expression));
	
	var childCount = ctx.getChildCount();
	
	for(var i=0; i<childCount; i++){
		ctx.removeLastChild();
	}			
	
	antlr4.tree.ParseTreeWalker.DEFAULT.walk(this, codeBlock);
	codeBlock = codeBlockHolder;

	while(evaluateBoolean(expression)){
		console.log("ey1");
		codeBlock = codeBlockHolder;

		antlr4.tree.ParseTreeWalker.DEFAULT.walk(this, codeBlock);
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



var tempAssignBlock;
var tempCodeBlock;
var tempCondition;
var tempInit;


// Enter a parse tree produced by QwertyParser#for_statement.
AssignmentListener.prototype.enterFor_statement = function(ctx) {
	// i = 0;
	var declBlock = ctx.var_decl();
	if(declBlock!=null){
		tempInit = declBlock;
	}else{
		declBlock = tempInit;
	}
	antlr4.tree.ParseTreeWalker.DEFAULT.walk(this, declBlock);
	

	// i++;
	var assignBlock = ctx.assignment_statement();
	if(assignBlock!=null){
		tempAssignBlock = assignBlock;
	}else{
		assignBlock = tempAssignBlock;
	}

	// code inside loop
	var boolBlock = ctx.bool_expression();
	if(boolBlock!=null){
		tempCondition = boolBlock;
	}else{
		boolBlock = tempCondition;
	}

	// code inside loop
	var codeBlock = ctx.code_block();
	if(codeBlock!=null){
		tempCodeBlock = codeBlock;
	}else{
		codeBlock = tempCodeBlock;
	}

	var childCount = ctx.getChildCount();
	for(var i=0; i<childCount; i++){
		ctx.removeLastChild();
	}	

	while(evaluateBoolean(boolBlock.getText())){
		antlr4.tree.ParseTreeWalker.DEFAULT.walk(this, codeBlock);
		antlr4.tree.ParseTreeWalker.DEFAULT.walk(this, assignBlock);
	}

	var unsetThisNow = declBlock.var_identifier_list().VARIABLE_IDENTIFIER().getText();
	s.unset(unsetThisNow);
};

// Exit a parse tree produced by QwertyParser#for_statement.
AssignmentListener.prototype.exitFor_statement = function(ctx) {
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
	
	inputVal = identifierHandler.convertVarToVal(input, s, functionTable);
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
	var statement = identifierHandler.evaluatePrintExpression(ctx.expression().getText(), s, functionTable);
	var split = statement.split("+").join("").split('"').join("");
	lastPrint = split;
	//console.log(split);
	console.log("enter print " + split);

	var errorHtml = "<tr><td>(NOT ERROR) Print<td></td><td></td><td>" + split + "</td></tr>";
	consoleBox.innerHTML += errorHtml;
};

function compareParameters(param1, param2){
	// param 1 = the parameters of the function
	// param 2 = the parameters given during the function call

	var param1List;
	var param1Count;
	var param2List;
	var param2Count;
	var listFuncTypes = [];
	var listParam1Variables = [];
	var listParam2Arguments = [];
	var current_param;
	var hasNull = false;
	var value;
	
	if(param1 == null){
		console.log("param1 is null");		
	 	hasNull = true;
	}else{	 	
		listFuncTypes = param1.data_type();
		listParam1Variables = param1.VARIABLE_IDENTIFIER();
		
		//console.log("param1Types" +listFuncTypes.toString());
		//console.log("param1Vars" +listParam1Variables.toString());

	}
	
	if(param2 == null){
		console.log("param2 is null");
	 	hasNull = true;
	}else{
		listParam2Arguments = param2.getText().split(",");
	//	console.log("param2" + listParam2Arguments);
	}
	console.log(listParam2Arguments);
	for(var i=0; i<listParam2Arguments.length; i++){
		listParam2Arguments[i] = identifierHandler.convertVarToVal(listParam2Arguments[i].toString(), s, functionTable);
	}
	
	if(hasNull){
	 	if(param1 == null && param2 == null){
	 		console.log("execute");
	 		return true;
	 	}else{
	 		var errorHtml = "<tr><td>Number of parameters don't match!<td></td><td></td><td>Add/subtract parameters.</td></tr>";
			consoleBox.innerHTML += errorHtml;
			return false;
	 	}			
	 }else if(listParam1Variables.length != listParam2Arguments.length){
		 var errorHtml = "<tr><td>Number of parameters don't match!<td></td><td></td><td>Add/subtract parameters.</td></tr>";
			consoleBox.innerHTML += errorHtml;
			return false;
	 }else{
		for(var i=0; i<listParam1Variables.length; i++){
		//	console.log(listParam1Variables[i] + " = " + listParam2Arguments[i]);
			value = identifierHandler.convertVarToVal(listParam2Arguments[i], s, functionTable);
			s.get(listParam1Variables[i]).setValue(value);
		}
	 	console.log("execute"); 
	 	return true;
	 }

	return true;

	
};

//Enter a parse tree produced by QwertyParser#funccall_statement.
AssignmentListener.prototype.enterFunccall_statement = function(ctx) {
	s.push();
	console.log("enterfunccall")
	
	var functionName = ctx.FUNCTION_IDENTIFIER().getText();
	var isValidParams;
	var calledFunction = functionTable.get(functionName);
	var funcCallParams;
	
	if(ctx.actual_parameter_list()!=null){
		funcCallParams = ctx.actual_parameter_list().actual_params();
	}
	
	if(calledFunction.getParameter()!=null){
		console.log("EY");

		antlr4.tree.ParseTreeWalker.DEFAULT.walk(this, calledFunction.getParameter());
		console.log("EY2");

		isValidParams = compareParameters(calledFunction.getParameter(), funcCallParams)
		console.log("after");
	} else
		isValidParams = compareParameters(null, funcCallParams)
		
	if(isValidParams){
		if(calledFunction.getDataType() == "void")
			antlr4.tree.ParseTreeWalker.DEFAULT.walk(this, calledFunction.getCodeBlock());

	}
	
	console.log("RETURN VALUE OF " + functionName + " is " + calledFunction.getReturnValue());
};

//Enter a parse tree produced by QwertyParser#parameters.
AssignmentListener.prototype.enterParameters = function(ctx) {
	var listDataTypes = ctx.data_type();
	var listVariables = ctx.VARIABLE_IDENTIFIER();
	var varValue;
	var dataType;
	var varName;
	for(var i=0; i<listDataTypes.length; i++){
		dataType = listDataTypes[i].getText();
		varName = listVariables[i].getText();
		
		varValue = new QwertyValue(dataType, "null");

		s.set(varName, varValue);
	}	
};


//Enter a parse tree produced by QwertyParser#return_statement.
AssignmentListener.prototype.enterReturn_statement = function(ctx) {
	//console.log(ctx);
	console.log("ENTER RETURN");
	var returnValue = ctx.getChild(1).getText();
	var functionParent = ctx.parentCtx.parentCtx.parentCtx.parentCtx;
	
	var functionDataType = functionParent.getChild(0).getText();
	var functionName = functionParent.FUNCTION_IDENTIFIER().getText();

	var returnDataType;
	//returnValue = identifierHandler.convertVarToVal(returnValue, s);
	if(functionDataType.includes("void")){
		console.log("Remove return statement");
	}else{
		if(s.has(returnValue)){
			returnDataType = s.get(returnValue).getDataType();
			returnValue = identifierHandler.convertVarToVal(returnValue, s, functionTable);

		}else{
			returnValue = identifierHandler.convertVarToVal(returnValue, s, functionTable);
			if(typeof returnValue == "number"){
				if(returnValue.toString().includes("."))
					returnDataType = "float";
				else
					returnDataType = "int";
			}else if(typeof returnValue == "object"){
				if(!returnValue){
					console.log("EY");
					returnDataType = functionDataType;
				}
				else
					returnDataType = "boolean";
			}else
				returnDataType = "string"
		}
		if(functionDataType.includes(returnDataType)){
			functionTable.get(functionName).setReturnValue(returnValue);
			console.log("return accepted");
		}else
			console.log("Return data type mismatch!");		
	}
};

//Exit a parse tree produced by QwertyParser#funccall_statement.
AssignmentListener.prototype.exitFunccall_statement = function(ctx) {
	s.pop();
};

//Enter a parse tree produced by QwertyParser#function_declaration.
AssignmentListener.prototype.enterFunction_declaration = function(ctx) {
	
	var dataType = ctx.getChild(0).getChild(0).getText();
	var functionName = ctx.getChild(0).getChild(1).getText();
	var parameters = ctx.getChild(0).function_block().parameters();
	var functionCodeBlock = ctx.getChild(0).function_block().code_block();
	
	ctx.removeLastChild();
	ctx.removeLastChild();


	//console.log(functionName);
	//console.log("YEEEWW" +parameters.VARIABLE_IDENTIFIER().getText());
	functionTable.set(functionName, new QwertyFunction(dataType, parameters, functionCodeBlock))
};

// Exit a parse tree produced by QwertyParser#function_declaration.
AssignmentListener.prototype.exitFunction_declaration = function(ctx) {
};


// Enter a parse tree produced by QwertyParser#arr_decl.
AssignmentListener.prototype.enterArr_decl = function(ctx) {
	var dataType = ctx.data_type().getText();
	var varName
	var size;

	if(ctx.INTEGER_LITERAL() != null) {
		varName = ctx.VARIABLE_IDENTIFIER()[0].getText();
		size = ctx.INTEGER_LITERAL().getText();
	}
	else {
		varName = ctx.VARIABLE_IDENTIFIER()[1].getText();
		var temp = s.get(ctx.VARIABLE_IDENTIFIER()[0].getText());
		if(temp.getDataType() == "int")
			size = temp.getValue();
		else
			console.log("Error in array index! Invalid data type!");
	}

	// create a new array of size -- 
	var arr = new Array(parseInt(size));
	console.log(arr.length);

	var varValue = new QwertyValue(dataType, arr);
	s.set(varName, varValue);
};

// Enter a parse tree produced by QwertyParser#arr_assignment.
AssignmentListener.prototype.enterArr_assignment = function(ctx) {
	// 0 will ALWAYS be varName then 1 could be either the index or whatever
	var varName = ctx.VARIABLE_IDENTIFIER()[0].getText();
	var indexVal;

	if(ctx.INTEGER_LITERAL() != null)
		indexVal = ctx.INTEGER_LITERAL().getText();
	else {
		var temp = s.get(ctx.VARIABLE_IDENTIFIER()[1].getText());
		if(temp.getDataType() == "int")
			indexVal = temp.getValue();
		else
			console.log("Error in array index! Invalid data type!");
	}

	var toBeAssigned = identifierHandler.convertVarToVal(ctx.var_assignment_statement().assignment_factor().getText(), s, functionTable);

	if(parseInt(indexVal) >= s.get(varName).getValue().length) {
		console.log("Array index out of bounds!");
	} else {
		var getArr = s.get(varName).getValue();
		getArr[parseInt(indexVal)] = toBeAssigned;
		s.get(varName).setValue(getArr);
	}
};

// Enter a parse tree produced by QwertyParser#arr_expression.
AssignmentListener.prototype.enterArr_expression = function(ctx) {
};