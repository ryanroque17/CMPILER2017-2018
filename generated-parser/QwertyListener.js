// Generated from Qwerty.g4 by ANTLR 4.5.1
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by QwertyParser.
function QwertyListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

QwertyListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
QwertyListener.prototype.constructor = QwertyListener;

// Enter a parse tree produced by QwertyParser#program.
QwertyListener.prototype.enterProgram = function(ctx) {
};

// Exit a parse tree produced by QwertyParser#program.
QwertyListener.prototype.exitProgram = function(ctx) {
};


// Enter a parse tree produced by QwertyParser#statement.
QwertyListener.prototype.enterStatement = function(ctx) {
};

// Exit a parse tree produced by QwertyParser#statement.
QwertyListener.prototype.exitStatement = function(ctx) {
};


// Enter a parse tree produced by QwertyParser#vardecl_list.
QwertyListener.prototype.enterVardecl_list = function(ctx) {
};

// Exit a parse tree produced by QwertyParser#vardecl_list.
QwertyListener.prototype.exitVardecl_list = function(ctx) {
};


// Enter a parse tree produced by QwertyParser#var_decl.
QwertyListener.prototype.enterVar_decl = function(ctx) {
};

// Exit a parse tree produced by QwertyParser#var_decl.
QwertyListener.prototype.exitVar_decl = function(ctx) {
};


// Enter a parse tree produced by QwertyParser#var_identifier_list.
QwertyListener.prototype.enterVar_identifier_list = function(ctx) {
};

// Exit a parse tree produced by QwertyParser#var_identifier_list.
QwertyListener.prototype.exitVar_identifier_list = function(ctx) {
};


// Enter a parse tree produced by QwertyParser#array_size.
QwertyListener.prototype.enterArray_size = function(ctx) {
};

// Exit a parse tree produced by QwertyParser#array_size.
QwertyListener.prototype.exitArray_size = function(ctx) {
};


// Enter a parse tree produced by QwertyParser#data_type.
QwertyListener.prototype.enterData_type = function(ctx) {
};

// Exit a parse tree produced by QwertyParser#data_type.
QwertyListener.prototype.exitData_type = function(ctx) {
};


// Enter a parse tree produced by QwertyParser#function_declaration.
QwertyListener.prototype.enterFunction_declaration = function(ctx) {
};

// Exit a parse tree produced by QwertyParser#function_declaration.
QwertyListener.prototype.exitFunction_declaration = function(ctx) {
};


// Enter a parse tree produced by QwertyParser#function_return.
QwertyListener.prototype.enterFunction_return = function(ctx) {
};

// Exit a parse tree produced by QwertyParser#function_return.
QwertyListener.prototype.exitFunction_return = function(ctx) {
};


// Enter a parse tree produced by QwertyParser#function_noreturn.
QwertyListener.prototype.enterFunction_noreturn = function(ctx) {
};

// Exit a parse tree produced by QwertyParser#function_noreturn.
QwertyListener.prototype.exitFunction_noreturn = function(ctx) {
};


// Enter a parse tree produced by QwertyParser#parameters.
QwertyListener.prototype.enterParameters = function(ctx) {
};

// Exit a parse tree produced by QwertyParser#parameters.
QwertyListener.prototype.exitParameters = function(ctx) {
};


// Enter a parse tree produced by QwertyParser#function_block.
QwertyListener.prototype.enterFunction_block = function(ctx) {
};

// Exit a parse tree produced by QwertyParser#function_block.
QwertyListener.prototype.exitFunction_block = function(ctx) {
};


// Enter a parse tree produced by QwertyParser#main_function.
QwertyListener.prototype.enterMain_function = function(ctx) {
};

// Exit a parse tree produced by QwertyParser#main_function.
QwertyListener.prototype.exitMain_function = function(ctx) {
};


// Enter a parse tree produced by QwertyParser#expression.
QwertyListener.prototype.enterExpression = function(ctx) {
};

// Exit a parse tree produced by QwertyParser#expression.
QwertyListener.prototype.exitExpression = function(ctx) {
};


