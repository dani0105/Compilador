// Generated from MyScanner.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');



var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002\"\u0183\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
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
    "1\t1\u00042\t2\u00043\t3\u00044\t4\u0003\u0002\u0003\u0002\u0003\u0002",
    "\u0003\u0002\u0007\u0002n\n\u0002\f\u0002\u000e\u0002q\u000b\u0002\u0003",
    "\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0007\u0003|\n\u0003\f\u0003\u000e\u0003",
    "\u007f\u000b\u0003\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003",
    "\u0007\u0003\u0007\u0003\b\u0003\b\u0003\t\u0003\t\u0003\n\u0003\n\u0003",
    "\u000b\u0003\u000b\u0003\f\u0003\f\u0003\r\u0003\r\u0003\u000e\u0003",
    "\u000e\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003",
    "\u000f\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0011\u0003\u0011\u0003",
    "\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0012\u0003\u0012\u0003",
    "\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0013\u0003",
    "\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0014\u0003\u0014\u0003",
    "\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0015\u0003\u0015\u0003",
    "\u0015\u0003\u0015\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0017\u0003",
    "\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0018\u0003\u0018\u0003",
    "\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0019\u0003\u0019\u0003",
    "\u0019\u0003\u0019\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003",
    "\u001a\u0003\u001a\u0003\u001a\u0003\u001b\u0003\u001b\u0003\u001b\u0003",
    "\u001b\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0005\u001c\u00e1",
    "\n\u001c\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001e",
    "\u0003\u001e\u0003\u001e\u0003\u001e\u0003\u001e\u0003\u001e\u0003\u001e",
    "\u0003\u001e\u0003\u001e\u0003\u001e\u0003\u001e\u0003\u001e\u0003\u001e",
    "\u0003\u001e\u0005\u001e\u00f5\n\u001e\u0003\u001f\u0003\u001f\u0003",
    "\u001f\u0005\u001f\u00fa\n\u001f\u0003 \u0003 \u0003 \u0003 \u0003 ",
    "\u0005 \u0101\n \u0003!\u0003!\u0003!\u0003!\u0003!\u0007!\u0108\n!",
    "\f!\u000e!\u010b\u000b!\u0005!\u010d\n!\u0003\"\u0003\"\u0003\"\u0003",
    "\"\u0003\"\u0003\"\u0003\"\u0003\"\u0003#\u0003#\u0003#\u0003#\u0003",
    "#\u0003$\u0003$\u0003$\u0003$\u0003%\u0003%\u0003%\u0003%\u0003%\u0003",
    "%\u0003%\u0003&\u0003&\u0003\'\u0003\'\u0003(\u0003(\u0003)\u0003)\u0003",
    "*\u0003*\u0003+\u0003+\u0003,\u0003,\u0003-\u0003-\u0007-\u0137\n-\f",
    "-\u000e-\u013a\u000b-\u0003.\u0003.\u0007.\u013e\n.\f.\u000e.\u0141",
    "\u000b.\u0003.\u0003.\u0007.\u0145\n.\f.\u000e.\u0148\u000b.\u0003.",
    "\u0003.\u0003.\u0007.\u014d\n.\f.\u000e.\u0150\u000b.\u0005.\u0152\n",
    ".\u0003/\u0003/\u0005/\u0156\n/\u00030\u00030\u00070\u015a\n0\f0\u000e",
    "0\u015d\u000b0\u00030\u00030\u00031\u00031\u00031\u00031\u00032\u0003",
    "2\u00032\u00032\u00032\u00032\u00032\u00032\u00032\u00032\u00032\u0003",
    "2\u00032\u00032\u00032\u00032\u00032\u00032\u00032\u00032\u00032\u0003",
    "2\u00032\u00032\u00032\u00052\u017e\n2\u00033\u00033\u00034\u00034\u0003",
    "o\u00025\u0003\u0003\u0005\u0004\u0007\u0005\t\u0006\u000b\u0007\r\b",
    "\u000f\t\u0011\n\u0013\u000b\u0015\f\u0017\r\u0019\u000e\u001b\u000f",
    "\u001d\u0010\u001f\u0011!\u0012#\u0013%\u0014\'\u0015)\u0002+\u0002",
    "-\u0002/\u00021\u00163\u00025\u00177\u00189\u0019;\u001a=\u001b?\u001c",
    "A\u001dC\u0002E\u0002G\u0002I\u0002K\u001eM\u001fO Q!S\"U\u0002W\u0002",
    "Y\u0002[\u0002]\u0002_\u0002a\u0002c\u0002e\u0002g\u0002\u0003\u0002",
    "\u0007\u0004\u0002\f\f\u000f\u000f\u0005\u0002\u000b\f\u000f\u000f\"",
    "\"\u0004\u0002^^`b\u0004\u0002~~\u0080\u0080\u0004\u0002C\\c|\u0002",
    "\u01a2\u0002\u0003\u0003\u0002\u0002\u0002\u0002\u0005\u0003\u0002\u0002",
    "\u0002\u0002\u0007\u0003\u0002\u0002\u0002\u0002\t\u0003\u0002\u0002",
    "\u0002\u0002\u000b\u0003\u0002\u0002\u0002\u0002\r\u0003\u0002\u0002",
    "\u0002\u0002\u000f\u0003\u0002\u0002\u0002\u0002\u0011\u0003\u0002\u0002",
    "\u0002\u0002\u0013\u0003\u0002\u0002\u0002\u0002\u0015\u0003\u0002\u0002",
    "\u0002\u0002\u0017\u0003\u0002\u0002\u0002\u0002\u0019\u0003\u0002\u0002",
    "\u0002\u0002\u001b\u0003\u0002\u0002\u0002\u0002\u001d\u0003\u0002\u0002",
    "\u0002\u0002\u001f\u0003\u0002\u0002\u0002\u0002!\u0003\u0002\u0002",
    "\u0002\u0002#\u0003\u0002\u0002\u0002\u0002%\u0003\u0002\u0002\u0002",
    "\u0002\'\u0003\u0002\u0002\u0002\u00021\u0003\u0002\u0002\u0002\u0002",
    "5\u0003\u0002\u0002\u0002\u00027\u0003\u0002\u0002\u0002\u00029\u0003",
    "\u0002\u0002\u0002\u0002;\u0003\u0002\u0002\u0002\u0002=\u0003\u0002",
    "\u0002\u0002\u0002?\u0003\u0002\u0002\u0002\u0002A\u0003\u0002\u0002",
    "\u0002\u0002K\u0003\u0002\u0002\u0002\u0002M\u0003\u0002\u0002\u0002",
    "\u0002O\u0003\u0002\u0002\u0002\u0002Q\u0003\u0002\u0002\u0002\u0002",
    "S\u0003\u0002\u0002\u0002\u0003i\u0003\u0002\u0002\u0002\u0005w\u0003",
    "\u0002\u0002\u0002\u0007\u0082\u0003\u0002\u0002\u0002\t\u0086\u0003",
    "\u0002\u0002\u0002\u000b\u0088\u0003\u0002\u0002\u0002\r\u008a\u0003",
    "\u0002\u0002\u0002\u000f\u008c\u0003\u0002\u0002\u0002\u0011\u008e\u0003",
    "\u0002\u0002\u0002\u0013\u0090\u0003\u0002\u0002\u0002\u0015\u0092\u0003",
    "\u0002\u0002\u0002\u0017\u0094\u0003\u0002\u0002\u0002\u0019\u0096\u0003",
    "\u0002\u0002\u0002\u001b\u0098\u0003\u0002\u0002\u0002\u001d\u009a\u0003",
    "\u0002\u0002\u0002\u001f\u00a0\u0003\u0002\u0002\u0002!\u00a3\u0003",
    "\u0002\u0002\u0002#\u00a9\u0003\u0002\u0002\u0002%\u00b0\u0003\u0002",
    "\u0002\u0002\'\u00b5\u0003\u0002\u0002\u0002)\u00bb\u0003\u0002\u0002",
    "\u0002+\u00bf\u0003\u0002\u0002\u0002-\u00c2\u0003\u0002\u0002\u0002",
    "/\u00c7\u0003\u0002\u0002\u00021\u00cd\u0003\u0002\u0002\u00023\u00d1",
    "\u0003\u0002\u0002\u00025\u00d8\u0003\u0002\u0002\u00027\u00e0\u0003",
    "\u0002\u0002\u00029\u00e2\u0003\u0002\u0002\u0002;\u00f4\u0003\u0002",
    "\u0002\u0002=\u00f9\u0003\u0002\u0002\u0002?\u0100\u0003\u0002\u0002",
    "\u0002A\u010c\u0003\u0002\u0002\u0002C\u010e\u0003\u0002\u0002\u0002",
    "E\u0116\u0003\u0002\u0002\u0002G\u011b\u0003\u0002\u0002\u0002I\u011f",
    "\u0003\u0002\u0002\u0002K\u0126\u0003\u0002\u0002\u0002M\u0128\u0003",
    "\u0002\u0002\u0002O\u012a\u0003\u0002\u0002\u0002Q\u012c\u0003\u0002",
    "\u0002\u0002S\u012e\u0003\u0002\u0002\u0002U\u0130\u0003\u0002\u0002",
    "\u0002W\u0132\u0003\u0002\u0002\u0002Y\u0134\u0003\u0002\u0002\u0002",
    "[\u0151\u0003\u0002\u0002\u0002]\u0155\u0003\u0002\u0002\u0002_\u0157",
    "\u0003\u0002\u0002\u0002a\u0160\u0003\u0002\u0002\u0002c\u017d\u0003",
    "\u0002\u0002\u0002e\u017f\u0003\u0002\u0002\u0002g\u0181\u0003\u0002",
    "\u0002\u0002ij\u00071\u0002\u0002jk\u0007,\u0002\u0002ko\u0003\u0002",
    "\u0002\u0002ln\u000b\u0002\u0002\u0002ml\u0003\u0002\u0002\u0002nq\u0003",
    "\u0002\u0002\u0002op\u0003\u0002\u0002\u0002om\u0003\u0002\u0002\u0002",
    "pr\u0003\u0002\u0002\u0002qo\u0003\u0002\u0002\u0002rs\u0007,\u0002",
    "\u0002st\u00071\u0002\u0002tu\u0003\u0002\u0002\u0002uv\b\u0002\u0002",
    "\u0002v\u0004\u0003\u0002\u0002\u0002wx\u00071\u0002\u0002xy\u00071",
    "\u0002\u0002y}\u0003\u0002\u0002\u0002z|\n\u0002\u0002\u0002{z\u0003",
    "\u0002\u0002\u0002|\u007f\u0003\u0002\u0002\u0002}{\u0003\u0002\u0002",
    "\u0002}~\u0003\u0002\u0002\u0002~\u0080\u0003\u0002\u0002\u0002\u007f",
    "}\u0003\u0002\u0002\u0002\u0080\u0081\b\u0003\u0002\u0002\u0081\u0006",
    "\u0003\u0002\u0002\u0002\u0082\u0083\t\u0003\u0002\u0002\u0083\u0084",
    "\u0003\u0002\u0002\u0002\u0084\u0085\b\u0004\u0003\u0002\u0085\b\u0003",
    "\u0002\u0002\u0002\u0086\u0087\u0007=\u0002\u0002\u0087\n\u0003\u0002",
    "\u0002\u0002\u0088\u0089\u0007\u007f\u0002\u0002\u0089\f\u0003\u0002",
    "\u0002\u0002\u008a\u008b\u0007}\u0002\u0002\u008b\u000e\u0003\u0002",
    "\u0002\u0002\u008c\u008d\u0007+\u0002\u0002\u008d\u0010\u0003\u0002",
    "\u0002\u0002\u008e\u008f\u0007*\u0002\u0002\u008f\u0012\u0003\u0002",
    "\u0002\u0002\u0090\u0091\u0007_\u0002\u0002\u0091\u0014\u0003\u0002",
    "\u0002\u0002\u0092\u0093\u0007]\u0002\u0002\u0093\u0016\u0003\u0002",
    "\u0002\u0002\u0094\u0095\u0007?\u0002\u0002\u0095\u0018\u0003\u0002",
    "\u0002\u0002\u0096\u0097\u0007.\u0002\u0002\u0097\u001a\u0003\u0002",
    "\u0002\u0002\u0098\u0099\u00070\u0002\u0002\u0099\u001c\u0003\u0002",
    "\u0002\u0002\u009a\u009b\u0007y\u0002\u0002\u009b\u009c\u0007j\u0002",
    "\u0002\u009c\u009d\u0007k\u0002\u0002\u009d\u009e\u0007n\u0002\u0002",
    "\u009e\u009f\u0007g\u0002\u0002\u009f\u001e\u0003\u0002\u0002\u0002",
    "\u00a0\u00a1\u0007k\u0002\u0002\u00a1\u00a2\u0007h\u0002\u0002\u00a2",
    " \u0003\u0002\u0002\u0002\u00a3\u00a4\u0007e\u0002\u0002\u00a4\u00a5",
    "\u0007n\u0002\u0002\u00a5\u00a6\u0007c\u0002\u0002\u00a6\u00a7\u0007",
    "u\u0002\u0002\u00a7\u00a8\u0007u\u0002\u0002\u00a8\"\u0003\u0002\u0002",
    "\u0002\u00a9\u00aa\u0007t\u0002\u0002\u00aa\u00ab\u0007g\u0002\u0002",
    "\u00ab\u00ac\u0007v\u0002\u0002\u00ac\u00ad\u0007w\u0002\u0002\u00ad",
    "\u00ae\u0007t\u0002\u0002\u00ae\u00af\u0007p\u0002\u0002\u00af$\u0003",
    "\u0002\u0002\u0002\u00b0\u00b1\u0007g\u0002\u0002\u00b1\u00b2\u0007",
    "n\u0002\u0002\u00b2\u00b3\u0007u\u0002\u0002\u00b3\u00b4\u0007g\u0002",
    "\u0002\u00b4&\u0003\u0002\u0002\u0002\u00b5\u00b6\u0007r\u0002\u0002",
    "\u00b6\u00b7\u0007t\u0002\u0002\u00b7\u00b8\u0007k\u0002\u0002\u00b8",
    "\u00b9\u0007p\u0002\u0002\u00b9\u00ba\u0007v\u0002\u0002\u00ba(\u0003",
    "\u0002\u0002\u0002\u00bb\u00bc\u0007c\u0002\u0002\u00bc\u00bd\u0007",
    "p\u0002\u0002\u00bd\u00be\u0007f\u0002\u0002\u00be*\u0003\u0002\u0002",
    "\u0002\u00bf\u00c0\u0007q\u0002\u0002\u00c0\u00c1\u0007t\u0002\u0002",
    "\u00c1,\u0003\u0002\u0002\u0002\u00c2\u00c3\u0007v\u0002\u0002\u00c3",
    "\u00c4\u0007t\u0002\u0002\u00c4\u00c5\u0007w\u0002\u0002\u00c5\u00c6",
    "\u0007g\u0002\u0002\u00c6.\u0003\u0002\u0002\u0002\u00c7\u00c8\u0007",
    "h\u0002\u0002\u00c8\u00c9\u0007c\u0002\u0002\u00c9\u00ca\u0007n\u0002",
    "\u0002\u00ca\u00cb\u0007u\u0002\u0002\u00cb\u00cc\u0007g\u0002\u0002",
    "\u00cc0\u0003\u0002\u0002\u0002\u00cd\u00ce\u0007p\u0002\u0002\u00ce",
    "\u00cf\u0007g\u0002\u0002\u00cf\u00d0\u0007y\u0002\u0002\u00d02\u0003",
    "\u0002\u0002\u0002\u00d1\u00d2\u0007n\u0002\u0002\u00d2\u00d3\u0007",
    "g\u0002\u0002\u00d3\u00d4\u0007p\u0002\u0002\u00d4\u00d5\u0007i\u0002",
    "\u0002\u00d5\u00d6\u0007v\u0002\u0002\u00d6\u00d7\u0007j\u0002\u0002",
    "\u00d74\u0003\u0002\u0002\u0002\u00d8\u00d9\u0005A!\u0002\u00d9\u00da",
    "\u0005\u001b\u000e\u0002\u00da\u00db\u00053\u001a\u0002\u00db6\u0003",
    "\u0002\u0002\u0002\u00dc\u00e1\u0005C\"\u0002\u00dd\u00e1\u0005E#\u0002",
    "\u00de\u00e1\u0005G$\u0002\u00df\u00e1\u0005I%\u0002\u00e0\u00dc\u0003",
    "\u0002\u0002\u0002\u00e0\u00dd\u0003\u0002\u0002\u0002\u00e0\u00de\u0003",
    "\u0002\u0002\u0002\u00e0\u00df\u0003\u0002\u0002\u0002\u00e18\u0003",
    "\u0002\u0002\u0002\u00e2\u00e3\u00057\u001c\u0002\u00e3\u00e4\u0005",
    "\u0015\u000b\u0002\u00e4\u00e5\u0005\u0013\n\u0002\u00e5:\u0003\u0002",
    "\u0002\u0002\u00e6\u00f5\u0005U+\u0002\u00e7\u00f5\u0005W,\u0002\u00e8",
    "\u00e9\u0005\u0017\f\u0002\u00e9\u00ea\u0005\u0017\f\u0002\u00ea\u00f5",
    "\u0003\u0002\u0002\u0002\u00eb\u00ec\u0005S*\u0002\u00ec\u00ed\u0005",
    "\u0017\f\u0002\u00ed\u00f5\u0003\u0002\u0002\u0002\u00ee\u00ef\u0005",
    "U+\u0002\u00ef\u00f0\u0005\u0017\f\u0002\u00f0\u00f5\u0003\u0002\u0002",
    "\u0002\u00f1\u00f2\u0005W,\u0002\u00f2\u00f3\u0005\u0017\f\u0002\u00f3",
    "\u00f5\u0003\u0002\u0002\u0002\u00f4\u00e6\u0003\u0002\u0002\u0002\u00f4",
    "\u00e7\u0003\u0002\u0002\u0002\u00f4\u00e8\u0003\u0002\u0002\u0002\u00f4",
    "\u00eb\u0003\u0002\u0002\u0002\u00f4\u00ee\u0003\u0002\u0002\u0002\u00f4",
    "\u00f1\u0003\u0002\u0002\u0002\u00f5<\u0003\u0002\u0002\u0002\u00f6",
    "\u00fa\u0005M\'\u0002\u00f7\u00fa\u0005O(\u0002\u00f8\u00fa\u0005)\u0015",
    "\u0002\u00f9\u00f6\u0003\u0002\u0002\u0002\u00f9\u00f7\u0003\u0002\u0002",
    "\u0002\u00f9\u00f8\u0003\u0002\u0002\u0002\u00fa>\u0003\u0002\u0002",
    "\u0002\u00fb\u0101\u0005Y-\u0002\u00fc\u0101\u0005[.\u0002\u00fd\u0101",
    "\u0005]/\u0002\u00fe\u0101\u0005_0\u0002\u00ff\u0101\u0005a1\u0002\u0100",
    "\u00fb\u0003\u0002\u0002\u0002\u0100\u00fc\u0003\u0002\u0002\u0002\u0100",
    "\u00fd\u0003\u0002\u0002\u0002\u0100\u00fe\u0003\u0002\u0002\u0002\u0100",
    "\u00ff\u0003\u0002\u0002\u0002\u0101@\u0003\u0002\u0002\u0002\u0102",
    "\u010d\u0007a\u0002\u0002\u0103\u0109\u0005e3\u0002\u0104\u0108\u0007",
    "a\u0002\u0002\u0105\u0108\u0005e3\u0002\u0106\u0108\u0005g4\u0002\u0107",
    "\u0104\u0003\u0002\u0002\u0002\u0107\u0105\u0003\u0002\u0002\u0002\u0107",
    "\u0106\u0003\u0002\u0002\u0002\u0108\u010b\u0003\u0002\u0002\u0002\u0109",
    "\u0107\u0003\u0002\u0002\u0002\u0109\u010a\u0003\u0002\u0002\u0002\u010a",
    "\u010d\u0003\u0002\u0002\u0002\u010b\u0109\u0003\u0002\u0002\u0002\u010c",
    "\u0102\u0003\u0002\u0002\u0002\u010c\u0103\u0003\u0002\u0002\u0002\u010d",
    "B\u0003\u0002\u0002\u0002\u010e\u010f\u0007d\u0002\u0002\u010f\u0110",
    "\u0007q\u0002\u0002\u0110\u0111\u0007q\u0002\u0002\u0111\u0112\u0007",
    "n\u0002\u0002\u0112\u0113\u0007g\u0002\u0002\u0113\u0114\u0007c\u0002",
    "\u0002\u0114\u0115\u0007p\u0002\u0002\u0115D\u0003\u0002\u0002\u0002",
    "\u0116\u0117\u0007e\u0002\u0002\u0117\u0118\u0007j\u0002\u0002\u0118",
    "\u0119\u0007c\u0002\u0002\u0119\u011a\u0007t\u0002\u0002\u011aF\u0003",
    "\u0002\u0002\u0002\u011b\u011c\u0007k\u0002\u0002\u011c\u011d\u0007",
    "p\u0002\u0002\u011d\u011e\u0007v\u0002\u0002\u011eH\u0003\u0002\u0002",
    "\u0002\u011f\u0120\u0007u\u0002\u0002\u0120\u0121\u0007v\u0002\u0002",
    "\u0121\u0122\u0007t\u0002\u0002\u0122\u0123\u0007k\u0002\u0002\u0123",
    "\u0124\u0007p\u0002\u0002\u0124\u0125\u0007i\u0002\u0002\u0125J\u0003",
    "\u0002\u0002\u0002\u0126\u0127\u0007-\u0002\u0002\u0127L\u0003\u0002",
    "\u0002\u0002\u0128\u0129\u0007,\u0002\u0002\u0129N\u0003\u0002\u0002",
    "\u0002\u012a\u012b\u00071\u0002\u0002\u012bP\u0003\u0002\u0002\u0002",
    "\u012c\u012d\u0007/\u0002\u0002\u012dR\u0003\u0002\u0002\u0002\u012e",
    "\u012f\u0007#\u0002\u0002\u012fT\u0003\u0002\u0002\u0002\u0130\u0131",
    "\u0007>\u0002\u0002\u0131V\u0003\u0002\u0002\u0002\u0132\u0133\u0007",
    "@\u0002\u0002\u0133X\u0003\u0002\u0002\u0002\u0134\u0138\u0005g4\u0002",
    "\u0135\u0137\u0005g4\u0002\u0136\u0135\u0003\u0002\u0002\u0002\u0137",
    "\u013a\u0003\u0002\u0002\u0002\u0138\u0136\u0003\u0002\u0002\u0002\u0138",
    "\u0139\u0003\u0002\u0002\u0002\u0139Z\u0003\u0002\u0002\u0002\u013a",
    "\u0138\u0003\u0002\u0002\u0002\u013b\u013f\u0005g4\u0002\u013c\u013e",
    "\u0005g4\u0002\u013d\u013c\u0003\u0002\u0002\u0002\u013e\u0141\u0003",
    "\u0002\u0002\u0002\u013f\u013d\u0003\u0002\u0002\u0002\u013f\u0140\u0003",
    "\u0002\u0002\u0002\u0140\u0142\u0003\u0002\u0002\u0002\u0141\u013f\u0003",
    "\u0002\u0002\u0002\u0142\u0146\u0005\u001b\u000e\u0002\u0143\u0145\u0005",
    "g4\u0002\u0144\u0143\u0003\u0002\u0002\u0002\u0145\u0148\u0003\u0002",
    "\u0002\u0002\u0146\u0144\u0003\u0002\u0002\u0002\u0146\u0147\u0003\u0002",
    "\u0002\u0002\u0147\u0152\u0003\u0002\u0002\u0002\u0148\u0146\u0003\u0002",
    "\u0002\u0002\u0149\u014a\u0005\u001b\u000e\u0002\u014a\u014e\u0005g",
    "4\u0002\u014b\u014d\u0005g4\u0002\u014c\u014b\u0003\u0002\u0002\u0002",
    "\u014d\u0150\u0003\u0002\u0002\u0002\u014e\u014c\u0003\u0002\u0002\u0002",
    "\u014e\u014f\u0003\u0002\u0002\u0002\u014f\u0152\u0003\u0002\u0002\u0002",
    "\u0150\u014e\u0003\u0002\u0002\u0002\u0151\u013b\u0003\u0002\u0002\u0002",
    "\u0151\u0149\u0003\u0002\u0002\u0002\u0152\\\u0003\u0002\u0002\u0002",
    "\u0153\u0156\u0005-\u0017\u0002\u0154\u0156\u0005/\u0018\u0002\u0155",
    "\u0153\u0003\u0002\u0002\u0002\u0155\u0154\u0003\u0002\u0002\u0002\u0156",
    "^\u0003\u0002\u0002\u0002\u0157\u015b\u0007$\u0002\u0002\u0158\u015a",
    "\u0005c2\u0002\u0159\u0158\u0003\u0002\u0002\u0002\u015a\u015d\u0003",
    "\u0002\u0002\u0002\u015b\u0159\u0003\u0002\u0002\u0002\u015b\u015c\u0003",
    "\u0002\u0002\u0002\u015c\u015e\u0003\u0002\u0002\u0002\u015d\u015b\u0003",
    "\u0002\u0002\u0002\u015e\u015f\u0007$\u0002\u0002\u015f`\u0003\u0002",
    "\u0002\u0002\u0160\u0161\u0007)\u0002\u0002\u0161\u0162\u0005c2\u0002",
    "\u0162\u0163\u0007)\u0002\u0002\u0163b\u0003\u0002\u0002\u0002\u0164",
    "\u017e\u0005g4\u0002\u0165\u017e\u0005e3\u0002\u0166\u017e\u0007\"\u0002",
    "\u0002\u0167\u017e\u0005S*\u0002\u0168\u017e\u0004$)\u0002\u0169\u017e",
    "\u0005\u0011\t\u0002\u016a\u017e\u0005\u000f\b\u0002\u016b\u017e\u0005",
    "M\'\u0002\u016c\u017e\u0005K&\u0002\u016d\u017e\u0005\u0019\r\u0002",
    "\u016e\u017e\u0005Q)\u0002\u016f\u017e\u0005\u001b\u000e\u0002\u0170",
    "\u017e\u0005O(\u0002\u0171\u017e\u0007<\u0002\u0002\u0172\u017e\u0005",
    "\t\u0005\u0002\u0173\u017e\u0005U+\u0002\u0174\u017e\u0005\u0017\f\u0002",
    "\u0175\u017e\u0005W,\u0002\u0176\u017e\u0004AB\u0002\u0177\u017e\u0005",
    "\u0013\n\u0002\u0178\u017e\u0005\u0015\u000b\u0002\u0179\u017e\t\u0004",
    "\u0002\u0002\u017a\u017e\u0005\r\u0007\u0002\u017b\u017e\u0005\u000b",
    "\u0006\u0002\u017c\u017e\t\u0005\u0002\u0002\u017d\u0164\u0003\u0002",
    "\u0002\u0002\u017d\u0165\u0003\u0002\u0002\u0002\u017d\u0166\u0003\u0002",
    "\u0002\u0002\u017d\u0167\u0003\u0002\u0002\u0002\u017d\u0168\u0003\u0002",
    "\u0002\u0002\u017d\u0169\u0003\u0002\u0002\u0002\u017d\u016a\u0003\u0002",
    "\u0002\u0002\u017d\u016b\u0003\u0002\u0002\u0002\u017d\u016c\u0003\u0002",
    "\u0002\u0002\u017d\u016d\u0003\u0002\u0002\u0002\u017d\u016e\u0003\u0002",
    "\u0002\u0002\u017d\u016f\u0003\u0002\u0002\u0002\u017d\u0170\u0003\u0002",
    "\u0002\u0002\u017d\u0171\u0003\u0002\u0002\u0002\u017d\u0172\u0003\u0002",
    "\u0002\u0002\u017d\u0173\u0003\u0002\u0002\u0002\u017d\u0174\u0003\u0002",
    "\u0002\u0002\u017d\u0175\u0003\u0002\u0002\u0002\u017d\u0176\u0003\u0002",
    "\u0002\u0002\u017d\u0177\u0003\u0002\u0002\u0002\u017d\u0178\u0003\u0002",
    "\u0002\u0002\u017d\u0179\u0003\u0002\u0002\u0002\u017d\u017a\u0003\u0002",
    "\u0002\u0002\u017d\u017b\u0003\u0002\u0002\u0002\u017d\u017c\u0003\u0002",
    "\u0002\u0002\u017ed\u0003\u0002\u0002\u0002\u017f\u0180\t\u0006\u0002",
    "\u0002\u0180f\u0003\u0002\u0002\u0002\u0181\u0182\u00042;\u0002\u0182",
    "h\u0003\u0002\u0002\u0002\u0014\u0002o}\u00e0\u00f4\u00f9\u0100\u0107",
    "\u0109\u010c\u0138\u013f\u0146\u014e\u0151\u0155\u015b\u017d\u0004\b",
    "\u0002\u0002\u0002\u0003\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function MyScanner(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

