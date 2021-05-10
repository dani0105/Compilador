// Generated from MyParser.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');
var MyParserListener = require('./MyParserListener').MyParserListener;
var MyParserVisitor = require('./MyParserVisitor').MyParserVisitor;

var grammarFileName = "MyParser.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u001f\u0100\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f",
    "\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010",
    "\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014",
    "\t\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017",
    "\u0004\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a\u0004\u001b",
    "\t\u001b\u0004\u001c\t\u001c\u0003\u0002\u0007\u0002:\n\u0002\f\u0002",
    "\u000e\u0002=\u000b\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0005\u0003U\n\u0003\u0003\u0004\u0003\u0004\u0007\u0004Y\n\u0004",
    "\f\u0004\u000e\u0004\\\u000b\u0004\u0003\u0004\u0003\u0004\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0005\u0006g\n\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0007\u0007o\n\u0007\f\u0007\u000e\u0007r\u000b",
    "\u0007\u0003\b\u0003\b\u0003\b\u0003\t\u0003\t\u0003\t\u0003\t\u0003",
    "\t\u0003\t\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0005",
    "\n\u0084\n\n\u0003\u000b\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0003",
    "\f\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0007\r\u0092\n\r",
    "\f\r\u000e\r\u0095\u000b\r\u0003\r\u0003\r\u0003\u000e\u0003\u000e\u0003",
    "\u000e\u0003\u000e\u0005\u000e\u009d\n\u000e\u0003\u000f\u0003\u000f",
    "\u0003\u000f\u0003\u000f\u0005\u000f\u00a3\n\u000f\u0003\u0010\u0003",
    "\u0010\u0003\u0011\u0003\u0011\u0003\u0011\u0005\u0011\u00aa\n\u0011",
    "\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0012\u0003\u0012\u0003\u0012",
    "\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0013\u0003\u0013",
    "\u0003\u0013\u0007\u0013\u00b9\n\u0013\f\u0013\u000e\u0013\u00bc\u000b",
    "\u0013\u0003\u0014\u0003\u0014\u0003\u0014\u0007\u0014\u00c1\n\u0014",
    "\f\u0014\u000e\u0014\u00c4\u000b\u0014\u0003\u0015\u0003\u0015\u0003",
    "\u0015\u0007\u0015\u00c9\n\u0015\f\u0015\u000e\u0015\u00cc\u000b\u0015",
    "\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0005\u0016\u00d2\n",
    "\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003",
    "\u0016\u0003\u0016\u0005\u0016\u00db\n\u0016\u0003\u0017\u0003\u0017",
    "\u0003\u0017\u0003\u0017\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018",
    "\u0003\u0018\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u0019",
    "\u0003\u0019\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a",
    "\u0003\u001b\u0003\u001b\u0003\u001b\u0005\u001b\u00f4\n\u001b\u0003",
    "\u001b\u0003\u001b\u0003\u001c\u0003\u001c\u0003\u001c\u0007\u001c\u00fb",
    "\n\u001c\f\u001c\u000e\u001c\u00fe\u000b\u001c\u0003\u001c\u0002\u0002",
    "\u001d\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a",
    "\u001c\u001e \"$&(*,.0246\u0002\u0003\u0004\u0002\u0019\u001a\u001f",
    "\u001f\u0002\u0104\u0002;\u0003\u0002\u0002\u0002\u0004T\u0003\u0002",
    "\u0002\u0002\u0006V\u0003\u0002\u0002\u0002\b_\u0003\u0002\u0002\u0002",
    "\nb\u0003\u0002\u0002\u0002\fk\u0003\u0002\u0002\u0002\u000es\u0003",
    "\u0002\u0002\u0002\u0010v\u0003\u0002\u0002\u0002\u0012|\u0003\u0002",
    "\u0002\u0002\u0014\u0085\u0003\u0002\u0002\u0002\u0016\u0088\u0003\u0002",
    "\u0002\u0002\u0018\u008b\u0003\u0002\u0002\u0002\u001a\u0098\u0003\u0002",
    "\u0002\u0002\u001c\u009e\u0003\u0002\u0002\u0002\u001e\u00a4\u0003\u0002",
    "\u0002\u0002 \u00a6\u0003\u0002\u0002\u0002\"\u00ae\u0003\u0002\u0002",
    "\u0002$\u00b5\u0003\u0002\u0002\u0002&\u00bd\u0003\u0002\u0002\u0002",
    "(\u00c5\u0003\u0002\u0002\u0002*\u00da\u0003\u0002\u0002\u0002,\u00dc",
    "\u0003\u0002\u0002\u0002.\u00e0\u0003\u0002\u0002\u00020\u00e5\u0003",
    "\u0002\u0002\u00022\u00eb\u0003\u0002\u0002\u00024\u00f0\u0003\u0002",
    "\u0002\u00026\u00f7\u0003\u0002\u0002\u00028:\u0005\u0004\u0003\u0002",
    "98\u0003\u0002\u0002\u0002:=\u0003\u0002\u0002\u0002;9\u0003\u0002\u0002",
    "\u0002;<\u0003\u0002\u0002\u0002<\u0003\u0003\u0002\u0002\u0002=;\u0003",
    "\u0002\u0002\u0002>?\u0005\u001c\u000f\u0002?@\u0007\u0006\u0002\u0002",
    "@U\u0003\u0002\u0002\u0002AB\u0005\u0018\r\u0002BC\u0007\u0006\u0002",
    "\u0002CU\u0003\u0002\u0002\u0002DE\u0005 \u0011\u0002EF\u0007\u0006",
    "\u0002\u0002FU\u0003\u0002\u0002\u0002GH\u0005\"\u0012\u0002HI\u0007",
    "\u0006\u0002\u0002IU\u0003\u0002\u0002\u0002JK\u0005\u0016\f\u0002K",
    "L\u0007\u0006\u0002\u0002LU\u0003\u0002\u0002\u0002MU\u0005\u0012\n",
    "\u0002NU\u0005\u0010\t\u0002OP\u0005\u0014\u000b\u0002PQ\u0007\u0006",
    "\u0002\u0002QU\u0003\u0002\u0002\u0002RU\u0005\n\u0006\u0002SU\u0005",
    "\u0006\u0004\u0002T>\u0003\u0002\u0002\u0002TA\u0003\u0002\u0002\u0002",
    "TD\u0003\u0002\u0002\u0002TG\u0003\u0002\u0002\u0002TJ\u0003\u0002\u0002",
    "\u0002TM\u0003\u0002\u0002\u0002TN\u0003\u0002\u0002\u0002TO\u0003\u0002",
    "\u0002\u0002TR\u0003\u0002\u0002\u0002TS\u0003\u0002\u0002\u0002U\u0005",
    "\u0003\u0002\u0002\u0002VZ\u0007\b\u0002\u0002WY\u0005\u0004\u0003\u0002",
    "XW\u0003\u0002\u0002\u0002Y\\\u0003\u0002\u0002\u0002ZX\u0003\u0002",
    "\u0002\u0002Z[\u0003\u0002\u0002\u0002[]\u0003\u0002\u0002\u0002\\Z",
    "\u0003\u0002\u0002\u0002]^\u0007\u0007\u0002\u0002^\u0007\u0003\u0002",
    "\u0002\u0002_`\u0007\u0017\u0002\u0002`a\u0005$\u0013\u0002a\t\u0003",
    "\u0002\u0002\u0002bc\u0005\u001e\u0010\u0002cd\u0007\u001f\u0002\u0002",
    "df\u0007\n\u0002\u0002eg\u0005\f\u0007\u0002fe\u0003\u0002\u0002\u0002",
    "fg\u0003\u0002\u0002\u0002gh\u0003\u0002\u0002\u0002hi\u0007\t\u0002",
    "\u0002ij\u0005\u0006\u0004\u0002j\u000b\u0003\u0002\u0002\u0002kp\u0005",
    "\u000e\b\u0002lm\u0007\u000e\u0002\u0002mo\u0005\u000e\b\u0002nl\u0003",
    "\u0002\u0002\u0002or\u0003\u0002\u0002\u0002pn\u0003\u0002\u0002\u0002",
    "pq\u0003\u0002\u0002\u0002q\r\u0003\u0002\u0002\u0002rp\u0003\u0002",
    "\u0002\u0002st\u0005\u001e\u0010\u0002tu\u0007\u001f\u0002\u0002u\u000f",
    "\u0003\u0002\u0002\u0002vw\u0007\u0010\u0002\u0002wx\u0007\n\u0002\u0002",
    "xy\u0005$\u0013\u0002yz\u0007\t\u0002\u0002z{\u0005\u0006\u0004\u0002",
    "{\u0011\u0003\u0002\u0002\u0002|}\u0007\u0011\u0002\u0002}~\u0007\n",
    "\u0002\u0002~\u007f\u0005$\u0013\u0002\u007f\u0080\u0007\t\u0002\u0002",
    "\u0080\u0083\u0005\u0006\u0004\u0002\u0081\u0082\u0007\u0014\u0002\u0002",
    "\u0082\u0084\u0005\u0006\u0004\u0002\u0083\u0081\u0003\u0002\u0002\u0002",
    "\u0083\u0084\u0003\u0002\u0002\u0002\u0084\u0013\u0003\u0002\u0002\u0002",
    "\u0085\u0086\u0007\u0013\u0002\u0002\u0086\u0087\u0005$\u0013\u0002",
    "\u0087\u0015\u0003\u0002\u0002\u0002\u0088\u0089\u0007\u0015\u0002\u0002",
    "\u0089\u008a\u0005$\u0013\u0002\u008a\u0017\u0003\u0002\u0002\u0002",
    "\u008b\u008c\u0007\u0012\u0002\u0002\u008c\u008d\u0007\u001f\u0002\u0002",
    "\u008d\u0093\u0007\b\u0002\u0002\u008e\u008f\u0005\u001a\u000e\u0002",
    "\u008f\u0090\u0007\u0006\u0002\u0002\u0090\u0092\u0003\u0002\u0002\u0002",
    "\u0091\u008e\u0003\u0002\u0002\u0002\u0092\u0095\u0003\u0002\u0002\u0002",
    "\u0093\u0091\u0003\u0002\u0002\u0002\u0093\u0094\u0003\u0002\u0002\u0002",
    "\u0094\u0096\u0003\u0002\u0002\u0002\u0095\u0093\u0003\u0002\u0002\u0002",
    "\u0096\u0097\u0007\u0007\u0002\u0002\u0097\u0019\u0003\u0002\u0002\u0002",
    "\u0098\u0099\u0007\u0019\u0002\u0002\u0099\u009c\u0007\u001f\u0002\u0002",
    "\u009a\u009b\u0007\r\u0002\u0002\u009b\u009d\u0005$\u0013\u0002\u009c",
    "\u009a\u0003\u0002\u0002\u0002\u009c\u009d\u0003\u0002\u0002\u0002\u009d",
    "\u001b\u0003\u0002\u0002\u0002\u009e\u009f\u0005\u001e\u0010\u0002\u009f",
    "\u00a2\u0007\u001f\u0002\u0002\u00a0\u00a1\u0007\r\u0002\u0002\u00a1",
    "\u00a3\u0005$\u0013\u0002\u00a2\u00a0\u0003\u0002\u0002\u0002\u00a2",
    "\u00a3\u0003\u0002\u0002\u0002\u00a3\u001d\u0003\u0002\u0002\u0002\u00a4",
    "\u00a5\t\u0002\u0002\u0002\u00a5\u001f\u0003\u0002\u0002\u0002\u00a6",
    "\u00a9\u0007\u001f\u0002\u0002\u00a7\u00a8\u0007\u000f\u0002\u0002\u00a8",
    "\u00aa\u0007\u001f\u0002\u0002\u00a9\u00a7\u0003\u0002\u0002\u0002\u00a9",
    "\u00aa\u0003\u0002\u0002\u0002\u00aa\u00ab\u0003\u0002\u0002\u0002\u00ab",
    "\u00ac\u0007\r\u0002\u0002\u00ac\u00ad\u0005$\u0013\u0002\u00ad!\u0003",
    "\u0002\u0002\u0002\u00ae\u00af\u0007\u001f\u0002\u0002\u00af\u00b0\u0007",
    "\f\u0002\u0002\u00b0\u00b1\u0005$\u0013\u0002\u00b1\u00b2\u0007\u000b",
    "\u0002\u0002\u00b2\u00b3\u0007\r\u0002\u0002\u00b3\u00b4\u0005$\u0013",
    "\u0002\u00b4#\u0003\u0002\u0002\u0002\u00b5\u00ba\u0005&\u0014\u0002",
    "\u00b6\u00b7\u0007\u001b\u0002\u0002\u00b7\u00b9\u0005&\u0014\u0002",
    "\u00b8\u00b6\u0003\u0002\u0002\u0002\u00b9\u00bc\u0003\u0002\u0002\u0002",
    "\u00ba\u00b8\u0003\u0002\u0002\u0002\u00ba\u00bb\u0003\u0002\u0002\u0002",
    "\u00bb%\u0003\u0002\u0002\u0002\u00bc\u00ba\u0003\u0002\u0002\u0002",
    "\u00bd\u00c2\u0005(\u0015\u0002\u00be\u00bf\u0007\u001c\u0002\u0002",
    "\u00bf\u00c1\u0005(\u0015\u0002\u00c0\u00be\u0003\u0002\u0002\u0002",
    "\u00c1\u00c4\u0003\u0002\u0002\u0002\u00c2\u00c0\u0003\u0002\u0002\u0002",
    "\u00c2\u00c3\u0003\u0002\u0002\u0002\u00c3\'\u0003\u0002\u0002\u0002",
    "\u00c4\u00c2\u0003\u0002\u0002\u0002\u00c5\u00ca\u0005*\u0016\u0002",
    "\u00c6\u00c7\u0007\u001d\u0002\u0002\u00c7\u00c9\u0005*\u0016\u0002",
    "\u00c8\u00c6\u0003\u0002\u0002\u0002\u00c9\u00cc\u0003\u0002\u0002\u0002",
    "\u00ca\u00c8\u0003\u0002\u0002\u0002\u00ca\u00cb\u0003\u0002\u0002\u0002",
    "\u00cb)\u0003\u0002\u0002\u0002\u00cc\u00ca\u0003\u0002\u0002\u0002",
    "\u00cd\u00db\u0007\u001e\u0002\u0002\u00ce\u00d1\u0007\u001f\u0002\u0002",
    "\u00cf\u00d0\u0007\u000f\u0002\u0002\u00d0\u00d2\u0007\u001f\u0002\u0002",
    "\u00d1\u00cf\u0003\u0002\u0002\u0002\u00d1\u00d2\u0003\u0002\u0002\u0002",
    "\u00d2\u00db\u0003\u0002\u0002\u0002\u00d3\u00db\u00054\u001b\u0002",
    "\u00d4\u00db\u00052\u001a\u0002\u00d5\u00db\u0007\u0018\u0002\u0002",
    "\u00d6\u00db\u0005,\u0017\u0002\u00d7\u00db\u00050\u0019\u0002\u00d8",
    "\u00db\u0005.\u0018\u0002\u00d9\u00db\u0005\b\u0005\u0002\u00da\u00cd",
    "\u0003\u0002\u0002\u0002\u00da\u00ce\u0003\u0002\u0002\u0002\u00da\u00d3",
    "\u0003\u0002\u0002\u0002\u00da\u00d4\u0003\u0002\u0002\u0002\u00da\u00d5",
    "\u0003\u0002\u0002\u0002\u00da\u00d6\u0003\u0002\u0002\u0002\u00da\u00d7",
    "\u0003\u0002\u0002\u0002\u00da\u00d8\u0003\u0002\u0002\u0002\u00da\u00d9",
    "\u0003\u0002\u0002\u0002\u00db+\u0003\u0002\u0002\u0002\u00dc\u00dd",
    "\u0007\n\u0002\u0002\u00dd\u00de\u0005$\u0013\u0002\u00de\u00df\u0007",
    "\t\u0002\u0002\u00df-\u0003\u0002\u0002\u0002\u00e0\u00e1\u0007\u0016",
    "\u0002\u0002\u00e1\u00e2\u0007\u001f\u0002\u0002\u00e2\u00e3\u0007\n",
    "\u0002\u0002\u00e3\u00e4\u0007\t\u0002\u0002\u00e4/\u0003\u0002\u0002",
    "\u0002\u00e5\u00e6\u0007\u0016\u0002\u0002\u00e6\u00e7\u0007\u0019\u0002",
    "\u0002\u00e7\u00e8\u0007\f\u0002\u0002\u00e8\u00e9\u0005$\u0013\u0002",
    "\u00e9\u00ea\u0007\u000b\u0002\u0002\u00ea1\u0003\u0002\u0002\u0002",
    "\u00eb\u00ec\u0007\u001f\u0002\u0002\u00ec\u00ed\u0007\f\u0002\u0002",
    "\u00ed\u00ee\u0005$\u0013\u0002\u00ee\u00ef\u0007\u000b\u0002\u0002",
    "\u00ef3\u0003\u0002\u0002\u0002\u00f0\u00f1\u0007\u001f\u0002\u0002",
    "\u00f1\u00f3\u0007\n\u0002\u0002\u00f2\u00f4\u00056\u001c\u0002\u00f3",
    "\u00f2\u0003\u0002\u0002\u0002\u00f3\u00f4\u0003\u0002\u0002\u0002\u00f4",
    "\u00f5\u0003\u0002\u0002\u0002\u00f5\u00f6\u0007\t\u0002\u0002\u00f6",
    "5\u0003\u0002\u0002\u0002\u00f7\u00fc\u0005$\u0013\u0002\u00f8\u00f9",
    "\u0007\u000e\u0002\u0002\u00f9\u00fb\u0005$\u0013\u0002\u00fa\u00f8",
    "\u0003\u0002\u0002\u0002\u00fb\u00fe\u0003\u0002\u0002\u0002\u00fc\u00fa",
    "\u0003\u0002\u0002\u0002\u00fc\u00fd\u0003\u0002\u0002\u0002\u00fd7",
    "\u0003\u0002\u0002\u0002\u00fe\u00fc\u0003\u0002\u0002\u0002\u0013;",
    "TZfp\u0083\u0093\u009c\u00a2\u00a9\u00ba\u00c2\u00ca\u00d1\u00da\u00f3",
    "\u00fc"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, null, null, null, "';'", "'}'", "'{'", "')'", 
                     "'('", "']'", "'['", "'='", "','", "'.'", "'while'", 
                     "'if'", "'class'", "'return'", "'else'", "'print'", 
                     "'new'" ];

