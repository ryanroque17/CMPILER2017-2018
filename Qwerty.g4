grammar Qwerty;

program						: function_declaration* main_function EOF;

// Statements
statement					
	: vardecl_list 
	| const_statement END
	| const_statement 			{this.notifyErrorListeners("Insert ';' to complete statement.");}
	| assignment_statement END
	| assignment_statement 		{this.notifyErrorListeners("Insert ';' to complete statement.");}
	| arr_assignment END
	| arr_assignment 			{this.notifyErrorListeners("Insert ';' to complete statement.");}
	| funccall_statement END 
	| funccall_statement		{this.notifyErrorListeners("Insert ';' to complete statement.");}
	| if_statement
	| while_statement
	| do_while_statement
	| for_statement
	| return_statement END
	| scan_statement END
	| scan_statement 			{this.notifyErrorListeners("Insert ';' to complete statement.");}
	| print_statement END
	| print_statement 			{this.notifyErrorListeners("Insert ';' to complete statement.");}
	| expression END
	| expression 				{this.notifyErrorListeners("Insert ';' to complete statement.");}
	| COMMENT
	| LINE_COMMENT
	;

 // Variable Declaration       
vardecl_list 				
	: var_decl END (vardecl_list)?
	| arr_decl END
	;
var_decl					
	: data_type (var_identifier_list);
var_identifier_list			
	: VARIABLE_IDENTIFIER var_assignment_statement? ENUMERATION (var_identifier_list)?
	| VARIABLE_IDENTIFIER var_assignment_statement?
	;
array_size					
	: INTEGER_LITERAL;
data_type					
	: INT
	| FLOAT
	| CHAR
	| STRING
	| BOOLEAN
	;

// Function Declaration
function_declaration 		
	: function_return | function_noreturn;
function_return	     		
	: data_type FUNCTION_IDENTIFIER function_block;
function_noreturn    		
	: VOID FUNCTION_IDENTIFIER function_block;
parameters	     			
	: data_type VARIABLE_IDENTIFIER (ENUMERATION data_type VARIABLE_IDENTIFIER)*;
function_block				
	: OPEN_PAR parameters? CLOSE_PAR code_block;
main_function	     		
	: VOID MAIN_FUNC OPEN_PAR CLOSE_PAR code_block;


// Expression
expression					
	:  var_func_expression ((relational_ope | num_ope) (var_func_expression | string_expression| num_expression))*
	| num_expression (num_ope (num_expression | var_func_expression))*	
	| bool_expression
	| string_expression 
	| string_expression ADD expression

	;
		/*** Added ***/						
string_expression			
	: OPEN_PAR string_expression CLOSE_PAR
	| string_expression ADD string_expression
	| STRING_LITERAL | VARIABLE_IDENTIFIER (OPEN_BRACKET (INTEGER_LITERAL | VARIABLE_IDENTIFIER) CLOSE_BRACKET)?
	;
		/*** 	   ***/
num_expression				
	: OPEN_PAR num_expression CLOSE_PAR
	| num_expression num_ope num_expression
	| num_expression num_ope (num_ope)+ num_expression {this.notifyErrorListeners ("Invalid operation! Expecting '+', '-', '*', '/', '%'");} 
	| num_expression (INC | DEC) num_expression {this.notifyErrorListeners ("Invalid operation '++' or '--'. Expecting '+', '-', '*', '/', '%'.");} 
	| num_factor
	;
num_ope						
	: ADD
	| SUB
	| MUL
	| DIV 
	| MOD;
unary_ope					
	: '+' | '-';
num_factor					
	: CHAR_LITERAL 
	| (unary_ope)? INTEGER_LITERAL
	| (unary_ope)? FLOAT_LITERAL
	| VARIABLE_IDENTIFIER 
	| VARIABLE_IDENTIFIER OPEN_BRACKET (INTEGER_LITERAL | VARIABLE_IDENTIFIER) CLOSE_BRACKET
	; 
		/*** Added ***/
var_func_expression			
	: OPEN_PAR var_func_expression CLOSE_PAR
	| var_func_expression (relational_ope | num_ope) var_func_expression
	| var_func_factor
	| OPEN_PAR (OPEN_PAR)+ var_func_expression CLOSE_PAR {this.notifyErrorListeners ("Uneven Parenthesis. Remove extra '('. ");} 
	| OPEN_PAR var_func_expression CLOSE_PAR (CLOSE_PAR)+ {this.notifyErrorListeners ("Uneven Parenthesis. Remove extra ')'. ");}
	| OPEN_PAR var_func_expression CLOSE_PAR (CLOSE_PAR)+ {this.notifyErrorListeners ("Uneven Parenthesis. Remove extra ')'. ");}
	;
