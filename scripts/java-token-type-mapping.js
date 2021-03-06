module.exports = {
  literals: {
    'keyword.control': ['if', 'then', 'else', 'return'],
    'keyword.operator': ['=', '-', '!', '*', '+', '=='],
    'paren.lparen': ['(', '{', '['],
    'paren.rparen': [')', '}', ']'],
    'punctuation.operator': [',', ';', '.'],
    'storage.type': ['', 'int', 'void'],
    'constant.language': ['true', 'false'],
  },
  symbols: {
  	'comment': ['COMMENT', 'LINE_COMMENT'],
    'constant.numeric': ['SHORT', 'INT', 'FLOAT', 'DOUBLE'],
    'constant.character': ['CHAR', 'STRING', 'BOOLEAN', 'VOID'],
    'variable': ['VARIABLE_IDENTIFIER'],
    'support.function': ['FUNCTION_IDENTIFIER', 'PRINT', 'SCAN', 'MAIN_FUNC'],
    'string': ['RETURN', 'IF', 'ELSE_IF', 'ELSE', 'FOR', 'WHILE', 'DO'],
    'string.regexp': ['STRING_LITERAL', 'INTEGER_LITERAL', 'FLOAT_LITERAL', 'CHAR_LITERAL', 'BOOLEAN_LITERAL'],
    'compare' : ['LT', 'LE', 'GT', 'GE', 'EQUAL', 'NOT_EQUAL', 'NOT'],
    'operators': ['ASSIGN', 'SUB', 'MUL', 'ADD', 'DIV', 'ADD_ASSIGN', 'SUB_ASSIGN', 'MUL_ASSIGN', 'DIV_ASSIGN', 'MOD', 'MOD_ASSIGN', 'INC', 'DEC']

  }
};