var symbolicNames = [ null, "COMMENT", "LINE_COMMENT", "Space", "Semicolon", 
                      "RightCurlyBracket", "LeftCurlyBracket", "RightParenthesis", 
                      "LeftParenthesis", "RightBracket", "LeftBracket", 
                      "Equals", "Comma", "Dot", "While", "If", "Class", 
                      "Return", "Else", "Print", "New", "UnaryOperations", 
                      "ArrayLength", "SimpleType", "ArrayType", "RelationalOperation", 
                      "AdditiveOperation", "MultiplicativeOperation", "Literal", 
                      "Identifier" ];

var ruleNames =  [ "program", "statement", "block", "unary", "functionDeclaration", 
                   "formalParams", "formalParam", "whileStatement", "ifStatement", 
                   "returnStatement", "printStatement", "classDeclaration", 
                   "classVariableDeclaration", "variableDeclaration", "type", 
                   "assignment", "arrayAssignment", "expression", "simpleExpression", 
                   "term", "factor", "subExpression", "allocationExpression", 
                   "arrayAllocationExpression", "arrayLookup", "functionCall", 
                   "actualParams" ];

function MyParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

MyParser.prototype = Object.create(antlr4.Parser.prototype);
MyParser.prototype.constructor = MyParser;

Object.defineProperty(MyParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

MyParser.EOF = antlr4.Token.EOF;
MyParser.COMMENT = 1;
MyParser.LINE_COMMENT = 2;
MyParser.Space = 3;
MyParser.Semicolon = 4;
MyParser.RightCurlyBracket = 5;
MyParser.LeftCurlyBracket = 6;
MyParser.RightParenthesis = 7;
MyParser.LeftParenthesis = 8;
MyParser.RightBracket = 9;
MyParser.LeftBracket = 10;
MyParser.Equals = 11;
MyParser.Comma = 12;
MyParser.Dot = 13;
MyParser.While = 14;
MyParser.If = 15;
MyParser.Class = 16;
MyParser.Return = 17;
MyParser.Else = 18;
MyParser.Print = 19;
MyParser.New = 20;
MyParser.UnaryOperations = 21;
MyParser.ArrayLength = 22;
MyParser.SimpleType = 23;
MyParser.ArrayType = 24;
MyParser.RelationalOperation = 25;
MyParser.AdditiveOperation = 26;
MyParser.MultiplicativeOperation = 27;
MyParser.Literal = 28;
MyParser.Identifier = 29;

MyParser.RULE_program = 0;
MyParser.RULE_statement = 1;
MyParser.RULE_block = 2;
MyParser.RULE_unary = 3;
MyParser.RULE_functionDeclaration = 4;
MyParser.RULE_formalParams = 5;
MyParser.RULE_formalParam = 6;
MyParser.RULE_whileStatement = 7;
MyParser.RULE_ifStatement = 8;
MyParser.RULE_returnStatement = 9;
MyParser.RULE_printStatement = 10;
MyParser.RULE_classDeclaration = 11;
MyParser.RULE_classVariableDeclaration = 12;
MyParser.RULE_variableDeclaration = 13;
MyParser.RULE_type = 14;
MyParser.RULE_assignment = 15;
MyParser.RULE_arrayAssignment = 16;
MyParser.RULE_expression = 17;
MyParser.RULE_simpleExpression = 18;
MyParser.RULE_term = 19;
MyParser.RULE_factor = 20;
MyParser.RULE_subExpression = 21;
MyParser.RULE_allocationExpression = 22;
MyParser.RULE_arrayAllocationExpression = 23;
MyParser.RULE_arrayLookup = 24;
MyParser.RULE_functionCall = 25;
MyParser.RULE_actualParams = 26;


function ProgramContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MyParser.RULE_program;
    return this;
}

ProgramContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ProgramContext.prototype.constructor = ProgramContext;

ProgramContext.prototype.statement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StatementContext);
    } else {
        return this.getTypedRuleContext(StatementContext,i);
    }
};

ProgramContext.prototype.enterRule = function(listener) {
    if(listener instanceof MyParserListener ) {
        listener.enterProgram(this);
	}
};

ProgramContext.prototype.exitRule = function(listener) {
    if(listener instanceof MyParserListener ) {
        listener.exitProgram(this);
	}
};

ProgramContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MyParserVisitor ) {
        return visitor.visitProgram(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MyParser.ProgramContext = ProgramContext;

MyParser.prototype.program = function() {

    var localctx = new ProgramContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, MyParser.RULE_program);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 57;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << MyParser.LeftCurlyBracket) | (1 << MyParser.While) | (1 << MyParser.If) | (1 << MyParser.Class) | (1 << MyParser.Return) | (1 << MyParser.Print) | (1 << MyParser.SimpleType) | (1 << MyParser.ArrayType) | (1 << MyParser.Identifier))) !== 0)) {
            this.state = 54;
            this.statement();
            this.state = 59;
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


function StatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MyParser.RULE_statement;
    return this;
}

StatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StatementContext.prototype.constructor = StatementContext;

StatementContext.prototype.variableDeclaration = function() {
    return this.getTypedRuleContext(VariableDeclarationContext,0);
};

StatementContext.prototype.Semicolon = function() {
    return this.getToken(MyParser.Semicolon, 0);
};

StatementContext.prototype.classDeclaration = function() {
    return this.getTypedRuleContext(ClassDeclarationContext,0);
};

StatementContext.prototype.assignment = function() {
    return this.getTypedRuleContext(AssignmentContext,0);
};

StatementContext.prototype.arrayAssignment = function() {
    return this.getTypedRuleContext(ArrayAssignmentContext,0);
};

StatementContext.prototype.printStatement = function() {
    return this.getTypedRuleContext(PrintStatementContext,0);
};

StatementContext.prototype.ifStatement = function() {
    return this.getTypedRuleContext(IfStatementContext,0);
};

