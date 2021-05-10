lexer grammar MyScanner;

COMMENT             : '/*' .*? '*/' -> skip;
LINE_COMMENT        : '//' ~[\r\n]* -> skip;
Space               : [ \t\r\n] -> channel(HIDDEN);

Semicolon           : ';';

RightCurlyBracket   : '}';
LeftCurlyBracket    : '{';

RightParenthesis    : ')';
LeftParenthesis     : '(';

RightBracket        : ']';
LeftBracket         : '[';

Equals              : '=';
Comma               : ',';
Dot                 : '.';

While               : 'while';
If                  : 'if';
Class               : 'class';
Return              : 'return';
Else                : 'else';
Print               : 'print';
fragment And        : 'and';
fragment Or         : 'or';
fragment True       : 'true';
fragment False      : 'false';
New                 : 'new';
fragment Length     : 'length';

UnaryOperations     : ('-' | Exclamation);

ArrayLength         : Identifier Dot Length;
SimpleType          :
    Boolean
    | Char
    | Int
    | String;

ArrayType           : SimpleType LeftBracket RightBracket;

RelationalOperation :
    LessThan
    | GreaterThan
    | (Equals Equals)
    | (Exclamation Equals)
    | (LessThan Equals)
    | (GreaterThan Equals);

AdditiveOperation   :
    Plus
    | '-'
    | Or;
MultiplicativeOperation :
    Mul
    | Div
    | And;

Literal             :
    IntLiteral
    | RealLiteral
    | BoolLiteral
    | StringLiteral
    | CharLiteral;

Identifier          : '_' | Letter  ('_' | Letter | Digit)*;


fragment Boolean    : 'boolean';
fragment Char       : 'char';
fragment Int        : 'int';
fragment String     : 'string';

fragment Plus       : '+';
fragment Mul        : '*';
fragment Div        : '/';
fragment Exclamation : '!';
fragment LessThan   : '<';
fragment GreaterThan : '>';

fragment IntLiteral : Digit (Digit)*;
fragment RealLiteral :
    Digit (Digit)* Dot (Digit)*
    | Dot Digit (Digit)*;

fragment BoolLiteral : True | False;
fragment StringLiteral : '"' (Printable)* '"';
fragment CharLiteral : '\'' (Printable) '\'';

fragment Printable :
    Digit
    | Letter
    | ' '
    | Exclamation
    | '"'
    |'#'
    | '$'
    | '%'
    | '&'
    | '\''
    | LeftParenthesis
    | RightParenthesis
    | Mul
    | Plus
    | Comma
    | '-'
    | Dot
    | Div
    | ':'
    | Semicolon
    | LessThan
    | Equals
    | GreaterThan
    | '?'
    | '@'
    | RightBracket
    | LeftBracket
    | '\\'
    | '^'
    | '_'
    | '`'
    | LeftCurlyBracket
    | RightCurlyBracket
    | '~'
    | '|' ;

fragment Letter     : 'a'..'z' | 'A'..'Z';
fragment Digit      : '0'..'9' ;