var editor = ace.edit('editor');
editor.setTheme("ace/theme/twilight");
editor.getSession().setMode('ace/mode/my-mode');

var antlr4 = require('antlr4/index');
var JavaLexer = require('../generated-parser/javaLexer');
var JavaParser = require('../generated-parser/javaParser');

document.getElementById("parse").addEventListener("click", function(){
	console.log("test");
    var input = editor.getValue().toString();
    var chars = new antlr4.InputStream(input);
    var lexer = new JavaLexer.javaLexer(chars);
    var tokens  = new antlr4.CommonTokenStream(lexer);
    var parser = new JavaParser.javaParser(tokens);
	parser.buildParseTrees = true;

    var tree = parser.compilationUnit();
    var inputSplitted = input.split("");
    var rules = [ null, "ABSTRACT", "ASSERT", "BOOLEAN", "BREAK", 
                    "BYTE", "CASE", "CATCH", "CHAR", "CLASS", "CONST", 
                    "CONTINUE", "DEFAULT", "DO", "DOUBLE", "ELSE", 
                    "ENUM", "EXTENDS", "FINAL", "FINALLY", "FLOAT", 
                    "FOR", "IF", "GOTO", "IMPLEMENTS", "IMPORT", 
                    "INSTANCEOF", "INT", "INTERFACE", "LONG", "NATIVE", 
                    "NEW", "PACKAGE", "PRIVATE", "PROTECTED", "PUBLIC", 
                    "RETURN", "SHORT", "STATIC", "STRICTFP", "SUPER", 
                    "SWITCH", "SYNCHRONIZED", "THIS", "THROW", "THROWS", 
                    "TRANSIENT", "TRY", "VOID", "VOLATILE", "WHILE", 
                    "IntegerLiteral", "FloatingPointLiteral", "BooleanLiteral", 
                    "CharacterLiteral", "StringLiteral", "NullLiteral", 
                    "LPAREN", "RPAREN", "LBRACE", "RBRACE", "LBRACK", 
                    "RBRACK", "SEMI", "COMMA", "DOT", "ASSIGN", 
                    "GT", "LT", "BANG", "TILDE", "QUESTION", "COLON", 
                    "EQUAL", "LE", "GE", "NOTEQUAL", "AND", "OR", 
                    "INC", "DEC", "ADD", "SUB", "MUL", "DIV", "BITAND", 
                    "BITOR", "CARET", "MOD", "ADD_ASSIGN", "SUB_ASSIGN", 
                    "MUL_ASSIGN", "DIV_ASSIGN", "AND_ASSIGN", "OR_ASSIGN", 
                    "XOR_ASSIGN", "MOD_ASSIGN", "LSHIFT_ASSIGN", 
                    "RSHIFT_ASSIGN", "URSHIFT_ASSIGN", "Identifier", 
                    "AT", "ELLIPSIS", "WS", "COMMENT", "LINE_COMMENT" ];

    var test = tokens.getTokens(0, tokens.getNumberOfOnChannelTokens());
    console.log(test);
    for(var i=0; i<tokens.getNumberOfOnChannelTokens() - 1; i++) {
    	console.log((inputSplitted.slice(test[i].start, test[i].stop + 1)).join("") + " is of type " + test[i].type + ' = ' + rules[test[i].type]);
    }
});