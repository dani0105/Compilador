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
And                 : 'and';
Or                  : 'or';
fragment True       : 'true';
fragment False      : 'false';
New                 : 'new';
Length              : 'length';

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
    | Hyphen
    | Or;
MultiplicativeOperation :
    Mul
    | Div
    | And;

Literal             :
    IntLiteral
    | RealLiteral
    | BoolLiteral
    | StringLiteral;

Identifier          : '_' | Letter  ('_' | Letter | Digit)*;


Unary :
    Plus
    | Hyphen
    | Exclamation;

fragment Boolean    : 'boolean';
fragment Char       : 'char';
fragment Int        : 'int';
fragment String     : 'string';

fragment Plus       : '+';
fragment Hyphen     : '-';
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
    | Hyphen
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