// Enter a parse tree produced by QwertyParser#string_expression.
QwertyListener.prototype.enterString_expression = function(ctx) {
};

// Exit a parse tree produced by QwertyParser#string_expression.
QwertyListener.prototype.exitString_expression = function(ctx) {
};


// Enter a parse tree produced by QwertyParser#num_expression.
QwertyListener.prototype.enterNum_expression = function(ctx) {
};

// Exit a parse tree produced by QwertyParser#num_expression.
QwertyListener.prototype.exitNum_expression = function(ctx) {
};


// Enter a parse tree produced by QwertyParser#num_ope.
QwertyListener.prototype.enterNum_ope = function(ctx) {
};

// Exit a parse tree produced by QwertyParser#num_ope.
QwertyListener.prototype.exitNum_ope = function(ctx) {
};


// Enter a parse tree produced by QwertyParser#unary_ope.
QwertyListener.prototype.enterUnary_ope = function(ctx) {
};

// Exit a parse tree produced by QwertyParser#unary_ope.
QwertyListener.prototype.exitUnary_ope = function(ctx) {
};


// Enter a parse tree produced by QwertyParser#num_factor.
QwertyListener.prototype.enterNum_factor = function(ctx) {
};

// Exit a parse tree produced by QwertyParser#num_factor.
QwertyListener.prototype.exitNum_factor = function(ctx) {
};


// Enter a parse tree produced by QwertyParser#var_func_expression.
QwertyListener.prototype.enterVar_func_expression = function(ctx) {
};

// Exit a parse tree produced by QwertyParser#var_func_expression.
QwertyListener.prototype.exitVar_func_expression = function(ctx) {
};


// Enter a parse tree produced by QwertyParser#var_func_factor.
QwertyListener.prototype.enterVar_func_factor = function(ctx) {
};

// Exit a parse tree produced by QwertyParser#var_func_factor.
QwertyListener.prototype.exitVar_func_factor = function(ctx) {
};


// Enter a parse tree produced by QwertyParser#bool_expression.
QwertyListener.prototype.enterBool_expression = function(ctx) {
};

// Exit a parse tree produced by QwertyParser#bool_expression.
QwertyListener.prototype.exitBool_expression = function(ctx) {
};


// Enter a parse tree produced by QwertyParser#relational_ope.
QwertyListener.prototype.enterRelational_ope = function(ctx) {
};

// Exit a parse tree produced by QwertyParser#relational_ope.
QwertyListener.prototype.exitRelational_ope = function(ctx) {
};


// Enter a parse tree produced by QwertyParser#logical_ope.
QwertyListener.prototype.enterLogical_ope = function(ctx) {
};

// Exit a parse tree produced by QwertyParser#logical_ope.
QwertyListener.prototype.exitLogical_ope = function(ctx) {
};


// Enter a parse tree produced by QwertyParser#const_statement.
QwertyListener.prototype.enterConst_statement = function(ctx) {
};

// Exit a parse tree produced by QwertyParser#const_statement.
QwertyListener.prototype.exitConst_statement = function(ctx) {
};


// Enter a parse tree produced by QwertyParser#var_assignment_statement.
QwertyListener.prototype.enterVar_assignment_statement = function(ctx) {
};

// Exit a parse tree produced by QwertyParser#var_assignment_statement.
QwertyListener.prototype.exitVar_assignment_statement = function(ctx) {
};


// Enter a parse tree produced by QwertyParser#assignment_statement.
QwertyListener.prototype.enterAssignment_statement = function(ctx) {
};

// Exit a parse tree produced by QwertyParser#assignment_statement.
QwertyListener.prototype.exitAssignment_statement = function(ctx) {
};


// Enter a parse tree produced by QwertyParser#assignment_num_ope.
QwertyListener.prototype.enterAssignment_num_ope = function(ctx) {
};

// Exit a parse tree produced by QwertyParser#assignment_num_ope.
QwertyListener.prototype.exitAssignment_num_ope = function(ctx) {
};


