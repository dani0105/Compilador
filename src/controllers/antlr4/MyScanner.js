// Generated from MyScanner.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');



var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002\u001f\u0190\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
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
    "1\t1\u00042\t2\u00043\t3\u00044\t4\u00045\t5\u00046\t6\u0003\u0002\u0003",
    "\u0002\u0003\u0002\u0003\u0002\u0007\u0002r\n\u0002\f\u0002\u000e\u0002",
    "u\u000b\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003",
    "\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0007\u0003\u0080",
    "\n\u0003\f\u0003\u000e\u0003\u0083\u000b\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005",
    "\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003",
    "\t\u0003\t\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0003",
    "\r\u0003\r\u0003\u000e\u0003\u000e\u0003\u000f\u0003\u000f\u0003\u000f",
    "\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u0010\u0003\u0010\u0003\u0010",
    "\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011",
    "\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012",
    "\u0003\u0012\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013",
    "\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014",
    "\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0016\u0003\u0016",
    "\u0003\u0016\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017",
    "\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018",
    "\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u001a\u0003\u001a",
    "\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001b",
    "\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001c\u0003\u001c\u0003\u001c",
    "\u0003\u001c\u0005\u001c\u00e5\n\u001c\u0003\u001d\u0003\u001d\u0003",
    "\u001d\u0003\u001d\u0003\u001e\u0003\u001e\u0003\u001e\u0003\u001e\u0003",
    "\u001e\u0003\u001e\u0003\u001e\u0003\u001e\u0003\u001e\u0003\u001e\u0003",
    "\u001e\u0003\u001e\u0003\u001e\u0003\u001e\u0005\u001e\u00f9\n\u001e",
    "\u0003\u001f\u0003\u001f\u0003\u001f\u0005\u001f\u00fe\n\u001f\u0003",
    " \u0003 \u0003 \u0005 \u0103\n \u0003!\u0003!\u0003!\u0003!\u0003!\u0005",
    "!\u010a\n!\u0003\"\u0003\"\u0003\"\u0003\"\u0003\"\u0007\"\u0111\n\"",
    "\f\"\u000e\"\u0114\u000b\"\u0005\"\u0116\n\"\u0003#\u0003#\u0005#\u011a",
    "\n#\u0003$\u0003$\u0003$\u0003$\u0003$\u0003$\u0003$\u0003$\u0003%\u0003",
    "%\u0003%\u0003%\u0003%\u0003&\u0003&\u0003&\u0003&\u0003\'\u0003\'\u0003",
    "\'\u0003\'\u0003\'\u0003\'\u0003\'\u0003(\u0003(\u0003)\u0003)\u0003",
    "*\u0003*\u0003+\u0003+\u0003,\u0003,\u0003-\u0003-\u0003.\u0003.\u0003",
    "/\u0003/\u0007/\u0144\n/\f/\u000e/\u0147\u000b/\u00030\u00030\u0007",
    "0\u014b\n0\f0\u000e0\u014e\u000b0\u00030\u00030\u00070\u0152\n0\f0\u000e",
    "0\u0155\u000b0\u00030\u00030\u00030\u00070\u015a\n0\f0\u000e0\u015d",
    "\u000b0\u00050\u015f\n0\u00031\u00031\u00051\u0163\n1\u00032\u00032",
    "\u00072\u0167\n2\f2\u000e2\u016a\u000b2\u00032\u00032\u00033\u00033",
    "\u00033\u00033\u00034\u00034\u00034\u00034\u00034\u00034\u00034\u0003",
    "4\u00034\u00034\u00034\u00034\u00034\u00034\u00034\u00034\u00034\u0003",
    "4\u00034\u00034\u00034\u00034\u00034\u00034\u00034\u00054\u018b\n4\u0003",
    "5\u00035\u00036\u00036\u0003s\u00027\u0003\u0003\u0005\u0004\u0007\u0005",
    "\t\u0006\u000b\u0007\r\b\u000f\t\u0011\n\u0013\u000b\u0015\f\u0017\r",
    "\u0019\u000e\u001b\u000f\u001d\u0010\u001f\u0011!\u0012#\u0013%\u0014",
    "\'\u0015)\u0002+\u0002-\u0002/\u00021\u00163\u00025\u00177\u00189\u0019",
    ";\u001a=\u001b?\u001cA\u001dC\u001eE\u001fG\u0002I\u0002K\u0002M\u0002",
    "O\u0002Q\u0002S\u0002U\u0002W\u0002Y\u0002[\u0002]\u0002_\u0002a\u0002",
    "c\u0002e\u0002g\u0002i\u0002k\u0002\u0003\u0002\u0007\u0004\u0002\f",
    "\f\u000f\u000f\u0005\u0002\u000b\f\u000f\u000f\"\"\u0004\u0002^^`b\u0004",
    "\u0002~~\u0080\u0080\u0004\u0002C\\c|\u0002\u01ad\u0002\u0003\u0003",
    "\u0002\u0002\u0002\u0002\u0005\u0003\u0002\u0002\u0002\u0002\u0007\u0003",
    "\u0002\u0002\u0002\u0002\t\u0003\u0002\u0002\u0002\u0002\u000b\u0003",
    "\u0002\u0002\u0002\u0002\r\u0003\u0002\u0002\u0002\u0002\u000f\u0003",
    "\u0002\u0002\u0002\u0002\u0011\u0003\u0002\u0002\u0002\u0002\u0013\u0003",
    "\u0002\u0002\u0002\u0002\u0015\u0003\u0002\u0002\u0002\u0002\u0017\u0003",
    "\u0002\u0002\u0002\u0002\u0019\u0003\u0002\u0002\u0002\u0002\u001b\u0003",
    "\u0002\u0002\u0002\u0002\u001d\u0003\u0002\u0002\u0002\u0002\u001f\u0003",
    "\u0002\u0002\u0002\u0002!\u0003\u0002\u0002\u0002\u0002#\u0003\u0002",
    "\u0002\u0002\u0002%\u0003\u0002\u0002\u0002\u0002\'\u0003\u0002\u0002",
    "\u0002\u00021\u0003\u0002\u0002\u0002\u00025\u0003\u0002\u0002\u0002",
    "\u00027\u0003\u0002\u0002\u0002\u00029\u0003\u0002\u0002\u0002\u0002",
    ";\u0003\u0002\u0002\u0002\u0002=\u0003\u0002\u0002\u0002\u0002?\u0003",
    "\u0002\u0002\u0002\u0002A\u0003\u0002\u0002\u0002\u0002C\u0003\u0002",
    "\u0002\u0002\u0002E\u0003\u0002\u0002\u0002\u0003m\u0003\u0002\u0002",
    "\u0002\u0005{\u0003\u0002\u0002\u0002\u0007\u0086\u0003\u0002\u0002",
    "\u0002\t\u008a\u0003\u0002\u0002\u0002\u000b\u008c\u0003\u0002\u0002",
    "\u0002\r\u008e\u0003\u0002\u0002\u0002\u000f\u0090\u0003\u0002\u0002",
    "\u0002\u0011\u0092\u0003\u0002\u0002\u0002\u0013\u0094\u0003\u0002\u0002",
    "\u0002\u0015\u0096\u0003\u0002\u0002\u0002\u0017\u0098\u0003\u0002\u0002",
    "\u0002\u0019\u009a\u0003\u0002\u0002\u0002\u001b\u009c\u0003\u0002\u0002",
    "\u0002\u001d\u009e\u0003\u0002\u0002\u0002\u001f\u00a4\u0003\u0002\u0002",
    "\u0002!\u00a7\u0003\u0002\u0002\u0002#\u00ad\u0003\u0002\u0002\u0002",
    "%\u00b4\u0003\u0002\u0002\u0002\'\u00b9\u0003\u0002\u0002\u0002)\u00bf",
    "\u0003\u0002\u0002\u0002+\u00c3\u0003\u0002\u0002\u0002-\u00c6\u0003",
    "\u0002\u0002\u0002/\u00cb\u0003\u0002\u0002\u00021\u00d1\u0003\u0002",
    "\u0002\u00023\u00d5\u0003\u0002\u0002\u00025\u00dc\u0003\u0002\u0002",
    "\u00027\u00e4\u0003\u0002\u0002\u00029\u00e6\u0003\u0002\u0002\u0002",
    ";\u00f8\u0003\u0002\u0002\u0002=\u00fd\u0003\u0002\u0002\u0002?\u0102",
    "\u0003\u0002\u0002\u0002A\u0109\u0003\u0002\u0002\u0002C\u0115\u0003",
    "\u0002\u0002\u0002E\u0119\u0003\u0002\u0002\u0002G\u011b\u0003\u0002",
    "\u0002\u0002I\u0123\u0003\u0002\u0002\u0002K\u0128\u0003\u0002\u0002",
    "\u0002M\u012c\u0003\u0002\u0002\u0002O\u0133\u0003\u0002\u0002\u0002",
    "Q\u0135\u0003\u0002\u0002\u0002S\u0137\u0003\u0002\u0002\u0002U\u0139",
    "\u0003\u0002\u0002\u0002W\u013b\u0003\u0002\u0002\u0002Y\u013d\u0003",
    "\u0002\u0002\u0002[\u013f\u0003\u0002\u0002\u0002]\u0141\u0003\u0002",
    "\u0002\u0002_\u015e\u0003\u0002\u0002\u0002a\u0162\u0003\u0002\u0002",
    "\u0002c\u0164\u0003\u0002\u0002\u0002e\u016d\u0003\u0002\u0002\u0002",
    "g\u018a\u0003\u0002\u0002\u0002i\u018c\u0003\u0002\u0002\u0002k\u018e",
    "\u0003\u0002\u0002\u0002mn\u00071\u0002\u0002no\u0007,\u0002\u0002o",
    "s\u0003\u0002\u0002\u0002pr\u000b\u0002\u0002\u0002qp\u0003\u0002\u0002",
    "\u0002ru\u0003\u0002\u0002\u0002st\u0003\u0002\u0002\u0002sq\u0003\u0002",
    "\u0002\u0002tv\u0003\u0002\u0002\u0002us\u0003\u0002\u0002\u0002vw\u0007",
    ",\u0002\u0002wx\u00071\u0002\u0002xy\u0003\u0002\u0002\u0002yz\b\u0002",
    "\u0002\u0002z\u0004\u0003\u0002\u0002\u0002{|\u00071\u0002\u0002|}\u0007",
    "1\u0002\u0002}\u0081\u0003\u0002\u0002\u0002~\u0080\n\u0002\u0002\u0002",
    "\u007f~\u0003\u0002\u0002\u0002\u0080\u0083\u0003\u0002\u0002\u0002",
    "\u0081\u007f\u0003\u0002\u0002\u0002\u0081\u0082\u0003\u0002\u0002\u0002",
    "\u0082\u0084\u0003\u0002\u0002\u0002\u0083\u0081\u0003\u0002\u0002\u0002",
    "\u0084\u0085\b\u0003\u0002\u0002\u0085\u0006\u0003\u0002\u0002\u0002",
    "\u0086\u0087\t\u0003\u0002\u0002\u0087\u0088\u0003\u0002\u0002\u0002",
    "\u0088\u0089\b\u0004\u0003\u0002\u0089\b\u0003\u0002\u0002\u0002\u008a",
    "\u008b\u0007=\u0002\u0002\u008b\n\u0003\u0002\u0002\u0002\u008c\u008d",
    "\u0007\u007f\u0002\u0002\u008d\f\u0003\u0002\u0002\u0002\u008e\u008f",
    "\u0007}\u0002\u0002\u008f\u000e\u0003\u0002\u0002\u0002\u0090\u0091",
    "\u0007+\u0002\u0002\u0091\u0010\u0003\u0002\u0002\u0002\u0092\u0093",
    "\u0007*\u0002\u0002\u0093\u0012\u0003\u0002\u0002\u0002\u0094\u0095",
    "\u0007_\u0002\u0002\u0095\u0014\u0003\u0002\u0002\u0002\u0096\u0097",
    "\u0007]\u0002\u0002\u0097\u0016\u0003\u0002\u0002\u0002\u0098\u0099",
    "\u0007?\u0002\u0002\u0099\u0018\u0003\u0002\u0002\u0002\u009a\u009b",
    "\u0007.\u0002\u0002\u009b\u001a\u0003\u0002\u0002\u0002\u009c\u009d",
    "\u00070\u0002\u0002\u009d\u001c\u0003\u0002\u0002\u0002\u009e\u009f",
    "\u0007y\u0002\u0002\u009f\u00a0\u0007j\u0002\u0002\u00a0\u00a1\u0007",
    "k\u0002\u0002\u00a1\u00a2\u0007n\u0002\u0002\u00a2\u00a3\u0007g\u0002",
    "\u0002\u00a3\u001e\u0003\u0002\u0002\u0002\u00a4\u00a5\u0007k\u0002",
    "\u0002\u00a5\u00a6\u0007h\u0002\u0002\u00a6 \u0003\u0002\u0002\u0002",
    "\u00a7\u00a8\u0007e\u0002\u0002\u00a8\u00a9\u0007n\u0002\u0002\u00a9",
    "\u00aa\u0007c\u0002\u0002\u00aa\u00ab\u0007u\u0002\u0002\u00ab\u00ac",
    "\u0007u\u0002\u0002\u00ac\"\u0003\u0002\u0002\u0002\u00ad\u00ae\u0007",
    "t\u0002\u0002\u00ae\u00af\u0007g\u0002\u0002\u00af\u00b0\u0007v\u0002",
    "\u0002\u00b0\u00b1\u0007w\u0002\u0002\u00b1\u00b2\u0007t\u0002\u0002",
    "\u00b2\u00b3\u0007p\u0002\u0002\u00b3$\u0003\u0002\u0002\u0002\u00b4",
    "\u00b5\u0007g\u0002\u0002\u00b5\u00b6\u0007n\u0002\u0002\u00b6\u00b7",
    "\u0007u\u0002\u0002\u00b7\u00b8\u0007g\u0002\u0002\u00b8&\u0003\u0002",
    "\u0002\u0002\u00b9\u00ba\u0007r\u0002\u0002\u00ba\u00bb\u0007t\u0002",
    "\u0002\u00bb\u00bc\u0007k\u0002\u0002\u00bc\u00bd\u0007p\u0002\u0002",
    "\u00bd\u00be\u0007v\u0002\u0002\u00be(\u0003\u0002\u0002\u0002\u00bf",
    "\u00c0\u0007c\u0002\u0002\u00c0\u00c1\u0007p\u0002\u0002\u00c1\u00c2",
    "\u0007f\u0002\u0002\u00c2*\u0003\u0002\u0002\u0002\u00c3\u00c4\u0007",
    "q\u0002\u0002\u00c4\u00c5\u0007t\u0002\u0002\u00c5,\u0003\u0002\u0002",
    "\u0002\u00c6\u00c7\u0007v\u0002\u0002\u00c7\u00c8\u0007t\u0002\u0002",
    "\u00c8\u00c9\u0007w\u0002\u0002\u00c9\u00ca\u0007g\u0002\u0002\u00ca",
    ".\u0003\u0002\u0002\u0002\u00cb\u00cc\u0007h\u0002\u0002\u00cc\u00cd",
    "\u0007c\u0002\u0002\u00cd\u00ce\u0007n\u0002\u0002\u00ce\u00cf\u0007",
    "u\u0002\u0002\u00cf\u00d0\u0007g\u0002\u0002\u00d00\u0003\u0002\u0002",
    "\u0002\u00d1\u00d2\u0007p\u0002\u0002\u00d2\u00d3\u0007g\u0002\u0002",
    "\u00d3\u00d4\u0007y\u0002\u0002\u00d42\u0003\u0002\u0002\u0002\u00d5",
    "\u00d6\u0007n\u0002\u0002\u00d6\u00d7\u0007g\u0002\u0002\u00d7\u00d8",
    "\u0007p\u0002\u0002\u00d8\u00d9\u0007i\u0002\u0002\u00d9\u00da\u0007",
    "v\u0002\u0002\u00da\u00db\u0007j\u0002\u0002\u00db4\u0003\u0002\u0002",
    "\u0002\u00dc\u00dd\u0005C\"\u0002\u00dd\u00de\u0005\u001b\u000e\u0002",
    "\u00de\u00df\u00053\u001a\u0002\u00df6\u0003\u0002\u0002\u0002\u00e0",
    "\u00e5\u0005G$\u0002\u00e1\u00e5\u0005I%\u0002\u00e2\u00e5\u0005K&\u0002",
    "\u00e3\u00e5\u0005M\'\u0002\u00e4\u00e0\u0003\u0002\u0002\u0002\u00e4",
    "\u00e1\u0003\u0002\u0002\u0002\u00e4\u00e2\u0003\u0002\u0002\u0002\u00e4",
    "\u00e3\u0003\u0002\u0002\u0002\u00e58\u0003\u0002\u0002\u0002\u00e6",
    "\u00e7\u00057\u001c\u0002\u00e7\u00e8\u0005\u0015\u000b\u0002\u00e8",
    "\u00e9\u0005\u0013\n\u0002\u00e9:\u0003\u0002\u0002\u0002\u00ea\u00f9",
    "\u0005Y-\u0002\u00eb\u00f9\u0005[.\u0002\u00ec\u00ed\u0005\u0017\f\u0002",
    "\u00ed\u00ee\u0005\u0017\f\u0002\u00ee\u00f9\u0003\u0002\u0002\u0002",
    "\u00ef\u00f0\u0005W,\u0002\u00f0\u00f1\u0005\u0017\f\u0002\u00f1\u00f9",
    "\u0003\u0002\u0002\u0002\u00f2\u00f3\u0005Y-\u0002\u00f3\u00f4\u0005",
    "\u0017\f\u0002\u00f4\u00f9\u0003\u0002\u0002\u0002\u00f5\u00f6\u0005",
    "[.\u0002\u00f6\u00f7\u0005\u0017\f\u0002\u00f7\u00f9\u0003\u0002\u0002",
    "\u0002\u00f8\u00ea\u0003\u0002\u0002\u0002\u00f8\u00eb\u0003\u0002\u0002",
    "\u0002\u00f8\u00ec\u0003\u0002\u0002\u0002\u00f8\u00ef\u0003\u0002\u0002",
    "\u0002\u00f8\u00f2\u0003\u0002\u0002\u0002\u00f8\u00f5\u0003\u0002\u0002",
    "\u0002\u00f9<\u0003\u0002\u0002\u0002\u00fa\u00fe\u0005O(\u0002\u00fb",
    "\u00fe\u0005Q)\u0002\u00fc\u00fe\u0005+\u0016\u0002\u00fd\u00fa\u0003",
    "\u0002\u0002\u0002\u00fd\u00fb\u0003\u0002\u0002\u0002\u00fd\u00fc\u0003",
    "\u0002\u0002\u0002\u00fe>\u0003\u0002\u0002\u0002\u00ff\u0103\u0005",
    "S*\u0002\u0100\u0103\u0005U+\u0002\u0101\u0103\u0005)\u0015\u0002\u0102",
    "\u00ff\u0003\u0002\u0002\u0002\u0102\u0100\u0003\u0002\u0002\u0002\u0102",
    "\u0101\u0003\u0002\u0002\u0002\u0103@\u0003\u0002\u0002\u0002\u0104",
    "\u010a\u0005]/\u0002\u0105\u010a\u0005_0\u0002\u0106\u010a\u0005a1\u0002",
    "\u0107\u010a\u0005c2\u0002\u0108\u010a\u0005e3\u0002\u0109\u0104\u0003",
    "\u0002\u0002\u0002\u0109\u0105\u0003\u0002\u0002\u0002\u0109\u0106\u0003",
    "\u0002\u0002\u0002\u0109\u0107\u0003\u0002\u0002\u0002\u0109\u0108\u0003",
    "\u0002\u0002\u0002\u010aB\u0003\u0002\u0002\u0002\u010b\u0116\u0007",
    "a\u0002\u0002\u010c\u0112\u0005i5\u0002\u010d\u0111\u0007a\u0002\u0002",
    "\u010e\u0111\u0005i5\u0002\u010f\u0111\u0005k6\u0002\u0110\u010d\u0003",
    "\u0002\u0002\u0002\u0110\u010e\u0003\u0002\u0002\u0002\u0110\u010f\u0003",
    "\u0002\u0002\u0002\u0111\u0114\u0003\u0002\u0002\u0002\u0112\u0110\u0003",
    "\u0002\u0002\u0002\u0112\u0113\u0003\u0002\u0002\u0002\u0113\u0116\u0003",
    "\u0002\u0002\u0002\u0114\u0112\u0003\u0002\u0002\u0002\u0115\u010b\u0003",
    "\u0002\u0002\u0002\u0115\u010c\u0003\u0002\u0002\u0002\u0116D\u0003",
    "\u0002\u0002\u0002\u0117\u011a\u0005Q)\u0002\u0118\u011a\u0005W,\u0002",
    "\u0119\u0117\u0003\u0002\u0002\u0002\u0119\u0118\u0003\u0002\u0002\u0002",
    "\u011aF\u0003\u0002\u0002\u0002\u011b\u011c\u0007d\u0002\u0002\u011c",
    "\u011d\u0007q\u0002\u0002\u011d\u011e\u0007q\u0002\u0002\u011e\u011f",
    "\u0007n\u0002\u0002\u011f\u0120\u0007g\u0002\u0002\u0120\u0121\u0007",
    "c\u0002\u0002\u0121\u0122\u0007p\u0002\u0002\u0122H\u0003\u0002\u0002",
    "\u0002\u0123\u0124\u0007e\u0002\u0002\u0124\u0125\u0007j\u0002\u0002",
    "\u0125\u0126\u0007c\u0002\u0002\u0126\u0127\u0007t\u0002\u0002\u0127",
    "J\u0003\u0002\u0002\u0002\u0128\u0129\u0007k\u0002\u0002\u0129\u012a",
    "\u0007p\u0002\u0002\u012a\u012b\u0007v\u0002\u0002\u012bL\u0003\u0002",
    "\u0002\u0002\u012c\u012d\u0007u\u0002\u0002\u012d\u012e\u0007v\u0002",
    "\u0002\u012e\u012f\u0007t\u0002\u0002\u012f\u0130\u0007k\u0002\u0002",
    "\u0130\u0131\u0007p\u0002\u0002\u0131\u0132\u0007i\u0002\u0002\u0132",
    "N\u0003\u0002\u0002\u0002\u0133\u0134\u0007-\u0002\u0002\u0134P\u0003",
    "\u0002\u0002\u0002\u0135\u0136\u0007/\u0002\u0002\u0136R\u0003\u0002",
    "\u0002\u0002\u0137\u0138\u0007,\u0002\u0002\u0138T\u0003\u0002\u0002",
    "\u0002\u0139\u013a\u00071\u0002\u0002\u013aV\u0003\u0002\u0002\u0002",
    "\u013b\u013c\u0007#\u0002\u0002\u013cX\u0003\u0002\u0002\u0002\u013d",
    "\u013e\u0007>\u0002\u0002\u013eZ\u0003\u0002\u0002\u0002\u013f\u0140",
    "\u0007@\u0002\u0002\u0140\\\u0003\u0002\u0002\u0002\u0141\u0145\u0005",
    "k6\u0002\u0142\u0144\u0005k6\u0002\u0143\u0142\u0003\u0002\u0002\u0002",
    "\u0144\u0147\u0003\u0002\u0002\u0002\u0145\u0143\u0003\u0002\u0002\u0002",
    "\u0145\u0146\u0003\u0002\u0002\u0002\u0146^\u0003\u0002\u0002\u0002",
    "\u0147\u0145\u0003\u0002\u0002\u0002\u0148\u014c\u0005k6\u0002\u0149",
    "\u014b\u0005k6\u0002\u014a\u0149\u0003\u0002\u0002\u0002\u014b\u014e",
    "\u0003\u0002\u0002\u0002\u014c\u014a\u0003\u0002\u0002\u0002\u014c\u014d",
    "\u0003\u0002\u0002\u0002\u014d\u014f\u0003\u0002\u0002\u0002\u014e\u014c",
    "\u0003\u0002\u0002\u0002\u014f\u0153\u0005\u001b\u000e\u0002\u0150\u0152",
    "\u0005k6\u0002\u0151\u0150\u0003\u0002\u0002\u0002\u0152\u0155\u0003",
    "\u0002\u0002\u0002\u0153\u0151\u0003\u0002\u0002\u0002\u0153\u0154\u0003",
    "\u0002\u0002\u0002\u0154\u015f\u0003\u0002\u0002\u0002\u0155\u0153\u0003",
    "\u0002\u0002\u0002\u0156\u0157\u0005\u001b\u000e\u0002\u0157\u015b\u0005",
    "k6\u0002\u0158\u015a\u0005k6\u0002\u0159\u0158\u0003\u0002\u0002\u0002",
    "\u015a\u015d\u0003\u0002\u0002\u0002\u015b\u0159\u0003\u0002\u0002\u0002",
    "\u015b\u015c\u0003\u0002\u0002\u0002\u015c\u015f\u0003\u0002\u0002\u0002",
    "\u015d\u015b\u0003\u0002\u0002\u0002\u015e\u0148\u0003\u0002\u0002\u0002",
    "\u015e\u0156\u0003\u0002\u0002\u0002\u015f`\u0003\u0002\u0002\u0002",
    "\u0160\u0163\u0005-\u0017\u0002\u0161\u0163\u0005/\u0018\u0002\u0162",
    "\u0160\u0003\u0002\u0002\u0002\u0162\u0161\u0003\u0002\u0002\u0002\u0163",
    "b\u0003\u0002\u0002\u0002\u0164\u0168\u0007$\u0002\u0002\u0165\u0167",
    "\u0005g4\u0002\u0166\u0165\u0003\u0002\u0002\u0002\u0167\u016a\u0003",
    "\u0002\u0002\u0002\u0168\u0166\u0003\u0002\u0002\u0002\u0168\u0169\u0003",
    "\u0002\u0002\u0002\u0169\u016b\u0003\u0002\u0002\u0002\u016a\u0168\u0003",
    "\u0002\u0002\u0002\u016b\u016c\u0007$\u0002\u0002\u016cd\u0003\u0002",
    "\u0002\u0002\u016d\u016e\u0007)\u0002\u0002\u016e\u016f\u0005g4\u0002",
    "\u016f\u0170\u0007)\u0002\u0002\u0170f\u0003\u0002\u0002\u0002\u0171",
    "\u018b\u0005k6\u0002\u0172\u018b\u0005i5\u0002\u0173\u018b\u0007\"\u0002",
    "\u0002\u0174\u018b\u0005W,\u0002\u0175\u018b\u0004$)\u0002\u0176\u018b",
    "\u0005\u0011\t\u0002\u0177\u018b\u0005\u000f\b\u0002\u0178\u018b\u0005",
    "S*\u0002\u0179\u018b\u0005O(\u0002\u017a\u018b\u0005\u0019\r\u0002\u017b",
    "\u018b\u0005Q)\u0002\u017c\u018b\u0005\u001b\u000e\u0002\u017d\u018b",
    "\u0005U+\u0002\u017e\u018b\u0007<\u0002\u0002\u017f\u018b\u0005\t\u0005",
    "\u0002\u0180\u018b\u0005Y-\u0002\u0181\u018b\u0005\u0017\f\u0002\u0182",
    "\u018b\u0005[.\u0002\u0183\u018b\u0004AB\u0002\u0184\u018b\u0005\u0013",
    "\n\u0002\u0185\u018b\u0005\u0015\u000b\u0002\u0186\u018b\t\u0004\u0002",
    "\u0002\u0187\u018b\u0005\r\u0007\u0002\u0188\u018b\u0005\u000b\u0006",
    "\u0002\u0189\u018b\t\u0005\u0002\u0002\u018a\u0171\u0003\u0002\u0002",
    "\u0002\u018a\u0172\u0003\u0002\u0002\u0002\u018a\u0173\u0003\u0002\u0002",
    "\u0002\u018a\u0174\u0003\u0002\u0002\u0002\u018a\u0175\u0003\u0002\u0002",
    "\u0002\u018a\u0176\u0003\u0002\u0002\u0002\u018a\u0177\u0003\u0002\u0002",
    "\u0002\u018a\u0178\u0003\u0002\u0002\u0002\u018a\u0179\u0003\u0002\u0002",
    "\u0002\u018a\u017a\u0003\u0002\u0002\u0002\u018a\u017b\u0003\u0002\u0002",
    "\u0002\u018a\u017c\u0003\u0002\u0002\u0002\u018a\u017d\u0003\u0002\u0002",
    "\u0002\u018a\u017e\u0003\u0002\u0002\u0002\u018a\u017f\u0003\u0002\u0002",
    "\u0002\u018a\u0180\u0003\u0002\u0002\u0002\u018a\u0181\u0003\u0002\u0002",
    "\u0002\u018a\u0182\u0003\u0002\u0002\u0002\u018a\u0183\u0003\u0002\u0002",
    "\u0002\u018a\u0184\u0003\u0002\u0002\u0002\u018a\u0185\u0003\u0002\u0002",
    "\u0002\u018a\u0186\u0003\u0002\u0002\u0002\u018a\u0187\u0003\u0002\u0002",
    "\u0002\u018a\u0188\u0003\u0002\u0002\u0002\u018a\u0189\u0003\u0002\u0002",
    "\u0002\u018bh\u0003\u0002\u0002\u0002\u018c\u018d\t\u0006\u0002\u0002",
    "\u018dj\u0003\u0002\u0002\u0002\u018e\u018f\u00042;\u0002\u018fl\u0003",
    "\u0002\u0002\u0002\u0016\u0002s\u0081\u00e4\u00f8\u00fd\u0102\u0109",
    "\u0110\u0112\u0115\u0119\u0145\u014c\u0153\u015b\u015e\u0162\u0168\u018a",
    "\u0004\b\u0002\u0002\u0002\u0003\u0002"].join("");


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
MyScanner.AdditiveOperation = 25;
MyScanner.MultiplicativeOperation = 26;
MyScanner.Literal = 27;
MyScanner.Identifier = 28;
MyScanner.UnaryOperations = 29;

