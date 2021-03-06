var antlr4 = require('antlr4/index');
var QwertyLexer = require('/generated-parser/QwertyLexer');
var QwertyParser = require('/generated-parser/QwertyParser');
var QwertyListener = require('/generated-parser/QwertyListener').QwertyListener;
var SymbolTable = require("/node_modules/symbol-table/stack");
var s = SymbolTable();
var functionTable = SymbolTable();
var QwertyValue = require('/scripts/QwertyValue');
var QwertyFunction	 = require('/scripts/QwertyFunction');

var IdentifierHandler = require('/scripts/IdentifierHandler');

var identifierHandler = new IdentifierHandler();
var consoleBox = document.getElementById("consoleBox");

var lastPrint;
var hasExecute = true;

var chars = new antlr4.InputStream("");
var lexer = new QwertyLexer.QwertyLexer(chars);
var tokens  = new antlr4.CommonTokenStream(lexer);
var parser = new QwertyParser.QwertyParser(tokens);

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
		var varValue = new QwertyValue(typeName, "null", ctx);
	}
	else{	// ex. int i = 1;	
		var input = identifierHandler.convertVarToVal(ctx.var_identifier_list().getChild(1).getChild(1).getText(), s, functionTable, ctx);	
		var varValue = new QwertyValue(typeName, input, ctx);
	}
	
	if(s.has(varName)) {
		parser.notifyErrorListeners("Variable " + varName + " is already declared. Change variable name.", ctx.start);

		
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
			
	var varValue = new QwertyValue(typeName, value, ctx);
	
	if(s.has(varName)) {
		parser.notifyErrorListeners("Variable " + varName + " is already declared. Change variable name.", ctx.start);

		
	} else {		
		s.set(varName, varValue);
		////console.log("value and data type of " +varName+ ":" + s.get(varName).getValue() + " & " + typeof s.get(varName).getValue());
	}
};

// Enter a parse tree produced by QwertyParser#assignment_statement.
AssignmentListener.prototype.enterAssignment_statement = function(ctx) {
	// var input = ctx.assignment_factor().getText();
	//console.log(ctx);
	var varName = ctx.VARIABLE_IDENTIFIER().getText();
	var varValue;
	var heightDiff;
	var height;
	var varHeight;
	var funcCalls;

	var hasFunctions = false;
	
	if(ctx.assignment_factor() != null) {
		if(ctx.assignment_factor().expression().var_func_expression().length > 0) {
			funcCalls = ctx.assignment_factor().expression().var_func_expression();
			hasFunctions = true;
		}
	}

	//Code below yung pangkuha ng context
	//funcCall = ctx.assignment_factor().expression().var_func_expression().var_func_factor().funccall_statement();
	if(!s.has(varName)) {
		parser.notifyErrorListeners("variable " + varName + " NOT yet declared!", ctx.start);
	}else{
		if(s.get(varName).getDataType() == "constant") {
			parser.notifyErrorListeners("ERROR! Cannot re-assign constant. Change constant to data type", ctx.start);

			
		} else {
			height = s.height();
			varHeight = s.getItsHeight(varName);
			
			if(height != varHeight){
				heightDiff = height - varHeight;
				for(var i=0; i<heightDiff ;i++){
					s.pop();
				}
			}
			//////console.log(ctx.getChild(ctx.getChildCount()-1).getRuleIndex() +" aaaa");
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
			if(hasFunctions) {
				if(funcCalls != null){
				 	if(funcCalls.length > 0)
				 		for(var i=0; i<funcCalls.length;i++){
				 			console.log("walking funcCall["+i+"]");
				 			console.log(funcCalls[i]);
				 			antlr4.tree.ParseTreeWalker.DEFAULT.walk(this, funcCalls[i]);
				 			hasExecute = false;
				 		}
				 	else{
			 			console.log("walking funcCalls");
				 		//console.log(funcCalls.var_func_factor().funccall_statement());
				 		antlr4.tree.ParseTreeWalker.DEFAULT.walk(this, funcCalls.var_func_factor().funccall_statement());
				 		hasExecute = false;
				 	}
				 }
			}
			 
			
			varValue = identifierHandler.convertVarToVal(varValue, s, functionTable, ctx);

			s.get(varName).setValue(varValue, ctx);
			
			
			
			////console.log(varValue);
			//varValue = rpn(yard(varValue));
			/*if(!isValidAssignment(s.get(varName).getDataType(), varValue)) {
				//console.log("Type Checking Error for variable " + varName);

				
			} else {
				s.get(varName).setValue(varValue);
			}*/

			////console.log("value and data type of " +varName+ ":" + s.get(varName).getValue() + " & " + typeof s.get(varName).getValue());

		}
	}
};

