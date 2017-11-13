var antlr4 = require('antlr4/index');
var QwertyLexer = require('../generated-parser/QwertyLexer');
var QwertyParser = require('../generated-parser/QwertyParser');
var QwertyListener = require('../generated-parser/QwertyListener').QwertyListener;
var SymbolTable = require("/node_modules/symbol-table/stack");
var s = SymbolTable();
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
	var varValue = ctx.var_identifier_list().getChild(1).getChild(1).getText();
	
	if(s.has(varName)) {
		console.log("variable " + varName + " already in stack");
	} else {		
		s.set(varName, varValue);

		console.log("value of " +varName+ ":" + s.get(varName));
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
		console.log("variable " + varName + " NOT in stack!");
	}else{
		height = s.height();
		varHeight = s.getItsHeight(varName);
		
		if(height != varHeight){
			heightDiff = height - varHeight;
			for(var i=0; i<heightDiff ;i++){
				s.pop();
			}
		}
		if(ctx.getChild(1).getText() == "="){
			varValue = ctx.getChild(2).getText();
		}else if(ctx.getChild(1).getText() == "++"){
			varValue = s.get(varName) + "+1";
		}else if(ctx.getChild(1).getText() == "--"){
			varValue = s.get(varName) + "-1";
		}else if(ctx.getChild(1).getText() == "+="){
			varValue = s.get(varName) + "+" + ctx.getChild(2).getText();
		}else if(ctx.getChild(1).getText() == "-="){
			varValue = s.get(varName) + "-" + ctx.getChild(2).getText();
		}else if(ctx.getChild(1).getText() == "*="){
			varValue = s.get(varName) + "*" + ctx.getChild(2).getText();
		}else if(ctx.getChild(1).getText() == "/="){
			varValue = s.get(varName) + "/" + ctx.getChild(2).getText();
		}else if(ctx.getChild(1).getText() == "%="){
			varValue = s.get(varName) + "%" + ctx.getChild(2).getText();
		}
		s.set(varName, varValue);

		console.log("value of " +varName+ ":" + s.get(varName));
		if(height != varHeight){
			for(var i=0; i<heightDiff ;i++){
				s.push();
			}
		}
	}
};

/*//Enter a parse tree produced by QwertyParser#var_assignment_statement
QwertyListener.prototype.enterVar_assignment_statement = function(ctx) {
	console.log()
	//console.log("ass fact" + ctx.getParent().getText());
	if(ctx.assignment_factor!=null)
		console.log("ass fact" + ctx.assignment_factor());

	var varName = ctx.start.text;
	if(!s.has(varName)) {
		console.log("variable " + varName + " NOT in stack!");
	}
};
*/

//Enter a parse tree produced by QwertyParser#assignment_statement.
QwertyListener.prototype.enterAssignment_factor = function(ctx) {
	//console.log("ass fact" + ctx.getParent().getText());
	/*if(ctx.assignment_factor!=null)
		console.log("ass fact" + ctx.assignment_factor());

	var varName = ctx.start.text;
	if(!s.has(varName)) {
		console.log("variable " + varName + " NOT in stack!");
	}*/
};

// Enter a parse tree produced by QwertyParser#if_statement.
AssignmentListener.prototype.enterIf_statement = function(ctx) {
	s.push();
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
};

// Exit a parse tree produced by QwertyParser#for_statement.
AssignmentListener.prototype.exitFor_statement = function(ctx) {
	s.pop();
};

//Exit a parse tree produced by QwertyParser#program.
AssignmentListener.prototype.exitProgram = function(ctx) {
	s.pop();
};