MyScanner.prototype = Object.create(antlr4.Lexer.prototype);
MyScanner.prototype.constructor = MyScanner;

Object.defineProperty(MyScanner.prototype, "atn", {
        get : function() {
                return atn;
        }
});

MyScanner.EOF = antlr4.Token.EOF;
MyScanner.COMMENT = 1;
MyScanner.LINE_COMMENT = 2;
MyScanner.Space = 3;
MyScanner.Semicolon = 4;
MyScanner.RightCurlyBracket = 5;
MyScanner.LeftCurlyBracket = 6;
MyScanner.RightParenthesis = 7;
MyScanner.LeftParenthesis = 8;
MyScanner.RightBracket = 9;
MyScanner.LeftBracket = 10;
MyScanner.Equals = 11;
MyScanner.Comma = 12;
MyScanner.Dot = 13;
MyScanner.While = 14;
MyScanner.If = 15;
MyScanner.Class = 16;
MyScanner.Return = 17;
MyScanner.Else = 18;
MyScanner.Print = 19;
MyScanner.New = 20;
MyScanner.ArrayLength = 21;
MyScanner.SimpleType = 22;
MyScanner.ArrayType = 23;
MyScanner.RelationalOperation = 24;
MyScanner.MultiplicativeOperation = 25;
MyScanner.Literal = 26;
MyScanner.Identifier = 27;
MyScanner.Plus = 28;
MyScanner.Mul = 29;
MyScanner.Div = 30;
MyScanner.Hyphen = 31;
MyScanner.Exclamation = 32;

