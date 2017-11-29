// Generated from Qwerty.g4 by ANTLR 4.5.1
// jshint ignore: start
var antlr4 = require('antlr4/index');
var QwertyListener = require('./QwertyListener').QwertyListener;
var QwertyVisitor = require('./QwertyVisitor').QwertyVisitor;

var grammarFileName = "Qwerty.g4";

var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u0003<\u020d\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017\u0004",
    "\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a\u0004\u001b\t",
    "\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e\t\u001e\u0004",
    "\u001f\t\u001f\u0004 \t \u0004!\t!\u0004\"\t\"\u0004#\t#\u0004$\t$\u0004",
    "%\t%\u0004&\t&\u0004\'\t\'\u0004(\t(\u0004)\t)\u0004*\t*\u0004+\t+\u0004",
    ",\t,\u0004-\t-\u0004.\t.\u0003\u0002\u0007\u0002^\n\u0002\f\u0002\u000e",
    "\u0002a\u000b\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0005\u0003\u008b\n\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0005",
    "\u0004\u0090\n\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0005\u0004",
    "\u0095\n\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0006\u0003",
    "\u0006\u0005\u0006\u009c\n\u0006\u0003\u0006\u0003\u0006\u0005\u0006",
    "\u00a0\n\u0006\u0003\u0006\u0003\u0006\u0005\u0006\u00a4\n\u0006\u0005",
    "\u0006\u00a6\n\u0006\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003\t",
    "\u0003\t\u0005\t\u00ae\n\t\u0003\n\u0003\n\u0003\n\u0003\n\u0003\u000b",
    "\u0003\u000b\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0003\f\u0003\f",
    "\u0003\f\u0003\f\u0007\f\u00be\n\f\f\f\u000e\f\u00c1\u000b\f\u0003\r",
    "\u0003\r\u0005\r\u00c5\n\r\u0003\r\u0003\r\u0003\r\u0003\u000e\u0003",
    "\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000f\u0003",
    "\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003",
    "\u000f\u0005\u000f\u00d8\n\u000f\u0003\u000f\u0003\u000f\u0005\u000f",
    "\u00dc\n\u000f\u0007\u000f\u00de\n\u000f\f\u000f\u000e\u000f\u00e1\u000b",
    "\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0007\u000f\u00e7",
    "\n\u000f\f\u000f\u000e\u000f\u00ea\u000b\u000f\u0007\u000f\u00ec\n\u000f",
    "\f\u000f\u000e\u000f\u00ef\u000b\u000f\u0003\u000f\u0005\u000f\u00f2",
    "\n\u000f\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010",
    "\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0005\u0010\u00fd\n",
    "\u0010\u0005\u0010\u00ff\n\u0010\u0003\u0011\u0003\u0011\u0003\u0011",
    "\u0003\u0011\u0003\u0011\u0005\u0011\u0106\n\u0011\u0003\u0012\u0003",
    "\u0012\u0003\u0013\u0003\u0013\u0003\u0014\u0003\u0014\u0005\u0014\u010e",
    "\n\u0014\u0003\u0014\u0003\u0014\u0005\u0014\u0112\n\u0014\u0003\u0014",
    "\u0005\u0014\u0115\n\u0014\u0003\u0015\u0003\u0015\u0003\u0015\u0003",
    "\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0006\u0015\u011e\n\u0015",
    "\r\u0015\u000e\u0015\u011f\u0003\u0015\u0003\u0015\u0003\u0015\u0003",
    "\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0006\u0015\u012a",
    "\n\u0015\r\u0015\u000e\u0015\u012b\u0003\u0015\u0003\u0015\u0005\u0015",
    "\u0130\n\u0015\u0003\u0016\u0003\u0016\u0003\u0016\u0005\u0016\u0135",
    "\n\u0016\u0003\u0017\u0003\u0017\u0005\u0017\u0139\n\u0017\u0003\u0017",
    "\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017",
    "\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017",
    "\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017",
    "\u0003\u0017\u0003\u0017\u0005\u0017\u0150\n\u0017\u0003\u0017\u0003",
    "\u0017\u0003\u0017\u0003\u0017\u0007\u0017\u0156\n\u0017\f\u0017\u000e",
    "\u0017\u0159\u000b\u0017\u0003\u0018\u0003\u0018\u0003\u0019\u0003\u0019",
    "\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001b\u0003\u001b",
    "\u0003\u001b\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c",
    "\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0005\u001c",
    "\u0170\n\u001c\u0005\u001c\u0172\n\u001c\u0003\u001d\u0003\u001d\u0003",
    "\u001e\u0003\u001e\u0003\u001e\u0003\u001e\u0005\u001e\u017a\n\u001e",
    "\u0003\u001f\u0003\u001f\u0003\u001f\u0005\u001f\u017f\n\u001f\u0003",
    "\u001f\u0003\u001f\u0003 \u0003 \u0003!\u0003!\u0003!\u0003!\u0003!",
    "\u0003!\u0003!\u0003!\u0003!\u0005!\u018e\n!\u0003\"\u0003\"\u0005\"",
    "\u0192\n\"\u0003#\u0003#\u0003#\u0003#\u0003#\u0003#\u0003#\u0003#\u0003",
    "#\u0003#\u0003#\u0007#\u019f\n#\f#\u000e#\u01a2\u000b#\u0003#\u0003",
    "#\u0007#\u01a6\n#\f#\u000e#\u01a9\u000b#\u0003$\u0003$\u0003$\u0003",
    "$\u0003$\u0007$\u01b0\n$\f$\u000e$\u01b3\u000b$\u0003$\u0003$\u0003",
    "%\u0003%\u0007%\u01b9\n%\f%\u000e%\u01bc\u000b%\u0003%\u0003%\u0003",
    "&\u0003&\u0003&\u0003&\u0003&\u0003&\u0003\'\u0003\'\u0003\'\u0003\'",
    "\u0003\'\u0003\'\u0003\'\u0003\'\u0003\'\u0003\'\u0003\'\u0003\'\u0003",
    "\'\u0003\'\u0003\'\u0003\'\u0005\'\u01d6\n\'\u0003(\u0003(\u0003(\u0003",
    "(\u0003(\u0003(\u0003(\u0003(\u0003(\u0003(\u0003)\u0003)\u0003)\u0003",
    ")\u0003)\u0005)\u01e7\n)\u0003*\u0003*\u0003*\u0003*\u0003*\u0003*\u0003",
    "*\u0003+\u0003+\u0003+\u0003+\u0003+\u0003+\u0003+\u0003+\u0003+\u0003",
    "+\u0005+\u01fa\n+\u0003,\u0003,\u0003,\u0003,\u0003,\u0003,\u0003-\u0003",
    "-\u0003-\u0003-\u0003-\u0003-\u0003.\u0003.\u0003.\u0003.\u0003.\u0003",
    ".\u0002\u0003,/\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016",
    "\u0018\u001a\u001c\u001e \"$&(*,.02468:<>@BDFHJLNPRTVXZ\u0002\u000b",
    "\u0003\u0002\u0004\b\u0004\u000266;;\u0004\u0002\u001c\u001f%%\u0003",
    "\u0002\u001c\u001d\u0003\u0002*+\u0003\u0002&+\u0003\u0002/0\u0003\u0002",
    ",-\u0003\u0002 #\u022e\u0002_\u0003\u0002\u0002\u0002\u0004\u008a\u0003",
    "\u0002\u0002\u0002\u0006\u0094\u0003\u0002\u0002\u0002\b\u0096\u0003",
    "\u0002\u0002\u0002\n\u00a5\u0003\u0002\u0002\u0002\f\u00a7\u0003\u0002",
    "\u0002\u0002\u000e\u00a9\u0003\u0002\u0002\u0002\u0010\u00ad\u0003\u0002",
    "\u0002\u0002\u0012\u00af\u0003\u0002\u0002\u0002\u0014\u00b3\u0003\u0002",
    "\u0002\u0002\u0016\u00b7\u0003\u0002\u0002\u0002\u0018\u00c2\u0003\u0002",
    "\u0002\u0002\u001a\u00c9\u0003\u0002\u0002\u0002\u001c\u00f1\u0003\u0002",
    "\u0002\u0002\u001e\u00fe\u0003\u0002\u0002\u0002 \u0105\u0003\u0002",
    "\u0002\u0002\"\u0107\u0003\u0002\u0002\u0002$\u0109\u0003\u0002\u0002",
    "\u0002&\u0114\u0003\u0002\u0002\u0002(\u012f\u0003\u0002\u0002\u0002",
    "*\u0134\u0003\u0002\u0002\u0002,\u014f\u0003\u0002\u0002\u0002.\u015a",
    "\u0003\u0002\u0002\u00020\u015c\u0003\u0002\u0002\u00022\u015e\u0003",
    "\u0002\u0002\u00024\u0162\u0003\u0002\u0002\u00026\u0171\u0003\u0002",
    "\u0002\u00028\u0173\u0003\u0002\u0002\u0002:\u0179\u0003\u0002\u0002",
    "\u0002<\u017b\u0003\u0002\u0002\u0002>\u0182\u0003\u0002\u0002\u0002",
    "@\u018d\u0003\u0002\u0002\u0002B\u0191\u0003\u0002\u0002\u0002D\u0193",
    "\u0003\u0002\u0002\u0002F\u01aa\u0003\u0002\u0002\u0002H\u01b6\u0003",
    "\u0002\u0002\u0002J\u01bf\u0003\u0002\u0002\u0002L\u01d5\u0003\u0002",
    "\u0002\u0002N\u01d7\u0003\u0002\u0002\u0002P\u01e1\u0003\u0002\u0002",
    "\u0002R\u01e8\u0003\u0002\u0002\u0002T\u01f9\u0003\u0002\u0002\u0002",
    "V\u01fb\u0003\u0002\u0002\u0002X\u0201\u0003\u0002\u0002\u0002Z\u0207",
    "\u0003\u0002\u0002\u0002\\^\u0005\u0010\t\u0002]\\\u0003\u0002\u0002",
    "\u0002^a\u0003\u0002\u0002\u0002_]\u0003\u0002\u0002\u0002_`\u0003\u0002",
    "\u0002\u0002`b\u0003\u0002\u0002\u0002a_\u0003\u0002\u0002\u0002bc\u0005",
    "\u001a\u000e\u0002cd\u0007\u0002\u0002\u0003d\u0003\u0003\u0002\u0002",
    "\u0002e\u008b\u0005\u0006\u0004\u0002fg\u00052\u001a\u0002gh\u0007\u0019",
    "\u0002\u0002h\u008b\u0003\u0002\u0002\u0002ij\u00052\u001a\u0002jk\b",
    "\u0003\u0001\u0002k\u008b\u0003\u0002\u0002\u0002lm\u00056\u001c\u0002",
    "mn\u0007\u0019\u0002\u0002n\u008b\u0003\u0002\u0002\u0002op\u0005X-",
    "\u0002pq\u0007\u0019\u0002\u0002q\u008b\u0003\u0002\u0002\u0002rs\u0005",
    "<\u001f\u0002st\u0007\u0019\u0002\u0002t\u008b\u0003\u0002\u0002\u0002",
    "u\u008b\u0005D#\u0002v\u008b\u0005J&\u0002w\u008b\u0005L\'\u0002x\u008b",
    "\u0005N(\u0002yz\u0005P)\u0002z{\u0007\u0019\u0002\u0002{\u008b\u0003",
    "\u0002\u0002\u0002|}\u0005R*\u0002}~\u0007\u0019\u0002\u0002~\u008b",
    "\u0003\u0002\u0002\u0002\u007f\u0080\u0005R*\u0002\u0080\u0081\b\u0003",
    "\u0001\u0002\u0081\u008b\u0003\u0002\u0002\u0002\u0082\u0083\u0005T",
    "+\u0002\u0083\u0084\u0007\u0019\u0002\u0002\u0084\u008b\u0003\u0002",
    "\u0002\u0002\u0085\u0086\u0005T+\u0002\u0086\u0087\b\u0003\u0001\u0002",
    "\u0087\u008b\u0003\u0002\u0002\u0002\u0088\u008b\u0007\u001a\u0002\u0002",
    "\u0089\u008b\u0007\u001b\u0002\u0002\u008ae\u0003\u0002\u0002\u0002",
    "\u008af\u0003\u0002\u0002\u0002\u008ai\u0003\u0002\u0002\u0002\u008a",
    "l\u0003\u0002\u0002\u0002\u008ao\u0003\u0002\u0002\u0002\u008ar\u0003",
    "\u0002\u0002\u0002\u008au\u0003\u0002\u0002\u0002\u008av\u0003\u0002",
    "\u0002\u0002\u008aw\u0003\u0002\u0002\u0002\u008ax\u0003\u0002\u0002",
    "\u0002\u008ay\u0003\u0002\u0002\u0002\u008a|\u0003\u0002\u0002\u0002",
    "\u008a\u007f\u0003\u0002\u0002\u0002\u008a\u0082\u0003\u0002\u0002\u0002",
    "\u008a\u0085\u0003\u0002\u0002\u0002\u008a\u0088\u0003\u0002\u0002\u0002",
    "\u008a\u0089\u0003\u0002\u0002\u0002\u008b\u0005\u0003\u0002\u0002\u0002",
    "\u008c\u008d\u0005\b\u0005\u0002\u008d\u008f\u0007\u0019\u0002\u0002",
    "\u008e\u0090\u0005\u0006\u0004\u0002\u008f\u008e\u0003\u0002\u0002\u0002",
    "\u008f\u0090\u0003\u0002\u0002\u0002\u0090\u0095\u0003\u0002\u0002\u0002",
    "\u0091\u0092\u0005V,\u0002\u0092\u0093\u0007\u0019\u0002\u0002\u0093",
    "\u0095\u0003\u0002\u0002\u0002\u0094\u008c\u0003\u0002\u0002\u0002\u0094",
    "\u0091\u0003\u0002\u0002\u0002\u0095\u0007\u0003\u0002\u0002\u0002\u0096",
    "\u0097\u0005\u000e\b\u0002\u0097\u0098\u0005\n\u0006\u0002\u0098\t\u0003",
    "\u0002\u0002\u0002\u0099\u009b\u0007;\u0002\u0002\u009a\u009c\u0005",
    "4\u001b\u0002\u009b\u009a\u0003\u0002\u0002\u0002\u009b\u009c\u0003",
    "\u0002\u0002\u0002\u009c\u009d\u0003\u0002\u0002\u0002\u009d\u009f\u0007",
    "\u0018\u0002\u0002\u009e\u00a0\u0005\n\u0006\u0002\u009f\u009e\u0003",
    "\u0002\u0002\u0002\u009f\u00a0\u0003\u0002\u0002\u0002\u00a0\u00a6\u0003",
    "\u0002\u0002\u0002\u00a1\u00a3\u0007;\u0002\u0002\u00a2\u00a4\u0005",
    "4\u001b\u0002\u00a3\u00a2\u0003\u0002\u0002\u0002\u00a3\u00a4\u0003",
    "\u0002\u0002\u0002\u00a4\u00a6\u0003\u0002\u0002\u0002\u00a5\u0099\u0003",
    "\u0002\u0002\u0002\u00a5\u00a1\u0003\u0002\u0002\u0002\u00a6\u000b\u0003",
    "\u0002\u0002\u0002\u00a7\u00a8\u00076\u0002\u0002\u00a8\r\u0003\u0002",
    "\u0002\u0002\u00a9\u00aa\t\u0002\u0002\u0002\u00aa\u000f\u0003\u0002",
    "\u0002\u0002\u00ab\u00ae\u0005\u0012\n\u0002\u00ac\u00ae\u0005\u0014",
    "\u000b\u0002\u00ad\u00ab\u0003\u0002\u0002\u0002\u00ad\u00ac\u0003\u0002",
    "\u0002\u0002\u00ae\u0011\u0003\u0002\u0002\u0002\u00af\u00b0\u0005\u000e",
    "\b\u0002\u00b0\u00b1\u0007<\u0002\u0002\u00b1\u00b2\u0005\u0018\r\u0002",
    "\u00b2\u0013\u0003\u0002\u0002\u0002\u00b3\u00b4\u00075\u0002\u0002",
    "\u00b4\u00b5\u0007<\u0002\u0002\u00b5\u00b6\u0005\u0018\r\u0002\u00b6",
    "\u0015\u0003\u0002\u0002\u0002\u00b7\u00b8\u0005\u000e\b\u0002\u00b8",
    "\u00bf\u0007;\u0002\u0002\u00b9\u00ba\u0007\u0018\u0002\u0002\u00ba",
    "\u00bb\u0005\u000e\b\u0002\u00bb\u00bc\u0007;\u0002\u0002\u00bc\u00be",
    "\u0003\u0002\u0002\u0002\u00bd\u00b9\u0003\u0002\u0002\u0002\u00be\u00c1",
    "\u0003\u0002\u0002\u0002\u00bf\u00bd\u0003\u0002\u0002\u0002\u00bf\u00c0",
    "\u0003\u0002\u0002\u0002\u00c0\u0017\u0003\u0002\u0002\u0002\u00c1\u00bf",
    "\u0003\u0002\u0002\u0002\u00c2\u00c4\u0007\u0012\u0002\u0002\u00c3\u00c5",
    "\u0005\u0016\f\u0002\u00c4\u00c3\u0003\u0002\u0002\u0002\u00c4\u00c5",
    "\u0003\u0002\u0002\u0002\u00c5\u00c6\u0003\u0002\u0002\u0002\u00c6\u00c7",
    "\u0007\u0013\u0002\u0002\u00c7\u00c8\u0005H%\u0002\u00c8\u0019\u0003",
    "\u0002\u0002\u0002\u00c9\u00ca\u00075\u0002\u0002\u00ca\u00cb\u0007",
    "3\u0002\u0002\u00cb\u00cc\u0007\u0012\u0002\u0002\u00cc\u00cd\u0007",
    "\u0013\u0002\u0002\u00cd\u00ce\u0005H%\u0002\u00ce\u001b\u0003\u0002",
    "\u0002\u0002\u00cf\u00f2\u0005\u001e\u0010\u0002\u00d0\u00d1\u0005\u001e",
    "\u0010\u0002\u00d1\u00d2\u0007\u001c\u0002\u0002\u00d2\u00d3\u0005\u001c",
    "\u000f\u0002\u00d3\u00f2\u0003\u0002\u0002\u0002\u00d4\u00df\u0005(",
    "\u0015\u0002\u00d5\u00d8\u0005.\u0018\u0002\u00d6\u00d8\u0005\"\u0012",
    "\u0002\u00d7\u00d5\u0003\u0002\u0002\u0002\u00d7\u00d6\u0003\u0002\u0002",
    "\u0002\u00d8\u00db\u0003\u0002\u0002\u0002\u00d9\u00dc\u0005\u001e\u0010",
    "\u0002\u00da\u00dc\u0005 \u0011\u0002\u00db\u00d9\u0003\u0002\u0002",
    "\u0002\u00db\u00da\u0003\u0002\u0002\u0002\u00dc\u00de\u0003\u0002\u0002",
    "\u0002\u00dd\u00d7\u0003\u0002\u0002\u0002\u00de\u00e1\u0003\u0002\u0002",
    "\u0002\u00df\u00dd\u0003\u0002\u0002\u0002\u00df\u00e0\u0003\u0002\u0002",
    "\u0002\u00e0\u00f2\u0003\u0002\u0002\u0002\u00e1\u00df\u0003\u0002\u0002",
    "\u0002\u00e2\u00ed\u0005 \u0011\u0002\u00e3\u00e8\u0005\"\u0012\u0002",
    "\u00e4\u00e7\u0005 \u0011\u0002\u00e5\u00e7\u0005(\u0015\u0002\u00e6",
    "\u00e4\u0003\u0002\u0002\u0002\u00e6\u00e5\u0003\u0002\u0002\u0002\u00e7",
    "\u00ea\u0003\u0002\u0002\u0002\u00e8\u00e6\u0003\u0002\u0002\u0002\u00e8",
    "\u00e9\u0003\u0002\u0002\u0002\u00e9\u00ec\u0003\u0002\u0002\u0002\u00ea",
    "\u00e8\u0003\u0002\u0002\u0002\u00eb\u00e3\u0003\u0002\u0002\u0002\u00ec",
    "\u00ef\u0003\u0002\u0002\u0002\u00ed\u00eb\u0003\u0002\u0002\u0002\u00ed",
    "\u00ee\u0003\u0002\u0002\u0002\u00ee\u00f2\u0003\u0002\u0002\u0002\u00ef",
    "\u00ed\u0003\u0002\u0002\u0002\u00f0\u00f2\u0005,\u0017\u0002\u00f1",
    "\u00cf\u0003\u0002\u0002\u0002\u00f1\u00d0\u0003\u0002\u0002\u0002\u00f1",
    "\u00d4\u0003\u0002\u0002\u0002\u00f1\u00e2\u0003\u0002\u0002\u0002\u00f1",
    "\u00f0\u0003\u0002\u0002\u0002\u00f2\u001d\u0003\u0002\u0002\u0002\u00f3",
    "\u00f4\u0007\u0012\u0002\u0002\u00f4\u00f5\u0005\u001e\u0010\u0002\u00f5",
    "\u00f6\u0007\u0013\u0002\u0002\u00f6\u00ff\u0003\u0002\u0002\u0002\u00f7",
    "\u00ff\u00079\u0002\u0002\u00f8\u00fc\u0007;\u0002\u0002\u00f9\u00fa",
    "\u0007\u0016\u0002\u0002\u00fa\u00fb\t\u0003\u0002\u0002\u00fb\u00fd",
    "\u0007\u0017\u0002\u0002\u00fc\u00f9\u0003\u0002\u0002\u0002\u00fc\u00fd",
    "\u0003\u0002\u0002\u0002\u00fd\u00ff\u0003\u0002\u0002\u0002\u00fe\u00f3",
    "\u0003\u0002\u0002\u0002\u00fe\u00f7\u0003\u0002\u0002\u0002\u00fe\u00f8",
    "\u0003\u0002\u0002\u0002\u00ff\u001f\u0003\u0002\u0002\u0002\u0100\u0101",
    "\u0007\u0012\u0002\u0002\u0101\u0102\u0005 \u0011\u0002\u0102\u0103",
    "\u0007\u0013\u0002\u0002\u0103\u0106\u0003\u0002\u0002\u0002\u0104\u0106",
    "\u0005&\u0014\u0002\u0105\u0100\u0003\u0002\u0002\u0002\u0105\u0104",
    "\u0003\u0002\u0002\u0002\u0106!\u0003\u0002\u0002\u0002\u0107\u0108",
    "\t\u0004\u0002\u0002\u0108#\u0003\u0002\u0002\u0002\u0109\u010a\t\u0005",
    "\u0002\u0002\u010a%\u0003\u0002\u0002\u0002\u010b\u0115\u00078\u0002",
    "\u0002\u010c\u010e\u0005$\u0013\u0002\u010d\u010c\u0003\u0002\u0002",
    "\u0002\u010d\u010e\u0003\u0002\u0002\u0002\u010e\u010f\u0003\u0002\u0002",
    "\u0002\u010f\u0115\u00076\u0002\u0002\u0110\u0112\u0005$\u0013\u0002",
    "\u0111\u0110\u0003\u0002\u0002\u0002\u0111\u0112\u0003\u0002\u0002\u0002",
    "\u0112\u0113\u0003\u0002\u0002\u0002\u0113\u0115\u00077\u0002\u0002",
    "\u0114\u010b\u0003\u0002\u0002\u0002\u0114\u010d\u0003\u0002\u0002\u0002",
    "\u0114\u0111\u0003\u0002\u0002\u0002\u0115\'\u0003\u0002\u0002\u0002",
    "\u0116\u0117\u0007\u0012\u0002\u0002\u0117\u0118\u0005(\u0015\u0002",
    "\u0118\u0119\u0007\u0013\u0002\u0002\u0119\u0130\u0003\u0002\u0002\u0002",
    "\u011a\u0130\u0005*\u0016\u0002\u011b\u011d\u0007\u0012\u0002\u0002",
    "\u011c\u011e\u0007\u0012\u0002\u0002\u011d\u011c\u0003\u0002\u0002\u0002",
    "\u011e\u011f\u0003\u0002\u0002\u0002\u011f\u011d\u0003\u0002\u0002\u0002",
    "\u011f\u0120\u0003\u0002\u0002\u0002\u0120\u0121\u0003\u0002\u0002\u0002",
    "\u0121\u0122\u0005(\u0015\u0002\u0122\u0123\u0007\u0013\u0002\u0002",
    "\u0123\u0124\b\u0015\u0001\u0002\u0124\u0130\u0003\u0002\u0002\u0002",
    "\u0125\u0126\u0007\u0012\u0002\u0002\u0126\u0127\u0005(\u0015\u0002",
    "\u0127\u0129\u0007\u0013\u0002\u0002\u0128\u012a\u0007\u0013\u0002\u0002",
    "\u0129\u0128\u0003\u0002\u0002\u0002\u012a\u012b\u0003\u0002\u0002\u0002",
    "\u012b\u0129\u0003\u0002\u0002\u0002\u012b\u012c\u0003\u0002\u0002\u0002",
    "\u012c\u012d\u0003\u0002\u0002\u0002\u012d\u012e\b\u0015\u0001\u0002",
    "\u012e\u0130\u0003\u0002\u0002\u0002\u012f\u0116\u0003\u0002\u0002\u0002",
    "\u012f\u011a\u0003\u0002\u0002\u0002\u012f\u011b\u0003\u0002\u0002\u0002",
    "\u012f\u0125\u0003\u0002\u0002\u0002\u0130)\u0003\u0002\u0002\u0002",
    "\u0131\u0135\u0007;\u0002\u0002\u0132\u0135\u0005<\u001f\u0002\u0133",
    "\u0135\u0005&\u0014\u0002\u0134\u0131\u0003\u0002\u0002\u0002\u0134",
    "\u0132\u0003\u0002\u0002\u0002\u0134\u0133\u0003\u0002\u0002\u0002\u0135",
    "+\u0003\u0002\u0002\u0002\u0136\u0138\b\u0017\u0001\u0002\u0137\u0139",
    "\u00071\u0002\u0002\u0138\u0137\u0003\u0002\u0002\u0002\u0138\u0139",
    "\u0003\u0002\u0002\u0002\u0139\u013a\u0003\u0002\u0002\u0002\u013a\u013b",
    "\u0007\u0012\u0002\u0002\u013b\u013c\u0005,\u0017\u0002\u013c\u013d",
    "\u0007\u0013\u0002\u0002\u013d\u0150\u0003\u0002\u0002\u0002\u013e\u013f",
    "\u0005 \u0011\u0002\u013f\u0140\u0005.\u0018\u0002\u0140\u0141\u0005",
    " \u0011\u0002\u0141\u0150\u0003\u0002\u0002\u0002\u0142\u0143\u0005",
    "\u001e\u0010\u0002\u0143\u0144\t\u0006\u0002\u0002\u0144\u0145\u0005",
    "\u001e\u0010\u0002\u0145\u0150\u0003\u0002\u0002\u0002\u0146\u0147\u0005",
    "(\u0015\u0002\u0147\u0148\u0005.\u0018\u0002\u0148\u0149\u0005(\u0015",
    "\u0002\u0149\u0150\u0003\u0002\u0002\u0002\u014a\u0150\u0007:\u0002",
    "\u0002\u014b\u014c\u00071\u0002\u0002\u014c\u014d\u0007\u0012\u0002",
    "\u0002\u014d\u014e\u0007:\u0002\u0002\u014e\u0150\u0007\u0013\u0002",
    "\u0002\u014f\u0136\u0003\u0002\u0002\u0002\u014f\u013e\u0003\u0002\u0002",
    "\u0002\u014f\u0142\u0003\u0002\u0002\u0002\u014f\u0146\u0003\u0002\u0002",
    "\u0002\u014f\u014a\u0003\u0002\u0002\u0002\u014f\u014b\u0003\u0002\u0002",
    "\u0002\u0150\u0157\u0003\u0002\u0002\u0002\u0151\u0152\f\b\u0002\u0002",
    "\u0152\u0153\u00050\u0019\u0002\u0153\u0154\u0005,\u0017\t\u0154\u0156",
    "\u0003\u0002\u0002\u0002\u0155\u0151\u0003\u0002\u0002\u0002\u0156\u0159",
    "\u0003\u0002\u0002\u0002\u0157\u0155\u0003\u0002\u0002\u0002\u0157\u0158",
    "\u0003\u0002\u0002\u0002\u0158-\u0003\u0002\u0002\u0002\u0159\u0157",
    "\u0003\u0002\u0002\u0002\u015a\u015b\t\u0007\u0002\u0002\u015b/\u0003",
    "\u0002\u0002\u0002\u015c\u015d\t\b\u0002\u0002\u015d1\u0003\u0002\u0002",
    "\u0002\u015e\u015f\u00072\u0002\u0002\u015f\u0160\u0007;\u0002\u0002",
    "\u0160\u0161\u00054\u001b\u0002\u01613\u0003\u0002\u0002\u0002\u0162",
    "\u0163\u0007.\u0002\u0002\u0163\u0164\u0005:\u001e\u0002\u01645\u0003",
    "\u0002\u0002\u0002\u0165\u0166\u0007;\u0002\u0002\u0166\u0167\u0007",
    ".\u0002\u0002\u0167\u0172\u0005:\u001e\u0002\u0168\u0169\u0007;\u0002",
    "\u0002\u0169\u0172\t\t\u0002\u0002\u016a\u016b\u0007;\u0002\u0002\u016b",
    "\u016f\u00058\u001d\u0002\u016c\u0170\u0005\u001c\u000f\u0002\u016d",
    "\u0170\u0005&\u0014\u0002\u016e\u0170\u00079\u0002\u0002\u016f\u016c",
    "\u0003\u0002\u0002\u0002\u016f\u016d\u0003\u0002\u0002\u0002\u016f\u016e",
    "\u0003\u0002\u0002\u0002\u0170\u0172\u0003\u0002\u0002\u0002\u0171\u0165",
    "\u0003\u0002\u0002\u0002\u0171\u0168\u0003\u0002\u0002\u0002\u0171\u016a",
    "\u0003\u0002\u0002\u0002\u01727\u0003\u0002\u0002\u0002\u0173\u0174",
    "\t\n\u0002\u0002\u01749\u0003\u0002\u0002\u0002\u0175\u017a\u0005\u001c",
    "\u000f\u0002\u0176\u017a\u0005&\u0014\u0002\u0177\u017a\u00079\u0002",
    "\u0002\u0178\u017a\u0007:\u0002\u0002\u0179\u0175\u0003\u0002\u0002",
    "\u0002\u0179\u0176\u0003\u0002\u0002\u0002\u0179\u0177\u0003\u0002\u0002",
    "\u0002\u0179\u0178\u0003\u0002\u0002\u0002\u017a;\u0003\u0002\u0002",
    "\u0002\u017b\u017c\u0007<\u0002\u0002\u017c\u017e\u0007\u0012\u0002",
    "\u0002\u017d\u017f\u0005> \u0002\u017e\u017d\u0003\u0002\u0002\u0002",
    "\u017e\u017f\u0003\u0002\u0002\u0002\u017f\u0180\u0003\u0002\u0002\u0002",
    "\u0180\u0181\u0007\u0013\u0002\u0002\u0181=\u0003\u0002\u0002\u0002",
    "\u0182\u0183\u0005@!\u0002\u0183?\u0003\u0002\u0002\u0002\u0184\u0185",
    "\u0007;\u0002\u0002\u0185\u0186\u0007\u0018\u0002\u0002\u0186\u018e",
    "\u0005@!\u0002\u0187\u018e\u0007;\u0002\u0002\u0188\u0189\u0005\u001c",
    "\u000f\u0002\u0189\u018a\u0007\u0018\u0002\u0002\u018a\u018b\u0005@",
    "!\u0002\u018b\u018e\u0003\u0002\u0002\u0002\u018c\u018e\u0005\u001c",
    "\u000f\u0002\u018d\u0184\u0003\u0002\u0002\u0002\u018d\u0187\u0003\u0002",
    "\u0002\u0002\u018d\u0188\u0003\u0002\u0002\u0002\u018d\u018c\u0003\u0002",
    "\u0002\u0002\u018eA\u0003\u0002\u0002\u0002\u018f\u0192\u0005,\u0017",
    "\u0002\u0190\u0192\u0007:\u0002\u0002\u0191\u018f\u0003\u0002\u0002",
    "\u0002\u0191\u0190\u0003\u0002\u0002\u0002\u0192C\u0003\u0002\u0002",
    "\u0002\u0193\u0194\u0007\t\u0002\u0002\u0194\u0195\u0007\u0012\u0002",
    "\u0002\u0195\u0196\u0005B\"\u0002\u0196\u0197\u0007\u0013\u0002\u0002",
    "\u0197\u01a0\u0005H%\u0002\u0198\u0199\u0007\n\u0002\u0002\u0199\u019a",
    "\u0007\u0012\u0002\u0002\u019a\u019b\u0005B\"\u0002\u019b\u019c\u0007",
    "\u0013\u0002\u0002\u019c\u019d\u0005H%\u0002\u019d\u019f\u0003\u0002",
    "\u0002\u0002\u019e\u0198\u0003\u0002\u0002\u0002\u019f\u01a2\u0003\u0002",
    "\u0002\u0002\u01a0\u019e\u0003\u0002\u0002\u0002\u01a0\u01a1\u0003\u0002",
    "\u0002\u0002\u01a1\u01a7\u0003\u0002\u0002\u0002\u01a2\u01a0\u0003\u0002",
    "\u0002\u0002\u01a3\u01a4\u0007\u000b\u0002\u0002\u01a4\u01a6\u0005H",
    "%\u0002\u01a5\u01a3\u0003\u0002\u0002\u0002\u01a6\u01a9\u0003\u0002",
    "\u0002\u0002\u01a7\u01a5\u0003\u0002\u0002\u0002\u01a7\u01a8\u0003\u0002",
    "\u0002\u0002\u01a8E\u0003\u0002\u0002\u0002\u01a9\u01a7\u0003\u0002",
    "\u0002\u0002\u01aa\u01ab\u0007\u0012\u0002\u0002\u01ab\u01ac\u0005B",
    "\"\u0002\u01ac\u01ad\u0007\u0013\u0002\u0002\u01ad\u01b1\u0007\u0014",
    "\u0002\u0002\u01ae\u01b0\u0005\u0004\u0003\u0002\u01af\u01ae\u0003\u0002",
    "\u0002\u0002\u01b0\u01b3\u0003\u0002\u0002\u0002\u01b1\u01af\u0003\u0002",
    "\u0002\u0002\u01b1\u01b2\u0003\u0002\u0002\u0002\u01b2\u01b4\u0003\u0002",
    "\u0002\u0002\u01b3\u01b1\u0003\u0002\u0002\u0002\u01b4\u01b5\u0007\u0015",
    "\u0002\u0002\u01b5G\u0003\u0002\u0002\u0002\u01b6\u01ba\u0007\u0014",
    "\u0002\u0002\u01b7\u01b9\u0005\u0004\u0003\u0002\u01b8\u01b7\u0003\u0002",
    "\u0002\u0002\u01b9\u01bc\u0003\u0002\u0002\u0002\u01ba\u01b8\u0003\u0002",
    "\u0002\u0002\u01ba\u01bb\u0003\u0002\u0002\u0002\u01bb\u01bd\u0003\u0002",
    "\u0002\u0002\u01bc\u01ba\u0003\u0002\u0002\u0002\u01bd\u01be\u0007\u0015",
    "\u0002\u0002\u01beI\u0003\u0002\u0002\u0002\u01bf\u01c0\u0007\r\u0002",
    "\u0002\u01c0\u01c1\u0007\u0012\u0002\u0002\u01c1\u01c2\u0005B\"\u0002",
    "\u01c2\u01c3\u0007\u0013\u0002\u0002\u01c3\u01c4\u0005H%\u0002\u01c4",
    "K\u0003\u0002\u0002\u0002\u01c5\u01c6\u0007\u000e\u0002\u0002\u01c6",
    "\u01c7\u0005H%\u0002\u01c7\u01c8\u0007\r\u0002\u0002\u01c8\u01c9\u0007",
    "\u0012\u0002\u0002\u01c9\u01ca\u0005B\"\u0002\u01ca\u01cb\u0007\u0013",
    "\u0002\u0002\u01cb\u01cc\u0007\u0019\u0002\u0002\u01cc\u01d6\u0003\u0002",
    "\u0002\u0002\u01cd\u01ce\u0007\u000e\u0002\u0002\u01ce\u01cf\u0005H",
    "%\u0002\u01cf\u01d0\u0007\r\u0002\u0002\u01d0\u01d1\u0007\u0012\u0002",
    "\u0002\u01d1\u01d2\u0005B\"\u0002\u01d2\u01d3\u0007\u0013\u0002\u0002",
    "\u01d3\u01d4\b\'\u0001\u0002\u01d4\u01d6\u0003\u0002\u0002\u0002\u01d5",
    "\u01c5\u0003\u0002\u0002\u0002\u01d5\u01cd\u0003\u0002\u0002\u0002\u01d6",
    "M\u0003\u0002\u0002\u0002\u01d7\u01d8\u0007\f\u0002\u0002\u01d8\u01d9",
    "\u0007\u0012\u0002\u0002\u01d9\u01da\u0005\b\u0005\u0002\u01da\u01db",
    "\u0007\u0019\u0002\u0002\u01db\u01dc\u0005,\u0017\u0002\u01dc\u01dd",
    "\u0007\u0019\u0002\u0002\u01dd\u01de\u00056\u001c\u0002\u01de\u01df",
    "\u0007\u0013\u0002\u0002\u01df\u01e0\u0005H%\u0002\u01e0O\u0003\u0002",
    "\u0002\u0002\u01e1\u01e6\u00074\u0002\u0002\u01e2\u01e7\u0005\u001c",
    "\u000f\u0002\u01e3\u01e7\u00079\u0002\u0002\u01e4\u01e7\u0007:\u0002",
    "\u0002\u01e5\u01e7\u0005&\u0014\u0002\u01e6\u01e2\u0003\u0002\u0002",
    "\u0002\u01e6\u01e3\u0003\u0002\u0002\u0002\u01e6\u01e4\u0003\u0002\u0002",
    "\u0002\u01e6\u01e5\u0003\u0002\u0002\u0002\u01e7Q\u0003\u0002\u0002",
    "\u0002\u01e8\u01e9\u0007\u0011\u0002\u0002\u01e9\u01ea\u0007\u0012\u0002",
    "\u0002\u01ea\u01eb\u00079\u0002\u0002\u01eb\u01ec\u0007\u0018\u0002",
    "\u0002\u01ec\u01ed\u0007;\u0002\u0002\u01ed\u01ee\u0007\u0013\u0002",
    "\u0002\u01eeS\u0003\u0002\u0002\u0002\u01ef\u01f0\u0007\u000f\u0002",
    "\u0002\u01f0\u01f1\u0007\u0012\u0002\u0002\u01f1\u01f2\u0005\u001c\u000f",
    "\u0002\u01f2\u01f3\u0007\u0013\u0002\u0002\u01f3\u01fa\u0003\u0002\u0002",
    "\u0002\u01f4\u01f5\u0007\u0010\u0002\u0002\u01f5\u01f6\u0007\u0012\u0002",
    "\u0002\u01f6\u01f7\u0005\u001c\u000f\u0002\u01f7\u01f8\u0007\u0013\u0002",
    "\u0002\u01f8\u01fa\u0003\u0002\u0002\u0002\u01f9\u01ef\u0003\u0002\u0002",
    "\u0002\u01f9\u01f4\u0003\u0002\u0002\u0002\u01faU\u0003\u0002\u0002",
    "\u0002\u01fb\u01fc\u0005\u000e\b\u0002\u01fc\u01fd\u0007\u0016\u0002",
    "\u0002\u01fd\u01fe\t\u0003\u0002\u0002\u01fe\u01ff\u0007\u0017\u0002",
    "\u0002\u01ff\u0200\u0007;\u0002\u0002\u0200W\u0003\u0002\u0002\u0002",
    "\u0201\u0202\u0007;\u0002\u0002\u0202\u0203\u0007\u0016\u0002\u0002",
    "\u0203\u0204\t\u0003\u0002\u0002\u0204\u0205\u0007\u0017\u0002\u0002",
    "\u0205\u0206\u00054\u001b\u0002\u0206Y\u0003\u0002\u0002\u0002\u0207",
    "\u0208\u0007;\u0002\u0002\u0208\u0209\u0007\u0016\u0002\u0002\u0209",
    "\u020a\t\u0003\u0002\u0002\u020a\u020b\u0007\u0017\u0002\u0002\u020b",
    "[\u0003\u0002\u0002\u0002._\u008a\u008f\u0094\u009b\u009f\u00a3\u00a5",
    "\u00ad\u00bf\u00c4\u00d7\u00db\u00df\u00e6\u00e8\u00ed\u00f1\u00fc\u00fe",
    "\u0105\u010d\u0111\u0114\u011f\u012b\u012f\u0134\u0138\u014f\u0157\u016f",
    "\u0171\u0179\u017e\u018d\u0191\u01a0\u01a7\u01b1\u01ba\u01d5\u01e6\u01f9"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, null, "'int'", "'float'", "'char'", "'string'", 
                     "'boolean'", "'if'", "'else if'", "'else'", "'for'", 
                     "'while'", "'do'", "'print'", "'println'", "'scan'", 
                     "'('", "')'", "'{'", "'}'", "'['", "']'", "','", "';'", 
                     null, null, "'+'", "'-'", "'*'", "'/'", "'+='", "'-='", 
                     "'*='", "'/='", "'%='", "'%'", "'<'", "'<='", "'>'", 
                     "'>='", "'=='", "'!='", "'++'", "'--'", "'='", "'&&'", 
                     "'||'", "'!'", "'constant'", "'main'", "'return'", 
                     "'void'" ];