StatementContext.prototype.whileStatement = function() {
    return this.getTypedRuleContext(WhileStatementContext,0);
};

StatementContext.prototype.returnStatement = function() {
    return this.getTypedRuleContext(ReturnStatementContext,0);
};

StatementContext.prototype.functionDeclaration = function() {
    return this.getTypedRuleContext(FunctionDeclarationContext,0);
};

StatementContext.prototype.block = function() {
    return this.getTypedRuleContext(BlockContext,0);
};

StatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof MyParserListener ) {
        listener.enterStatement(this);
	}
};

StatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof MyParserListener ) {
        listener.exitStatement(this);
	}
};

StatementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MyParserVisitor ) {
        return visitor.visitStatement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MyParser.StatementContext = StatementContext;

MyParser.prototype.statement = function() {

    var localctx = new StatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, MyParser.RULE_statement);
    try {
        this.state = 82;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 60;
            this.variableDeclaration();
            this.state = 61;
            this.match(MyParser.Semicolon);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 63;
            this.classDeclaration();
            this.state = 64;
            this.match(MyParser.Semicolon);
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 66;
            this.assignment();
            this.state = 67;
            this.match(MyParser.Semicolon);
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 69;
            this.arrayAssignment();
            this.state = 70;
            this.match(MyParser.Semicolon);
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 72;
            this.printStatement();
            this.state = 73;
            this.match(MyParser.Semicolon);
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 75;
            this.ifStatement();
            break;

        case 7:
            this.enterOuterAlt(localctx, 7);
            this.state = 76;
            this.whileStatement();
            break;

        case 8:
            this.enterOuterAlt(localctx, 8);
            this.state = 77;
            this.returnStatement();
            this.state = 78;
            this.match(MyParser.Semicolon);
            break;

        case 9:
            this.enterOuterAlt(localctx, 9);
            this.state = 80;
            this.functionDeclaration();
            break;

        case 10:
            this.enterOuterAlt(localctx, 10);
            this.state = 81;
            this.block();
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


function BlockContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MyParser.RULE_block;
    return this;
}

BlockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BlockContext.prototype.constructor = BlockContext;

BlockContext.prototype.LeftCurlyBracket = function() {
    return this.getToken(MyParser.LeftCurlyBracket, 0);
};

BlockContext.prototype.RightCurlyBracket = function() {
    return this.getToken(MyParser.RightCurlyBracket, 0);
};

BlockContext.prototype.statement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StatementContext);
    } else {
        return this.getTypedRuleContext(StatementContext,i);
    }
};

BlockContext.prototype.enterRule = function(listener) {
    if(listener instanceof MyParserListener ) {
        listener.enterBlock(this);
	}
};

BlockContext.prototype.exitRule = function(listener) {
    if(listener instanceof MyParserListener ) {
        listener.exitBlock(this);
	}
};

BlockContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MyParserVisitor ) {
        return visitor.visitBlock(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MyParser.BlockContext = BlockContext;

MyParser.prototype.block = function() {

    var localctx = new BlockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, MyParser.RULE_block);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 84;
        this.match(MyParser.LeftCurlyBracket);
        this.state = 88;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << MyParser.LeftCurlyBracket) | (1 << MyParser.While) | (1 << MyParser.If) | (1 << MyParser.Class) | (1 << MyParser.Return) | (1 << MyParser.Print) | (1 << MyParser.SimpleType) | (1 << MyParser.ArrayType) | (1 << MyParser.Identifier))) !== 0)) {
            this.state = 85;
            this.statement();
            this.state = 90;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 91;
        this.match(MyParser.RightCurlyBracket);
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


function UnaryContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MyParser.RULE_unary;
    return this;
}

UnaryContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
UnaryContext.prototype.constructor = UnaryContext;

UnaryContext.prototype.UnaryOperations = function() {
    return this.getToken(MyParser.UnaryOperations, 0);
};

UnaryContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

UnaryContext.prototype.enterRule = function(listener) {
    if(listener instanceof MyParserListener ) {
        listener.enterUnary(this);
	}
};

UnaryContext.prototype.exitRule = function(listener) {
    if(listener instanceof MyParserListener ) {
        listener.exitUnary(this);
	}
};

UnaryContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MyParserVisitor ) {
        return visitor.visitUnary(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MyParser.UnaryContext = UnaryContext;

MyParser.prototype.unary = function() {

    var localctx = new UnaryContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, MyParser.RULE_unary);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 93;
        this.match(MyParser.UnaryOperations);
        this.state = 94;
        this.expression();
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


function FunctionDeclarationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MyParser.RULE_functionDeclaration;
    return this;
}

FunctionDeclarationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FunctionDeclarationContext.prototype.constructor = FunctionDeclarationContext;

FunctionDeclarationContext.prototype.type = function() {
    return this.getTypedRuleContext(TypeContext,0);
};

FunctionDeclarationContext.prototype.Identifier = function() {
    return this.getToken(MyParser.Identifier, 0);
};

FunctionDeclarationContext.prototype.LeftParenthesis = function() {
    return this.getToken(MyParser.LeftParenthesis, 0);
};

FunctionDeclarationContext.prototype.RightParenthesis = function() {
    return this.getToken(MyParser.RightParenthesis, 0);
};

FunctionDeclarationContext.prototype.block = function() {
    return this.getTypedRuleContext(BlockContext,0);
};

FunctionDeclarationContext.prototype.formalParams = function() {
    return this.getTypedRuleContext(FormalParamsContext,0);
};

FunctionDeclarationContext.prototype.enterRule = function(listener) {
    if(listener instanceof MyParserListener ) {
        listener.enterFunctionDeclaration(this);
	}
};

FunctionDeclarationContext.prototype.exitRule = function(listener) {
    if(listener instanceof MyParserListener ) {
        listener.exitFunctionDeclaration(this);
	}
};

FunctionDeclarationContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MyParserVisitor ) {
        return visitor.visitFunctionDeclaration(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MyParser.FunctionDeclarationContext = FunctionDeclarationContext;

MyParser.prototype.functionDeclaration = function() {

    var localctx = new FunctionDeclarationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, MyParser.RULE_functionDeclaration);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 96;
        this.type();
        this.state = 97;
        this.match(MyParser.Identifier);
        this.state = 98;
        this.match(MyParser.LeftParenthesis);
        this.state = 100;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << MyParser.SimpleType) | (1 << MyParser.ArrayType) | (1 << MyParser.Identifier))) !== 0)) {
            this.state = 99;
            this.formalParams();
        }

        this.state = 102;
        this.match(MyParser.RightParenthesis);
        this.state = 103;
        this.block();
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


function FormalParamsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MyParser.RULE_formalParams;
    return this;
}

FormalParamsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FormalParamsContext.prototype.constructor = FormalParamsContext;

FormalParamsContext.prototype.formalParam = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(FormalParamContext);
    } else {
        return this.getTypedRuleContext(FormalParamContext,i);
    }
};

FormalParamsContext.prototype.Comma = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(MyParser.Comma);
    } else {
        return this.getToken(MyParser.Comma, i);
    }
};


FormalParamsContext.prototype.enterRule = function(listener) {
    if(listener instanceof MyParserListener ) {
        listener.enterFormalParams(this);
	}
};

FormalParamsContext.prototype.exitRule = function(listener) {
    if(listener instanceof MyParserListener ) {
        listener.exitFormalParams(this);
	}
};

FormalParamsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MyParserVisitor ) {
        return visitor.visitFormalParams(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MyParser.FormalParamsContext = FormalParamsContext;

MyParser.prototype.formalParams = function() {

    var localctx = new FormalParamsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, MyParser.RULE_formalParams);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 105;
        this.formalParam();
        this.state = 110;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===MyParser.Comma) {
            this.state = 106;
            this.match(MyParser.Comma);
            this.state = 107;
            this.formalParam();
            this.state = 112;
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


function FormalParamContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MyParser.RULE_formalParam;
    return this;
}

FormalParamContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FormalParamContext.prototype.constructor = FormalParamContext;

FormalParamContext.prototype.type = function() {
    return this.getTypedRuleContext(TypeContext,0);
};

FormalParamContext.prototype.Identifier = function() {
    return this.getToken(MyParser.Identifier, 0);
};

FormalParamContext.prototype.enterRule = function(listener) {
    if(listener instanceof MyParserListener ) {
        listener.enterFormalParam(this);
	}
};

FormalParamContext.prototype.exitRule = function(listener) {
    if(listener instanceof MyParserListener ) {
        listener.exitFormalParam(this);
	}
};

FormalParamContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MyParserVisitor ) {
        return visitor.visitFormalParam(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MyParser.FormalParamContext = FormalParamContext;

MyParser.prototype.formalParam = function() {

    var localctx = new FormalParamContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, MyParser.RULE_formalParam);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 113;
        this.type();
        this.state = 114;
        this.match(MyParser.Identifier);
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


function WhileStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MyParser.RULE_whileStatement;
    return this;
}

WhileStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
WhileStatementContext.prototype.constructor = WhileStatementContext;

WhileStatementContext.prototype.While = function() {
    return this.getToken(MyParser.While, 0);
};

WhileStatementContext.prototype.LeftParenthesis = function() {
    return this.getToken(MyParser.LeftParenthesis, 0);
};

WhileStatementContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

WhileStatementContext.prototype.RightParenthesis = function() {
    return this.getToken(MyParser.RightParenthesis, 0);
};

WhileStatementContext.prototype.block = function() {
    return this.getTypedRuleContext(BlockContext,0);
};

WhileStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof MyParserListener ) {
        listener.enterWhileStatement(this);
	}
};

WhileStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof MyParserListener ) {
        listener.exitWhileStatement(this);
	}
};

WhileStatementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MyParserVisitor ) {
        return visitor.visitWhileStatement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MyParser.WhileStatementContext = WhileStatementContext;

MyParser.prototype.whileStatement = function() {

    var localctx = new WhileStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, MyParser.RULE_whileStatement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 116;
        this.match(MyParser.While);
        this.state = 117;
        this.match(MyParser.LeftParenthesis);
        this.state = 118;
        this.expression();
        this.state = 119;
        this.match(MyParser.RightParenthesis);
        this.state = 120;
        this.block();
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


function IfStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MyParser.RULE_ifStatement;
    return this;
}

IfStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IfStatementContext.prototype.constructor = IfStatementContext;

IfStatementContext.prototype.If = function() {
    return this.getToken(MyParser.If, 0);
};

IfStatementContext.prototype.LeftParenthesis = function() {
    return this.getToken(MyParser.LeftParenthesis, 0);
};

IfStatementContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

IfStatementContext.prototype.RightParenthesis = function() {
    return this.getToken(MyParser.RightParenthesis, 0);
};

IfStatementContext.prototype.block = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(BlockContext);
    } else {
        return this.getTypedRuleContext(BlockContext,i);
    }
};

IfStatementContext.prototype.Else = function() {
    return this.getToken(MyParser.Else, 0);
};

IfStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof MyParserListener ) {
        listener.enterIfStatement(this);
	}
};

IfStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof MyParserListener ) {
        listener.exitIfStatement(this);
	}
};

IfStatementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MyParserVisitor ) {
        return visitor.visitIfStatement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MyParser.IfStatementContext = IfStatementContext;

MyParser.prototype.ifStatement = function() {

    var localctx = new IfStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, MyParser.RULE_ifStatement);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 122;
        this.match(MyParser.If);
        this.state = 123;
        this.match(MyParser.LeftParenthesis);
        this.state = 124;
        this.expression();
        this.state = 125;
        this.match(MyParser.RightParenthesis);
        this.state = 126;
        this.block();
        this.state = 129;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===MyParser.Else) {
            this.state = 127;
            this.match(MyParser.Else);
            this.state = 128;
            this.block();
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


function ReturnStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MyParser.RULE_returnStatement;
    return this;
}

ReturnStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ReturnStatementContext.prototype.constructor = ReturnStatementContext;

ReturnStatementContext.prototype.Return = function() {
    return this.getToken(MyParser.Return, 0);
};

ReturnStatementContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

ReturnStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof MyParserListener ) {
        listener.enterReturnStatement(this);
	}
};

ReturnStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof MyParserListener ) {
        listener.exitReturnStatement(this);
	}
};

ReturnStatementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MyParserVisitor ) {
        return visitor.visitReturnStatement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MyParser.ReturnStatementContext = ReturnStatementContext;

MyParser.prototype.returnStatement = function() {

    var localctx = new ReturnStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, MyParser.RULE_returnStatement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 131;
        this.match(MyParser.Return);
        this.state = 132;
        this.expression();
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


function PrintStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MyParser.RULE_printStatement;
    return this;
}

PrintStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PrintStatementContext.prototype.constructor = PrintStatementContext;

PrintStatementContext.prototype.Print = function() {
    return this.getToken(MyParser.Print, 0);
};

PrintStatementContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

PrintStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof MyParserListener ) {
        listener.enterPrintStatement(this);
	}
};

PrintStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof MyParserListener ) {
        listener.exitPrintStatement(this);
	}
};

PrintStatementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MyParserVisitor ) {
        return visitor.visitPrintStatement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MyParser.PrintStatementContext = PrintStatementContext;

MyParser.prototype.printStatement = function() {

    var localctx = new PrintStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, MyParser.RULE_printStatement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 134;
        this.match(MyParser.Print);
        this.state = 135;
        this.expression();
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


function ClassDeclarationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MyParser.RULE_classDeclaration;
    return this;
}

ClassDeclarationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ClassDeclarationContext.prototype.constructor = ClassDeclarationContext;

ClassDeclarationContext.prototype.Class = function() {
    return this.getToken(MyParser.Class, 0);
};

ClassDeclarationContext.prototype.Identifier = function() {
    return this.getToken(MyParser.Identifier, 0);
};

ClassDeclarationContext.prototype.LeftCurlyBracket = function() {
    return this.getToken(MyParser.LeftCurlyBracket, 0);
};

ClassDeclarationContext.prototype.RightCurlyBracket = function() {
    return this.getToken(MyParser.RightCurlyBracket, 0);
};

ClassDeclarationContext.prototype.classVariableDeclaration = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ClassVariableDeclarationContext);
    } else {
        return this.getTypedRuleContext(ClassVariableDeclarationContext,i);
    }
};

ClassDeclarationContext.prototype.Semicolon = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(MyParser.Semicolon);
    } else {
        return this.getToken(MyParser.Semicolon, i);
    }
};


ClassDeclarationContext.prototype.enterRule = function(listener) {
    if(listener instanceof MyParserListener ) {
        listener.enterClassDeclaration(this);
	}
};

ClassDeclarationContext.prototype.exitRule = function(listener) {
    if(listener instanceof MyParserListener ) {
        listener.exitClassDeclaration(this);
	}
};

ClassDeclarationContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MyParserVisitor ) {
        return visitor.visitClassDeclaration(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MyParser.ClassDeclarationContext = ClassDeclarationContext;

MyParser.prototype.classDeclaration = function() {

    var localctx = new ClassDeclarationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, MyParser.RULE_classDeclaration);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 137;
        this.match(MyParser.Class);
        this.state = 138;
        this.match(MyParser.Identifier);
        this.state = 139;
        this.match(MyParser.LeftCurlyBracket);
        this.state = 145;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===MyParser.SimpleType) {
            this.state = 140;
            this.classVariableDeclaration();
            this.state = 141;
            this.match(MyParser.Semicolon);
            this.state = 147;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 148;
        this.match(MyParser.RightCurlyBracket);
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


function ClassVariableDeclarationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MyParser.RULE_classVariableDeclaration;
    return this;
}

ClassVariableDeclarationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ClassVariableDeclarationContext.prototype.constructor = ClassVariableDeclarationContext;

ClassVariableDeclarationContext.prototype.SimpleType = function() {
    return this.getToken(MyParser.SimpleType, 0);
};

ClassVariableDeclarationContext.prototype.Identifier = function() {
    return this.getToken(MyParser.Identifier, 0);
};

ClassVariableDeclarationContext.prototype.Equals = function() {
    return this.getToken(MyParser.Equals, 0);
};

ClassVariableDeclarationContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

ClassVariableDeclarationContext.prototype.enterRule = function(listener) {
    if(listener instanceof MyParserListener ) {
        listener.enterClassVariableDeclaration(this);
	}
};

ClassVariableDeclarationContext.prototype.exitRule = function(listener) {
    if(listener instanceof MyParserListener ) {
        listener.exitClassVariableDeclaration(this);
	}
};

ClassVariableDeclarationContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MyParserVisitor ) {
        return visitor.visitClassVariableDeclaration(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MyParser.ClassVariableDeclarationContext = ClassVariableDeclarationContext;

MyParser.prototype.classVariableDeclaration = function() {

    var localctx = new ClassVariableDeclarationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, MyParser.RULE_classVariableDeclaration);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 150;
        this.match(MyParser.SimpleType);
        this.state = 151;
        this.match(MyParser.Identifier);
        this.state = 154;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===MyParser.Equals) {
            this.state = 152;
            this.match(MyParser.Equals);
            this.state = 153;
            this.expression();
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


function VariableDeclarationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MyParser.RULE_variableDeclaration;
    return this;
}

VariableDeclarationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VariableDeclarationContext.prototype.constructor = VariableDeclarationContext;

VariableDeclarationContext.prototype.type = function() {
    return this.getTypedRuleContext(TypeContext,0);
};

VariableDeclarationContext.prototype.Identifier = function() {
    return this.getToken(MyParser.Identifier, 0);
};

VariableDeclarationContext.prototype.Equals = function() {
    return this.getToken(MyParser.Equals, 0);
};

VariableDeclarationContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

VariableDeclarationContext.prototype.enterRule = function(listener) {
    if(listener instanceof MyParserListener ) {
        listener.enterVariableDeclaration(this);
	}
};

VariableDeclarationContext.prototype.exitRule = function(listener) {
    if(listener instanceof MyParserListener ) {
        listener.exitVariableDeclaration(this);
	}
};

VariableDeclarationContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MyParserVisitor ) {
        return visitor.visitVariableDeclaration(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MyParser.VariableDeclarationContext = VariableDeclarationContext;

MyParser.prototype.variableDeclaration = function() {

    var localctx = new VariableDeclarationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, MyParser.RULE_variableDeclaration);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 156;
        this.type();
        this.state = 157;
        this.match(MyParser.Identifier);
        this.state = 160;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===MyParser.Equals) {
            this.state = 158;
            this.match(MyParser.Equals);
            this.state = 159;
            this.expression();
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


function TypeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MyParser.RULE_type;
    return this;
}

TypeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TypeContext.prototype.constructor = TypeContext;

TypeContext.prototype.SimpleType = function() {
    return this.getToken(MyParser.SimpleType, 0);
};

TypeContext.prototype.ArrayType = function() {
    return this.getToken(MyParser.ArrayType, 0);
};

TypeContext.prototype.Identifier = function() {
    return this.getToken(MyParser.Identifier, 0);
};

TypeContext.prototype.enterRule = function(listener) {
    if(listener instanceof MyParserListener ) {
        listener.enterType(this);
	}
};

TypeContext.prototype.exitRule = function(listener) {
    if(listener instanceof MyParserListener ) {
        listener.exitType(this);
	}
};

TypeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MyParserVisitor ) {
        return visitor.visitType(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MyParser.TypeContext = TypeContext;

MyParser.prototype.type = function() {

    var localctx = new TypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, MyParser.RULE_type);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 162;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << MyParser.SimpleType) | (1 << MyParser.ArrayType) | (1 << MyParser.Identifier))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
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


function AssignmentContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MyParser.RULE_assignment;
    return this;
}

AssignmentContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AssignmentContext.prototype.constructor = AssignmentContext;

AssignmentContext.prototype.Identifier = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(MyParser.Identifier);
    } else {
        return this.getToken(MyParser.Identifier, i);
    }
};


AssignmentContext.prototype.Equals = function() {
    return this.getToken(MyParser.Equals, 0);
};

AssignmentContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

AssignmentContext.prototype.Dot = function() {
    return this.getToken(MyParser.Dot, 0);
};

AssignmentContext.prototype.enterRule = function(listener) {
    if(listener instanceof MyParserListener ) {
        listener.enterAssignment(this);
	}
};

AssignmentContext.prototype.exitRule = function(listener) {
    if(listener instanceof MyParserListener ) {
        listener.exitAssignment(this);
	}
};

AssignmentContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MyParserVisitor ) {
        return visitor.visitAssignment(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MyParser.AssignmentContext = AssignmentContext;

MyParser.prototype.assignment = function() {

    var localctx = new AssignmentContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, MyParser.RULE_assignment);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 164;
        this.match(MyParser.Identifier);
        this.state = 167;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===MyParser.Dot) {
            this.state = 165;
            this.match(MyParser.Dot);
            this.state = 166;
            this.match(MyParser.Identifier);
        }

        this.state = 169;
        this.match(MyParser.Equals);
        this.state = 170;
        this.expression();
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


function ArrayAssignmentContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MyParser.RULE_arrayAssignment;
    return this;
}

ArrayAssignmentContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ArrayAssignmentContext.prototype.constructor = ArrayAssignmentContext;

ArrayAssignmentContext.prototype.Identifier = function() {
    return this.getToken(MyParser.Identifier, 0);
};

ArrayAssignmentContext.prototype.LeftBracket = function() {
    return this.getToken(MyParser.LeftBracket, 0);
};

ArrayAssignmentContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

ArrayAssignmentContext.prototype.RightBracket = function() {
    return this.getToken(MyParser.RightBracket, 0);
};

ArrayAssignmentContext.prototype.Equals = function() {
    return this.getToken(MyParser.Equals, 0);
};

ArrayAssignmentContext.prototype.enterRule = function(listener) {
    if(listener instanceof MyParserListener ) {
        listener.enterArrayAssignment(this);
	}
};

ArrayAssignmentContext.prototype.exitRule = function(listener) {
    if(listener instanceof MyParserListener ) {
        listener.exitArrayAssignment(this);
	}
};

ArrayAssignmentContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MyParserVisitor ) {
        return visitor.visitArrayAssignment(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MyParser.ArrayAssignmentContext = ArrayAssignmentContext;

MyParser.prototype.arrayAssignment = function() {

    var localctx = new ArrayAssignmentContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, MyParser.RULE_arrayAssignment);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 172;
        this.match(MyParser.Identifier);
        this.state = 173;
        this.match(MyParser.LeftBracket);
        this.state = 174;
        this.expression();
        this.state = 175;
        this.match(MyParser.RightBracket);
        this.state = 176;
        this.match(MyParser.Equals);
        this.state = 177;
        this.expression();
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
    this.ruleIndex = MyParser.RULE_expression;
    return this;
}

ExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExpressionContext.prototype.constructor = ExpressionContext;

ExpressionContext.prototype.simpleExpression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SimpleExpressionContext);
    } else {
        return this.getTypedRuleContext(SimpleExpressionContext,i);
    }
};

ExpressionContext.prototype.RelationalOperation = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(MyParser.RelationalOperation);
    } else {
        return this.getToken(MyParser.RelationalOperation, i);
    }
};


ExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof MyParserListener ) {
        listener.enterExpression(this);
	}
};

ExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof MyParserListener ) {
        listener.exitExpression(this);
	}
};

ExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MyParserVisitor ) {
        return visitor.visitExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MyParser.ExpressionContext = ExpressionContext;

MyParser.prototype.expression = function() {

    var localctx = new ExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, MyParser.RULE_expression);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 179;
        this.simpleExpression();
        this.state = 184;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,10,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 180;
                this.match(MyParser.RelationalOperation);
                this.state = 181;
                this.simpleExpression(); 
            }
            this.state = 186;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,10,this._ctx);
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


function SimpleExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MyParser.RULE_simpleExpression;
    return this;
}

SimpleExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SimpleExpressionContext.prototype.constructor = SimpleExpressionContext;

SimpleExpressionContext.prototype.term = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(TermContext);
    } else {
        return this.getTypedRuleContext(TermContext,i);
    }
};

