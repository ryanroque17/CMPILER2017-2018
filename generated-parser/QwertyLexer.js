// Generated from Qwerty.g4 by ANTLR 4.5.1
// jshint ignore: start
var antlr4 = require('antlr4/index');


var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u0002<\u0184\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010",
    "\t\u0010\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013",
    "\u0004\u0014\t\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017",
    "\t\u0017\u0004\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a",
    "\u0004\u001b\t\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e",
    "\t\u001e\u0004\u001f\t\u001f\u0004 \t \u0004!\t!\u0004\"\t\"\u0004#",
    "\t#\u0004$\t$\u0004%\t%\u0004&\t&\u0004\'\t\'\u0004(\t(\u0004)\t)\u0004",
    "*\t*\u0004+\t+\u0004,\t,\u0004-\t-\u0004.\t.\u0004/\t/\u00040\t0\u0004",
    "1\t1\u00042\t2\u00043\t3\u00044\t4\u00045\t5\u00046\t6\u00047\t7\u0004",
    "8\t8\u00049\t9\u0004:\t:\u0004;\t;\u0003\u0002\u0006\u0002y\n\u0002",
    "\r\u0002\u000e\u0002z\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003",
    "\b\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003",
    "\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003\u000b",
    "\u0003\u000b\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\r",
    "\u0003\r\u0003\r\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003",
    "\u000e\u0003\u000e\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003",
    "\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u0010\u0003\u0010\u0003",
    "\u0010\u0003\u0010\u0003\u0010\u0003\u0011\u0003\u0011\u0003\u0012\u0003",
    "\u0012\u0003\u0013\u0003\u0013\u0003\u0014\u0003\u0014\u0003\u0015\u0003",
    "\u0015\u0003\u0016\u0003\u0016\u0003\u0017\u0003\u0017\u0003\u0018\u0003",
    "\u0018\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0007\u0019\u00e1",
    "\n\u0019\f\u0019\u000e\u0019\u00e4\u000b\u0019\u0003\u0019\u0003\u0019",
    "\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u001a\u0003\u001a\u0003\u001a",
    "\u0003\u001a\u0007\u001a\u00ef\n\u001a\f\u001a\u000e\u001a\u00f2\u000b",
    "\u001a\u0003\u001a\u0003\u001a\u0003\u001b\u0003\u001b\u0003\u001c\u0003",
    "\u001c\u0003\u001d\u0003\u001d\u0003\u001e\u0003\u001e\u0003\u001f\u0003",
    "\u001f\u0003\u001f\u0003 \u0003 \u0003 \u0003!\u0003!\u0003!\u0003\"",
    "\u0003\"\u0003\"\u0003#\u0003#\u0003#\u0003$\u0003$\u0003%\u0003%\u0003",
    "&\u0003&\u0003&\u0003\'\u0003\'\u0003(\u0003(\u0003(\u0003)\u0003)\u0003",
    ")\u0003*\u0003*\u0003*\u0003+\u0003+\u0003+\u0003,\u0003,\u0003,\u0003",
    "-\u0003-\u0003.\u0003.\u0003.\u0003/\u0003/\u0003/\u00030\u00030\u0003",
    "1\u00031\u00031\u00031\u00031\u00031\u00031\u00031\u00031\u00032\u0003",
    "2\u00032\u00032\u00032\u00033\u00033\u00033\u00033\u00033\u00033\u0003",
    "3\u00034\u00034\u00034\u00034\u00034\u00035\u00065\u014a\n5\r5\u000e",
    "5\u014b\u00036\u00056\u014f\n6\u00036\u00036\u00066\u0153\n6\r6\u000e",
    "6\u0154\u00037\u00037\u00037\u00037\u00038\u00038\u00078\u015d\n8\f",
    "8\u000e8\u0160\u000b8\u00038\u00038\u00039\u00039\u00039\u00039\u0003",
    "9\u00039\u00039\u00039\u00039\u00059\u016d\n9\u0003:\u0006:\u0170\n",
    ":\r:\u000e:\u0171\u0003:\u0007:\u0175\n:\f:\u000e:\u0178\u000b:\u0003",
    ";\u0006;\u017b\n;\r;\u000e;\u017c\u0003;\u0007;\u0180\n;\f;\u000e;\u0183",
    "\u000b;\u0004\u00e2\u015e\u0002<\u0003\u0003\u0005\u0004\u0007\u0005",
    "\t\u0006\u000b\u0007\r\b\u000f\t\u0011\n\u0013\u000b\u0015\f\u0017\r",
    "\u0019\u000e\u001b\u000f\u001d\u0010\u001f\u0011!\u0012#\u0013%\u0014",
    "\'\u0015)\u0016+\u0017-\u0018/\u00191\u001a3\u001b5\u001c7\u001d9\u001e",
    ";\u001f= ?!A\"C#E$G%I&K\'M(O)Q*S+U,W-Y.[/]0_1a2c3e4g5i6k7m8o9q:s;u<",
    "\u0003\u0002\u0007\u0006\u0002\u000b\f\u000f\u000f\"\"~~\u0004\u0002",
    "\f\f\u000f\u000f\u0003\u00022;\u0003\u0002c|\u0003\u0002C\\\u018f\u0002",
    "\u0003\u0003\u0002\u0002\u0002\u0002\u0005\u0003\u0002\u0002\u0002\u0002",
    "\u0007\u0003\u0002\u0002\u0002\u0002\t\u0003\u0002\u0002\u0002\u0002",
    "\u000b\u0003\u0002\u0002\u0002\u0002\r\u0003\u0002\u0002\u0002\u0002",
    "\u000f\u0003\u0002\u0002\u0002\u0002\u0011\u0003\u0002\u0002\u0002\u0002",
    "\u0013\u0003\u0002\u0002\u0002\u0002\u0015\u0003\u0002\u0002\u0002\u0002",
    "\u0017\u0003\u0002\u0002\u0002\u0002\u0019\u0003\u0002\u0002\u0002\u0002",
    "\u001b\u0003\u0002\u0002\u0002\u0002\u001d\u0003\u0002\u0002\u0002\u0002",
    "\u001f\u0003\u0002\u0002\u0002\u0002!\u0003\u0002\u0002\u0002\u0002",
    "#\u0003\u0002\u0002\u0002\u0002%\u0003\u0002\u0002\u0002\u0002\'\u0003",
    "\u0002\u0002\u0002\u0002)\u0003\u0002\u0002\u0002\u0002+\u0003\u0002",
    "\u0002\u0002\u0002-\u0003\u0002\u0002\u0002\u0002/\u0003\u0002\u0002",
    "\u0002\u00021\u0003\u0002\u0002\u0002\u00023\u0003\u0002\u0002\u0002",
    "\u00025\u0003\u0002\u0002\u0002\u00027\u0003\u0002\u0002\u0002\u0002",
    "9\u0003\u0002\u0002\u0002\u0002;\u0003\u0002\u0002\u0002\u0002=\u0003",
    "\u0002\u0002\u0002\u0002?\u0003\u0002\u0002\u0002\u0002A\u0003\u0002",
    "\u0002\u0002\u0002C\u0003\u0002\u0002\u0002\u0002E\u0003\u0002\u0002",
    "\u0002\u0002G\u0003\u0002\u0002\u0002\u0002I\u0003\u0002\u0002\u0002",
    "\u0002K\u0003\u0002\u0002\u0002\u0002M\u0003\u0002\u0002\u0002\u0002",
    "O\u0003\u0002\u0002\u0002\u0002Q\u0003\u0002\u0002\u0002\u0002S\u0003",
    "\u0002\u0002\u0002\u0002U\u0003\u0002\u0002\u0002\u0002W\u0003\u0002",
    "\u0002\u0002\u0002Y\u0003\u0002\u0002\u0002\u0002[\u0003\u0002\u0002",
    "\u0002\u0002]\u0003\u0002\u0002\u0002\u0002_\u0003\u0002\u0002\u0002",
    "\u0002a\u0003\u0002\u0002\u0002\u0002c\u0003\u0002\u0002\u0002\u0002",
    "e\u0003\u0002\u0002\u0002\u0002g\u0003\u0002\u0002\u0002\u0002i\u0003",
    "\u0002\u0002\u0002\u0002k\u0003\u0002\u0002\u0002\u0002m\u0003\u0002",
    "\u0002\u0002\u0002o\u0003\u0002\u0002\u0002\u0002q\u0003\u0002\u0002",
    "\u0002\u0002s\u0003\u0002\u0002\u0002\u0002u\u0003\u0002\u0002\u0002",
    "\u0003x\u0003\u0002\u0002\u0002\u0005~\u0003\u0002\u0002\u0002\u0007",
    "\u0082\u0003\u0002\u0002\u0002\t\u0088\u0003\u0002\u0002\u0002\u000b",
    "\u008d\u0003\u0002\u0002\u0002\r\u0094\u0003\u0002\u0002\u0002\u000f",
    "\u009c\u0003\u0002\u0002\u0002\u0011\u009f\u0003\u0002\u0002\u0002\u0013",
    "\u00a7\u0003\u0002\u0002\u0002\u0015\u00ac\u0003\u0002\u0002\u0002\u0017",
    "\u00b0\u0003\u0002\u0002\u0002\u0019\u00b6\u0003\u0002\u0002\u0002\u001b",
    "\u00b9\u0003\u0002\u0002\u0002\u001d\u00bf\u0003\u0002\u0002\u0002\u001f",
    "\u00c7\u0003\u0002\u0002\u0002!\u00cc\u0003\u0002\u0002\u0002#\u00ce",
    "\u0003\u0002\u0002\u0002%\u00d0\u0003\u0002\u0002\u0002\'\u00d2\u0003",
    "\u0002\u0002\u0002)\u00d4\u0003\u0002\u0002\u0002+\u00d6\u0003\u0002",
    "\u0002\u0002-\u00d8\u0003\u0002\u0002\u0002/\u00da\u0003\u0002\u0002",
    "\u00021\u00dc\u0003\u0002\u0002\u00023\u00ea\u0003\u0002\u0002\u0002",
    "5\u00f5\u0003\u0002\u0002\u00027\u00f7\u0003\u0002\u0002\u00029\u00f9",
    "\u0003\u0002\u0002\u0002;\u00fb\u0003\u0002\u0002\u0002=\u00fd\u0003",
    "\u0002\u0002\u0002?\u0100\u0003\u0002\u0002\u0002A\u0103\u0003\u0002",
    "\u0002\u0002C\u0106\u0003\u0002\u0002\u0002E\u0109\u0003\u0002\u0002",
    "\u0002G\u010c\u0003\u0002\u0002\u0002I\u010e\u0003\u0002\u0002\u0002",
    "K\u0110\u0003\u0002\u0002\u0002M\u0113\u0003\u0002\u0002\u0002O\u0115",
    "\u0003\u0002\u0002\u0002Q\u0118\u0003\u0002\u0002\u0002S\u011b\u0003",
    "\u0002\u0002\u0002U\u011e\u0003\u0002\u0002\u0002W\u0121\u0003\u0002",
    "\u0002\u0002Y\u0124\u0003\u0002\u0002\u0002[\u0126\u0003\u0002\u0002",
    "\u0002]\u0129\u0003\u0002\u0002\u0002_\u012c\u0003\u0002\u0002\u0002",
    "a\u012e\u0003\u0002\u0002\u0002c\u0137\u0003\u0002\u0002\u0002e\u013c",
    "\u0003\u0002\u0002\u0002g\u0143\u0003\u0002\u0002\u0002i\u0149\u0003",
    "\u0002\u0002\u0002k\u014e\u0003\u0002\u0002\u0002m\u0156\u0003\u0002",
    "\u0002\u0002o\u015a\u0003\u0002\u0002\u0002q\u016c\u0003\u0002\u0002",
    "\u0002s\u016f\u0003\u0002\u0002\u0002u\u017a\u0003\u0002\u0002\u0002",
    "wy\t\u0002\u0002\u0002xw\u0003\u0002\u0002\u0002yz\u0003\u0002\u0002",
    "\u0002zx\u0003\u0002\u0002\u0002z{\u0003\u0002\u0002\u0002{|\u0003\u0002",
    "\u0002\u0002|}\b\u0002\u0002\u0002}\u0004\u0003\u0002\u0002\u0002~\u007f",
    "\u0007k\u0002\u0002\u007f\u0080\u0007p\u0002\u0002\u0080\u0081\u0007",
    "v\u0002\u0002\u0081\u0006\u0003\u0002\u0002\u0002\u0082\u0083\u0007",
    "h\u0002\u0002\u0083\u0084\u0007n\u0002\u0002\u0084\u0085\u0007q\u0002",
    "\u0002\u0085\u0086\u0007c\u0002\u0002\u0086\u0087\u0007v\u0002\u0002",
    "\u0087\b\u0003\u0002\u0002\u0002\u0088\u0089\u0007e\u0002\u0002\u0089",
    "\u008a\u0007j\u0002\u0002\u008a\u008b\u0007c\u0002\u0002\u008b\u008c",
    "\u0007t\u0002\u0002\u008c\n\u0003\u0002\u0002\u0002\u008d\u008e\u0007",
    "u\u0002\u0002\u008e\u008f\u0007v\u0002\u0002\u008f\u0090\u0007t\u0002",
    "\u0002\u0090\u0091\u0007k\u0002\u0002\u0091\u0092\u0007p\u0002\u0002",
    "\u0092\u0093\u0007i\u0002\u0002\u0093\f\u0003\u0002\u0002\u0002\u0094",
    "\u0095\u0007d\u0002\u0002\u0095\u0096\u0007q\u0002\u0002\u0096\u0097",
    "\u0007q\u0002\u0002\u0097\u0098\u0007n\u0002\u0002\u0098\u0099\u0007",
    "g\u0002\u0002\u0099\u009a\u0007c\u0002\u0002\u009a\u009b\u0007p\u0002",
    "\u0002\u009b\u000e\u0003\u0002\u0002\u0002\u009c\u009d\u0007k\u0002",
    "\u0002\u009d\u009e\u0007h\u0002\u0002\u009e\u0010\u0003\u0002\u0002",
    "\u0002\u009f\u00a0\u0007g\u0002\u0002\u00a0\u00a1\u0007n\u0002\u0002",
    "\u00a1\u00a2\u0007u\u0002\u0002\u00a2\u00a3\u0007g\u0002\u0002\u00a3",
    "\u00a4\u0007\"\u0002\u0002\u00a4\u00a5\u0007k\u0002\u0002\u00a5\u00a6",
    "\u0007h\u0002\u0002\u00a6\u0012\u0003\u0002\u0002\u0002\u00a7\u00a8",
    "\u0007g\u0002\u0002\u00a8\u00a9\u0007n\u0002\u0002\u00a9\u00aa\u0007",
    "u\u0002\u0002\u00aa\u00ab\u0007g\u0002\u0002\u00ab\u0014\u0003\u0002",
    "\u0002\u0002\u00ac\u00ad\u0007h\u0002\u0002\u00ad\u00ae\u0007q\u0002",
    "\u0002\u00ae\u00af\u0007t\u0002\u0002\u00af\u0016\u0003\u0002\u0002",
    "\u0002\u00b0\u00b1\u0007y\u0002\u0002\u00b1\u00b2\u0007j\u0002\u0002",
    "\u00b2\u00b3\u0007k\u0002\u0002\u00b3\u00b4\u0007n\u0002\u0002\u00b4",
    "\u00b5\u0007g\u0002\u0002\u00b5\u0018\u0003\u0002\u0002\u0002\u00b6",
    "\u00b7\u0007f\u0002\u0002\u00b7\u00b8\u0007q\u0002\u0002\u00b8\u001a",
    "\u0003\u0002\u0002\u0002\u00b9\u00ba\u0007r\u0002\u0002\u00ba\u00bb",
    "\u0007t\u0002\u0002\u00bb\u00bc\u0007k\u0002\u0002\u00bc\u00bd\u0007",
    "p\u0002\u0002\u00bd\u00be\u0007v\u0002\u0002\u00be\u001c\u0003\u0002",
    "\u0002\u0002\u00bf\u00c0\u0007r\u0002\u0002\u00c0\u00c1\u0007t\u0002",
    "\u0002\u00c1\u00c2\u0007k\u0002\u0002\u00c2\u00c3\u0007p\u0002\u0002",
    "\u00c3\u00c4\u0007v\u0002\u0002\u00c4\u00c5\u0007n\u0002\u0002\u00c5",
    "\u00c6\u0007p\u0002\u0002\u00c6\u001e\u0003\u0002\u0002\u0002\u00c7",
    "\u00c8\u0007u\u0002\u0002\u00c8\u00c9\u0007e\u0002\u0002\u00c9\u00ca",
    "\u0007c\u0002\u0002\u00ca\u00cb\u0007p\u0002\u0002\u00cb \u0003\u0002",
    "\u0002\u0002\u00cc\u00cd\u0007*\u0002\u0002\u00cd\"\u0003\u0002\u0002",
    "\u0002\u00ce\u00cf\u0007+\u0002\u0002\u00cf$\u0003\u0002\u0002\u0002",
    "\u00d0\u00d1\u0007}\u0002\u0002\u00d1&\u0003\u0002\u0002\u0002\u00d2",
    "\u00d3\u0007\u007f\u0002\u0002\u00d3(\u0003\u0002\u0002\u0002\u00d4",
    "\u00d5\u0007]\u0002\u0002\u00d5*\u0003\u0002\u0002\u0002\u00d6\u00d7",
    "\u0007_\u0002\u0002\u00d7,\u0003\u0002\u0002\u0002\u00d8\u00d9\u0007",
    ".\u0002\u0002\u00d9.\u0003\u0002\u0002\u0002\u00da\u00db\u0007=\u0002",
    "\u0002\u00db0\u0003\u0002\u0002\u0002\u00dc\u00dd\u00071\u0002\u0002",
    "\u00dd\u00de\u0007,\u0002\u0002\u00de\u00e2\u0003\u0002\u0002\u0002",
    "\u00df\u00e1\u000b\u0002\u0002\u0002\u00e0\u00df\u0003\u0002\u0002\u0002",
    "\u00e1\u00e4\u0003\u0002\u0002\u0002\u00e2\u00e3\u0003\u0002\u0002\u0002",
    "\u00e2\u00e0\u0003\u0002\u0002\u0002\u00e3\u00e5\u0003\u0002\u0002\u0002",
    "\u00e4\u00e2\u0003\u0002\u0002\u0002\u00e5\u00e6\u0007,\u0002\u0002",
    "\u00e6\u00e7\u00071\u0002\u0002\u00e7\u00e8\u0003\u0002\u0002\u0002",
    "\u00e8\u00e9\b\u0019\u0003\u0002\u00e92\u0003\u0002\u0002\u0002\u00ea",
    "\u00eb\u00071\u0002\u0002\u00eb\u00ec\u00071\u0002\u0002\u00ec\u00f0",
    "\u0003\u0002\u0002\u0002\u00ed\u00ef\n\u0003\u0002\u0002\u00ee\u00ed",
    "\u0003\u0002\u0002\u0002\u00ef\u00f2\u0003\u0002\u0002\u0002\u00f0\u00ee",
    "\u0003\u0002\u0002\u0002\u00f0\u00f1\u0003\u0002\u0002\u0002\u00f1\u00f3",
    "\u0003\u0002\u0002\u0002\u00f2\u00f0\u0003\u0002\u0002\u0002\u00f3\u00f4",
    "\b\u001a\u0003\u0002\u00f44\u0003\u0002\u0002\u0002\u00f5\u00f6\u0007",
    "-\u0002\u0002\u00f66\u0003\u0002\u0002\u0002\u00f7\u00f8\u0007/\u0002",
    "\u0002\u00f88\u0003\u0002\u0002\u0002\u00f9\u00fa\u0007,\u0002\u0002",
    "\u00fa:\u0003\u0002\u0002\u0002\u00fb\u00fc\u00071\u0002\u0002\u00fc",
    "<\u0003\u0002\u0002\u0002\u00fd\u00fe\u0007-\u0002\u0002\u00fe\u00ff",
    "\u0007?\u0002\u0002\u00ff>\u0003\u0002\u0002\u0002\u0100\u0101\u0007",
    "/\u0002\u0002\u0101\u0102\u0007?\u0002\u0002\u0102@\u0003\u0002\u0002",
    "\u0002\u0103\u0104\u0007,\u0002\u0002\u0104\u0105\u0007?\u0002\u0002",
    "\u0105B\u0003\u0002\u0002\u0002\u0106\u0107\u00071\u0002\u0002\u0107",
    "\u0108\u0007?\u0002\u0002\u0108D\u0003\u0002\u0002\u0002\u0109\u010a",
    "\u0007\'\u0002\u0002\u010a\u010b\u0007?\u0002\u0002\u010bF\u0003\u0002",
    "\u0002\u0002\u010c\u010d\u0007\'\u0002\u0002\u010dH\u0003\u0002\u0002",
    "\u0002\u010e\u010f\u0007>\u0002\u0002\u010fJ\u0003\u0002\u0002\u0002",
    "\u0110\u0111\u0007>\u0002\u0002\u0111\u0112\u0007?\u0002\u0002\u0112",
    "L\u0003\u0002\u0002\u0002\u0113\u0114\u0007@\u0002\u0002\u0114N\u0003",
    "\u0002\u0002\u0002\u0115\u0116\u0007@\u0002\u0002\u0116\u0117\u0007",
    "?\u0002\u0002\u0117P\u0003\u0002\u0002\u0002\u0118\u0119\u0007?\u0002",
    "\u0002\u0119\u011a\u0007?\u0002\u0002\u011aR\u0003\u0002\u0002\u0002",
    "\u011b\u011c\u0007#\u0002\u0002\u011c\u011d\u0007?\u0002\u0002\u011d",
    "T\u0003\u0002\u0002\u0002\u011e\u011f\u0007-\u0002\u0002\u011f\u0120",
    "\u0007-\u0002\u0002\u0120V\u0003\u0002\u0002\u0002\u0121\u0122\u0007",
    "/\u0002\u0002\u0122\u0123\u0007/\u0002\u0002\u0123X\u0003\u0002\u0002",
    "\u0002\u0124\u0125\u0007?\u0002\u0002\u0125Z\u0003\u0002\u0002\u0002",
    "\u0126\u0127\u0007(\u0002\u0002\u0127\u0128\u0007(\u0002\u0002\u0128",
    "\\\u0003\u0002\u0002\u0002\u0129\u012a\u0007~\u0002\u0002\u012a\u012b",
    "\u0007~\u0002\u0002\u012b^\u0003\u0002\u0002\u0002\u012c\u012d\u0007",
    "#\u0002\u0002\u012d`\u0003\u0002\u0002\u0002\u012e\u012f\u0007e\u0002",
    "\u0002\u012f\u0130\u0007q\u0002\u0002\u0130\u0131\u0007p\u0002\u0002",
    "\u0131\u0132\u0007u\u0002\u0002\u0132\u0133\u0007v\u0002\u0002\u0133",
    "\u0134\u0007c\u0002\u0002\u0134\u0135\u0007p\u0002\u0002\u0135\u0136",
    "\u0007v\u0002\u0002\u0136b\u0003\u0002\u0002\u0002\u0137\u0138\u0007",
    "o\u0002\u0002\u0138\u0139\u0007c\u0002\u0002\u0139\u013a\u0007k\u0002",
    "\u0002\u013a\u013b\u0007p\u0002\u0002\u013bd\u0003\u0002\u0002\u0002",
    "\u013c\u013d\u0007t\u0002\u0002\u013d\u013e\u0007g\u0002\u0002\u013e",
    "\u013f\u0007v\u0002\u0002\u013f\u0140\u0007w\u0002\u0002\u0140\u0141",
    "\u0007t\u0002\u0002\u0141\u0142\u0007p\u0002\u0002\u0142f\u0003\u0002",
    "\u0002\u0002\u0143\u0144\u0007x\u0002\u0002\u0144\u0145\u0007q\u0002",
    "\u0002\u0145\u0146\u0007k\u0002\u0002\u0146\u0147\u0007f\u0002\u0002",
    "\u0147h\u0003\u0002\u0002\u0002\u0148\u014a\t\u0004\u0002\u0002\u0149",
    "\u0148\u0003\u0002\u0002\u0002\u014a\u014b\u0003\u0002\u0002\u0002\u014b",
    "\u0149\u0003\u0002\u0002\u0002\u014b\u014c\u0003\u0002\u0002\u0002\u014c",
    "j\u0003\u0002\u0002\u0002\u014d\u014f\u0005i5\u0002\u014e\u014d\u0003",
    "\u0002\u0002\u0002\u014e\u014f\u0003\u0002\u0002\u0002\u014f\u0150\u0003",
    "\u0002\u0002\u0002\u0150\u0152\u00070\u0002\u0002\u0151\u0153\t\u0004",
    "\u0002\u0002\u0152\u0151\u0003\u0002\u0002\u0002\u0153\u0154\u0003\u0002",
    "\u0002\u0002\u0154\u0152\u0003\u0002\u0002\u0002\u0154\u0155\u0003\u0002",
    "\u0002\u0002\u0155l\u0003\u0002\u0002\u0002\u0156\u0157\u0007)\u0002",
    "\u0002\u0157\u0158\u000b\u0002\u0002\u0002\u0158\u0159\u0007)\u0002",
    "\u0002\u0159n\u0003\u0002\u0002\u0002\u015a\u015e\u0007$\u0002\u0002",
    "\u015b\u015d\u000b\u0002\u0002\u0002\u015c\u015b\u0003\u0002\u0002\u0002",
    "\u015d\u0160\u0003\u0002\u0002\u0002\u015e\u015f\u0003\u0002\u0002\u0002",
    "\u015e\u015c\u0003\u0002\u0002\u0002\u015f\u0161\u0003\u0002\u0002\u0002",
    "\u0160\u015e\u0003\u0002\u0002\u0002\u0161\u0162\u0007$\u0002\u0002",
    "\u0162p\u0003\u0002\u0002\u0002\u0163\u0164\u0007v\u0002\u0002\u0164",
    "\u0165\u0007t\u0002\u0002\u0165\u0166\u0007w\u0002\u0002\u0166\u016d",
    "\u0007g\u0002\u0002\u0167\u0168\u0007h\u0002\u0002\u0168\u0169\u0007",
    "c\u0002\u0002\u0169\u016a\u0007n\u0002\u0002\u016a\u016b\u0007u\u0002",
    "\u0002\u016b\u016d\u0007g\u0002\u0002\u016c\u0163\u0003\u0002\u0002",
    "\u0002\u016c\u0167\u0003\u0002\u0002\u0002\u016dr\u0003\u0002\u0002",
    "\u0002\u016e\u0170\t\u0005\u0002\u0002\u016f\u016e\u0003\u0002\u0002",
    "\u0002\u0170\u0171\u0003\u0002\u0002\u0002\u0171\u016f\u0003\u0002\u0002",
    "\u0002\u0171\u0172\u0003\u0002\u0002\u0002\u0172\u0176\u0003\u0002\u0002",
    "\u0002\u0173\u0175\t\u0004\u0002\u0002\u0174\u0173\u0003\u0002\u0002",
    "\u0002\u0175\u0178\u0003\u0002\u0002\u0002\u0176\u0174\u0003\u0002\u0002",
    "\u0002\u0176\u0177\u0003\u0002\u0002\u0002\u0177t\u0003\u0002\u0002",
    "\u0002\u0178\u0176\u0003\u0002\u0002\u0002\u0179\u017b\t\u0006\u0002",
    "\u0002\u017a\u0179\u0003\u0002\u0002\u0002\u017b\u017c\u0003\u0002\u0002",
    "\u0002\u017c\u017a\u0003\u0002\u0002\u0002\u017c\u017d\u0003\u0002\u0002",
    "\u0002\u017d\u0181\u0003\u0002\u0002\u0002\u017e\u0180\t\u0004\u0002",
    "\u0002\u017f\u017e\u0003\u0002\u0002\u0002\u0180\u0183\u0003\u0002\u0002",
    "\u0002\u0181\u017f\u0003\u0002\u0002\u0002\u0181\u0182\u0003\u0002\u0002",
    "\u0002\u0182v\u0003\u0002\u0002\u0002\u0183\u0181\u0003\u0002\u0002",
    "\u0002\u000f\u0002z\u00e2\u00f0\u014b\u014e\u0154\u015e\u016c\u0171",
    "\u0176\u017c\u0181\u0004\b\u0002\u0002\u0002\u0003\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function QwertyLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