function evaluateBoolean(input, ctx) {
	//console.log("IF CHECK " + input);
	var hasAnd = false;
	var hasOr = false;
	var arr;
	var len = 1; 
	arr = [input];
	
	if(input.split("").includes("&")) {
	  arr = input.split("&&");
	  hasAnd = true;
	}

	if(input.split("").includes("@")) {
	  arr = input.split("@@");
	  //console.log(arr);
	  hasOr = true;
	} 
	  

	console.log("CHECKME " + hasOr);  
	for(var i=0; i<arr.length; i++) {
		var poe = arr[i];
		if(poe.split("").includes("=")) {
			if(poe.split("").includes("<")) {
				// <=
				var exp = arr[i].split("<=");
				exp[0] = parseInt(identifierHandler.convertVarToVal(exp[0], s, functionTable, ctx));
				exp[1] = parseInt(identifierHandler.convertVarToVal(exp[1], s, functionTable, ctx));
				if(exp[0] <= exp[1]) {
		    		if(hasOr) {
		    			return true;
		    		}
				} else {
				    if(hasOr && len < arr.length) {
			    		len++
			    	} else {
			    		return false;
			    	}
				}
			} else if(poe.split("").includes(">")) {
				// >=
				var exp = arr[i].split(">=");
				exp[0] = parseInt(identifierHandler.convertVarToVal(exp[0], s, functionTable, ctx));
				exp[1] = parseInt(identifierHandler.convertVarToVal(exp[1], s, functionTable, ctx));
				
				if(exp[0] >= exp[1]) {
	    			if(hasOr) {
		    			return true;
		    		}
				} else {
				    if(hasOr && len < arr.length) {
		    			len++
			    	} else {
			    		return false;
			    	}
				}
			} else if(poe.split("").includes("!")) {
				// !=
				var exp = arr[i].split("!=");
				exp[0] = parseInt(identifierHandler.convertVarToVal(exp[0], s, functionTable, ctx));
				exp[1] = parseInt(identifierHandler.convertVarToVal(exp[1], s, functionTable, ctx));


				if(exp[0] != exp[1]) {
	    			if(hasOr) {
		    			return true;
		    		}
				} else {
				    if(hasOr && len < arr.length) {
		    			len++
			    	} else {
			    		return false;
			    	}
				}
			}else {
				var exp = arr[i].split("==");

				console.log("COMPARING " + isNaN(exp[0]) + " AND " + isNaN(exp[1]));

				if(!isNaN(exp[0])) {
					exp[0] = parseInt(identifierHandler.convertVarToVal(exp[0], s, functionTable, ctx));
				} else {
					exp[0] = identifierHandler.convertVarToVal(exp[0], s, functionTable, ctx);
				}

				if(!isNaN(exp[1])) {
					exp[1] = parseInt(identifierHandler.convertVarToVal(exp[1], s, functionTable, ctx));
				} else {
					exp[1] = identifierHandler.convertVarToVal(exp[1], s, functionTable, ctx);
				}

				console.log("COMPARING " + exp[0] + " AND " + exp[1]);

			    if(exp[0] == exp[1]) {
			     	if(hasOr) {
		    			return true;
		    		}
			    } else {
			        if(hasOr && len < arr.length) {
			    		len++
			    	} else {
			    		return false;
			    	}
			    }
			}	
		} else if(poe.split("").includes("<")) {
			// <
			var exp = arr[i].split("<");
			exp[0] = parseInt(identifierHandler.convertVarToVal(exp[0], s, functionTable, ctx));
			exp[1] = parseInt(identifierHandler.convertVarToVal(exp[1], s, functionTable, ctx));

		    if(exp[0] < exp[1]) {
		    	if(hasOr) {
		    			return true; 
		    		}
		    } else {
		        if(hasOr && len < arr.length) {
		    		len++
		    	} else {
		    		return false;
		    	}
		    }
		} else if(poe.split("").includes(">")) {
			// >
			console.log(">>>>>>>>>>>>>>")
			var exp = arr[i].split(">");
			exp[0] = parseInt(identifierHandler.convertVarToVal(exp[0], s, functionTable, ctx));
			exp[1] = parseInt(identifierHandler.convertVarToVal(exp[1], s, functionTable, ctx));

			console.log("COMPARING " + exp[0] + " AND " + exp[1]);
			// console.log("COMPARING " + (exp[0] > exp[1]));
		    if(exp[0] > exp[1]) {
		    	console.log("COMPARING IT IS GREATER THAN!");
		    	if(hasOr) {
		    		return true;
		    	}
		    } else {
		    	console.log("COMPARING IT IS NOT!!!! GREATER THAN!");
		    	if(hasOr && len < arr.length) {
		    		len++
		    	} else {
		    		return false;
		    	}
		    }
		}
	}
	//console.log("exp[0]" + exp[0] + " exp[1]" + exp[1])
	return true;
};