var symbolicNames = [ null, "HT_NL_CR", "INT", "FLOAT", "CHAR", "STRING", 
                      "BOOLEAN", "IF", "ELSE_IF", "ELSE", "FOR", "WHILE", 
                      "DO", "PRINT", "PRINTLN", "SCAN", "OPEN_PAR", "CLOSE_PAR", 
                      "OPEN_BRACE", "CLOSE_BRACE", "OPEN_BRACKET", "CLOSE_BRACKET", 
                      "ENUMERATION", "END", "COMMENT", "LINE_COMMENT", "ADD", 
                      "SUB", "MUL", "DIV", "ADD_ASSIGN", "SUB_ASSIGN", "MUL_ASSIGN", 
                      "DIV_ASSIGN", "MOD_ASSIGN", "MOD", "LT", "LE", "GT", 
                      "GE", "EQUAL", "NOTEQUAL", "INC", "DEC", "ASSIGN", 
                      "AND", "OR", "NOT", "CONSTANT_KEYWORD", "MAIN_FUNC", 
                      "RETURN", "VOID", "INTEGER_LITERAL", "FLOAT_LITERAL", 
                      "CHAR_LITERAL", "STRING_LITERAL", "BOOLEAN_LITERAL", 
                      "VARIABLE_IDENTIFIER", "FUNCTION_IDENTIFIER" ];