QwertyLexer.prototype = Object.create(antlr4.Lexer.prototype);
QwertyLexer.prototype.constructor = QwertyLexer;

QwertyLexer.EOF = antlr4.Token.EOF;
QwertyLexer.HT_NL_CR = 1;
QwertyLexer.INT = 2;
QwertyLexer.FLOAT = 3;
QwertyLexer.CHAR = 4;
QwertyLexer.STRING = 5;
QwertyLexer.BOOLEAN = 6;
QwertyLexer.IF = 7;
QwertyLexer.ELSE_IF = 8;
QwertyLexer.ELSE = 9;
QwertyLexer.FOR = 10;
QwertyLexer.WHILE = 11;
QwertyLexer.DO = 12;
QwertyLexer.PRINT = 13;
QwertyLexer.PRINTLN = 14;
QwertyLexer.SCAN = 15;
QwertyLexer.OPEN_PAR = 16;
QwertyLexer.CLOSE_PAR = 17;
QwertyLexer.OPEN_BRACE = 18;
QwertyLexer.CLOSE_BRACE = 19;
QwertyLexer.OPEN_BRACKET = 20;
QwertyLexer.CLOSE_BRACKET = 21;
QwertyLexer.ENUMERATION = 22;
QwertyLexer.END = 23;
QwertyLexer.COMMENT = 24;
QwertyLexer.LINE_COMMENT = 25;
QwertyLexer.ADD = 26;
QwertyLexer.SUB = 27;
QwertyLexer.MUL = 28;
QwertyLexer.DIV = 29;
QwertyLexer.ADD_ASSIGN = 30;
QwertyLexer.SUB_ASSIGN = 31;
QwertyLexer.MUL_ASSIGN = 32;
QwertyLexer.DIV_ASSIGN = 33;
QwertyLexer.MOD_ASSIGN = 34;
QwertyLexer.MOD = 35;
QwertyLexer.LT = 36;
QwertyLexer.LE = 37;
QwertyLexer.GT = 38;
QwertyLexer.GE = 39;
QwertyLexer.EQUAL = 40;
QwertyLexer.NOTEQUAL = 41;
QwertyLexer.INC = 42;
QwertyLexer.DEC = 43;
QwertyLexer.ASSIGN = 44;
QwertyLexer.AND = 45;
QwertyLexer.OR = 46;
QwertyLexer.NOT = 47;
QwertyLexer.CONSTANT_KEYWORD = 48;
QwertyLexer.MAIN_FUNC = 49;
QwertyLexer.RETURN = 50;
QwertyLexer.VOID = 51;
QwertyLexer.INTEGER_LITERAL = 52;
QwertyLexer.FLOAT_LITERAL = 53;
QwertyLexer.CHAR_LITERAL = 54;
QwertyLexer.STRING_LITERAL = 55;
QwertyLexer.BOOLEAN_LITERAL = 56;
QwertyLexer.VARIABLE_IDENTIFIER = 57;
QwertyLexer.FUNCTION_IDENTIFIER = 58;