MyScanner.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

MyScanner.prototype.modeNames = [ "DEFAULT_MODE" ];

MyScanner.prototype.literalNames = [ null, null, null, null, "';'", "'}'", 
                                     "'{'", "')'", "'('", "']'", "'['", 
                                     "'='", "','", "'.'", "'while'", "'if'", 
                                     "'class'", "'return'", "'else'", "'print'", 
                                     "'new'" ];

MyScanner.prototype.symbolicNames = [ null, "COMMENT", "LINE_COMMENT", "Space", 
                                      "Semicolon", "RightCurlyBracket", 
                                      "LeftCurlyBracket", "RightParenthesis", 
                                      "LeftParenthesis", "RightBracket", 
                                      "LeftBracket", "Equals", "Comma", 
                                      "Dot", "While", "If", "Class", "Return", 
                                      "Else", "Print", "New", "ArrayLength", 
                                      "SimpleType", "ArrayType", "RelationalOperation", 
                                      "AdditiveOperation", "MultiplicativeOperation", 
                                      "Literal", "Identifier", "UnaryOperations" ];

MyScanner.prototype.ruleNames = [ "COMMENT", "LINE_COMMENT", "Space", "Semicolon", 
                                  "RightCurlyBracket", "LeftCurlyBracket", 
                                  "RightParenthesis", "LeftParenthesis", 
                                  "RightBracket", "LeftBracket", "Equals", 
                                  "Comma", "Dot", "While", "If", "Class", 
                                  "Return", "Else", "Print", "And", "Or", 
                                  "True", "False", "New", "Length", "ArrayLength", 
                                  "SimpleType", "ArrayType", "RelationalOperation", 
                                  "AdditiveOperation", "MultiplicativeOperation", 
                                  "Literal", "Identifier", "UnaryOperations", 
                                  "Boolean", "Char", "Int", "String", "Plus", 
                                  "Hyphen", "Mul", "Div", "Exclamation", 
                                  "LessThan", "GreaterThan", "IntLiteral", 
                                  "RealLiteral", "BoolLiteral", "StringLiteral", 
                                  "CharLiteral", "Printable", "Letter", 
                                  "Digit" ];

MyScanner.prototype.grammarFileName = "MyScanner.g4";


exports.MyScanner = MyScanner;