var_func_factor				
	: VARIABLE_IDENTIFIER
	| funccall_statement
	| num_factor
	;
		/***      ***/
bool_expression				
	: (NOT)? OPEN_PAR bool_expression CLOSE_PAR
	| bool_expression logical_ope bool_expression
	| num_expression ((relational_ope | logical_ope) num_expression)* 
	| string_expression (EQUAL | NOTEQUAL) string_expression
	| var_func_expression relational_ope var_func_expression
	| BOOLEAN_LITERAL
	| NOT OPEN_PAR BOOLEAN_LITERAL CLOSE_PAR
	;
relational_ope				
	: LT				
	| LE
	| GT			
	| GE	
	| EQUAL					
	| NOTEQUAL
	;
logical_ope					
	: AND
	| OR
	;
							
							
// Statements
const_statement				
	: CONSTANT_KEYWORD VARIABLE_IDENTIFIER var_assignment_statement ;							
var_assignment_statement	
	: ASSIGN assignment_factor;
assignment_statement		
	: VARIABLE_IDENTIFIER ASSIGN assignment_factor
	| VARIABLE_IDENTIFIER (INC | DEC)
	| VARIABLE_IDENTIFIER INC (ADD)+ {this.notifyErrorListeners ("Extraneous input '+'. Remove extra '+'. ");} 
	| VARIABLE_IDENTIFIER DEC (SUB)+ {this.notifyErrorListeners ("Extraneous input '-'. Remove extra '-'. ");} 	
	| VARIABLE_IDENTIFIER assignment_num_ope (expression | num_factor | STRING_LITERAL)
	| VARIABLE_IDENTIFIER assignment_num_ope (expression | num_factor | STRING_LITERAL) ((expression | num_factor | STRING_LITERAL))? {this.notifyErrorListeners("Invalid expression! Should only one assignemnt operation.");} 
	| VARIABLE_IDENTIFIER ASSIGN assignment_factor ((ASSIGN | assignment_num_ope) assignment_factor)+ {this.notifyErrorListeners("Duplicate assignment statement.");} 
	| VARIABLE_IDENTIFIER assignment_num_ope assignment_factor ((ASSIGN | assignment_num_ope) assignment_factor)+ {this.notifyErrorListeners("Duplicate assignment statement.");} 
	
	;
assignment_num_ope
	: ADD_ASSIGN
	| SUB_ASSIGN
	| MUL_ASSIGN
	| DIV_ASSIGN
	| ADD_ASSIGN
	;
assignment_factor			
	: expression
	| num_factor
	| STRING_LITERAL
	| BOOLEAN_LITERAL
	;
funccall_statement       	
	: FUNCTION_IDENTIFIER OPEN_PAR (actual_parameter_list)? CLOSE_PAR
	| FUNCTION_IDENTIFIER OPEN_PAR (OPEN_PAR)+ (actual_parameter_list)? CLOSE_PAR {this.notifyErrorListeners ("Uneven Parenthesis. Remove extra '('. ");} 
	| FUNCTION_IDENTIFIER OPEN_PAR (actual_parameter_list)? CLOSE_PAR (CLOSE_PAR)+ {this.notifyErrorListeners ("Uneven Parenthesis. Remove extra '('. ");} 
	| FUNCTION_IDENTIFIER OPEN_PAR (actual_parameter_list)? CLOSE_PAR (OPEN_PAR (actual_parameter_list)? CLOSE_PAR)+ {this.notifyErrorListeners ("Invalid function call. Remove other ()");} 
	;
actual_parameter_list    	
	: actual_params;
actual_params	         	
	: VARIABLE_IDENTIFIER ENUMERATION actual_params
	| VARIABLE_IDENTIFIER
    | expression ENUMERATION actual_params
    | expression 
    ;

conditional_factor			
	: bool_expression
	| BOOLEAN_LITERAL
	;
if_statement				
	: IF OPEN_PAR conditional_factor CLOSE_PAR
	  code_block
	  (ELSE_IF OPEN_PAR conditional_factor CLOSE_PAR code_block)*
	  (ELSE code_block)*;

conditional_block			
	: OPEN_PAR conditional_factor CLOSE_PAR
	  OPEN_BRACE (statement)* CLOSE_BRACE 
	;