SimpleExpressionContext.prototype.AdditiveOperation = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(MyParser.AdditiveOperation);
    } else {
        return this.getToken(MyParser.AdditiveOperation, i);
    }
};


SimpleExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof MyParserListener ) {
        listener.enterSimpleExpression(this);
	}
};

SimpleExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof MyParserListener ) {
        listener.exitSimpleExpression(this);
	}
};

SimpleExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MyParserVisitor ) {
        return visitor.visitSimpleExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MyParser.SimpleExpressionContext = SimpleExpressionContext;

MyParser.prototype.simpleExpression = function() {

    var localctx = new SimpleExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, MyParser.RULE_simpleExpression);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 187;
        this.term();
        this.state = 192;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,11,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 188;
                this.match(MyParser.AdditiveOperation);
                this.state = 189;
                this.term(); 
            }
            this.state = 194;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,11,this._ctx);
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


function TermContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MyParser.RULE_term;
    return this;
}

TermContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TermContext.prototype.constructor = TermContext;

TermContext.prototype.factor = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(FactorContext);
    } else {
        return this.getTypedRuleContext(FactorContext,i);
    }
};

TermContext.prototype.MultiplicativeOperation = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(MyParser.MultiplicativeOperation);
    } else {
        return this.getToken(MyParser.MultiplicativeOperation, i);
    }
};


TermContext.prototype.enterRule = function(listener) {
    if(listener instanceof MyParserListener ) {
        listener.enterTerm(this);
	}
};

TermContext.prototype.exitRule = function(listener) {
    if(listener instanceof MyParserListener ) {
        listener.exitTerm(this);
	}
};

TermContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MyParserVisitor ) {
        return visitor.visitTerm(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MyParser.TermContext = TermContext;

MyParser.prototype.term = function() {

    var localctx = new TermContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, MyParser.RULE_term);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 195;
        this.factor();
        this.state = 200;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,12,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 196;
                this.match(MyParser.MultiplicativeOperation);
                this.state = 197;
                this.factor(); 
            }
            this.state = 202;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,12,this._ctx);
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


function FactorContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MyParser.RULE_factor;
    return this;
}

FactorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FactorContext.prototype.constructor = FactorContext;

FactorContext.prototype.Literal = function() {
    return this.getToken(MyParser.Literal, 0);
};

FactorContext.prototype.Identifier = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(MyParser.Identifier);
    } else {
        return this.getToken(MyParser.Identifier, i);
    }
};


FactorContext.prototype.Dot = function() {
    return this.getToken(MyParser.Dot, 0);
};

FactorContext.prototype.functionCall = function() {
    return this.getTypedRuleContext(FunctionCallContext,0);
};

FactorContext.prototype.arrayLookup = function() {
    return this.getTypedRuleContext(ArrayLookupContext,0);
};

FactorContext.prototype.ArrayLength = function() {
    return this.getToken(MyParser.ArrayLength, 0);
};

FactorContext.prototype.subExpression = function() {
    return this.getTypedRuleContext(SubExpressionContext,0);
};

FactorContext.prototype.arrayAllocationExpression = function() {
    return this.getTypedRuleContext(ArrayAllocationExpressionContext,0);
};

FactorContext.prototype.allocationExpression = function() {
    return this.getTypedRuleContext(AllocationExpressionContext,0);
};

FactorContext.prototype.unary = function() {
    return this.getTypedRuleContext(UnaryContext,0);
};

FactorContext.prototype.enterRule = function(listener) {
    if(listener instanceof MyParserListener ) {
        listener.enterFactor(this);
	}
};

FactorContext.prototype.exitRule = function(listener) {
    if(listener instanceof MyParserListener ) {
        listener.exitFactor(this);
	}
};

FactorContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MyParserVisitor ) {
        return visitor.visitFactor(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MyParser.FactorContext = FactorContext;

MyParser.prototype.factor = function() {

    var localctx = new FactorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, MyParser.RULE_factor);
    var _la = 0; // Token type
    try {
        this.state = 216;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,14,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 203;
            this.match(MyParser.Literal);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 204;
            this.match(MyParser.Identifier);
            this.state = 207;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===MyParser.Dot) {
                this.state = 205;
                this.match(MyParser.Dot);
                this.state = 206;
                this.match(MyParser.Identifier);
            }

            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 209;
            this.functionCall();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 210;
            this.arrayLookup();
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 211;
            this.match(MyParser.ArrayLength);
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 212;
            this.subExpression();
            break;

        case 7:
            this.enterOuterAlt(localctx, 7);
            this.state = 213;
            this.arrayAllocationExpression();
            break;

        case 8:
            this.enterOuterAlt(localctx, 8);
            this.state = 214;
            this.allocationExpression();
            break;

        case 9:
            this.enterOuterAlt(localctx, 9);
            this.state = 215;
            this.unary();
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


function SubExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MyParser.RULE_subExpression;
    return this;
}

SubExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SubExpressionContext.prototype.constructor = SubExpressionContext;

SubExpressionContext.prototype.LeftParenthesis = function() {
    return this.getToken(MyParser.LeftParenthesis, 0);
};

SubExpressionContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

SubExpressionContext.prototype.RightParenthesis = function() {
    return this.getToken(MyParser.RightParenthesis, 0);
};

SubExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof MyParserListener ) {
        listener.enterSubExpression(this);
	}
};

SubExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof MyParserListener ) {
        listener.exitSubExpression(this);
	}
};

SubExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MyParserVisitor ) {
        return visitor.visitSubExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MyParser.SubExpressionContext = SubExpressionContext;

MyParser.prototype.subExpression = function() {

    var localctx = new SubExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, MyParser.RULE_subExpression);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 218;
        this.match(MyParser.LeftParenthesis);
        this.state = 219;
        this.expression();
        this.state = 220;
        this.match(MyParser.RightParenthesis);
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


function AllocationExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MyParser.RULE_allocationExpression;
    return this;
}

AllocationExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AllocationExpressionContext.prototype.constructor = AllocationExpressionContext;

AllocationExpressionContext.prototype.New = function() {
    return this.getToken(MyParser.New, 0);
};

AllocationExpressionContext.prototype.Identifier = function() {
    return this.getToken(MyParser.Identifier, 0);
};

AllocationExpressionContext.prototype.LeftParenthesis = function() {
    return this.getToken(MyParser.LeftParenthesis, 0);
};

AllocationExpressionContext.prototype.RightParenthesis = function() {
    return this.getToken(MyParser.RightParenthesis, 0);
};

AllocationExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof MyParserListener ) {
        listener.enterAllocationExpression(this);
	}
};

AllocationExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof MyParserListener ) {
        listener.exitAllocationExpression(this);
	}
};

AllocationExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MyParserVisitor ) {
        return visitor.visitAllocationExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MyParser.AllocationExpressionContext = AllocationExpressionContext;

MyParser.prototype.allocationExpression = function() {

    var localctx = new AllocationExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 44, MyParser.RULE_allocationExpression);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 222;
        this.match(MyParser.New);
        this.state = 223;
        this.match(MyParser.Identifier);
        this.state = 224;
        this.match(MyParser.LeftParenthesis);
        this.state = 225;
        this.match(MyParser.RightParenthesis);
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


function ArrayAllocationExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MyParser.RULE_arrayAllocationExpression;
    return this;
}

ArrayAllocationExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ArrayAllocationExpressionContext.prototype.constructor = ArrayAllocationExpressionContext;

ArrayAllocationExpressionContext.prototype.New = function() {
    return this.getToken(MyParser.New, 0);
};

ArrayAllocationExpressionContext.prototype.SimpleType = function() {
    return this.getToken(MyParser.SimpleType, 0);
};

ArrayAllocationExpressionContext.prototype.LeftBracket = function() {
    return this.getToken(MyParser.LeftBracket, 0);
};

ArrayAllocationExpressionContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

ArrayAllocationExpressionContext.prototype.RightBracket = function() {
    return this.getToken(MyParser.RightBracket, 0);
};

ArrayAllocationExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof MyParserListener ) {
        listener.enterArrayAllocationExpression(this);
	}
};

ArrayAllocationExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof MyParserListener ) {
        listener.exitArrayAllocationExpression(this);
	}
};

ArrayAllocationExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MyParserVisitor ) {
        return visitor.visitArrayAllocationExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MyParser.ArrayAllocationExpressionContext = ArrayAllocationExpressionContext;

MyParser.prototype.arrayAllocationExpression = function() {

    var localctx = new ArrayAllocationExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 46, MyParser.RULE_arrayAllocationExpression);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 227;
        this.match(MyParser.New);
        this.state = 228;
        this.match(MyParser.SimpleType);
        this.state = 229;
        this.match(MyParser.LeftBracket);
        this.state = 230;
        this.expression();
        this.state = 231;
        this.match(MyParser.RightBracket);
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


function ArrayLookupContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MyParser.RULE_arrayLookup;
    return this;
}

ArrayLookupContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ArrayLookupContext.prototype.constructor = ArrayLookupContext;

ArrayLookupContext.prototype.Identifier = function() {
    return this.getToken(MyParser.Identifier, 0);
};

ArrayLookupContext.prototype.LeftBracket = function() {
    return this.getToken(MyParser.LeftBracket, 0);
};

ArrayLookupContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

ArrayLookupContext.prototype.RightBracket = function() {
    return this.getToken(MyParser.RightBracket, 0);
};

ArrayLookupContext.prototype.enterRule = function(listener) {
    if(listener instanceof MyParserListener ) {
        listener.enterArrayLookup(this);
	}
};

ArrayLookupContext.prototype.exitRule = function(listener) {
    if(listener instanceof MyParserListener ) {
        listener.exitArrayLookup(this);
	}
};

ArrayLookupContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MyParserVisitor ) {
        return visitor.visitArrayLookup(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MyParser.ArrayLookupContext = ArrayLookupContext;

MyParser.prototype.arrayLookup = function() {

    var localctx = new ArrayLookupContext(this, this._ctx, this.state);
    this.enterRule(localctx, 48, MyParser.RULE_arrayLookup);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 233;
        this.match(MyParser.Identifier);
        this.state = 234;
        this.match(MyParser.LeftBracket);
        this.state = 235;
        this.expression();
        this.state = 236;
        this.match(MyParser.RightBracket);
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


function FunctionCallContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MyParser.RULE_functionCall;
    return this;
}

FunctionCallContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FunctionCallContext.prototype.constructor = FunctionCallContext;

FunctionCallContext.prototype.Identifier = function() {
    return this.getToken(MyParser.Identifier, 0);
};

FunctionCallContext.prototype.LeftParenthesis = function() {
    return this.getToken(MyParser.LeftParenthesis, 0);
};

FunctionCallContext.prototype.RightParenthesis = function() {
    return this.getToken(MyParser.RightParenthesis, 0);
};

FunctionCallContext.prototype.actualParams = function() {
    return this.getTypedRuleContext(ActualParamsContext,0);
};

FunctionCallContext.prototype.enterRule = function(listener) {
    if(listener instanceof MyParserListener ) {
        listener.enterFunctionCall(this);
	}
};

FunctionCallContext.prototype.exitRule = function(listener) {
    if(listener instanceof MyParserListener ) {
        listener.exitFunctionCall(this);
	}
};

FunctionCallContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MyParserVisitor ) {
        return visitor.visitFunctionCall(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MyParser.FunctionCallContext = FunctionCallContext;

MyParser.prototype.functionCall = function() {

    var localctx = new FunctionCallContext(this, this._ctx, this.state);
    this.enterRule(localctx, 50, MyParser.RULE_functionCall);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 238;
        this.match(MyParser.Identifier);
        this.state = 239;
        this.match(MyParser.LeftParenthesis);
        this.state = 241;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << MyParser.LeftParenthesis) | (1 << MyParser.New) | (1 << MyParser.UnaryOperations) | (1 << MyParser.ArrayLength) | (1 << MyParser.Literal) | (1 << MyParser.Identifier))) !== 0)) {
            this.state = 240;
            this.actualParams();
        }

        this.state = 243;
        this.match(MyParser.RightParenthesis);
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


function ActualParamsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MyParser.RULE_actualParams;
    return this;
}

ActualParamsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ActualParamsContext.prototype.constructor = ActualParamsContext;

ActualParamsContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

ActualParamsContext.prototype.Comma = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(MyParser.Comma);
    } else {
        return this.getToken(MyParser.Comma, i);
    }
};


ActualParamsContext.prototype.enterRule = function(listener) {
    if(listener instanceof MyParserListener ) {
        listener.enterActualParams(this);
	}
};

ActualParamsContext.prototype.exitRule = function(listener) {
    if(listener instanceof MyParserListener ) {
        listener.exitActualParams(this);
	}
};

ActualParamsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MyParserVisitor ) {
        return visitor.visitActualParams(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MyParser.ActualParamsContext = ActualParamsContext;

MyParser.prototype.actualParams = function() {

    var localctx = new ActualParamsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 52, MyParser.RULE_actualParams);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 245;
        this.expression();
        this.state = 250;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===MyParser.Comma) {
            this.state = 246;
            this.match(MyParser.Comma);
            this.state = 247;
            this.expression();
            this.state = 252;
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


exports.MyParser = MyParser;
exports.ProgramContext = ProgramContext;
MyParser.ProgramContext = ProgramContext;
exports.StatementContext = StatementContext;
MyParser.StatementContext = StatementContext;
exports.BlockContext = BlockContext;
MyParser.BlockContext = BlockContext;
exports.UnaryContext = UnaryContext;
MyParser.UnaryContext = UnaryContext;
exports.FunctionDeclarationContext = FunctionDeclarationContext;
MyParser.FunctionDeclarationContext = FunctionDeclarationContext;
exports.FormalParamsContext = FormalParamsContext;
MyParser.FormalParamsContext = FormalParamsContext;
exports.FormalParamContext = FormalParamContext;
MyParser.FormalParamContext = FormalParamContext;
exports.WhileStatementContext = WhileStatementContext;
MyParser.WhileStatementContext = WhileStatementContext;
exports.IfStatementContext = IfStatementContext;
MyParser.IfStatementContext = IfStatementContext;
exports.ReturnStatementContext = ReturnStatementContext;
MyParser.ReturnStatementContext = ReturnStatementContext;
exports.PrintStatementContext = PrintStatementContext;
MyParser.PrintStatementContext = PrintStatementContext;
exports.ClassDeclarationContext = ClassDeclarationContext;
MyParser.ClassDeclarationContext = ClassDeclarationContext;
exports.ClassVariableDeclarationContext = ClassVariableDeclarationContext;
MyParser.ClassVariableDeclarationContext = ClassVariableDeclarationContext;
exports.VariableDeclarationContext = VariableDeclarationContext;
MyParser.VariableDeclarationContext = VariableDeclarationContext;
exports.TypeContext = TypeContext;
MyParser.TypeContext = TypeContext;
exports.AssignmentContext = AssignmentContext;
MyParser.AssignmentContext = AssignmentContext;
exports.ArrayAssignmentContext = ArrayAssignmentContext;
MyParser.ArrayAssignmentContext = ArrayAssignmentContext;
exports.ExpressionContext = ExpressionContext;
MyParser.ExpressionContext = ExpressionContext;
exports.SimpleExpressionContext = SimpleExpressionContext;
MyParser.SimpleExpressionContext = SimpleExpressionContext;
exports.TermContext = TermContext;
MyParser.TermContext = TermContext;
exports.FactorContext = FactorContext;
MyParser.FactorContext = FactorContext;
exports.SubExpressionContext = SubExpressionContext;
MyParser.SubExpressionContext = SubExpressionContext;
exports.AllocationExpressionContext = AllocationExpressionContext;
MyParser.AllocationExpressionContext = AllocationExpressionContext;
exports.ArrayAllocationExpressionContext = ArrayAllocationExpressionContext;
MyParser.ArrayAllocationExpressionContext = ArrayAllocationExpressionContext;
exports.ArrayLookupContext = ArrayLookupContext;
MyParser.ArrayLookupContext = ArrayLookupContext;
exports.FunctionCallContext = FunctionCallContext;
MyParser.FunctionCallContext = FunctionCallContext;
exports.ActualParamsContext = ActualParamsContext;
MyParser.ActualParamsContext = ActualParamsContext;