var ruleNames =  [ "program", "statement", "vardecl_list", "var_decl", "var_identifier_list", 
                   "array_size", "data_type", "function_declaration", "function_return", 
                   "function_noreturn", "parameters", "function_block", 
                   "main_function", "expression", "string_expression", "num_expression", 
                   "num_ope", "unary_ope", "num_factor", "var_func_expression", 
                   "var_func_factor", "bool_expression", "relational_ope", 
                   "logical_ope", "const_statement", "var_assignment_statement", 
                   "assignment_statement", "assignment_num_ope", "assignment_factor", 
                   "funccall_statement", "actual_parameter_list", "actual_params", 
                   "conditional_factor", "if_statement", "conditional_block", 
                   "code_block", "while_statement", "do_while_statement", 
                   "for_statement", "return_statement", "scan_statement", 
                   "print_statement", "arr_decl", "arr_assignment", "arr_expression" ];

function QwertyParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

QwertyParser.prototype = Object.create(antlr4.Parser.prototype);
QwertyParser.prototype.constructor = QwertyParser;

Object.defineProperty(QwertyParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

QwertyParser.EOF = antlr4.Token.EOF;
QwertyParser.HT_NL_CR = 1;
QwertyParser.INT = 2;
QwertyParser.FLOAT = 3;
QwertyParser.CHAR = 4;
QwertyParser.STRING = 5;
QwertyParser.BOOLEAN = 6;
QwertyParser.IF = 7;
QwertyParser.ELSE_IF = 8;
QwertyParser.ELSE = 9;
QwertyParser.FOR = 10;
QwertyParser.WHILE = 11;
QwertyParser.DO = 12;
QwertyParser.PRINT = 13;
QwertyParser.PRINTLN = 14;
QwertyParser.SCAN = 15;
QwertyParser.OPEN_PAR = 16;
QwertyParser.CLOSE_PAR = 17;
QwertyParser.OPEN_BRACE = 18;
QwertyParser.CLOSE_BRACE = 19;
QwertyParser.OPEN_BRACKET = 20;
QwertyParser.CLOSE_BRACKET = 21;
QwertyParser.ENUMERATION = 22;
QwertyParser.END = 23;
QwertyParser.COMMENT = 24;
QwertyParser.LINE_COMMENT = 25;
QwertyParser.ADD = 26;
QwertyParser.SUB = 27;
QwertyParser.MUL = 28;
QwertyParser.DIV = 29;
QwertyParser.ADD_ASSIGN = 30;
QwertyParser.SUB_ASSIGN = 31;
QwertyParser.MUL_ASSIGN = 32;
QwertyParser.DIV_ASSIGN = 33;
QwertyParser.MOD_ASSIGN = 34;
QwertyParser.MOD = 35;
QwertyParser.LT = 36;
QwertyParser.LE = 37;
QwertyParser.GT = 38;
QwertyParser.GE = 39;
QwertyParser.EQUAL = 40;
QwertyParser.NOTEQUAL = 41;
QwertyParser.INC = 42;
QwertyParser.DEC = 43;
QwertyParser.ASSIGN = 44;
QwertyParser.AND = 45;
QwertyParser.OR = 46;
QwertyParser.NOT = 47;
QwertyParser.CONSTANT_KEYWORD = 48;
QwertyParser.MAIN_FUNC = 49;
QwertyParser.RETURN = 50;
QwertyParser.VOID = 51;
QwertyParser.INTEGER_LITERAL = 52;
QwertyParser.FLOAT_LITERAL = 53;
QwertyParser.CHAR_LITERAL = 54;
QwertyParser.STRING_LITERAL = 55;
QwertyParser.BOOLEAN_LITERAL = 56;
QwertyParser.VARIABLE_IDENTIFIER = 57;
QwertyParser.FUNCTION_IDENTIFIER = 58;

QwertyParser.RULE_program = 0;
QwertyParser.RULE_statement = 1;
QwertyParser.RULE_vardecl_list = 2;
QwertyParser.RULE_var_decl = 3;
QwertyParser.RULE_var_identifier_list = 4;
QwertyParser.RULE_array_size = 5;
QwertyParser.RULE_data_type = 6;
QwertyParser.RULE_function_declaration = 7;
QwertyParser.RULE_function_return = 8;
QwertyParser.RULE_function_noreturn = 9;
QwertyParser.RULE_parameters = 10;
QwertyParser.RULE_function_block = 11;
QwertyParser.RULE_main_function = 12;
QwertyParser.RULE_expression = 13;
QwertyParser.RULE_string_expression = 14;
QwertyParser.RULE_num_expression = 15;
QwertyParser.RULE_num_ope = 16;
QwertyParser.RULE_unary_ope = 17;
QwertyParser.RULE_num_factor = 18;
QwertyParser.RULE_var_func_expression = 19;
QwertyParser.RULE_var_func_factor = 20;
QwertyParser.RULE_bool_expression = 21;
QwertyParser.RULE_relational_ope = 22;
QwertyParser.RULE_logical_ope = 23;
QwertyParser.RULE_const_statement = 24;
QwertyParser.RULE_var_assignment_statement = 25;
QwertyParser.RULE_assignment_statement = 26;
QwertyParser.RULE_assignment_num_ope = 27;
QwertyParser.RULE_assignment_factor = 28;
QwertyParser.RULE_funccall_statement = 29;
QwertyParser.RULE_actual_parameter_list = 30;
QwertyParser.RULE_actual_params = 31;
QwertyParser.RULE_conditional_factor = 32;
QwertyParser.RULE_if_statement = 33;
QwertyParser.RULE_conditional_block = 34;
QwertyParser.RULE_code_block = 35;
QwertyParser.RULE_while_statement = 36;
QwertyParser.RULE_do_while_statement = 37;
QwertyParser.RULE_for_statement = 38;
QwertyParser.RULE_return_statement = 39;
QwertyParser.RULE_scan_statement = 40;
QwertyParser.RULE_print_statement = 41;
QwertyParser.RULE_arr_decl = 42;
QwertyParser.RULE_arr_assignment = 43;
QwertyParser.RULE_arr_expression = 44;

function ProgramContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = QwertyParser.RULE_program;
    return this;
}

ProgramContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ProgramContext.prototype.constructor = ProgramContext;

ProgramContext.prototype.main_function = function() {
    return this.getTypedRuleContext(Main_functionContext,0);
};

ProgramContext.prototype.EOF = function() {
    return this.getToken(QwertyParser.EOF, 0);
};

ProgramContext.prototype.function_declaration = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Function_declarationContext);
    } else {
        return this.getTypedRuleContext(Function_declarationContext,i);
    }
};

ProgramContext.prototype.enterRule = function(listener) {
    if(listener instanceof QwertyListener ) {
        listener.enterProgram(this);
	}
};

ProgramContext.prototype.exitRule = function(listener) {
    if(listener instanceof QwertyListener ) {
        listener.exitProgram(this);
	}
};

ProgramContext.prototype.accept = function(visitor) {
    if ( visitor instanceof QwertyVisitor ) {
        return visitor.visitProgram(this);
    } else {
        return visitor.visitChildren(this);
    }
};




QwertyParser.ProgramContext = ProgramContext;

QwertyParser.prototype.program = function() {

    var localctx = new ProgramContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, QwertyParser.RULE_program);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 93;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,0,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 90;
                this.function_declaration(); 
            }
            this.state = 95;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,0,this._ctx);
        }

        this.state = 96;
        this.main_function();
        this.state = 97;
        this.match(QwertyParser.EOF);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function StatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = QwertyParser.RULE_statement;
    return this;
}

StatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StatementContext.prototype.constructor = StatementContext;

StatementContext.prototype.vardecl_list = function() {
    return this.getTypedRuleContext(Vardecl_listContext,0);
};

StatementContext.prototype.const_statement = function() {
    return this.getTypedRuleContext(Const_statementContext,0);
};

StatementContext.prototype.END = function() {
    return this.getToken(QwertyParser.END, 0);
};

StatementContext.prototype.assignment_statement = function() {
    return this.getTypedRuleContext(Assignment_statementContext,0);
};

StatementContext.prototype.arr_assignment = function() {
    return this.getTypedRuleContext(Arr_assignmentContext,0);
};

StatementContext.prototype.funccall_statement = function() {
    return this.getTypedRuleContext(Funccall_statementContext,0);
};

StatementContext.prototype.if_statement = function() {
    return this.getTypedRuleContext(If_statementContext,0);
};

StatementContext.prototype.while_statement = function() {
    return this.getTypedRuleContext(While_statementContext,0);
};

StatementContext.prototype.do_while_statement = function() {
    return this.getTypedRuleContext(Do_while_statementContext,0);
};

StatementContext.prototype.for_statement = function() {
    return this.getTypedRuleContext(For_statementContext,0);
};

StatementContext.prototype.return_statement = function() {
    return this.getTypedRuleContext(Return_statementContext,0);
};

StatementContext.prototype.scan_statement = function() {
    return this.getTypedRuleContext(Scan_statementContext,0);
};

StatementContext.prototype.print_statement = function() {
    return this.getTypedRuleContext(Print_statementContext,0);
};

StatementContext.prototype.COMMENT = function() {
    return this.getToken(QwertyParser.COMMENT, 0);
};

StatementContext.prototype.LINE_COMMENT = function() {
    return this.getToken(QwertyParser.LINE_COMMENT, 0);
};

StatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof QwertyListener ) {
        listener.enterStatement(this);
	}
};

StatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof QwertyListener ) {
        listener.exitStatement(this);
	}
};

StatementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof QwertyVisitor ) {
        return visitor.visitStatement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




QwertyParser.StatementContext = StatementContext;

QwertyParser.prototype.statement = function() {

    var localctx = new StatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, QwertyParser.RULE_statement);
    try {
        this.state = 136;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 99;
            this.vardecl_list();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 100;
            this.const_statement();
            this.state = 101;
            this.match(QwertyParser.END);
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 103;
            this.const_statement();
            notifyErrorListeners("Insert ';' to complete statement.");
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 106;
            this.assignment_statement();
            this.state = 107;
            this.match(QwertyParser.END);
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 109;
            this.arr_assignment();
            this.state = 110;
            this.match(QwertyParser.END);
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 112;
            this.funccall_statement();
            this.state = 113;
            this.match(QwertyParser.END);
            break;

        case 7:
            this.enterOuterAlt(localctx, 7);
            this.state = 115;
            this.if_statement();
            break;

        case 8:
            this.enterOuterAlt(localctx, 8);
            this.state = 116;
            this.while_statement();
            break;

        case 9:
            this.enterOuterAlt(localctx, 9);
            this.state = 117;
            this.do_while_statement();
            break;

        case 10:
            this.enterOuterAlt(localctx, 10);
            this.state = 118;
            this.for_statement();
            break;

        case 11:
            this.enterOuterAlt(localctx, 11);
            this.state = 119;
            this.return_statement();
            this.state = 120;
            this.match(QwertyParser.END);
            break;

        case 12:
            this.enterOuterAlt(localctx, 12);
            this.state = 122;
            this.scan_statement();
            this.state = 123;
            this.match(QwertyParser.END);
            break;

        case 13:
            this.enterOuterAlt(localctx, 13);
            this.state = 125;
            this.scan_statement();
            notifyErrorListeners("Insert ';' to complete statement.");
            break;

        case 14:
            this.enterOuterAlt(localctx, 14);
            this.state = 128;
            this.print_statement();
            this.state = 129;
            this.match(QwertyParser.END);
            break;

        case 15:
            this.enterOuterAlt(localctx, 15);
            this.state = 131;
            this.print_statement();
            notifyErrorListeners("Insert ';' to complete statement.");
            break;

        case 16:
            this.enterOuterAlt(localctx, 16);
            this.state = 134;
            this.match(QwertyParser.COMMENT);
            break;

        case 17:
            this.enterOuterAlt(localctx, 17);
            this.state = 135;
            this.match(QwertyParser.LINE_COMMENT);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Vardecl_listContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = QwertyParser.RULE_vardecl_list;
    return this;
}

Vardecl_listContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Vardecl_listContext.prototype.constructor = Vardecl_listContext;

Vardecl_listContext.prototype.var_decl = function() {
    return this.getTypedRuleContext(Var_declContext,0);
};

Vardecl_listContext.prototype.END = function() {
    return this.getToken(QwertyParser.END, 0);
};

Vardecl_listContext.prototype.vardecl_list = function() {
    return this.getTypedRuleContext(Vardecl_listContext,0);
};

Vardecl_listContext.prototype.arr_decl = function() {
    return this.getTypedRuleContext(Arr_declContext,0);
};

Vardecl_listContext.prototype.enterRule = function(listener) {
    if(listener instanceof QwertyListener ) {
        listener.enterVardecl_list(this);
	}
};

Vardecl_listContext.prototype.exitRule = function(listener) {
    if(listener instanceof QwertyListener ) {
        listener.exitVardecl_list(this);
	}
};

Vardecl_listContext.prototype.accept = function(visitor) {
    if ( visitor instanceof QwertyVisitor ) {
        return visitor.visitVardecl_list(this);
    } else {
        return visitor.visitChildren(this);
    }
};




QwertyParser.Vardecl_listContext = Vardecl_listContext;

QwertyParser.prototype.vardecl_list = function() {

    var localctx = new Vardecl_listContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, QwertyParser.RULE_vardecl_list);
    try {
        this.state = 146;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 138;
            this.var_decl();
            this.state = 139;
            this.match(QwertyParser.END);
            this.state = 141;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
            if(la_===1) {
                this.state = 140;
                this.vardecl_list();

            }
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 143;
            this.arr_decl();
            this.state = 144;
            this.match(QwertyParser.END);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Var_declContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = QwertyParser.RULE_var_decl;
    return this;
}

Var_declContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Var_declContext.prototype.constructor = Var_declContext;

Var_declContext.prototype.data_type = function() {
    return this.getTypedRuleContext(Data_typeContext,0);
};

Var_declContext.prototype.var_identifier_list = function() {
    return this.getTypedRuleContext(Var_identifier_listContext,0);
};

Var_declContext.prototype.enterRule = function(listener) {
    if(listener instanceof QwertyListener ) {
        listener.enterVar_decl(this);
	}
};

Var_declContext.prototype.exitRule = function(listener) {
    if(listener instanceof QwertyListener ) {
        listener.exitVar_decl(this);
	}
};

Var_declContext.prototype.accept = function(visitor) {
    if ( visitor instanceof QwertyVisitor ) {
        return visitor.visitVar_decl(this);
    } else {
        return visitor.visitChildren(this);
    }
};




QwertyParser.Var_declContext = Var_declContext;

QwertyParser.prototype.var_decl = function() {

    var localctx = new Var_declContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, QwertyParser.RULE_var_decl);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 148;
        this.data_type();

        this.state = 149;
        this.var_identifier_list();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Var_identifier_listContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = QwertyParser.RULE_var_identifier_list;
    return this;
}

Var_identifier_listContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Var_identifier_listContext.prototype.constructor = Var_identifier_listContext;

Var_identifier_listContext.prototype.VARIABLE_IDENTIFIER = function() {
    return this.getToken(QwertyParser.VARIABLE_IDENTIFIER, 0);
};

Var_identifier_listContext.prototype.ENUMERATION = function() {
    return this.getToken(QwertyParser.ENUMERATION, 0);
};

Var_identifier_listContext.prototype.var_assignment_statement = function() {
    return this.getTypedRuleContext(Var_assignment_statementContext,0);
};

Var_identifier_listContext.prototype.var_identifier_list = function() {
    return this.getTypedRuleContext(Var_identifier_listContext,0);
};

Var_identifier_listContext.prototype.enterRule = function(listener) {
    if(listener instanceof QwertyListener ) {
        listener.enterVar_identifier_list(this);
	}
};

Var_identifier_listContext.prototype.exitRule = function(listener) {
    if(listener instanceof QwertyListener ) {
        listener.exitVar_identifier_list(this);
	}
};

Var_identifier_listContext.prototype.accept = function(visitor) {
    if ( visitor instanceof QwertyVisitor ) {
        return visitor.visitVar_identifier_list(this);
    } else {
        return visitor.visitChildren(this);
    }
};




QwertyParser.Var_identifier_listContext = Var_identifier_listContext;

QwertyParser.prototype.var_identifier_list = function() {

    var localctx = new Var_identifier_listContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, QwertyParser.RULE_var_identifier_list);
    var _la = 0; // Token type
    try {
        this.state = 163;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 151;
            this.match(QwertyParser.VARIABLE_IDENTIFIER);
            this.state = 153;
            _la = this._input.LA(1);
            if(_la===QwertyParser.ASSIGN) {
                this.state = 152;
                this.var_assignment_statement();
            }

            this.state = 155;
            this.match(QwertyParser.ENUMERATION);
            this.state = 157;
            _la = this._input.LA(1);
            if(_la===QwertyParser.VARIABLE_IDENTIFIER) {
                this.state = 156;
                this.var_identifier_list();
            }

            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 159;
            this.match(QwertyParser.VARIABLE_IDENTIFIER);
            this.state = 161;
            _la = this._input.LA(1);
            if(_la===QwertyParser.ASSIGN) {
                this.state = 160;
                this.var_assignment_statement();
            }

            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Array_sizeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = QwertyParser.RULE_array_size;
    return this;
}

Array_sizeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Array_sizeContext.prototype.constructor = Array_sizeContext;

Array_sizeContext.prototype.INTEGER_LITERAL = function() {
    return this.getToken(QwertyParser.INTEGER_LITERAL, 0);
};

Array_sizeContext.prototype.enterRule = function(listener) {
    if(listener instanceof QwertyListener ) {
        listener.enterArray_size(this);
	}
};

Array_sizeContext.prototype.exitRule = function(listener) {
    if(listener instanceof QwertyListener ) {
        listener.exitArray_size(this);
	}
};

Array_sizeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof QwertyVisitor ) {
        return visitor.visitArray_size(this);
    } else {
        return visitor.visitChildren(this);
    }
};




QwertyParser.Array_sizeContext = Array_sizeContext;

QwertyParser.prototype.array_size = function() {

    var localctx = new Array_sizeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, QwertyParser.RULE_array_size);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 165;
        this.match(QwertyParser.INTEGER_LITERAL);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Data_typeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = QwertyParser.RULE_data_type;
    return this;
}

Data_typeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Data_typeContext.prototype.constructor = Data_typeContext;

Data_typeContext.prototype.INT = function() {
    return this.getToken(QwertyParser.INT, 0);
};

Data_typeContext.prototype.FLOAT = function() {
    return this.getToken(QwertyParser.FLOAT, 0);
};

Data_typeContext.prototype.CHAR = function() {
    return this.getToken(QwertyParser.CHAR, 0);
};

Data_typeContext.prototype.STRING = function() {
    return this.getToken(QwertyParser.STRING, 0);
};

Data_typeContext.prototype.BOOLEAN = function() {
    return this.getToken(QwertyParser.BOOLEAN, 0);
};

Data_typeContext.prototype.enterRule = function(listener) {
    if(listener instanceof QwertyListener ) {
        listener.enterData_type(this);
	}
};

Data_typeContext.prototype.exitRule = function(listener) {
    if(listener instanceof QwertyListener ) {
        listener.exitData_type(this);
	}
};

Data_typeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof QwertyVisitor ) {
        return visitor.visitData_type(this);
    } else {
        return visitor.visitChildren(this);
    }
};




QwertyParser.Data_typeContext = Data_typeContext;

QwertyParser.prototype.data_type = function() {

    var localctx = new Data_typeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, QwertyParser.RULE_data_type);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 167;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << QwertyParser.INT) | (1 << QwertyParser.FLOAT) | (1 << QwertyParser.CHAR) | (1 << QwertyParser.STRING) | (1 << QwertyParser.BOOLEAN))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Function_declarationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = QwertyParser.RULE_function_declaration;
    return this;
}

Function_declarationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Function_declarationContext.prototype.constructor = Function_declarationContext;

Function_declarationContext.prototype.function_return = function() {
    return this.getTypedRuleContext(Function_returnContext,0);
};

Function_declarationContext.prototype.function_noreturn = function() {
    return this.getTypedRuleContext(Function_noreturnContext,0);
};

Function_declarationContext.prototype.enterRule = function(listener) {
    if(listener instanceof QwertyListener ) {
        listener.enterFunction_declaration(this);
	}
};

Function_declarationContext.prototype.exitRule = function(listener) {
    if(listener instanceof QwertyListener ) {
        listener.exitFunction_declaration(this);
	}
};

Function_declarationContext.prototype.accept = function(visitor) {
    if ( visitor instanceof QwertyVisitor ) {
        return visitor.visitFunction_declaration(this);
    } else {
        return visitor.visitChildren(this);
    }
};




QwertyParser.Function_declarationContext = Function_declarationContext;

QwertyParser.prototype.function_declaration = function() {

    var localctx = new Function_declarationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, QwertyParser.RULE_function_declaration);
    try {
        this.state = 171;
        switch(this._input.LA(1)) {
        case QwertyParser.INT:
        case QwertyParser.FLOAT:
        case QwertyParser.CHAR:
        case QwertyParser.STRING:
        case QwertyParser.BOOLEAN:
            this.enterOuterAlt(localctx, 1);
            this.state = 169;
            this.function_return();
            break;
        case QwertyParser.VOID:
            this.enterOuterAlt(localctx, 2);
            this.state = 170;
            this.function_noreturn();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Function_returnContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = QwertyParser.RULE_function_return;
    return this;
}

Function_returnContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Function_returnContext.prototype.constructor = Function_returnContext;

Function_returnContext.prototype.data_type = function() {
    return this.getTypedRuleContext(Data_typeContext,0);
};

Function_returnContext.prototype.FUNCTION_IDENTIFIER = function() {
    return this.getToken(QwertyParser.FUNCTION_IDENTIFIER, 0);
};

Function_returnContext.prototype.function_block = function() {
    return this.getTypedRuleContext(Function_blockContext,0);
};

Function_returnContext.prototype.enterRule = function(listener) {
    if(listener instanceof QwertyListener ) {
        listener.enterFunction_return(this);
	}
};

Function_returnContext.prototype.exitRule = function(listener) {
    if(listener instanceof QwertyListener ) {
        listener.exitFunction_return(this);
	}
};

Function_returnContext.prototype.accept = function(visitor) {
    if ( visitor instanceof QwertyVisitor ) {
        return visitor.visitFunction_return(this);
    } else {
        return visitor.visitChildren(this);
    }
};




QwertyParser.Function_returnContext = Function_returnContext;

QwertyParser.prototype.function_return = function() {

    var localctx = new Function_returnContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, QwertyParser.RULE_function_return);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 173;
        this.data_type();
        this.state = 174;
        this.match(QwertyParser.FUNCTION_IDENTIFIER);
        this.state = 175;
        this.function_block();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Function_noreturnContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = QwertyParser.RULE_function_noreturn;
    return this;
}

Function_noreturnContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Function_noreturnContext.prototype.constructor = Function_noreturnContext;

Function_noreturnContext.prototype.VOID = function() {
    return this.getToken(QwertyParser.VOID, 0);
};

Function_noreturnContext.prototype.FUNCTION_IDENTIFIER = function() {
    return this.getToken(QwertyParser.FUNCTION_IDENTIFIER, 0);
};

Function_noreturnContext.prototype.function_block = function() {
    return this.getTypedRuleContext(Function_blockContext,0);
};

Function_noreturnContext.prototype.enterRule = function(listener) {
    if(listener instanceof QwertyListener ) {
        listener.enterFunction_noreturn(this);
	}
};

Function_noreturnContext.prototype.exitRule = function(listener) {
    if(listener instanceof QwertyListener ) {
        listener.exitFunction_noreturn(this);
	}
};

Function_noreturnContext.prototype.accept = function(visitor) {
    if ( visitor instanceof QwertyVisitor ) {
        return visitor.visitFunction_noreturn(this);
    } else {
        return visitor.visitChildren(this);
    }
};




QwertyParser.Function_noreturnContext = Function_noreturnContext;

QwertyParser.prototype.function_noreturn = function() {

    var localctx = new Function_noreturnContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, QwertyParser.RULE_function_noreturn);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 177;
        this.match(QwertyParser.VOID);
        this.state = 178;
        this.match(QwertyParser.FUNCTION_IDENTIFIER);
        this.state = 179;
        this.function_block();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ParametersContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = QwertyParser.RULE_parameters;
    return this;
}

ParametersContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ParametersContext.prototype.constructor = ParametersContext;

ParametersContext.prototype.data_type = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Data_typeContext);
    } else {
        return this.getTypedRuleContext(Data_typeContext,i);
    }
};

ParametersContext.prototype.VARIABLE_IDENTIFIER = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(QwertyParser.VARIABLE_IDENTIFIER);
    } else {
        return this.getToken(QwertyParser.VARIABLE_IDENTIFIER, i);
    }
};


ParametersContext.prototype.ENUMERATION = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(QwertyParser.ENUMERATION);
    } else {
        return this.getToken(QwertyParser.ENUMERATION, i);
    }
};


ParametersContext.prototype.enterRule = function(listener) {
    if(listener instanceof QwertyListener ) {
        listener.enterParameters(this);
	}
};

ParametersContext.prototype.exitRule = function(listener) {
    if(listener instanceof QwertyListener ) {
        listener.exitParameters(this);
	}
};

ParametersContext.prototype.accept = function(visitor) {
    if ( visitor instanceof QwertyVisitor ) {
        return visitor.visitParameters(this);
    } else {
        return visitor.visitChildren(this);
    }
};




QwertyParser.ParametersContext = ParametersContext;

QwertyParser.prototype.parameters = function() {

    var localctx = new ParametersContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, QwertyParser.RULE_parameters);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 181;
        this.data_type();
        this.state = 182;
        this.match(QwertyParser.VARIABLE_IDENTIFIER);
        this.state = 189;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===QwertyParser.ENUMERATION) {
            this.state = 183;
            this.match(QwertyParser.ENUMERATION);
            this.state = 184;
            this.data_type();
            this.state = 185;
            this.match(QwertyParser.VARIABLE_IDENTIFIER);
            this.state = 191;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Function_blockContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = QwertyParser.RULE_function_block;
    return this;
}

Function_blockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Function_blockContext.prototype.constructor = Function_blockContext;

Function_blockContext.prototype.OPEN_PAR = function() {
    return this.getToken(QwertyParser.OPEN_PAR, 0);
};

Function_blockContext.prototype.CLOSE_PAR = function() {
    return this.getToken(QwertyParser.CLOSE_PAR, 0);
};

Function_blockContext.prototype.code_block = function() {
    return this.getTypedRuleContext(Code_blockContext,0);
};

Function_blockContext.prototype.parameters = function() {
    return this.getTypedRuleContext(ParametersContext,0);
};

Function_blockContext.prototype.enterRule = function(listener) {
    if(listener instanceof QwertyListener ) {
        listener.enterFunction_block(this);
	}
};

Function_blockContext.prototype.exitRule = function(listener) {
    if(listener instanceof QwertyListener ) {
        listener.exitFunction_block(this);
	}
};

Function_blockContext.prototype.accept = function(visitor) {
    if ( visitor instanceof QwertyVisitor ) {
        return visitor.visitFunction_block(this);
    } else {
        return visitor.visitChildren(this);
    }
};




QwertyParser.Function_blockContext = Function_blockContext;

QwertyParser.prototype.function_block = function() {

    var localctx = new Function_blockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, QwertyParser.RULE_function_block);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 192;
        this.match(QwertyParser.OPEN_PAR);
        this.state = 194;
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << QwertyParser.INT) | (1 << QwertyParser.FLOAT) | (1 << QwertyParser.CHAR) | (1 << QwertyParser.STRING) | (1 << QwertyParser.BOOLEAN))) !== 0)) {
            this.state = 193;
            this.parameters();
        }

        this.state = 196;
        this.match(QwertyParser.CLOSE_PAR);
        this.state = 197;
        this.code_block();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Main_functionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = QwertyParser.RULE_main_function;
    return this;
}

Main_functionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Main_functionContext.prototype.constructor = Main_functionContext;

Main_functionContext.prototype.VOID = function() {
    return this.getToken(QwertyParser.VOID, 0);
};

Main_functionContext.prototype.MAIN_FUNC = function() {
    return this.getToken(QwertyParser.MAIN_FUNC, 0);
};

Main_functionContext.prototype.OPEN_PAR = function() {
    return this.getToken(QwertyParser.OPEN_PAR, 0);
};

Main_functionContext.prototype.CLOSE_PAR = function() {
    return this.getToken(QwertyParser.CLOSE_PAR, 0);
};

