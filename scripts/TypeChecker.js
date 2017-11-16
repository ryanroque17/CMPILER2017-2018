var antlr4 = require('antlr4/index');
var QwertyLexer = require('../generated-parser/QwertyLexer');
var QwertyParser = require('../generated-parser/QwertyParser');
var QwertyValue = require('/scripts/QwertyValue');
var QwertyVisitor = require('../generated-parser/QwertyVisitor').QwertyVisitor;
var SymbolTable = require("/node_modules/symbol-table/stack");
var s = SymbolTable();
var consoleBox = document.getElementById("consoleBox");

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
	// console.log(ctx.var_identifier_list().getText());
	// var dataType = ctx.data_type().getText();
	// var assign = ctx.var_identifier_list().var_assignment_statement().assignment_factor().getText();
	// // console.log(ctx.var_identifier_list().var_assignment_statement().assignment_factor().expression());
	// if(dataType == "int") {
	// 	if(!isNaN(parseInt(assign))) {
	// 		console.log("integer possible!");
	// 	} else {
	// 		console.log("error! cannot assign string to integer for variable");
	// 	}
	// } else if (dataType == "char") {

	// }
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


// Visit a parse tree produced by QwertyParser#if_statement.
TypeChecker.prototype.visitIf_statement = function(ctx) { 
	this.visit(ctx.children); 
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
	// console.log(ctx);
	var print = this.visit(ctx.expression().string_expression());
	
};