QwertyLexer.modeNames = [ "DEFAULT_MODE" ];

QwertyLexer.literalNames = [ null, null, "'int'", "'float'", "'char'", "'string'", 
                             "'boolean'", "'if'", "'else if'", "'else'", 
                             "'for'", "'while'", "'do'", "'print'", "'println'", 
                             "'scan'", "'('", "')'", "'{'", "'}'", "'['", 
                             "']'", "','", "';'", null, null, "'+'", "'-'", 
                             "'*'", "'/'", "'+='", "'-='", "'*='", "'/='", 
                             "'%='", "'%'", "'<'", "'<='", "'>'", "'>='", 
                             "'=='", "'!='", "'++'", "'--'", "'='", "'&&'", 
                             "'||'", "'!'", "'constant'", "'main'", "'return'", 
                             "'void'" ];

QwertyLexer.symbolicNames = [ null, "HT_NL_CR", "INT", "FLOAT", "CHAR", 
                              "STRING", "BOOLEAN", "IF", "ELSE_IF", "ELSE", 
                              "FOR", "WHILE", "DO", "PRINT", "PRINTLN", 
                              "SCAN", "OPEN_PAR", "CLOSE_PAR", "OPEN_BRACE", 
                              "CLOSE_BRACE", "OPEN_BRACKET", "CLOSE_BRACKET", 
                              "ENUMERATION", "END", "COMMENT", "LINE_COMMENT", 
                              "ADD", "SUB", "MUL", "DIV", "ADD_ASSIGN", 
                              "SUB_ASSIGN", "MUL_ASSIGN", "DIV_ASSIGN", 
                              "MOD_ASSIGN", "MOD", "LT", "LE", "GT", "GE", 
                              "EQUAL", "NOTEQUAL", "INC", "DEC", "ASSIGN", 
                              "AND", "OR", "NOT", "CONSTANT_KEYWORD", "MAIN_FUNC", 
                              "RETURN", "VOID", "INTEGER_LITERAL", "FLOAT_LITERAL", 
                              "CHAR_LITERAL", "STRING_LITERAL", "BOOLEAN_LITERAL", 
                              "VARIABLE_IDENTIFIER", "FUNCTION_IDENTIFIER" ];