// Enter a parse tree produced by QwertyParser#assignment_factor.
QwertyListener.prototype.enterAssignment_factor = function(ctx) {
};

// Exit a parse tree produced by QwertyParser#assignment_factor.
QwertyListener.prototype.exitAssignment_factor = function(ctx) {
};


// Enter a parse tree produced by QwertyParser#funccall_statement.
QwertyListener.prototype.enterFunccall_statement = function(ctx) {
};

// Exit a parse tree produced by QwertyParser#funccall_statement.
QwertyListener.prototype.exitFunccall_statement = function(ctx) {
};


// Enter a parse tree produced by QwertyParser#actual_parameter_list.
QwertyListener.prototype.enterActual_parameter_list = function(ctx) {
};

// Exit a parse tree produced by QwertyParser#actual_parameter_list.
QwertyListener.prototype.exitActual_parameter_list = function(ctx) {
};


// Enter a parse tree produced by QwertyParser#actual_params.
QwertyListener.prototype.enterActual_params = function(ctx) {
};

// Exit a parse tree produced by QwertyParser#actual_params.
QwertyListener.prototype.exitActual_params = function(ctx) {
};


// Enter a parse tree produced by QwertyParser#conditional_factor.
QwertyListener.prototype.enterConditional_factor = function(ctx) {
};

// Exit a parse tree produced by QwertyParser#conditional_factor.
QwertyListener.prototype.exitConditional_factor = function(ctx) {
};


// Enter a parse tree produced by QwertyParser#if_statement.
QwertyListener.prototype.enterIf_statement = function(ctx) {
};

// Exit a parse tree produced by QwertyParser#if_statement.
QwertyListener.prototype.exitIf_statement = function(ctx) {
};


// Enter a parse tree produced by QwertyParser#conditional_block.
QwertyListener.prototype.enterConditional_block = function(ctx) {
};

// Exit a parse tree produced by QwertyParser#conditional_block.
QwertyListener.prototype.exitConditional_block = function(ctx) {
};


// Enter a parse tree produced by QwertyParser#code_block.
QwertyListener.prototype.enterCode_block = function(ctx) {
};

// Exit a parse tree produced by QwertyParser#code_block.
QwertyListener.prototype.exitCode_block = function(ctx) {
};


// Enter a parse tree produced by QwertyParser#while_statement.
QwertyListener.prototype.enterWhile_statement = function(ctx) {
};

// Exit a parse tree produced by QwertyParser#while_statement.
QwertyListener.prototype.exitWhile_statement = function(ctx) {
};


// Enter a parse tree produced by QwertyParser#do_while_statement.
QwertyListener.prototype.enterDo_while_statement = function(ctx) {
};

// Exit a parse tree produced by QwertyParser#do_while_statement.
QwertyListener.prototype.exitDo_while_statement = function(ctx) {
};


// Enter a parse tree produced by QwertyParser#for_statement.
QwertyListener.prototype.enterFor_statement = function(ctx) {
};

// Exit a parse tree produced by QwertyParser#for_statement.
QwertyListener.prototype.exitFor_statement = function(ctx) {
};


// Enter a parse tree produced by QwertyParser#return_statement.
QwertyListener.prototype.enterReturn_statement = function(ctx) {
};

// Exit a parse tree produced by QwertyParser#return_statement.
QwertyListener.prototype.exitReturn_statement = function(ctx) {
};


// Enter a parse tree produced by QwertyParser#scan_statement.
QwertyListener.prototype.enterScan_statement = function(ctx) {
};

// Exit a parse tree produced by QwertyParser#scan_statement.
QwertyListener.prototype.exitScan_statement = function(ctx) {
};


// Enter a parse tree produced by QwertyParser#print_statement.
QwertyListener.prototype.enterPrint_statement = function(ctx) {
};

// Exit a parse tree produced by QwertyParser#print_statement.
QwertyListener.prototype.exitPrint_statement = function(ctx) {
};



exports.QwertyListener = QwertyListener;