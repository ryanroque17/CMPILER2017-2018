var antlr4 = require('antlr4/index');
var QwertyLexer = require('../generated-parser/QwertyLexer');
var QwertyParser = require('../generated-parser/QwertyParser');
var QwertyValue = require('/scripts/QwertyValue');
var QwertyVisitor = require('../generated-parser/QwertyVisitor').QwertyVisitor;
var SymbolTable = require("/node_modules/symbol-table/stack");
var s = new SymbolTable();
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
    console.log("b4 for");
    for(var i=0; i<tokens.getNumberOfOnChannelTokens() - 1; i++) {
    	token = inputSplitted.slice(test[i].start, test[i].stop + 1).join("");
    	tokenList.push(token);
        console.log("in for");

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
    		    console.log("in else");

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

TypeChecker = function(res) {
	this.Res = res;
    QwertyVisitor.call(this);
    return this;
};

// inherit default listener
TypeChecker.prototype = Object.create(QwertyVisitor.prototype);
TypeChecker.prototype.constructor = TypeChecker;

exports.TypeChecker = TypeChecker;

TypeChecker.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
TypeChecker.prototype.constructor = TypeChecker;

// Visit a parse tree produced by QwertyParser#program.
TypeChecker.prototype.visitProgram = function(ctx) { this.visit(ctx.children)
};


// Visit a parse tree produced by QwertyParser#statement.
TypeChecker.prototype.visitStatement = function(ctx) { 
	this.visit(ctx.children); 
};


// Visit a parse tree produced by QwertyParser#vardecl_list.
TypeChecker.prototype.visitVardecl_list = function(ctx) { 
	this.visit(ctx.children); 
};


// Visit a parse tree produced by QwertyParser#var_decl.
TypeChecker.prototype.visitVar_decl = function(ctx) { 
	this.visit(ctx.children); 
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


// Visit a parse tree produced by QwertyParser#var_identifier_list.
TypeChecker.prototype.visitVar_identifier_list = function(ctx) { 
	this.visit(ctx.children);
};


// Visit a parse tree produced by QwertyParser#array_size.
TypeChecker.prototype.visitArray_size = function(ctx) { 
	this.visit(ctx.children); 
};


// Visit a parse tree produced by QwertyParser#data_type.
TypeChecker.prototype.visitData_type = function(ctx) { 
	this.visit(ctx.children); 
};


// Visit a parse tree produced by QwertyParser#function_declaration.
TypeChecker.prototype.visitFunction_declaration = function(ctx) { 
	this.visit(ctx.children); 
};


// Visit a parse tree produced by QwertyParser#function_return.
TypeChecker.prototype.visitFunction_return = function(ctx) { 
	this.visit(ctx.children); 
};


// Visit a parse tree produced by QwertyParser#function_noreturn.
TypeChecker.prototype.visitFunction_noreturn = function(ctx) { 
	this.visit(ctx.children); 
};


// Visit a parse tree produced by QwertyParser#parameters.
TypeChecker.prototype.visitParameters = function(ctx) { 
	this.visit(ctx.children); 
};


// Visit a parse tree produced by QwertyParser#function_block.
TypeChecker.prototype.visitFunction_block = function(ctx) { 
	this.visit(ctx.children); 
};


// Visit a parse tree produced by QwertyParser#main_function.
TypeChecker.prototype.visitMain_function = function(ctx) { 
	this.visit(ctx.children); 
};


// Visit a parse tree produced by QwertyParser#expression.
TypeChecker.prototype.visitExpression = function(ctx) { 
	this.visit(ctx.children); 
};


// Visit a parse tree produced by QwertyParser#string_expression.
TypeChecker.prototype.visitString_expression = function(ctx) { 
	this.visit(ctx.children); 
	return ctx.getText();
};


// Visit a parse tree produced by QwertyParser#num_expression.
TypeChecker.prototype.visitNum_expression = function(ctx) { 
	this.visit(ctx.children); 
	return ctx.getText();
};


// Visit a parse tree produced by QwertyParser#num_ope.
TypeChecker.prototype.visitNum_ope = function(ctx) { 
	this.visit(ctx.children); 
};


// Visit a parse tree produced by QwertyParser#unary_ope.
TypeChecker.prototype.visitUnary_ope = function(ctx) { 
	this.visit(ctx.children); 
};


// Visit a parse tree produced by QwertyParser#num_factor.
TypeChecker.prototype.visitNum_factor = function(ctx) { 
	this.visit(ctx.children); 
};


// Visit a parse tree produced by QwertyParser#var_func_expression.
TypeChecker.prototype.visitVar_func_expression = function(ctx) { 
	this.visit(ctx.children); 
};


// Visit a parse tree produced by QwertyParser#var_func_factor.
TypeChecker.prototype.visitVar_func_factor = function(ctx) { 
	this.visit(ctx.children); 
};


// Visit a parse tree produced by QwertyParser#bool_expression.
TypeChecker.prototype.visitBool_expression = function(ctx) { 
	this.visit(ctx.children); 
};


// Visit a parse tree produced by QwertyParser#relational_ope.
TypeChecker.prototype.visitRelational_ope = function(ctx) { 
	this.visit(ctx.children); 
};


// Visit a parse tree produced by QwertyParser#logical_ope.
TypeChecker.prototype.visitLogical_ope = function(ctx) { 
	this.visit(ctx.children); 
};


// Visit a parse tree produced by QwertyParser#const_statement.
TypeChecker.prototype.visitConst_statement = function(ctx) { 
	this.visit(ctx.children); 
};


// Visit a parse tree produced by QwertyParser#var_assignment_statement.
TypeChecker.prototype.visitVar_assignment_statement = function(ctx) { 
	this.visit(ctx.children); 
};


// Visit a parse tree produced by QwertyParser#assignment_statement.
TypeChecker.prototype.visitAssignment_statement = function(ctx) { 
	this.visit(ctx.children); 

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


// Visit a parse tree produced by QwertyParser#assignment_num_ope.
TypeChecker.prototype.visitAssignment_num_ope = function(ctx) { 
	this.visit(ctx.children); 
};


// Visit a parse tree produced by QwertyParser#assignment_factor.
TypeChecker.prototype.visitAssignment_factor = function(ctx) { 
	this.visit(ctx.children); 
	return ctx.getText();
};


// Visit a parse tree produced by QwertyParser#funccall_statement.
TypeChecker.prototype.visitFunccall_statement = function(ctx) { 
	this.visit(ctx.children); 
};


// Visit a parse tree produced by QwertyParser#actual_parameter_list.
TypeChecker.prototype.visitActual_parameter_list = function(ctx) { 
	this.visit(ctx.children); 
};


// Visit a parse tree produced by QwertyParser#actual_params.
TypeChecker.prototype.visitActual_params = function(ctx) { 
	this.visit(ctx.children); 
};


// Visit a parse tree produced by QwertyParser#conditional_factor.
TypeChecker.prototype.visitConditional_factor = function(ctx) { 
	this.visit(ctx.children);
};

function evaluateBoolean(input) {
	var arr = input.split("==");
	console.log(arr);

	if(s.get(arr[0]).getValue() == arr[1]) {
		return true;
	}
	
	return false;
}

// Visit a parse tree produced by QwertyParser#if_statement.
TypeChecker.prototype.visitIf_statement = function(ctx) { 
	s.push();

	var eval = ctx.conditional_block()[0].conditional_factor().getText();
	console.log(ctx);
	if(evaluateBoolean(eval)) {
		this.visit(ctx.children);
	}

	s.pop();
};


// Visit a parse tree produced by QwertyParser#conditional_block.
TypeChecker.prototype.visitConditional_block = function(ctx) { 
	this.visit(ctx.children); 
};


// Visit a parse tree produced by QwertyParser#code_block.
TypeChecker.prototype.visitCode_block = function(ctx) { 
	this.visit(ctx.children); 
};


// Visit a parse tree produced by QwertyParser#while_statement.
TypeChecker.prototype.visitWhile_statement = function(ctx) { 
	this.visit(ctx.children); 
};


// Visit a parse tree produced by QwertyParser#do_while_statement.
TypeChecker.prototype.visitDo_while_statement = function(ctx) { 
	this.visit(ctx.children); 
};


// Visit a parse tree produced by QwertyParser#for_statement.
TypeChecker.prototype.visitFor_statement = function(ctx) { 
	this.visit(ctx.children); 
};


// Visit a parse tree produced by QwertyParser#return_statement.
TypeChecker.prototype.visitReturn_statement = function(ctx) { 
	this.visit(ctx.children); 
};


// Visit a parse tree produced by QwertyParser#scan_statement.
TypeChecker.prototype.visitScan_statement = function(ctx) { 
	this.visit(ctx.children);
};


// Visit a parse tree produced by QwertyParser#print_statement.
TypeChecker.prototype.visitPrint_statement = function(ctx) { 
	this.visit(ctx.children);
	console.log(ctx.expression().getText() + " h");
	var statement = checkIfHasIdentifier(ctx.expression().getText());
	console.log(statement);
};