var temporaryIfCodeBlocks;
var temporaryIfConditions;
// Enter a parse tree produced by QwertyParser#if_statement.
AssignmentListener.prototype.enterIf_statement = function(ctx) {

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
		if(evaluateBoolean(conditions[i].getText(), ctx)){
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

};

//Enter a parse tree produced by QwertyParser#code_block.
AssignmentListener.prototype.enterCode_block = function(ctx) {
	////console.log("CODE BLOC");
};

var temporaryWhileCodeBlock;
var temporaryExpression;
var holdCtx;

AssignmentListener.prototype.enterWhile_statement = function(ctx) {
	holdCtx = ctx;

	var codeBlock;
	if(ctx.code_block()!=null){
		codeBlock = ctx.code_block()
		temporaryWhileCodeBlock = codeBlock;
	}
	else{
		codeBlock = temporaryWhileCodeBlock;
	}	

	var expression;
	if(ctx.conditional_factor()!=null){
		expression = ctx.conditional_factor().getText()
		temporaryExpression = expression;
		//console.log(temporaryExpression);
	}else{
		expression = temporaryExpression;
		//console.log(expression);
	}

	ctx.removeLastChild();

	while(evaluateBoolean(expression,ctx)){
		//console.log("COMPARING RESULT = " + evaluateBoolean(expression));
		antlr4.tree.ParseTreeWalker.DEFAULT.walk(this, codeBlock);
	}
};

// Exit a parse tree produced by QwertyParser#while_statement.
AssignmentListener.prototype.exitWhile_statement = function(ctx) {
};


// Enter a parse tree produced by QwertyParser#do_while_statement.
AssignmentListener.prototype.enterDo_while_statement = function(ctx) {
	s.push();
	////console.log("dowhile");
	var codeBlock = ctx.code_block();
	var codeBlockHolder = ctx.code_block();
	var expression = ctx.conditional_factor().getText();
	//console.log(evaluateBoolean(expression));
	
	var childCount = ctx.getChildCount();
	
	for(var i=0; i<childCount; i++){
		ctx.removeLastChild();
	}			
	
	antlr4.tree.ParseTreeWalker.DEFAULT.walk(this, codeBlock);
	codeBlock = codeBlockHolder;

	while(evaluateBoolean(expression,ctx)){
		//console.log("ey1");
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

	while(evaluateBoolean(boolBlock.getText(),ctx)){
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
	////console.log(ctx);
	var variable = ctx.VARIABLE_IDENTIFIER().getText();
	var message = ctx.STRING_LITERAL().getText();
	////console.log(variable);
	////console.log(message);
	message = message.split('"').join("");
	/*consoleBox.innerHTML += "<input type='text' id='" + variable + "' value='Patrick Gan'>";
	wait(7)*/
	var input = prompt(message);
	
	inputVal = identifierHandler.convertVarToVal(input, s, functionTable, ctx);
	////console.log("TYPE: " + typeof(inputVal));
	s.get(variable).setValue(inputVal, ctx);
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
	var statement = identifierHandler.evaluatePrintExpression(ctx.expression().getText(), s, functionTable, ctx);
	var split = statement.split("+").join("").split('"').join("");
	lastPrint = split;
	////console.log(split);
	//console.log("enter print " + split);

	var errorHtml = "<tr><td>(NOT ERROR) Print<td></td><td></td><td>" + split + "</td></tr>";
	consoleBox.innerHTML += errorHtml;
};

function compareParameters(param1, param2, ctx){
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
		//console.log("param1 is null");		
	 	hasNull = true;
	}else{	 	
		listFuncTypes = param1.data_type();
		listParam1Variables = param1.VARIABLE_IDENTIFIER();
		
		////console.log("param1Types" +listFuncTypes.toString());
		////console.log("param1Vars" +listParam1Variables.toString());

	}
	
	if(param2 == null){
		//console.log("param2 is null");
	 	hasNull = true;
	}else{
		listParam2Arguments = param2.getText().split(",");
	//	//console.log("param2" + listParam2Arguments);
	}
	//console.log(listParam2Arguments);
	for(var i=0; i<listParam2Arguments.length; i++){
		listParam2Arguments[i] = identifierHandler.convertVarToVal(listParam2Arguments[i].toString(), s, functionTable, ctx);
	}
	
	if(hasNull){
	 	if(param1 == null && param2 == null){
	 		//console.log("execute");
	 		return true;
	 	}else{
	 		parser.notifyErrorListeners("Number of parameters don't match! Add/subtract parameters", param2.start);

			
			return false;
	 	}			
	 }else if(listParam1Variables.length != listParam2Arguments.length){
	 		parser.notifyErrorListeners("Number of parameters don't match! Add/subtract parameters", param2.start);

			
			return false;
	 }else{
		for(var i=0; i<listParam1Variables.length; i++){
		//	//console.log(listParam1Variables[i] + " = " + listParam2Arguments[i]);
			value = identifierHandler.convertVarToVal(listParam2Arguments[i], s, functionTable, ctx);
			s.get(listParam1Variables[i]).setValue(value, ctx);
		}
	 	//console.log("execute"); 
	 	return true;
	 }

	return true;

	
};

//Enter a parse tree produced by QwertyParser#funccall_statement.
AssignmentListener.prototype.enterFunccall_statement = function(ctx) {
	if(hasExecute){
		s.push();
	console.log("enterfunccall")
	
	var functionName = ctx.FUNCTION_IDENTIFIER().getText();
	var isValidParams = false;
	var calledFunction = functionTable.get(functionName);
	var funcCallParams;
	
	if(ctx.actual_parameter_list()!=null){
		console.log(ctx.actual_parameter_list());
		funcCallParams = ctx.actual_parameter_list()[0].actual_params();
		console.log(funcCallParams);
	}
	
	if(calledFunction!=null){
		if(calledFunction.getParameter()!=null){
			console.log("Walking parameter");
			antlr4.tree.ParseTreeWalker.DEFAULT.walk(this, calledFunction.getParameter());
	
			isValidParams = compareParameters(calledFunction.getParameter(), funcCallParams)
			//console.log("after");
		} else
			isValidParams = compareParameters(null, funcCallParams)
	}
		
	if(isValidParams){
		//if(calledFunction.getDataType() == "void")
			antlr4.tree.ParseTreeWalker.DEFAULT.walk(this, calledFunction.getCodeBlock());

	}
	
	console.log("RETURN VALUE OF " + functionName + " is " + calledFunction.getReturnValue());
	}
};

//Enter a parse tree produced by QwertyParser#parameters.
AssignmentListener.prototype.enterParameters = function(ctx) {
	console.log("enter Param");
	var listDataTypes = ctx.data_type();
	var listVariables = ctx.VARIABLE_IDENTIFIER();
	var varValue;
	var dataType;
	var varName;
	for(var i=0; i<listDataTypes.length; i++){
		dataType = listDataTypes[i].getText();
		varName = listVariables[i].getText();
		//console.log(dataType);
		//console.log(varName);

		varValue = new QwertyValue(dataType, "null", ctx);

		s.set(varName, varValue);
	}	
};

function getFunctionParent(ctx){
	console.log(ctx);
	while(ctx.constructor.name != "Function_returnContext"){
		ctx = ctx.parentCtx;
		if(ctx.constructor.name == "Function_returnContext" || ctx.constructor.name == "Function_noreturnContext"){
			//console.log("ey");
			return ctx;
		}
	}
}

//Enter a parse tree produced by QwertyParser#return_statement.
AssignmentListener.prototype.enterReturn_statement = function(ctx) {
	var returnValue = ctx.getChild(1).getText();
	
	var functionParent = getFunctionParent(ctx);
	//console.log(functionParent);
	var functionDataType = functionParent.getChild(0).getText();
	var functionName = functionParent.FUNCTION_IDENTIFIER().getText();

	var returnDataType;
	//returnValue = identifierHandler.convertVarToVal(returnValue, s);
	if(functionDataType.includes("void")){
		////console.log("ey");
		parser.notifyErrorListeners("Remove return statement!", ctx.start);

			
	}else{

		if(s.has(returnValue)){
			returnDataType = s.get(returnValue).getDataType();
			returnValue = identifierHandler.convertVarToVal(returnValue, s, functionTable, ctx);

		}else{
			returnValue = identifierHandler.convertVarToVal(returnValue, s, functionTable, ctx);
			if(typeof returnValue == "number"){
				if(returnValue.toString().includes("."))
					returnDataType = "float";
				else
					returnDataType = "int";
			}else if(typeof returnValue == "object"){
				if(!returnValue){
					//console.log("EY");
					returnDataType = functionDataType;
				}
				else
					returnDataType = "boolean";
			}else
				returnDataType = "string"
		}
		if(functionDataType.includes(returnDataType)){
			console.log("abcdefg FUNCTION RETURN VALUE IS = " + returnValue);
			functionTable.get(functionName).setReturnValue(returnValue);
		}else
			parser.notifyErrorListeners("Return data type mismatch!", ctx.start);	

	}
};

//Exit a parse tree produced by QwertyParser#funccall_statement.
AssignmentListener.prototype.exitFunccall_statement = function(ctx) {
	if(hasExecute)
		s.pop();

	hasExecute = true;
};

function checkIfHasReturn(functionCodeBlock){
	var statements = functionCodeBlock.statement();
	
	for(var i=0; i< statements.length; i++){
		if(statements[i].getChild(0).constructor.name == "Return_statementContext")
			return true;
	}
	return false;
}
//Enter a parse tree produced by QwertyParser#function_declaration.
AssignmentListener.prototype.enterFunction_declaration = function(ctx) {
	console.log("enter func dec");
	//console.log(ctx);

	var dataType = ctx.getChild(0).getChild(0).getText();
	var functionName = ctx.getChild(0).getChild(1).getText();
	var parameters = ctx.getChild(0).function_block().parameters();
	var functionCodeBlock = ctx.getChild(0).function_block().code_block();
	//console.log(functionCodeBlock);
	
	if(functionTable.has(functionName)){
		parser.notifyErrorListeners("Function name have already been used. Change the name.", ctx.start);
	}else
		functionTable.set(functionName, new QwertyFunction(dataType, parameters, functionCodeBlock))

	if(!checkIfHasReturn(functionCodeBlock)){
		////console.log(this.getCurrentToken());
		if(dataType!="void")
		parser.notifyErrorListeners("Missing return statement!", ctx.stop);
	}else{
		if(dataType=="void")
			parser.notifyErrorListeners("Remove return statement!", ctx.stop);
	}
	
	ctx.removeLastChild();
	ctx.removeLastChild();

	////console.log(functionName);
	////console.log("YEEEWW" +parameters.VARIABLE_IDENTIFIER().getText());
};

// Exit a parse tree produced by QwertyParser#function_declaration.
AssignmentListener.prototype.exitFunction_declaration = function(ctx) {
};


// Enter a parse tree produced by QwertyParser#arr_decl.
AssignmentListener.prototype.enterArr_decl = function(ctx) {
	var dataType = ctx.data_type().getText().concat("[]");
	var varName
	var size;
	var invalid = false;
	if(ctx.INTEGER_LITERAL() != null) {
		varName = ctx.VARIABLE_IDENTIFIER()[0].getText();
		size = ctx.INTEGER_LITERAL().getText();
	}
	else {
		if(ctx.FLOAT_LITERAL() != null){
			parser.notifyErrorListeners("Error in array index! Expected int data type!", ctx.start);
			invalid = true;
		}else{
			varName = ctx.VARIABLE_IDENTIFIER()[1].getText();
			var temp = s.get(ctx.VARIABLE_IDENTIFIER()[0].getText());
			if(temp.getDataType() == "int")
				size = temp.getValue();
			else
				parser.notifyErrorListeners("Error in array index! Expected int data type!", ctx.start);
		}
	}

	// create a new array of size -- 
	var arr = new Array(parseInt(size));
	//console.log(arr.length);

	var varValue = new QwertyValue(dataType, arr, ctx);
	s.set(varName, varValue);
};

// Enter a parse tree produced by QwertyParser#arr_assignment.
AssignmentListener.prototype.enterArr_assignment = function(ctx) {
	//console.log("ARR ASSIGN");
	// 0 will ALWAYS be varName then 1 could be either the index or whatever
	var varName = ctx.VARIABLE_IDENTIFIER()[0].getText();
	var indexVal;

	if(ctx.INTEGER_LITERAL() != null)
		indexVal = ctx.INTEGER_LITERAL().getText();
	else {
		var express = ctx.VARIABLE_IDENTIFIER()[1].getText();
		//console.log(ctx.num_expression());
		if(ctx.num_expression()[0] != null)
			express += ctx.num_expression()[0].getText()

		var temp = identifierHandler.convertVarToVal(express, s, functionTable, ctx);
		//console.log("TEMP" +temp);
		//console.log(isNaN(temp));
		if(!isNaN(temp))
			indexVal = parseInt(temp);
		else
			parser.notifyErrorListeners("Error in array index! Invalid data type!", ctx);
	}

	var toBeAssigned = identifierHandler.convertVarToVal(ctx.var_assignment_statement().assignment_factor().getText(), s, functionTable, ctx);
	
	//console.log("VAR NAME IS : " + varName);
	//console.log("to be ass IS : " + toBeAssigned);

	//console.log(s.get(varName));
	if(parseInt(indexVal) >= s.get(varName).getValue().length) {
		parser.notifyErrorListeners("Array index out of bounds!", ctx.start);
	} else {
		var getArr = s.get(varName).getValue();
		getArr[parseInt(indexVal)] = toBeAssigned;
		s.get(varName).setValue(getArr, ctx, toBeAssigned, parseInt(indexVal));
	}
};

//Enter a parse tree produced by QwertyParser#expression.
QwertyListener.prototype.enterExpression = function(ctx) {
	//console.log(ctx);
	//if(ctx.parentCtx.constructor.name == "Return_statementContext" || ctx.parentCtx.constructor.name == "Actual_paramsContext" || ctx.parentCtx.constructor.name == "Assignment_factorContext" || ctx.parentCtx.constructor.name == "Print_statementContext"){
	if(ctx.parentCtx.constructor.name == "StatementContext")
		parser.notifyErrorListeners("Missing assignment statement ", ctx.start);
};
//Exit a parse tree produced by QwertyParser#statement.
QwertyListener.prototype.exitStatement = function(ctx) {
	selectionRange = editor.getSelectionRange();
	selectionMarkers = editor.session.getSelectionMarkers();
	console.log(selectionRange.start.row + " = " + ctx.start.line + " : " +ctx.getText());

	if(selectionMarkers.length>0){
		console.log("ey" + selectionMarkers.length);
		for(var i=0; i <selectionMarkers.length; i++){
			if((ctx.start.line >= (selectionMarkers[i].start.row+1) && ctx.start.line <= (selectionMarkers[i].end.row+1)) || ctx.start.line == (selectionMarkers[i].start.row+1)){
				alert("Equivalent value of " + ctx.getText() + " is: " + identifierHandler.convertVarToVal(ctx.getText(), s, functionTable, ctx, true));
			}
		}
	
		
	}else{
		if(ctx.start.line >= (selectionRange.start.row+1) && ctx.start.line <= (selectionRange.end.row+1)){
			alert("Equivalent value of " + ctx.getText() + " is: " + identifierHandler.convertVarToVal(ctx.getText(), s, functionTable, ctx, true));
		}
	}
	
};