MyScanner.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

MyScanner.prototype.modeNames = [ "DEFAULT_MODE" ];

MyScanner.prototype.literalNames = [ null, null, null, null, "';'", "'}'", 
                                     "'{'", "')'", "'('", "']'", "'['", 
                                     "'='", "','", "'.'", "'while'", "'if'", 
                                     "'class'", "'return'", "'else'", "'print'", 
                                     "'new'", null, null, null, null, null, 
                                     null, null, "'+'", "'*'", "'/'", "'-'", 
                                     "'!'" ];

MyScanner.prototype.symbolicNames = [ null, "COMMENT", "LINE_COMMENT", "Space", 
                                      "Semicolon", "RightCurlyBracket", 
                                      "LeftCurlyBracket", "RightParenthesis", 
                                      "LeftParenthesis", "RightBracket", 
                                      "LeftBracket", "Equals", "Comma", 
                                      "Dot", "While", "If", "Class", "Return", 
                                      "Else", "Print", "New", "ArrayLength", 
                                      "SimpleType", "ArrayType", "RelationalOperation", 
                                      "MultiplicativeOperation", "Literal", 
                                      "Identifier", "Plus", "Mul", "Div", 
                                      "Hyphen", "Exclamation" ];

MyScanner.prototype.ruleNames = [ "COMMENT", "LINE_COMMENT", "Space", "Semicolon", 
                                  "RightCurlyBracket", "LeftCurlyBracket", 
                                  "RightParenthesis", "LeftParenthesis", 
                                  "RightBracket", "LeftBracket", "Equals", 
                                  "Comma", "Dot", "While", "If", "Class", 
                                  "Return", "Else", "Print", "And", "Or", 
                                  "True", "False", "New", "Length", "ArrayLength", 
                                  "SimpleType", "ArrayType", "RelationalOperation", 
                                  "MultiplicativeOperation", "Literal", 
                                  "Identifier", "Boolean", "Char", "Int", 
                                  "String", "Plus", "Mul", "Div", "Hyphen", 
                                  "Exclamation", "LessThan", "GreaterThan", 
                                  "IntLiteral", "RealLiteral", "BoolLiteral", 
                                  "StringLiteral", "CharLiteral", "Printable", 
                                  "Letter", "Digit" ];

MyScanner.prototype.grammarFileName = "MyScanner.g4";


exports.MyScanner = MyScanner;

