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
    'constant.character': ['CHAR']
  }
};