code_block					
	: OPEN_BRACE (statement)* CLOSE_BRACE
	| OPEN_BRACE (statement)* 								{this.notifyErrorListeners ("Missing '}'. ");}
	| (statement)* CLOSE_BRACE								{this.notifyErrorListeners ("Missing '{'. ");}
	| OPEN_BRACE (OPEN_BRACE)+ (statement)* CLOSE_BRACE		{this.notifyErrorListeners ("Uneven brace. Remove extra '{'. ");}
	| OPEN_BRACE (statement)* CLOSE_BRACE (CLOSE_BRACE)+ 	{this.notifyErrorListeners ("Uneven brace. Remove extra '}'. ");}
	;
	
	
while_statement				
	: WHILE OPEN_PAR conditional_factor CLOSE_PAR code_block;
	
do_while_statement			
	: DO code_block WHILE OPEN_PAR conditional_factor CLOSE_PAR END
	| DO code_block WHILE OPEN_PAR conditional_factor CLOSE_PAR {this.notifyErrorListeners("Insert ';' to complete statement'");} 
	;
for_statement				
	: FOR OPEN_PAR 
	var_decl	END 
	bool_expression END assignment_statement CLOSE_PAR code_block;
return_statement			
	: RETURN (expression| STRING_LITERAL | BOOLEAN_LITERAL | num_factor);
scan_statement				
	: SCAN OPEN_PAR STRING_LITERAL ENUMERATION VARIABLE_IDENTIFIER CLOSE_PAR;
print_statement				
	: PRINT OPEN_PAR expression CLOSE_PAR
	| PRINTLN OPEN_PAR expression CLOSE_PAR
	;

// Arrays
arr_decl
	: data_type OPEN_BRACKET (INTEGER_LITERAL | VARIABLE_IDENTIFIER | FLOAT_LITERAL) CLOSE_BRACKET VARIABLE_IDENTIFIER;
arr_assignment
	: VARIABLE_IDENTIFIER OPEN_BRACKET ((INTEGER_LITERAL | VARIABLE_IDENTIFIER | FLOAT_LITERAL) (num_expression)*) CLOSE_BRACKET var_assignment_statement;
arr_expression
	: VARIABLE_IDENTIFIER OPEN_BRACKET (INTEGER_LITERAL | VARIABLE_IDENTIFIER | FLOAT_LITERAL) CLOSE_BRACKET;



/*** LEXICAL TOKENS ***/

HT_NL_CR					: [|\t | |\n | |\r]+ -> skip; 

INT							: 'int';
FLOAT						: 'float';
CHAR						: 'char';
STRING						: 'string';
BOOLEAN						: 'boolean';

IF							: 'if';
ELSE_IF						: 'else if';
ELSE						: 'else';
FOR							: 'for';
WHILE						: 'while';
DO							: 'do';


PRINT						: 'print';
PRINTLN						: 'println';
SCAN						: 'scan';
OPEN_PAR					: '(';
CLOSE_PAR					: ')';
OPEN_BRACE					: '{';
CLOSE_BRACE					: '}';
OPEN_BRACKET				: '[';
CLOSE_BRACKET				: ']';
ENUMERATION					: ',';
END							: ';';

COMMENT
    :   '/*' .*? '*/' -> channel(HIDDEN)
    ;

LINE_COMMENT
    :   '//' ~[\r\n]* -> channel(HIDDEN)
    ;

ADD							: '+';
SUB							: '-';
MUL							: '*';
DIV							: '/';
ADD_ASSIGN					: '+=';
SUB_ASSIGN					: '-=';
MUL_ASSIGN 					: '*=';
DIV_ASSIGN					: '/=';
MOD_ASSIGN					: '%=';
MOD							: '%';
LT							: '<';
LE							: '<=';
GT							: '>';
GE							: '>=';
EQUAL						: '==';
NOTEQUAL					: '!=';
INC							: '++';
DEC   						: '--';
ASSIGN						: '='; 
AND							: '&&';
OR							: '@@';
NOT							: '!';

CONSTANT_KEYWORD			: 'constant';
MAIN_FUNC					: 'main';
RETURN						: 'return';
VOID						: 'void';

INTEGER_LITERAL				: [0-9]+;
FLOAT_LITERAL				: INTEGER_LITERAL? '.' [0-9]+;
CHAR_LITERAL				: '\'' . '\'';
STRING_LITERAL				: '"' .*? '"'
							| '"' .*?  			{this.notifyErrorListeners("Insert ';' to complete statement.");}
							;
BOOLEAN_LITERAL				: 'true' | 'false' ; 
VARIABLE_IDENTIFIER			: [a-z]+[0-9]*;
FUNCTION_IDENTIFIER			: [A-Z]+[0-9]*;