Main_functionContext.prototype.code_block = function() {
    return this.getTypedRuleContext(Code_blockContext,0);
};

Main_functionContext.prototype.enterRule = function(listener) {
    if(listener instanceof QwertyListener ) {
        listener.enterMain_function(this);
	}
};

Main_functionContext.prototype.exitRule = function(listener) {
    if(listener instanceof QwertyListener ) {
        listener.exitMain_function(this);
	}
};

Main_functionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof QwertyVisitor ) {
        return visitor.visitMain_function(this);
    } else {
        return visitor.visitChildren(this);
    }
};




QwertyParser.Main_functionContext = Main_functionContext;

QwertyParser.prototype.main_function = function() {

    var localctx = new Main_functionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, QwertyParser.RULE_main_function);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 199;
        this.match(QwertyParser.VOID);
        this.state = 200;
        this.match(QwertyParser.MAIN_FUNC);
        this.state = 201;
        this.match(QwertyParser.OPEN_PAR);
        this.state = 202;
        this.match(QwertyParser.CLOSE_PAR);
        this.state = 203;
        this.code_block();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = QwertyParser.RULE_expression;
    return this;
}

ExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExpressionContext.prototype.constructor = ExpressionContext;

ExpressionContext.prototype.string_expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(String_expressionContext);
    } else {
        return this.getTypedRuleContext(String_expressionContext,i);
    }
};

ExpressionContext.prototype.ADD = function() {
    return this.getToken(QwertyParser.ADD, 0);
};

ExpressionContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

ExpressionContext.prototype.var_func_expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Var_func_expressionContext);
    } else {
        return this.getTypedRuleContext(Var_func_expressionContext,i);
    }
};

ExpressionContext.prototype.relational_ope = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Relational_opeContext);
    } else {
        return this.getTypedRuleContext(Relational_opeContext,i);
    }
};

ExpressionContext.prototype.num_ope = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Num_opeContext);
    } else {
        return this.getTypedRuleContext(Num_opeContext,i);
    }
};

ExpressionContext.prototype.num_expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Num_expressionContext);
    } else {
        return this.getTypedRuleContext(Num_expressionContext,i);
    }
};

ExpressionContext.prototype.bool_expression = function() {
    return this.getTypedRuleContext(Bool_expressionContext,0);
};

ExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof QwertyListener ) {
        listener.enterExpression(this);
	}
};

ExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof QwertyListener ) {
        listener.exitExpression(this);
	}
};

ExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof QwertyVisitor ) {
        return visitor.visitExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};




QwertyParser.ExpressionContext = ExpressionContext;

QwertyParser.prototype.expression = function() {

    var localctx = new ExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, QwertyParser.RULE_expression);
    var _la = 0; // Token type
    try {
        this.state = 239;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,17,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 205;
            this.string_expression();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 206;
            this.string_expression();
            this.state = 207;
            this.match(QwertyParser.ADD);
            this.state = 208;
            this.expression();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 210;
            this.var_func_expression();
            this.state = 221;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(((((_la - 26)) & ~0x1f) == 0 && ((1 << (_la - 26)) & ((1 << (QwertyParser.ADD - 26)) | (1 << (QwertyParser.SUB - 26)) | (1 << (QwertyParser.MUL - 26)) | (1 << (QwertyParser.DIV - 26)) | (1 << (QwertyParser.MOD - 26)) | (1 << (QwertyParser.LT - 26)) | (1 << (QwertyParser.LE - 26)) | (1 << (QwertyParser.GT - 26)) | (1 << (QwertyParser.GE - 26)) | (1 << (QwertyParser.EQUAL - 26)) | (1 << (QwertyParser.NOTEQUAL - 26)))) !== 0)) {
                this.state = 213;
                switch(this._input.LA(1)) {
                case QwertyParser.LT:
                case QwertyParser.LE:
                case QwertyParser.GT:
                case QwertyParser.GE:
                case QwertyParser.EQUAL:
                case QwertyParser.NOTEQUAL:
                    this.state = 211;
                    this.relational_ope();
                    break;
                case QwertyParser.ADD:
                case QwertyParser.SUB:
                case QwertyParser.MUL:
                case QwertyParser.DIV:
                case QwertyParser.MOD:
                    this.state = 212;
                    this.num_ope();
                    break;
                default:
                    throw new antlr4.error.NoViableAltException(this);
                }
                this.state = 217;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,12,this._ctx);
                switch(la_) {
                case 1:
                    this.state = 215;
                    this.string_expression();
                    break;

                case 2:
                    this.state = 216;
                    this.num_expression();
                    break;

                }
                this.state = 223;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 224;
            this.num_expression();
            this.state = 235;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(((((_la - 26)) & ~0x1f) == 0 && ((1 << (_la - 26)) & ((1 << (QwertyParser.ADD - 26)) | (1 << (QwertyParser.SUB - 26)) | (1 << (QwertyParser.MUL - 26)) | (1 << (QwertyParser.DIV - 26)) | (1 << (QwertyParser.MOD - 26)))) !== 0)) {
                this.state = 225;
                this.num_ope();
                this.state = 230;
                this._errHandler.sync(this);
                var _alt = this._interp.adaptivePredict(this._input,15,this._ctx)
                while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
                    if(_alt===1) {
                        this.state = 228;
                        this._errHandler.sync(this);
                        var la_ = this._interp.adaptivePredict(this._input,14,this._ctx);
                        switch(la_) {
                        case 1:
                            this.state = 226;
                            this.num_expression();
                            break;

                        case 2:
                            this.state = 227;
                            this.var_func_expression();
                            break;

                        } 
                    }
                    this.state = 232;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input,15,this._ctx);
                }

                this.state = 237;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 238;
            this.bool_expression(0);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function String_expressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = QwertyParser.RULE_string_expression;
    return this;
}

String_expressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
String_expressionContext.prototype.constructor = String_expressionContext;

String_expressionContext.prototype.OPEN_PAR = function() {
    return this.getToken(QwertyParser.OPEN_PAR, 0);
};

String_expressionContext.prototype.string_expression = function() {
    return this.getTypedRuleContext(String_expressionContext,0);
};

String_expressionContext.prototype.CLOSE_PAR = function() {
    return this.getToken(QwertyParser.CLOSE_PAR, 0);
};

String_expressionContext.prototype.STRING_LITERAL = function() {
    return this.getToken(QwertyParser.STRING_LITERAL, 0);
};

String_expressionContext.prototype.VARIABLE_IDENTIFIER = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(QwertyParser.VARIABLE_IDENTIFIER);
    } else {
        return this.getToken(QwertyParser.VARIABLE_IDENTIFIER, i);
    }
};


String_expressionContext.prototype.OPEN_BRACKET = function() {
    return this.getToken(QwertyParser.OPEN_BRACKET, 0);
};

String_expressionContext.prototype.CLOSE_BRACKET = function() {
    return this.getToken(QwertyParser.CLOSE_BRACKET, 0);
};

String_expressionContext.prototype.INTEGER_LITERAL = function() {
    return this.getToken(QwertyParser.INTEGER_LITERAL, 0);
};

String_expressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof QwertyListener ) {
        listener.enterString_expression(this);
	}
};

String_expressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof QwertyListener ) {
        listener.exitString_expression(this);
	}
};

String_expressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof QwertyVisitor ) {
        return visitor.visitString_expression(this);
    } else {
        return visitor.visitChildren(this);
    }
};




QwertyParser.String_expressionContext = String_expressionContext;

QwertyParser.prototype.string_expression = function() {

    var localctx = new String_expressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, QwertyParser.RULE_string_expression);
    var _la = 0; // Token type
    try {
        this.state = 252;
        switch(this._input.LA(1)) {
        case QwertyParser.OPEN_PAR:
            this.enterOuterAlt(localctx, 1);
            this.state = 241;
            this.match(QwertyParser.OPEN_PAR);
            this.state = 242;
            this.string_expression();
            this.state = 243;
            this.match(QwertyParser.CLOSE_PAR);
            break;
        case QwertyParser.STRING_LITERAL:
            this.enterOuterAlt(localctx, 2);
            this.state = 245;
            this.match(QwertyParser.STRING_LITERAL);
            break;
        case QwertyParser.VARIABLE_IDENTIFIER:
            this.enterOuterAlt(localctx, 3);
            this.state = 246;
            this.match(QwertyParser.VARIABLE_IDENTIFIER);
            this.state = 250;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,18,this._ctx);
            if(la_===1) {
                this.state = 247;
                this.match(QwertyParser.OPEN_BRACKET);
                this.state = 248;
                _la = this._input.LA(1);
                if(!(_la===QwertyParser.INTEGER_LITERAL || _la===QwertyParser.VARIABLE_IDENTIFIER)) {
                this._errHandler.recoverInline(this);
                }
                else {
                    this.consume();
                }
                this.state = 249;
                this.match(QwertyParser.CLOSE_BRACKET);

            }
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Num_expressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = QwertyParser.RULE_num_expression;
    return this;
}

Num_expressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Num_expressionContext.prototype.constructor = Num_expressionContext;

Num_expressionContext.prototype.OPEN_PAR = function() {
    return this.getToken(QwertyParser.OPEN_PAR, 0);
};

Num_expressionContext.prototype.num_expression = function() {
    return this.getTypedRuleContext(Num_expressionContext,0);
};

Num_expressionContext.prototype.CLOSE_PAR = function() {
    return this.getToken(QwertyParser.CLOSE_PAR, 0);
};

Num_expressionContext.prototype.num_factor = function() {
    return this.getTypedRuleContext(Num_factorContext,0);
};

Num_expressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof QwertyListener ) {
        listener.enterNum_expression(this);
	}
};

Num_expressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof QwertyListener ) {
        listener.exitNum_expression(this);
	}
};

Num_expressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof QwertyVisitor ) {
        return visitor.visitNum_expression(this);
    } else {
        return visitor.visitChildren(this);
    }
};




QwertyParser.Num_expressionContext = Num_expressionContext;

QwertyParser.prototype.num_expression = function() {

    var localctx = new Num_expressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, QwertyParser.RULE_num_expression);
    try {
        this.state = 259;
        switch(this._input.LA(1)) {
        case QwertyParser.OPEN_PAR:
            this.enterOuterAlt(localctx, 1);
            this.state = 254;
            this.match(QwertyParser.OPEN_PAR);
            this.state = 255;
            this.num_expression();
            this.state = 256;
            this.match(QwertyParser.CLOSE_PAR);
            break;
        case QwertyParser.ADD:
        case QwertyParser.SUB:
        case QwertyParser.INTEGER_LITERAL:
        case QwertyParser.FLOAT_LITERAL:
        case QwertyParser.CHAR_LITERAL:
            this.enterOuterAlt(localctx, 2);
            this.state = 258;
            this.num_factor();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Num_opeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = QwertyParser.RULE_num_ope;
    return this;
}

Num_opeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Num_opeContext.prototype.constructor = Num_opeContext;

Num_opeContext.prototype.ADD = function() {
    return this.getToken(QwertyParser.ADD, 0);
};

Num_opeContext.prototype.SUB = function() {
    return this.getToken(QwertyParser.SUB, 0);
};

Num_opeContext.prototype.MUL = function() {
    return this.getToken(QwertyParser.MUL, 0);
};

Num_opeContext.prototype.DIV = function() {
    return this.getToken(QwertyParser.DIV, 0);
};

Num_opeContext.prototype.MOD = function() {
    return this.getToken(QwertyParser.MOD, 0);
};

Num_opeContext.prototype.enterRule = function(listener) {
    if(listener instanceof QwertyListener ) {
        listener.enterNum_ope(this);
	}
};

Num_opeContext.prototype.exitRule = function(listener) {
    if(listener instanceof QwertyListener ) {
        listener.exitNum_ope(this);
	}
};

Num_opeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof QwertyVisitor ) {
        return visitor.visitNum_ope(this);
    } else {
        return visitor.visitChildren(this);
    }
};




QwertyParser.Num_opeContext = Num_opeContext;

QwertyParser.prototype.num_ope = function() {

    var localctx = new Num_opeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, QwertyParser.RULE_num_ope);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 261;
        _la = this._input.LA(1);
        if(!(((((_la - 26)) & ~0x1f) == 0 && ((1 << (_la - 26)) & ((1 << (QwertyParser.ADD - 26)) | (1 << (QwertyParser.SUB - 26)) | (1 << (QwertyParser.MUL - 26)) | (1 << (QwertyParser.DIV - 26)) | (1 << (QwertyParser.MOD - 26)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Unary_opeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = QwertyParser.RULE_unary_ope;
    return this;
}

Unary_opeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Unary_opeContext.prototype.constructor = Unary_opeContext;


Unary_opeContext.prototype.enterRule = function(listener) {
    if(listener instanceof QwertyListener ) {
        listener.enterUnary_ope(this);
	}
};

Unary_opeContext.prototype.exitRule = function(listener) {
    if(listener instanceof QwertyListener ) {
        listener.exitUnary_ope(this);
	}
};

Unary_opeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof QwertyVisitor ) {
        return visitor.visitUnary_ope(this);
    } else {
        return visitor.visitChildren(this);
    }
};




QwertyParser.Unary_opeContext = Unary_opeContext;

QwertyParser.prototype.unary_ope = function() {

    var localctx = new Unary_opeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, QwertyParser.RULE_unary_ope);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 263;
        _la = this._input.LA(1);
        if(!(_la===QwertyParser.ADD || _la===QwertyParser.SUB)) {
        this._errHandler.recoverInline(this);
        }
        else {
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Num_factorContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = QwertyParser.RULE_num_factor;
    return this;
}

Num_factorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Num_factorContext.prototype.constructor = Num_factorContext;

Num_factorContext.prototype.CHAR_LITERAL = function() {
    return this.getToken(QwertyParser.CHAR_LITERAL, 0);
};

Num_factorContext.prototype.INTEGER_LITERAL = function() {
    return this.getToken(QwertyParser.INTEGER_LITERAL, 0);
};

Num_factorContext.prototype.unary_ope = function() {
    return this.getTypedRuleContext(Unary_opeContext,0);
};

Num_factorContext.prototype.FLOAT_LITERAL = function() {
    return this.getToken(QwertyParser.FLOAT_LITERAL, 0);
};

Num_factorContext.prototype.enterRule = function(listener) {
    if(listener instanceof QwertyListener ) {
        listener.enterNum_factor(this);
	}
};

Num_factorContext.prototype.exitRule = function(listener) {
    if(listener instanceof QwertyListener ) {
        listener.exitNum_factor(this);
	}
};

Num_factorContext.prototype.accept = function(visitor) {
    if ( visitor instanceof QwertyVisitor ) {
        return visitor.visitNum_factor(this);
    } else {
        return visitor.visitChildren(this);
    }
};




QwertyParser.Num_factorContext = Num_factorContext;

QwertyParser.prototype.num_factor = function() {

    var localctx = new Num_factorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, QwertyParser.RULE_num_factor);
    var _la = 0; // Token type
    try {
        this.state = 274;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,23,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 265;
            this.match(QwertyParser.CHAR_LITERAL);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 267;
            _la = this._input.LA(1);
            if(_la===QwertyParser.ADD || _la===QwertyParser.SUB) {
                this.state = 266;
                this.unary_ope();
            }

            this.state = 269;
            this.match(QwertyParser.INTEGER_LITERAL);
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 271;
            _la = this._input.LA(1);
            if(_la===QwertyParser.ADD || _la===QwertyParser.SUB) {
                this.state = 270;
                this.unary_ope();
            }

            this.state = 273;
            this.match(QwertyParser.FLOAT_LITERAL);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Var_func_expressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = QwertyParser.RULE_var_func_expression;
    return this;
}

Var_func_expressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Var_func_expressionContext.prototype.constructor = Var_func_expressionContext;

Var_func_expressionContext.prototype.OPEN_PAR = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(QwertyParser.OPEN_PAR);
    } else {
        return this.getToken(QwertyParser.OPEN_PAR, i);
    }
};


Var_func_expressionContext.prototype.var_func_expression = function() {
    return this.getTypedRuleContext(Var_func_expressionContext,0);
};

Var_func_expressionContext.prototype.CLOSE_PAR = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(QwertyParser.CLOSE_PAR);
    } else {
        return this.getToken(QwertyParser.CLOSE_PAR, i);
    }
};


Var_func_expressionContext.prototype.var_func_factor = function() {
    return this.getTypedRuleContext(Var_func_factorContext,0);
};

Var_func_expressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof QwertyListener ) {
        listener.enterVar_func_expression(this);
	}
};

Var_func_expressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof QwertyListener ) {
        listener.exitVar_func_expression(this);
	}
};

Var_func_expressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof QwertyVisitor ) {
        return visitor.visitVar_func_expression(this);
    } else {
        return visitor.visitChildren(this);
    }
};




QwertyParser.Var_func_expressionContext = Var_func_expressionContext;

QwertyParser.prototype.var_func_expression = function() {

    var localctx = new Var_func_expressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, QwertyParser.RULE_var_func_expression);
    try {
        this.state = 301;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,26,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 276;
            this.match(QwertyParser.OPEN_PAR);
            this.state = 277;
            this.var_func_expression();
            this.state = 278;
            this.match(QwertyParser.CLOSE_PAR);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 280;
            this.var_func_factor();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 281;
            this.match(QwertyParser.OPEN_PAR);
            this.state = 283; 
            this._errHandler.sync(this);
            var _alt = 1;
            do {
            	switch (_alt) {
            	case 1:
            		this.state = 282;
            		this.match(QwertyParser.OPEN_PAR);
            		break;
            	default:
            		throw new antlr4.error.NoViableAltException(this);
            	}
            	this.state = 285; 
            	this._errHandler.sync(this);
            	_alt = this._interp.adaptivePredict(this._input,24, this._ctx);
            } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
            this.state = 287;
            this.var_func_expression();
            this.state = 288;
            this.match(QwertyParser.CLOSE_PAR);
            notifyErrorListeners ("Uneven Parenthesis. Remove extra '('. ");
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 291;
            this.match(QwertyParser.OPEN_PAR);
            this.state = 292;
            this.var_func_expression();
            this.state = 293;
            this.match(QwertyParser.CLOSE_PAR);
            this.state = 295; 
            this._errHandler.sync(this);
            var _alt = 1;
            do {
            	switch (_alt) {
            	case 1:
            		this.state = 294;
            		this.match(QwertyParser.CLOSE_PAR);
            		break;
            	default:
            		throw new antlr4.error.NoViableAltException(this);
            	}
            	this.state = 297; 
            	this._errHandler.sync(this);
            	_alt = this._interp.adaptivePredict(this._input,25, this._ctx);
            } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
            notifyErrorListeners ("Uneven Parenthesis. Remove extra ')'. ");
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Var_func_factorContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = QwertyParser.RULE_var_func_factor;
    return this;
}