QwertyLexer.ruleNames = [ "HT_NL_CR", "INT", "FLOAT", "CHAR", "STRING", 
                          "BOOLEAN", "IF", "ELSE_IF", "ELSE", "FOR", "WHILE", 
                          "DO", "PRINT", "PRINTLN", "SCAN", "OPEN_PAR", 
                          "CLOSE_PAR", "OPEN_BRACE", "CLOSE_BRACE", "OPEN_BRACKET", 
                          "CLOSE_BRACKET", "ENUMERATION", "END", "COMMENT", 
                          "LINE_COMMENT", "ADD", "SUB", "MUL", "DIV", "ADD_ASSIGN", 
                          "SUB_ASSIGN", "MUL_ASSIGN", "DIV_ASSIGN", "MOD_ASSIGN", 
                          "MOD", "LT", "LE", "GT", "GE", "EQUAL", "NOTEQUAL", 
                          "INC", "DEC", "ASSIGN", "AND", "OR", "NOT", "CONSTANT_KEYWORD", 
                          "MAIN_FUNC", "RETURN", "VOID", "INTEGER_LITERAL", 
                          "FLOAT_LITERAL", "CHAR_LITERAL", "STRING_LITERAL", 
                          "BOOLEAN_LITERAL", "VARIABLE_IDENTIFIER", "FUNCTION_IDENTIFIER" ];

QwertyLexer.grammarFileName = "Qwerty.g4";



exports.QwertyLexer = QwertyLexer;

