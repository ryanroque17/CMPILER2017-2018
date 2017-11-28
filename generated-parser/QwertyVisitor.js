// Generated from Qwerty.g4 by ANTLR 4.5.1
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by QwertyParser.

function QwertyVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

QwertyVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
QwertyVisitor.prototype.constructor = QwertyVisitor;

// Visit a parse tree produced by QwertyParser#program.
QwertyVisitor.prototype.visitProgram = function(ctx) {
};


// Visit a parse tree produced by QwertyParser#statement.
QwertyVisitor.prototype.visitStatement = function(ctx) {
};


// Visit a parse tree produced by QwertyParser#vardecl_list.
QwertyVisitor.prototype.visitVardecl_list = function(ctx) {
};


// Visit a parse tree produced by QwertyParser#var_decl.
QwertyVisitor.prototype.visitVar_decl = function(ctx) {
};


// Visit a parse tree produced by QwertyParser#var_identifier_list.
QwertyVisitor.prototype.visitVar_identifier_list = function(ctx) {
};


// Visit a parse tree produced by QwertyParser#array_size.
QwertyVisitor.prototype.visitArray_size = function(ctx) {
};


// Visit a parse tree produced by QwertyParser#data_type.
QwertyVisitor.prototype.visitData_type = function(ctx) {
};


// Visit a parse tree produced by QwertyParser#function_declaration.
QwertyVisitor.prototype.visitFunction_declaration = function(ctx) {
};


// Visit a parse tree produced by QwertyParser#function_return.
QwertyVisitor.prototype.visitFunction_return = function(ctx) {
};


// Visit a parse tree produced by QwertyParser#function_noreturn.
QwertyVisitor.prototype.visitFunction_noreturn = function(ctx) {
};


// Visit a parse tree produced by QwertyParser#parameters.
QwertyVisitor.prototype.visitParameters = function(ctx) {
};


// Visit a parse tree produced by QwertyParser#function_block.
QwertyVisitor.prototype.visitFunction_block = function(ctx) {
};


// Visit a parse tree produced by QwertyParser#main_function.
QwertyVisitor.prototype.visitMain_function = function(ctx) {
};


// Visit a parse tree produced by QwertyParser#expression.
QwertyVisitor.prototype.visitExpression = function(ctx) {
};


// Visit a parse tree produced by QwertyParser#string_expression.
QwertyVisitor.prototype.visitString_expression = function(ctx) {
};


// Visit a parse tree produced by QwertyParser#num_expression.
QwertyVisitor.prototype.visitNum_expression = function(ctx) {
};


// Visit a parse tree produced by QwertyParser#num_ope.
QwertyVisitor.prototype.visitNum_ope = function(ctx) {
};


// Visit a parse tree produced by QwertyParser#unary_ope.
QwertyVisitor.prototype.visitUnary_ope = function(ctx) {
};


// Visit a parse tree produced by QwertyParser#num_factor.
QwertyVisitor.prototype.visitNum_factor = function(ctx) {
};


// Visit a parse tree produced by QwertyParser#var_func_expression.
QwertyVisitor.prototype.visitVar_func_expression = function(ctx) {
};


// Visit a parse tree produced by QwertyParser#var_func_factor.
QwertyVisitor.prototype.visitVar_func_factor = function(ctx) {
};


// Visit a parse tree produced by QwertyParser#bool_expression.
QwertyVisitor.prototype.visitBool_expression = function(ctx) {
};


// Visit a parse tree produced by QwertyParser#relational_ope.
QwertyVisitor.prototype.visitRelational_ope = function(ctx) {
};


// Visit a parse tree produced by QwertyParser#logical_ope.
QwertyVisitor.prototype.visitLogical_ope = function(ctx) {
};


// Visit a parse tree produced by QwertyParser#const_statement.
QwertyVisitor.prototype.visitConst_statement = function(ctx) {
};


// Visit a parse tree produced by QwertyParser#var_assignment_statement.
QwertyVisitor.prototype.visitVar_assignment_statement = function(ctx) {
};


// Visit a parse tree produced by QwertyParser#assignment_statement.
QwertyVisitor.prototype.visitAssignment_statement = function(ctx) {
};


// Visit a parse tree produced by QwertyParser#assignment_num_ope.
QwertyVisitor.prototype.visitAssignment_num_ope = function(ctx) {
};


// Visit a parse tree produced by QwertyParser#assignment_factor.
QwertyVisitor.prototype.visitAssignment_factor = function(ctx) {
};


// Visit a parse tree produced by QwertyParser#funccall_statement.
QwertyVisitor.prototype.visitFunccall_statement = function(ctx) {
};


// Visit a parse tree produced by QwertyParser#actual_parameter_list.
QwertyVisitor.prototype.visitActual_parameter_list = function(ctx) {
};


// Visit a parse tree produced by QwertyParser#actual_params.
QwertyVisitor.prototype.visitActual_params = function(ctx) {
};


// Visit a parse tree produced by QwertyParser#conditional_factor.
QwertyVisitor.prototype.visitConditional_factor = function(ctx) {
};


// Visit a parse tree produced by QwertyParser#if_statement.
QwertyVisitor.prototype.visitIf_statement = function(ctx) {
};


// Visit a parse tree produced by QwertyParser#conditional_block.
QwertyVisitor.prototype.visitConditional_block = function(ctx) {
};


// Visit a parse tree produced by QwertyParser#code_block.
QwertyVisitor.prototype.visitCode_block = function(ctx) {
};


// Visit a parse tree produced by QwertyParser#while_statement.
QwertyVisitor.prototype.visitWhile_statement = function(ctx) {
};


// Visit a parse tree produced by QwertyParser#do_while_statement.
QwertyVisitor.prototype.visitDo_while_statement = function(ctx) {
};


// Visit a parse tree produced by QwertyParser#for_statement.
QwertyVisitor.prototype.visitFor_statement = function(ctx) {
};


// Visit a parse tree produced by QwertyParser#return_statement.
QwertyVisitor.prototype.visitReturn_statement = function(ctx) {
};


// Visit a parse tree produced by QwertyParser#scan_statement.
QwertyVisitor.prototype.visitScan_statement = function(ctx) {
};


// Visit a parse tree produced by QwertyParser#print_statement.
QwertyVisitor.prototype.visitPrint_statement = function(ctx) {
};


// Visit a parse tree produced by QwertyParser#arr_decl.
QwertyVisitor.prototype.visitArr_decl = function(ctx) {
};


// Visit a parse tree produced by QwertyParser#arr_assignment.
QwertyVisitor.prototype.visitArr_assignment = function(ctx) {
};


// Visit a parse tree produced by QwertyParser#arr_expression.
QwertyVisitor.prototype.visitArr_expression = function(ctx) {
};



exports.QwertyVisitor = QwertyVisitor;