Var_func_factorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Var_func_factorContext.prototype.constructor = Var_func_factorContext;

Var_func_factorContext.prototype.VARIABLE_IDENTIFIER = function() {
    return this.getToken(QwertyParser.VARIABLE_IDENTIFIER, 0);
};

Var_func_factorContext.prototype.funccall_statement = function() {
    return this.getTypedRuleContext(Funccall_statementContext,0);
};

Var_func_factorContext.prototype.num_factor = function() {
    return this.getTypedRuleContext(Num_factorContext,0);
};

Var_func_factorContext.prototype.enterRule = function(listener) {
    if(listener instanceof QwertyListener ) {
        listener.enterVar_func_factor(this);
	}
};

Var_func_factorContext.prototype.exitRule = function(listener) {
    if(listener instanceof QwertyListener ) {
        listener.exitVar_func_factor(this);
	}
};

Var_func_factorContext.prototype.accept = function(visitor) {
    if ( visitor instanceof QwertyVisitor ) {
        return visitor.visitVar_func_factor(this);
    } else {
        return visitor.visitChildren(this);
    }
};




QwertyParser.Var_func_factorContext = Var_func_factorContext;

QwertyParser.prototype.var_func_factor = function() {

    var localctx = new Var_func_factorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, QwertyParser.RULE_var_func_factor);
    try {
        this.state = 306;
        switch(this._input.LA(1)) {
        case QwertyParser.VARIABLE_IDENTIFIER:
            this.enterOuterAlt(localctx, 1);
            this.state = 303;
            this.match(QwertyParser.VARIABLE_IDENTIFIER);
            break;
        case QwertyParser.FUNCTION_IDENTIFIER:
            this.enterOuterAlt(localctx, 2);
            this.state = 304;
            this.funccall_statement();
            break;
        case QwertyParser.ADD:
        case QwertyParser.SUB:
        case QwertyParser.INTEGER_LITERAL:
        case QwertyParser.FLOAT_LITERAL:
        case QwertyParser.CHAR_LITERAL:
            this.enterOuterAlt(localctx, 3);
            this.state = 305;
            this.num_factor();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Bool_expressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = QwertyParser.RULE_bool_expression;
    return this;
}

Bool_expressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Bool_expressionContext.prototype.constructor = Bool_expressionContext;

Bool_expressionContext.prototype.OPEN_PAR = function() {
    return this.getToken(QwertyParser.OPEN_PAR, 0);
};

Bool_expressionContext.prototype.bool_expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Bool_expressionContext);
    } else {
        return this.getTypedRuleContext(Bool_expressionContext,i);
    }
};

Bool_expressionContext.prototype.CLOSE_PAR = function() {
    return this.getToken(QwertyParser.CLOSE_PAR, 0);
};

Bool_expressionContext.prototype.NOT = function() {
    return this.getToken(QwertyParser.NOT, 0);
};

Bool_expressionContext.prototype.num_expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Num_expressionContext);
    } else {
        return this.getTypedRuleContext(Num_expressionContext,i);
    }
};

Bool_expressionContext.prototype.relational_ope = function() {
    return this.getTypedRuleContext(Relational_opeContext,0);
};

Bool_expressionContext.prototype.string_expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(String_expressionContext);
    } else {
        return this.getTypedRuleContext(String_expressionContext,i);
    }
};

Bool_expressionContext.prototype.EQUAL = function() {
    return this.getToken(QwertyParser.EQUAL, 0);
};

Bool_expressionContext.prototype.NOTEQUAL = function() {
    return this.getToken(QwertyParser.NOTEQUAL, 0);
};

Bool_expressionContext.prototype.var_func_expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Var_func_expressionContext);
    } else {
        return this.getTypedRuleContext(Var_func_expressionContext,i);
    }
};

Bool_expressionContext.prototype.BOOLEAN_LITERAL = function() {
    return this.getToken(QwertyParser.BOOLEAN_LITERAL, 0);
};

Bool_expressionContext.prototype.logical_ope = function() {
    return this.getTypedRuleContext(Logical_opeContext,0);
};

Bool_expressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof QwertyListener ) {
        listener.enterBool_expression(this);
	}
};

Bool_expressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof QwertyListener ) {
        listener.exitBool_expression(this);
	}
};

Bool_expressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof QwertyVisitor ) {
        return visitor.visitBool_expression(this);
    } else {
        return visitor.visitChildren(this);
    }
};



QwertyParser.prototype.bool_expression = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new Bool_expressionContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 42;
    this.enterRecursionRule(localctx, 42, QwertyParser.RULE_bool_expression, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 333;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,29,this._ctx);
        switch(la_) {
        case 1:
            this.state = 310;
            _la = this._input.LA(1);
            if(_la===QwertyParser.NOT) {
                this.state = 309;
                this.match(QwertyParser.NOT);
            }

            this.state = 312;
            this.match(QwertyParser.OPEN_PAR);
            this.state = 313;
            this.bool_expression(0);
            this.state = 314;
            this.match(QwertyParser.CLOSE_PAR);
            break;

        case 2:
            this.state = 316;
            this.num_expression();
            this.state = 317;
            this.relational_ope();
            this.state = 318;
            this.num_expression();
            break;

        case 3:
            this.state = 320;
            this.string_expression();
            this.state = 321;
            _la = this._input.LA(1);
            if(!(_la===QwertyParser.EQUAL || _la===QwertyParser.NOTEQUAL)) {
            this._errHandler.recoverInline(this);
            }
            else {
                this.consume();
            }
            this.state = 322;
            this.string_expression();
            break;

        case 4:
            this.state = 324;
            this.var_func_expression();
            this.state = 325;
            this.relational_ope();
            this.state = 326;
            this.var_func_expression();
            break;

        case 5:
            this.state = 328;
            this.match(QwertyParser.BOOLEAN_LITERAL);
            break;

        case 6:
            this.state = 329;
            this.match(QwertyParser.NOT);
            this.state = 330;
            this.match(QwertyParser.OPEN_PAR);
            this.state = 331;
            this.match(QwertyParser.BOOLEAN_LITERAL);
            this.state = 332;
            this.match(QwertyParser.CLOSE_PAR);
            break;

        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 341;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,30,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                localctx = new Bool_expressionContext(this, _parentctx, _parentState);
                this.pushNewRecursionContext(localctx, _startState, QwertyParser.RULE_bool_expression);
                this.state = 335;
                if (!( this.precpred(this._ctx, 6))) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
                }
                this.state = 336;
                this.logical_ope();
                this.state = 337;
                this.bool_expression(7); 
            }
            this.state = 343;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,30,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};

function Relational_opeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = QwertyParser.RULE_relational_ope;
    return this;
}

Relational_opeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Relational_opeContext.prototype.constructor = Relational_opeContext;

Relational_opeContext.prototype.LT = function() {
    return this.getToken(QwertyParser.LT, 0);
};

Relational_opeContext.prototype.LE = function() {
    return this.getToken(QwertyParser.LE, 0);
};

Relational_opeContext.prototype.GT = function() {
    return this.getToken(QwertyParser.GT, 0);
};

Relational_opeContext.prototype.GE = function() {
    return this.getToken(QwertyParser.GE, 0);
};

Relational_opeContext.prototype.EQUAL = function() {
    return this.getToken(QwertyParser.EQUAL, 0);
};

Relational_opeContext.prototype.NOTEQUAL = function() {
    return this.getToken(QwertyParser.NOTEQUAL, 0);
};

Relational_opeContext.prototype.enterRule = function(listener) {
    if(listener instanceof QwertyListener ) {
        listener.enterRelational_ope(this);
	}
};

Relational_opeContext.prototype.exitRule = function(listener) {
    if(listener instanceof QwertyListener ) {
        listener.exitRelational_ope(this);
	}
};

Relational_opeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof QwertyVisitor ) {
        return visitor.visitRelational_ope(this);
    } else {
        return visitor.visitChildren(this);
    }
};




QwertyParser.Relational_opeContext = Relational_opeContext;

QwertyParser.prototype.relational_ope = function() {

    var localctx = new Relational_opeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 44, QwertyParser.RULE_relational_ope);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 344;
        _la = this._input.LA(1);
        if(!(((((_la - 36)) & ~0x1f) == 0 && ((1 << (_la - 36)) & ((1 << (QwertyParser.LT - 36)) | (1 << (QwertyParser.LE - 36)) | (1 << (QwertyParser.GT - 36)) | (1 << (QwertyParser.GE - 36)) | (1 << (QwertyParser.EQUAL - 36)) | (1 << (QwertyParser.NOTEQUAL - 36)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Logical_opeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = QwertyParser.RULE_logical_ope;
    return this;
}

Logical_opeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Logical_opeContext.prototype.constructor = Logical_opeContext;

Logical_opeContext.prototype.AND = function() {
    return this.getToken(QwertyParser.AND, 0);
};

Logical_opeContext.prototype.OR = function() {
    return this.getToken(QwertyParser.OR, 0);
};

Logical_opeContext.prototype.enterRule = function(listener) {
    if(listener instanceof QwertyListener ) {
        listener.enterLogical_ope(this);
	}
};

Logical_opeContext.prototype.exitRule = function(listener) {
    if(listener instanceof QwertyListener ) {
        listener.exitLogical_ope(this);
	}
};

Logical_opeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof QwertyVisitor ) {
        return visitor.visitLogical_ope(this);
    } else {
        return visitor.visitChildren(this);
    }
};




QwertyParser.Logical_opeContext = Logical_opeContext;

QwertyParser.prototype.logical_ope = function() {

    var localctx = new Logical_opeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 46, QwertyParser.RULE_logical_ope);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 346;
        _la = this._input.LA(1);
        if(!(_la===QwertyParser.AND || _la===QwertyParser.OR)) {
        this._errHandler.recoverInline(this);
        }
        else {
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Const_statementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = QwertyParser.RULE_const_statement;
    return this;
}

Const_statementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Const_statementContext.prototype.constructor = Const_statementContext;

Const_statementContext.prototype.CONSTANT_KEYWORD = function() {
    return this.getToken(QwertyParser.CONSTANT_KEYWORD, 0);
};

Const_statementContext.prototype.VARIABLE_IDENTIFIER = function() {
    return this.getToken(QwertyParser.VARIABLE_IDENTIFIER, 0);
};

Const_statementContext.prototype.var_assignment_statement = function() {
    return this.getTypedRuleContext(Var_assignment_statementContext,0);
};

Const_statementContext.prototype.enterRule = function(listener) {
    if(listener instanceof QwertyListener ) {
        listener.enterConst_statement(this);
	}
};

Const_statementContext.prototype.exitRule = function(listener) {
    if(listener instanceof QwertyListener ) {
        listener.exitConst_statement(this);
	}
};

Const_statementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof QwertyVisitor ) {
        return visitor.visitConst_statement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




QwertyParser.Const_statementContext = Const_statementContext;

QwertyParser.prototype.const_statement = function() {

    var localctx = new Const_statementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 48, QwertyParser.RULE_const_statement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 348;
        this.match(QwertyParser.CONSTANT_KEYWORD);
        this.state = 349;
        this.match(QwertyParser.VARIABLE_IDENTIFIER);
        this.state = 350;
        this.var_assignment_statement();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Var_assignment_statementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = QwertyParser.RULE_var_assignment_statement;
    return this;
}

Var_assignment_statementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Var_assignment_statementContext.prototype.constructor = Var_assignment_statementContext;

Var_assignment_statementContext.prototype.ASSIGN = function() {
    return this.getToken(QwertyParser.ASSIGN, 0);
};

Var_assignment_statementContext.prototype.assignment_factor = function() {
    return this.getTypedRuleContext(Assignment_factorContext,0);
};

Var_assignment_statementContext.prototype.enterRule = function(listener) {
    if(listener instanceof QwertyListener ) {
        listener.enterVar_assignment_statement(this);
	}
};

Var_assignment_statementContext.prototype.exitRule = function(listener) {
    if(listener instanceof QwertyListener ) {
        listener.exitVar_assignment_statement(this);
	}
};

Var_assignment_statementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof QwertyVisitor ) {
        return visitor.visitVar_assignment_statement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




QwertyParser.Var_assignment_statementContext = Var_assignment_statementContext;

QwertyParser.prototype.var_assignment_statement = function() {

    var localctx = new Var_assignment_statementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 50, QwertyParser.RULE_var_assignment_statement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 352;
        this.match(QwertyParser.ASSIGN);
        this.state = 353;
        this.assignment_factor();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Assignment_statementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = QwertyParser.RULE_assignment_statement;
    return this;
}

Assignment_statementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Assignment_statementContext.prototype.constructor = Assignment_statementContext;

Assignment_statementContext.prototype.VARIABLE_IDENTIFIER = function() {
    return this.getToken(QwertyParser.VARIABLE_IDENTIFIER, 0);
};

Assignment_statementContext.prototype.ASSIGN = function() {
    return this.getToken(QwertyParser.ASSIGN, 0);
};

Assignment_statementContext.prototype.assignment_factor = function() {
    return this.getTypedRuleContext(Assignment_factorContext,0);
};

Assignment_statementContext.prototype.INC = function() {
    return this.getToken(QwertyParser.INC, 0);
};

Assignment_statementContext.prototype.DEC = function() {
    return this.getToken(QwertyParser.DEC, 0);
};

Assignment_statementContext.prototype.assignment_num_ope = function() {
    return this.getTypedRuleContext(Assignment_num_opeContext,0);
};

Assignment_statementContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

Assignment_statementContext.prototype.num_factor = function() {
    return this.getTypedRuleContext(Num_factorContext,0);
};

Assignment_statementContext.prototype.STRING_LITERAL = function() {
    return this.getToken(QwertyParser.STRING_LITERAL, 0);
};

Assignment_statementContext.prototype.enterRule = function(listener) {
    if(listener instanceof QwertyListener ) {
        listener.enterAssignment_statement(this);
	}
};

Assignment_statementContext.prototype.exitRule = function(listener) {
    if(listener instanceof QwertyListener ) {
        listener.exitAssignment_statement(this);
	}
};

Assignment_statementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof QwertyVisitor ) {
        return visitor.visitAssignment_statement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




QwertyParser.Assignment_statementContext = Assignment_statementContext;

QwertyParser.prototype.assignment_statement = function() {

    var localctx = new Assignment_statementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 52, QwertyParser.RULE_assignment_statement);
    var _la = 0; // Token type
    try {
        this.state = 367;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,32,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 355;
            this.match(QwertyParser.VARIABLE_IDENTIFIER);
            this.state = 356;
            this.match(QwertyParser.ASSIGN);
            this.state = 357;
            this.assignment_factor();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 358;
            this.match(QwertyParser.VARIABLE_IDENTIFIER);
            this.state = 359;
            _la = this._input.LA(1);
            if(!(_la===QwertyParser.INC || _la===QwertyParser.DEC)) {
            this._errHandler.recoverInline(this);
            }
            else {
                this.consume();
            }
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 360;
            this.match(QwertyParser.VARIABLE_IDENTIFIER);
            this.state = 361;
            this.assignment_num_ope();
            this.state = 365;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,31,this._ctx);
            switch(la_) {
            case 1:
                this.state = 362;
                this.expression();
                break;

            case 2:
                this.state = 363;
                this.num_factor();
                break;

            case 3:
                this.state = 364;
                this.match(QwertyParser.STRING_LITERAL);
                break;

            }
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Assignment_num_opeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = QwertyParser.RULE_assignment_num_ope;
    return this;
}

Assignment_num_opeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Assignment_num_opeContext.prototype.constructor = Assignment_num_opeContext;

Assignment_num_opeContext.prototype.ADD_ASSIGN = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(QwertyParser.ADD_ASSIGN);
    } else {
        return this.getToken(QwertyParser.ADD_ASSIGN, i);
    }
};


Assignment_num_opeContext.prototype.SUB_ASSIGN = function() {
    return this.getToken(QwertyParser.SUB_ASSIGN, 0);
};

Assignment_num_opeContext.prototype.MUL_ASSIGN = function() {
    return this.getToken(QwertyParser.MUL_ASSIGN, 0);
};

Assignment_num_opeContext.prototype.DIV_ASSIGN = function() {
    return this.getToken(QwertyParser.DIV_ASSIGN, 0);
};

Assignment_num_opeContext.prototype.enterRule = function(listener) {
    if(listener instanceof QwertyListener ) {
        listener.enterAssignment_num_ope(this);
	}
};

Assignment_num_opeContext.prototype.exitRule = function(listener) {
    if(listener instanceof QwertyListener ) {
        listener.exitAssignment_num_ope(this);
	}
};

Assignment_num_opeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof QwertyVisitor ) {
        return visitor.visitAssignment_num_ope(this);
    } else {
        return visitor.visitChildren(this);
    }
};




QwertyParser.Assignment_num_opeContext = Assignment_num_opeContext;

