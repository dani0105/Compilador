parser grammar MyParser;

options {
    tokenVocab = MyScanner;
}

program             : (statement)*;
statement           :
    variableDeclaration Semicolon
    | classDeclaration Semicolon
    | assignment Semicolon
    | arrayAssignment Semicolon
    | printStatement Semicolon
    | ifStatement
    | whileStatement
    | returnStatement Semicolon
    | functionDeclaration
    | block;

block               : LeftCurlyBracket (statement)* RightCurlyBracket;

functionDeclaration : type Identifier LeftParenthesis (formalParams)? RightParenthesis block;
formalParams        : formalParam ( Comma formalParam)*;
formalParam         : type Identifier;

whileStatement      : While LeftParenthesis expression RightParenthesis block;

ifStatement         : If LeftParenthesis expression RightParenthesis block (Else block)?;

returnStatement     : Return expression;

printStatement      : Print expression;

classDeclaration    : Class Identifier LeftCurlyBracket (classVariableDeclaration)* RightCurlyBracket;
classVariableDeclaration : SimpleType Identifier (Equals expression)?;

variableDeclaration : type Identifier (Equals expression)*;

type                :
    SimpleType
    | ArrayType
    | Identifier;

assignment          : Identifier (Dot Identifier) Equals expression ;
arrayAssignment     : Identifier LeftBracket expression RightBracket Equals expression;

expression          : simpleExpression (RelationalOperation simpleExpression)*;
simpleExpression    : term (AdditiveOperation term)*;
term                : factor (MultiplicativeOperation factor)*;
factor              :
    Literal
    | Identifier (Dot Identifier)?
    | functionCall
    | arrayLookup
    | subExpression
    | arrayAllocationExpression
    | allocationExpression
    | unary;

unary               : Unary expression (expression)*;
subExpression       : LeftParenthesis expression RightParenthesis;
allocationExpression :  New Identifier LeftParenthesis RightParenthesis;
arrayAllocationExpression : New SimpleType LeftBracket expression RightBracket;

arrayLookup         : Identifier LeftBracket expression RightBracket;

functionCall        : Identifier LeftParenthesis actualParams RightParenthesis;

actualParams        : expression (Comma expression)*;