QwertyParser.prototype.assignment_num_ope = function() {

    var localctx = new Assignment_num_opeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 54, QwertyParser.RULE_assignment_num_ope);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 369;
        _la = this._input.LA(1);
        if(!(((((_la - 30)) & ~0x1f) == 0 && ((1 << (_la - 30)) & ((1 << (QwertyParser.ADD_ASSIGN - 30)) | (1 << (QwertyParser.SUB_ASSIGN - 30)) | (1 << (QwertyParser.MUL_ASSIGN - 30)) | (1 << (QwertyParser.DIV_ASSIGN - 30)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Assignment_factorContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = QwertyParser.RULE_assignment_factor;
    return this;
}

Assignment_factorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Assignment_factorContext.prototype.constructor = Assignment_factorContext;

Assignment_factorContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

Assignment_factorContext.prototype.num_factor = function() {
    return this.getTypedRuleContext(Num_factorContext,0);
};

Assignment_factorContext.prototype.STRING_LITERAL = function() {
    return this.getToken(QwertyParser.STRING_LITERAL, 0);
};

Assignment_factorContext.prototype.BOOLEAN_LITERAL = function() {
    return this.getToken(QwertyParser.BOOLEAN_LITERAL, 0);
};

Assignment_factorContext.prototype.enterRule = function(listener) {
    if(listener instanceof QwertyListener ) {
        listener.enterAssignment_factor(this);
	}
};

Assignment_factorContext.prototype.exitRule = function(listener) {
    if(listener instanceof QwertyListener ) {
        listener.exitAssignment_factor(this);
	}
};

Assignment_factorContext.prototype.accept = function(visitor) {
    if ( visitor instanceof QwertyVisitor ) {
        return visitor.visitAssignment_factor(this);
    } else {
        return visitor.visitChildren(this);
    }
};




QwertyParser.Assignment_factorContext = Assignment_factorContext;

QwertyParser.prototype.assignment_factor = function() {

    var localctx = new Assignment_factorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 56, QwertyParser.RULE_assignment_factor);
    try {
        this.state = 375;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,33,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 371;
            this.expression();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 372;
            this.num_factor();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 373;
            this.match(QwertyParser.STRING_LITERAL);
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 374;
            this.match(QwertyParser.BOOLEAN_LITERAL);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Funccall_statementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = QwertyParser.RULE_funccall_statement;
    return this;
}

Funccall_statementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Funccall_statementContext.prototype.constructor = Funccall_statementContext;

Funccall_statementContext.prototype.FUNCTION_IDENTIFIER = function() {
    return this.getToken(QwertyParser.FUNCTION_IDENTIFIER, 0);
};

Funccall_statementContext.prototype.OPEN_PAR = function() {
    return this.getToken(QwertyParser.OPEN_PAR, 0);
};

Funccall_statementContext.prototype.CLOSE_PAR = function() {
    return this.getToken(QwertyParser.CLOSE_PAR, 0);
};

Funccall_statementContext.prototype.actual_parameter_list = function() {
    return this.getTypedRuleContext(Actual_parameter_listContext,0);
};

Funccall_statementContext.prototype.enterRule = function(listener) {
    if(listener instanceof QwertyListener ) {
        listener.enterFunccall_statement(this);
	}
};

Funccall_statementContext.prototype.exitRule = function(listener) {
    if(listener instanceof QwertyListener ) {
        listener.exitFunccall_statement(this);
	}
};

Funccall_statementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof QwertyVisitor ) {
        return visitor.visitFunccall_statement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




QwertyParser.Funccall_statementContext = Funccall_statementContext;

QwertyParser.prototype.funccall_statement = function() {

    var localctx = new Funccall_statementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 58, QwertyParser.RULE_funccall_statement);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 377;
        this.match(QwertyParser.FUNCTION_IDENTIFIER);
        this.state = 378;
        this.match(QwertyParser.OPEN_PAR);
        this.state = 380;
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << QwertyParser.OPEN_PAR) | (1 << QwertyParser.ADD) | (1 << QwertyParser.SUB))) !== 0) || ((((_la - 47)) & ~0x1f) == 0 && ((1 << (_la - 47)) & ((1 << (QwertyParser.NOT - 47)) | (1 << (QwertyParser.INTEGER_LITERAL - 47)) | (1 << (QwertyParser.FLOAT_LITERAL - 47)) | (1 << (QwertyParser.CHAR_LITERAL - 47)) | (1 << (QwertyParser.STRING_LITERAL - 47)) | (1 << (QwertyParser.BOOLEAN_LITERAL - 47)) | (1 << (QwertyParser.VARIABLE_IDENTIFIER - 47)) | (1 << (QwertyParser.FUNCTION_IDENTIFIER - 47)))) !== 0)) {
            this.state = 379;
            this.actual_parameter_list();
        }

        this.state = 382;
        this.match(QwertyParser.CLOSE_PAR);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Actual_parameter_listContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = QwertyParser.RULE_actual_parameter_list;
    return this;
}

Actual_parameter_listContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Actual_parameter_listContext.prototype.constructor = Actual_parameter_listContext;

Actual_parameter_listContext.prototype.actual_params = function() {
    return this.getTypedRuleContext(Actual_paramsContext,0);
};

Actual_parameter_listContext.prototype.enterRule = function(listener) {
    if(listener instanceof QwertyListener ) {
        listener.enterActual_parameter_list(this);
	}
};

Actual_parameter_listContext.prototype.exitRule = function(listener) {
    if(listener instanceof QwertyListener ) {
        listener.exitActual_parameter_list(this);
	}
};

Actual_parameter_listContext.prototype.accept = function(visitor) {
    if ( visitor instanceof QwertyVisitor ) {
        return visitor.visitActual_parameter_list(this);
    } else {
        return visitor.visitChildren(this);
    }
};




QwertyParser.Actual_parameter_listContext = Actual_parameter_listContext;

QwertyParser.prototype.actual_parameter_list = function() {

    var localctx = new Actual_parameter_listContext(this, this._ctx, this.state);
    this.enterRule(localctx, 60, QwertyParser.RULE_actual_parameter_list);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 384;
        this.actual_params();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Actual_paramsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = QwertyParser.RULE_actual_params;
    return this;
}

Actual_paramsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Actual_paramsContext.prototype.constructor = Actual_paramsContext;

Actual_paramsContext.prototype.VARIABLE_IDENTIFIER = function() {
    return this.getToken(QwertyParser.VARIABLE_IDENTIFIER, 0);
};

Actual_paramsContext.prototype.ENUMERATION = function() {
    return this.getToken(QwertyParser.ENUMERATION, 0);
};

Actual_paramsContext.prototype.actual_params = function() {
    return this.getTypedRuleContext(Actual_paramsContext,0);
};

Actual_paramsContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

Actual_paramsContext.prototype.enterRule = function(listener) {
    if(listener instanceof QwertyListener ) {
        listener.enterActual_params(this);
	}
};

Actual_paramsContext.prototype.exitRule = function(listener) {
    if(listener instanceof QwertyListener ) {
        listener.exitActual_params(this);
	}
};

Actual_paramsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof QwertyVisitor ) {
        return visitor.visitActual_params(this);
    } else {
        return visitor.visitChildren(this);
    }
};




QwertyParser.Actual_paramsContext = Actual_paramsContext;

QwertyParser.prototype.actual_params = function() {

    var localctx = new Actual_paramsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 62, QwertyParser.RULE_actual_params);
    try {
        this.state = 395;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,35,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 386;
            this.match(QwertyParser.VARIABLE_IDENTIFIER);
            this.state = 387;
            this.match(QwertyParser.ENUMERATION);
            this.state = 388;
            this.actual_params();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 389;
            this.match(QwertyParser.VARIABLE_IDENTIFIER);
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 390;
            this.expression();
            this.state = 391;
            this.match(QwertyParser.ENUMERATION);
            this.state = 392;
            this.actual_params();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 394;
            this.expression();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Conditional_factorContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = QwertyParser.RULE_conditional_factor;
    return this;
}

Conditional_factorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Conditional_factorContext.prototype.constructor = Conditional_factorContext;

Conditional_factorContext.prototype.bool_expression = function() {
    return this.getTypedRuleContext(Bool_expressionContext,0);
};

Conditional_factorContext.prototype.BOOLEAN_LITERAL = function() {
    return this.getToken(QwertyParser.BOOLEAN_LITERAL, 0);
};

Conditional_factorContext.prototype.enterRule = function(listener) {
    if(listener instanceof QwertyListener ) {
        listener.enterConditional_factor(this);
	}
};

Conditional_factorContext.prototype.exitRule = function(listener) {
    if(listener instanceof QwertyListener ) {
        listener.exitConditional_factor(this);
	}
};

Conditional_factorContext.prototype.accept = function(visitor) {
    if ( visitor instanceof QwertyVisitor ) {
        return visitor.visitConditional_factor(this);
    } else {
        return visitor.visitChildren(this);
    }
};




QwertyParser.Conditional_factorContext = Conditional_factorContext;

QwertyParser.prototype.conditional_factor = function() {

    var localctx = new Conditional_factorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 64, QwertyParser.RULE_conditional_factor);
    try {
        this.state = 399;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,36,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 397;
            this.bool_expression(0);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 398;
            this.match(QwertyParser.BOOLEAN_LITERAL);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function If_statementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = QwertyParser.RULE_if_statement;
    return this;
}

If_statementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
If_statementContext.prototype.constructor = If_statementContext;

If_statementContext.prototype.IF = function() {
    return this.getToken(QwertyParser.IF, 0);
};

If_statementContext.prototype.OPEN_PAR = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(QwertyParser.OPEN_PAR);
    } else {
        return this.getToken(QwertyParser.OPEN_PAR, i);
    }
};


If_statementContext.prototype.conditional_factor = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Conditional_factorContext);
    } else {
        return this.getTypedRuleContext(Conditional_factorContext,i);
    }
};

If_statementContext.prototype.CLOSE_PAR = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(QwertyParser.CLOSE_PAR);
    } else {
        return this.getToken(QwertyParser.CLOSE_PAR, i);
    }
};


If_statementContext.prototype.code_block = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Code_blockContext);
    } else {
        return this.getTypedRuleContext(Code_blockContext,i);
    }
};

If_statementContext.prototype.ELSE_IF = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(QwertyParser.ELSE_IF);
    } else {
        return this.getToken(QwertyParser.ELSE_IF, i);
    }
};


If_statementContext.prototype.ELSE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(QwertyParser.ELSE);
    } else {
        return this.getToken(QwertyParser.ELSE, i);
    }
};


If_statementContext.prototype.enterRule = function(listener) {
    if(listener instanceof QwertyListener ) {
        listener.enterIf_statement(this);
	}
};

If_statementContext.prototype.exitRule = function(listener) {
    if(listener instanceof QwertyListener ) {
        listener.exitIf_statement(this);
	}
};

If_statementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof QwertyVisitor ) {
        return visitor.visitIf_statement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




QwertyParser.If_statementContext = If_statementContext;

QwertyParser.prototype.if_statement = function() {

    var localctx = new If_statementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 66, QwertyParser.RULE_if_statement);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 401;
        this.match(QwertyParser.IF);
        this.state = 402;
        this.match(QwertyParser.OPEN_PAR);
        this.state = 403;
        this.conditional_factor();
        this.state = 404;
        this.match(QwertyParser.CLOSE_PAR);
        this.state = 405;
        this.code_block();
        this.state = 414;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===QwertyParser.ELSE_IF) {
            this.state = 406;
            this.match(QwertyParser.ELSE_IF);
            this.state = 407;
            this.match(QwertyParser.OPEN_PAR);
            this.state = 408;
            this.conditional_factor();
            this.state = 409;
            this.match(QwertyParser.CLOSE_PAR);
            this.state = 410;
            this.code_block();
            this.state = 416;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 421;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===QwertyParser.ELSE) {
            this.state = 417;
            this.match(QwertyParser.ELSE);
            this.state = 418;
            this.code_block();
            this.state = 423;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Conditional_blockContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = QwertyParser.RULE_conditional_block;
    return this;
}

Conditional_blockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Conditional_blockContext.prototype.constructor = Conditional_blockContext;

Conditional_blockContext.prototype.OPEN_PAR = function() {
    return this.getToken(QwertyParser.OPEN_PAR, 0);
};

Conditional_blockContext.prototype.conditional_factor = function() {
    return this.getTypedRuleContext(Conditional_factorContext,0);
};

Conditional_blockContext.prototype.CLOSE_PAR = function() {
    return this.getToken(QwertyParser.CLOSE_PAR, 0);
};

Conditional_blockContext.prototype.OPEN_BRACE = function() {
    return this.getToken(QwertyParser.OPEN_BRACE, 0);
};

Conditional_blockContext.prototype.CLOSE_BRACE = function() {
    return this.getToken(QwertyParser.CLOSE_BRACE, 0);
};

Conditional_blockContext.prototype.statement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StatementContext);
    } else {
        return this.getTypedRuleContext(StatementContext,i);
    }
};

Conditional_blockContext.prototype.enterRule = function(listener) {
    if(listener instanceof QwertyListener ) {
        listener.enterConditional_block(this);
	}
};

Conditional_blockContext.prototype.exitRule = function(listener) {
    if(listener instanceof QwertyListener ) {
        listener.exitConditional_block(this);
	}
};

Conditional_blockContext.prototype.accept = function(visitor) {
    if ( visitor instanceof QwertyVisitor ) {
        return visitor.visitConditional_block(this);
    } else {
        return visitor.visitChildren(this);
    }
};




QwertyParser.Conditional_blockContext = Conditional_blockContext;

QwertyParser.prototype.conditional_block = function() {

    var localctx = new Conditional_blockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 68, QwertyParser.RULE_conditional_block);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 424;
        this.match(QwertyParser.OPEN_PAR);
        this.state = 425;
        this.conditional_factor();
        this.state = 426;
        this.match(QwertyParser.CLOSE_PAR);
        this.state = 427;
        this.match(QwertyParser.OPEN_BRACE);
        this.state = 431;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << QwertyParser.INT) | (1 << QwertyParser.FLOAT) | (1 << QwertyParser.CHAR) | (1 << QwertyParser.STRING) | (1 << QwertyParser.BOOLEAN) | (1 << QwertyParser.IF) | (1 << QwertyParser.FOR) | (1 << QwertyParser.WHILE) | (1 << QwertyParser.DO) | (1 << QwertyParser.PRINT) | (1 << QwertyParser.PRINTLN) | (1 << QwertyParser.SCAN) | (1 << QwertyParser.COMMENT) | (1 << QwertyParser.LINE_COMMENT))) !== 0) || ((((_la - 48)) & ~0x1f) == 0 && ((1 << (_la - 48)) & ((1 << (QwertyParser.CONSTANT_KEYWORD - 48)) | (1 << (QwertyParser.RETURN - 48)) | (1 << (QwertyParser.VARIABLE_IDENTIFIER - 48)) | (1 << (QwertyParser.FUNCTION_IDENTIFIER - 48)))) !== 0)) {
            this.state = 428;
            this.statement();
            this.state = 433;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 434;
        this.match(QwertyParser.CLOSE_BRACE);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Code_blockContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = QwertyParser.RULE_code_block;
    return this;
}

Code_blockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Code_blockContext.prototype.constructor = Code_blockContext;

Code_blockContext.prototype.OPEN_BRACE = function() {
    return this.getToken(QwertyParser.OPEN_BRACE, 0);
};

Code_blockContext.prototype.CLOSE_BRACE = function() {
    return this.getToken(QwertyParser.CLOSE_BRACE, 0);
};

Code_blockContext.prototype.statement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StatementContext);
    } else {
        return this.getTypedRuleContext(StatementContext,i);
    }
};

Code_blockContext.prototype.enterRule = function(listener) {
    if(listener instanceof QwertyListener ) {
        listener.enterCode_block(this);
	}
};

Code_blockContext.prototype.exitRule = function(listener) {
    if(listener instanceof QwertyListener ) {
        listener.exitCode_block(this);
	}
};

Code_blockContext.prototype.accept = function(visitor) {
    if ( visitor instanceof QwertyVisitor ) {
        return visitor.visitCode_block(this);
    } else {
        return visitor.visitChildren(this);
    }
};




QwertyParser.Code_blockContext = Code_blockContext;

QwertyParser.prototype.code_block = function() {

    var localctx = new Code_blockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 70, QwertyParser.RULE_code_block);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 436;
        this.match(QwertyParser.OPEN_BRACE);
        this.state = 440;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << QwertyParser.INT) | (1 << QwertyParser.FLOAT) | (1 << QwertyParser.CHAR) | (1 << QwertyParser.STRING) | (1 << QwertyParser.BOOLEAN) | (1 << QwertyParser.IF) | (1 << QwertyParser.FOR) | (1 << QwertyParser.WHILE) | (1 << QwertyParser.DO) | (1 << QwertyParser.PRINT) | (1 << QwertyParser.PRINTLN) | (1 << QwertyParser.SCAN) | (1 << QwertyParser.COMMENT) | (1 << QwertyParser.LINE_COMMENT))) !== 0) || ((((_la - 48)) & ~0x1f) == 0 && ((1 << (_la - 48)) & ((1 << (QwertyParser.CONSTANT_KEYWORD - 48)) | (1 << (QwertyParser.RETURN - 48)) | (1 << (QwertyParser.VARIABLE_IDENTIFIER - 48)) | (1 << (QwertyParser.FUNCTION_IDENTIFIER - 48)))) !== 0)) {
            this.state = 437;
            this.statement();
            this.state = 442;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 443;
        this.match(QwertyParser.CLOSE_BRACE);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function While_statementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = QwertyParser.RULE_while_statement;
    return this;
}

While_statementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
While_statementContext.prototype.constructor = While_statementContext;

While_statementContext.prototype.WHILE = function() {
    return this.getToken(QwertyParser.WHILE, 0);
};

While_statementContext.prototype.OPEN_PAR = function() {
    return this.getToken(QwertyParser.OPEN_PAR, 0);
};

While_statementContext.prototype.conditional_factor = function() {
    return this.getTypedRuleContext(Conditional_factorContext,0);
};

While_statementContext.prototype.CLOSE_PAR = function() {
    return this.getToken(QwertyParser.CLOSE_PAR, 0);
};

While_statementContext.prototype.code_block = function() {
    return this.getTypedRuleContext(Code_blockContext,0);
};

While_statementContext.prototype.enterRule = function(listener) {
    if(listener instanceof QwertyListener ) {
        listener.enterWhile_statement(this);
	}
};

While_statementContext.prototype.exitRule = function(listener) {
    if(listener instanceof QwertyListener ) {
        listener.exitWhile_statement(this);
	}
};

While_statementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof QwertyVisitor ) {
        return visitor.visitWhile_statement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




QwertyParser.While_statementContext = While_statementContext;

QwertyParser.prototype.while_statement = function() {

    var localctx = new While_statementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 72, QwertyParser.RULE_while_statement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 445;
        this.match(QwertyParser.WHILE);
        this.state = 446;
        this.match(QwertyParser.OPEN_PAR);
        this.state = 447;
        this.conditional_factor();
        this.state = 448;
        this.match(QwertyParser.CLOSE_PAR);
        this.state = 449;
        this.code_block();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Do_while_statementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = QwertyParser.RULE_do_while_statement;
    return this;
}

Do_while_statementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Do_while_statementContext.prototype.constructor = Do_while_statementContext;

Do_while_statementContext.prototype.DO = function() {
    return this.getToken(QwertyParser.DO, 0);
};

Do_while_statementContext.prototype.code_block = function() {
    return this.getTypedRuleContext(Code_blockContext,0);
};

Do_while_statementContext.prototype.WHILE = function() {
    return this.getToken(QwertyParser.WHILE, 0);
};

Do_while_statementContext.prototype.OPEN_PAR = function() {
    return this.getToken(QwertyParser.OPEN_PAR, 0);
};

Do_while_statementContext.prototype.conditional_factor = function() {
    return this.getTypedRuleContext(Conditional_factorContext,0);
};

Do_while_statementContext.prototype.CLOSE_PAR = function() {
    return this.getToken(QwertyParser.CLOSE_PAR, 0);
};

Do_while_statementContext.prototype.END = function() {
    return this.getToken(QwertyParser.END, 0);
};

Do_while_statementContext.prototype.enterRule = function(listener) {
    if(listener instanceof QwertyListener ) {
        listener.enterDo_while_statement(this);
	}
};

Do_while_statementContext.prototype.exitRule = function(listener) {
    if(listener instanceof QwertyListener ) {
        listener.exitDo_while_statement(this);
	}
};

Do_while_statementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof QwertyVisitor ) {
        return visitor.visitDo_while_statement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




QwertyParser.Do_while_statementContext = Do_while_statementContext;

QwertyParser.prototype.do_while_statement = function() {

    var localctx = new Do_while_statementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 74, QwertyParser.RULE_do_while_statement);
    try {
        this.state = 467;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,41,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 451;
            this.match(QwertyParser.DO);
            this.state = 452;
            this.code_block();
            this.state = 453;
            this.match(QwertyParser.WHILE);
            this.state = 454;
            this.match(QwertyParser.OPEN_PAR);
            this.state = 455;
            this.conditional_factor();
            this.state = 456;
            this.match(QwertyParser.CLOSE_PAR);
            this.state = 457;
            this.match(QwertyParser.END);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 459;
            this.match(QwertyParser.DO);
            this.state = 460;
            this.code_block();
            this.state = 461;
            this.match(QwertyParser.WHILE);
            this.state = 462;
            this.match(QwertyParser.OPEN_PAR);
            this.state = 463;
            this.conditional_factor();
            this.state = 464;
            this.match(QwertyParser.CLOSE_PAR);
            notifyErrorListeners("Insert ';' to complete statement'");
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function For_statementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = QwertyParser.RULE_for_statement;
    return this;
}

For_statementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
For_statementContext.prototype.constructor = For_statementContext;

For_statementContext.prototype.FOR = function() {
    return this.getToken(QwertyParser.FOR, 0);
};

For_statementContext.prototype.OPEN_PAR = function() {
    return this.getToken(QwertyParser.OPEN_PAR, 0);
};

For_statementContext.prototype.var_decl = function() {
    return this.getTypedRuleContext(Var_declContext,0);
};

For_statementContext.prototype.END = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(QwertyParser.END);
    } else {
        return this.getToken(QwertyParser.END, i);
    }
};


For_statementContext.prototype.bool_expression = function() {
    return this.getTypedRuleContext(Bool_expressionContext,0);
};

For_statementContext.prototype.assignment_statement = function() {
    return this.getTypedRuleContext(Assignment_statementContext,0);
};

For_statementContext.prototype.CLOSE_PAR = function() {
    return this.getToken(QwertyParser.CLOSE_PAR, 0);
};

For_statementContext.prototype.code_block = function() {
    return this.getTypedRuleContext(Code_blockContext,0);
};

For_statementContext.prototype.enterRule = function(listener) {
    if(listener instanceof QwertyListener ) {
        listener.enterFor_statement(this);
	}
};

For_statementContext.prototype.exitRule = function(listener) {
    if(listener instanceof QwertyListener ) {
        listener.exitFor_statement(this);
	}
};

For_statementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof QwertyVisitor ) {
        return visitor.visitFor_statement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




QwertyParser.For_statementContext = For_statementContext;

QwertyParser.prototype.for_statement = function() {

    var localctx = new For_statementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 76, QwertyParser.RULE_for_statement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 469;
        this.match(QwertyParser.FOR);
        this.state = 470;
        this.match(QwertyParser.OPEN_PAR);
        this.state = 471;
        this.var_decl();
        this.state = 472;
        this.match(QwertyParser.END);
        this.state = 473;
        this.bool_expression(0);
        this.state = 474;
        this.match(QwertyParser.END);
        this.state = 475;
        this.assignment_statement();
        this.state = 476;
        this.match(QwertyParser.CLOSE_PAR);
        this.state = 477;
        this.code_block();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Return_statementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = QwertyParser.RULE_return_statement;
    return this;
}

Return_statementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Return_statementContext.prototype.constructor = Return_statementContext;

Return_statementContext.prototype.RETURN = function() {
    return this.getToken(QwertyParser.RETURN, 0);
};

Return_statementContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

Return_statementContext.prototype.STRING_LITERAL = function() {
    return this.getToken(QwertyParser.STRING_LITERAL, 0);
};

Return_statementContext.prototype.BOOLEAN_LITERAL = function() {
    return this.getToken(QwertyParser.BOOLEAN_LITERAL, 0);
};

Return_statementContext.prototype.num_factor = function() {
    return this.getTypedRuleContext(Num_factorContext,0);
};

Return_statementContext.prototype.enterRule = function(listener) {
    if(listener instanceof QwertyListener ) {
        listener.enterReturn_statement(this);
	}
};

Return_statementContext.prototype.exitRule = function(listener) {
    if(listener instanceof QwertyListener ) {
        listener.exitReturn_statement(this);
	}
};

Return_statementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof QwertyVisitor ) {
        return visitor.visitReturn_statement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




QwertyParser.Return_statementContext = Return_statementContext;

QwertyParser.prototype.return_statement = function() {

    var localctx = new Return_statementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 78, QwertyParser.RULE_return_statement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 479;
        this.match(QwertyParser.RETURN);
        this.state = 484;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,42,this._ctx);
        switch(la_) {
        case 1:
            this.state = 480;
            this.expression();
            break;

        case 2:
            this.state = 481;
            this.match(QwertyParser.STRING_LITERAL);
            break;

        case 3:
            this.state = 482;
            this.match(QwertyParser.BOOLEAN_LITERAL);
            break;

        case 4:
            this.state = 483;
            this.num_factor();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Scan_statementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = QwertyParser.RULE_scan_statement;
    return this;
}

Scan_statementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Scan_statementContext.prototype.constructor = Scan_statementContext;

Scan_statementContext.prototype.SCAN = function() {
    return this.getToken(QwertyParser.SCAN, 0);
};

Scan_statementContext.prototype.OPEN_PAR = function() {
    return this.getToken(QwertyParser.OPEN_PAR, 0);
};

Scan_statementContext.prototype.STRING_LITERAL = function() {
    return this.getToken(QwertyParser.STRING_LITERAL, 0);
};

Scan_statementContext.prototype.ENUMERATION = function() {
    return this.getToken(QwertyParser.ENUMERATION, 0);
};

Scan_statementContext.prototype.VARIABLE_IDENTIFIER = function() {
    return this.getToken(QwertyParser.VARIABLE_IDENTIFIER, 0);
};

Scan_statementContext.prototype.CLOSE_PAR = function() {
    return this.getToken(QwertyParser.CLOSE_PAR, 0);
};

Scan_statementContext.prototype.enterRule = function(listener) {
    if(listener instanceof QwertyListener ) {
        listener.enterScan_statement(this);
	}
};

Scan_statementContext.prototype.exitRule = function(listener) {
    if(listener instanceof QwertyListener ) {
        listener.exitScan_statement(this);
	}
};

Scan_statementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof QwertyVisitor ) {
        return visitor.visitScan_statement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




QwertyParser.Scan_statementContext = Scan_statementContext;

QwertyParser.prototype.scan_statement = function() {

    var localctx = new Scan_statementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 80, QwertyParser.RULE_scan_statement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 486;
        this.match(QwertyParser.SCAN);
        this.state = 487;
        this.match(QwertyParser.OPEN_PAR);
        this.state = 488;
        this.match(QwertyParser.STRING_LITERAL);
        this.state = 489;
        this.match(QwertyParser.ENUMERATION);
        this.state = 490;
        this.match(QwertyParser.VARIABLE_IDENTIFIER);
        this.state = 491;
        this.match(QwertyParser.CLOSE_PAR);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Print_statementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = QwertyParser.RULE_print_statement;
    return this;
}

Print_statementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Print_statementContext.prototype.constructor = Print_statementContext;

Print_statementContext.prototype.PRINT = function() {
    return this.getToken(QwertyParser.PRINT, 0);
};

Print_statementContext.prototype.OPEN_PAR = function() {
    return this.getToken(QwertyParser.OPEN_PAR, 0);
};

Print_statementContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

Print_statementContext.prototype.CLOSE_PAR = function() {
    return this.getToken(QwertyParser.CLOSE_PAR, 0);
};

Print_statementContext.prototype.PRINTLN = function() {
    return this.getToken(QwertyParser.PRINTLN, 0);
};

Print_statementContext.prototype.enterRule = function(listener) {
    if(listener instanceof QwertyListener ) {
        listener.enterPrint_statement(this);
	}
};

Print_statementContext.prototype.exitRule = function(listener) {
    if(listener instanceof QwertyListener ) {
        listener.exitPrint_statement(this);
	}
};

Print_statementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof QwertyVisitor ) {
        return visitor.visitPrint_statement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




QwertyParser.Print_statementContext = Print_statementContext;

QwertyParser.prototype.print_statement = function() {

    var localctx = new Print_statementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 82, QwertyParser.RULE_print_statement);
    try {
        this.state = 503;
        switch(this._input.LA(1)) {
        case QwertyParser.PRINT:
            this.enterOuterAlt(localctx, 1);
            this.state = 493;
            this.match(QwertyParser.PRINT);
            this.state = 494;
            this.match(QwertyParser.OPEN_PAR);
            this.state = 495;
            this.expression();
            this.state = 496;
            this.match(QwertyParser.CLOSE_PAR);
            break;
        case QwertyParser.PRINTLN:
            this.enterOuterAlt(localctx, 2);
            this.state = 498;
            this.match(QwertyParser.PRINTLN);
            this.state = 499;
            this.match(QwertyParser.OPEN_PAR);
            this.state = 500;
            this.expression();
            this.state = 501;
            this.match(QwertyParser.CLOSE_PAR);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Arr_declContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = QwertyParser.RULE_arr_decl;
    return this;
}

Arr_declContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Arr_declContext.prototype.constructor = Arr_declContext;

Arr_declContext.prototype.data_type = function() {
    return this.getTypedRuleContext(Data_typeContext,0);
};

Arr_declContext.prototype.OPEN_BRACKET = function() {
    return this.getToken(QwertyParser.OPEN_BRACKET, 0);
};

Arr_declContext.prototype.CLOSE_BRACKET = function() {
    return this.getToken(QwertyParser.CLOSE_BRACKET, 0);
};

Arr_declContext.prototype.VARIABLE_IDENTIFIER = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(QwertyParser.VARIABLE_IDENTIFIER);
    } else {
        return this.getToken(QwertyParser.VARIABLE_IDENTIFIER, i);
    }
};


Arr_declContext.prototype.INTEGER_LITERAL = function() {
    return this.getToken(QwertyParser.INTEGER_LITERAL, 0);
};

Arr_declContext.prototype.enterRule = function(listener) {
    if(listener instanceof QwertyListener ) {
        listener.enterArr_decl(this);
	}
};

Arr_declContext.prototype.exitRule = function(listener) {
    if(listener instanceof QwertyListener ) {
        listener.exitArr_decl(this);
	}
};

Arr_declContext.prototype.accept = function(visitor) {
    if ( visitor instanceof QwertyVisitor ) {
        return visitor.visitArr_decl(this);
    } else {
        return visitor.visitChildren(this);
    }
};




QwertyParser.Arr_declContext = Arr_declContext;

QwertyParser.prototype.arr_decl = function() {

    var localctx = new Arr_declContext(this, this._ctx, this.state);
    this.enterRule(localctx, 84, QwertyParser.RULE_arr_decl);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 505;
        this.data_type();
        this.state = 506;
        this.match(QwertyParser.OPEN_BRACKET);
        this.state = 507;
        _la = this._input.LA(1);
        if(!(_la===QwertyParser.INTEGER_LITERAL || _la===QwertyParser.VARIABLE_IDENTIFIER)) {
        this._errHandler.recoverInline(this);
        }
        else {
            this.consume();
        }
        this.state = 508;
        this.match(QwertyParser.CLOSE_BRACKET);
        this.state = 509;
        this.match(QwertyParser.VARIABLE_IDENTIFIER);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Arr_assignmentContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = QwertyParser.RULE_arr_assignment;
    return this;
}

Arr_assignmentContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Arr_assignmentContext.prototype.constructor = Arr_assignmentContext;

Arr_assignmentContext.prototype.VARIABLE_IDENTIFIER = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(QwertyParser.VARIABLE_IDENTIFIER);
    } else {
        return this.getToken(QwertyParser.VARIABLE_IDENTIFIER, i);
    }
};


Arr_assignmentContext.prototype.OPEN_BRACKET = function() {
    return this.getToken(QwertyParser.OPEN_BRACKET, 0);
};

Arr_assignmentContext.prototype.CLOSE_BRACKET = function() {
    return this.getToken(QwertyParser.CLOSE_BRACKET, 0);
};

Arr_assignmentContext.prototype.var_assignment_statement = function() {
    return this.getTypedRuleContext(Var_assignment_statementContext,0);
};

Arr_assignmentContext.prototype.INTEGER_LITERAL = function() {
    return this.getToken(QwertyParser.INTEGER_LITERAL, 0);
};

Arr_assignmentContext.prototype.enterRule = function(listener) {
    if(listener instanceof QwertyListener ) {
        listener.enterArr_assignment(this);
	}
};

Arr_assignmentContext.prototype.exitRule = function(listener) {
    if(listener instanceof QwertyListener ) {
        listener.exitArr_assignment(this);
	}
};

Arr_assignmentContext.prototype.accept = function(visitor) {
    if ( visitor instanceof QwertyVisitor ) {
        return visitor.visitArr_assignment(this);
    } else {
        return visitor.visitChildren(this);
    }
};




QwertyParser.Arr_assignmentContext = Arr_assignmentContext;

QwertyParser.prototype.arr_assignment = function() {

    var localctx = new Arr_assignmentContext(this, this._ctx, this.state);
    this.enterRule(localctx, 86, QwertyParser.RULE_arr_assignment);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 511;
        this.match(QwertyParser.VARIABLE_IDENTIFIER);
        this.state = 512;
        this.match(QwertyParser.OPEN_BRACKET);
        this.state = 513;
        _la = this._input.LA(1);
        if(!(_la===QwertyParser.INTEGER_LITERAL || _la===QwertyParser.VARIABLE_IDENTIFIER)) {
        this._errHandler.recoverInline(this);
        }
        else {
            this.consume();
        }
        this.state = 514;
        this.match(QwertyParser.CLOSE_BRACKET);
        this.state = 515;
        this.var_assignment_statement();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Arr_expressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = QwertyParser.RULE_arr_expression;
    return this;
}

Arr_expressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Arr_expressionContext.prototype.constructor = Arr_expressionContext;

Arr_expressionContext.prototype.VARIABLE_IDENTIFIER = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(QwertyParser.VARIABLE_IDENTIFIER);
    } else {
        return this.getToken(QwertyParser.VARIABLE_IDENTIFIER, i);
    }
};


Arr_expressionContext.prototype.OPEN_BRACKET = function() {
    return this.getToken(QwertyParser.OPEN_BRACKET, 0);
};

Arr_expressionContext.prototype.CLOSE_BRACKET = function() {
    return this.getToken(QwertyParser.CLOSE_BRACKET, 0);
};

Arr_expressionContext.prototype.INTEGER_LITERAL = function() {
    return this.getToken(QwertyParser.INTEGER_LITERAL, 0);
};

Arr_expressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof QwertyListener ) {
        listener.enterArr_expression(this);
	}
};

Arr_expressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof QwertyListener ) {
        listener.exitArr_expression(this);
	}
};

Arr_expressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof QwertyVisitor ) {
        return visitor.visitArr_expression(this);
    } else {
        return visitor.visitChildren(this);
    }
};




QwertyParser.Arr_expressionContext = Arr_expressionContext;

QwertyParser.prototype.arr_expression = function() {

    var localctx = new Arr_expressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 88, QwertyParser.RULE_arr_expression);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 517;
        this.match(QwertyParser.VARIABLE_IDENTIFIER);
        this.state = 518;
        this.match(QwertyParser.OPEN_BRACKET);
        this.state = 519;
        _la = this._input.LA(1);
        if(!(_la===QwertyParser.INTEGER_LITERAL || _la===QwertyParser.VARIABLE_IDENTIFIER)) {
        this._errHandler.recoverInline(this);
        }
        else {
            this.consume();
        }
        this.state = 520;
        this.match(QwertyParser.CLOSE_BRACKET);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


QwertyParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 21:
			return this.bool_expression_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

QwertyParser.prototype.bool_expression_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 6);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.QwertyParser = QwertyParser;
