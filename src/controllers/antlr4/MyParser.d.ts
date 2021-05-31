import {CommonTokenStream, Parser, ParserRuleContext, Token} from 'antlr4';
import {TerminalNode} from 'antlr4/tree/Tree';


export declare class ProgramContext extends ParserRuleContext {
    
}

export declare class StatementContext extends ParserRuleContext {
    
    variableDeclaration(): VariableDeclarationContext;
    
    Semicolon(): TerminalNode;
    
    classDeclaration(): ClassDeclarationContext;
    
    assignment(): AssignmentContext;
    
    arrayAssignment(): ArrayAssignmentContext;
    
    printStatement(): PrintStatementContext;
    
    ifStatement(): IfStatementContext;
    
    whileStatement(): WhileStatementContext;
    
    returnStatement(): ReturnStatementContext;
    
    functionDeclaration(): FunctionDeclarationContext;
    
    block(): BlockContext;
    
}

export declare class BlockContext extends ParserRuleContext {
    
    LeftCurlyBracket(): TerminalNode;
    
    RightCurlyBracket(): TerminalNode;
    
}

export declare class FunctionDeclarationContext extends ParserRuleContext {
    
    type(): TypeContext;
    
    Identifier(): TerminalNode;
    
    LeftParenthesis(): TerminalNode;
    
    RightParenthesis(): TerminalNode;
    
    block(): BlockContext;
    
    formalParams(): FormalParamsContext;
    
}

export declare class FormalParamsContext extends ParserRuleContext {
    
}

export declare class FormalParamContext extends ParserRuleContext {
    
    type(): TypeContext;
    
    Identifier(): TerminalNode;
    
}

export declare class WhileStatementContext extends ParserRuleContext {
    
    While(): TerminalNode;
    
    LeftParenthesis(): TerminalNode;
    
    expression(): ExpressionContext;
    
    RightParenthesis(): TerminalNode;
    
    block(): BlockContext;
    
}

export declare class IfStatementContext extends ParserRuleContext {
    
    If(): TerminalNode;
    
    LeftParenthesis(): TerminalNode;
    
    expression(): ExpressionContext;
    
    RightParenthesis(): TerminalNode;
    
    Else(): TerminalNode;
    
}

export declare class ReturnStatementContext extends ParserRuleContext {
    
    Return(): TerminalNode;
    
    expression(): ExpressionContext;
    
}

export declare class PrintStatementContext extends ParserRuleContext {
    
    Print(): TerminalNode;
    
    expression(): ExpressionContext;
    
}

export declare class ClassDeclarationContext extends ParserRuleContext {
    
    Class(): TerminalNode;
    
    Identifier(): TerminalNode;
    
    LeftCurlyBracket(): TerminalNode;
    
    RightCurlyBracket(): TerminalNode;
    
}

export declare class ClassVariableDeclarationContext extends ParserRuleContext {
    
    SimpleType(): TerminalNode;
    
    Identifier(): TerminalNode;
    
    Equals(): TerminalNode;
    
    expression(): ExpressionContext;
    
}

export declare class VariableDeclarationContext extends ParserRuleContext {
    
    type(): TypeContext;
    
    Identifier(): TerminalNode;
    
    Equals(): TerminalNode;
    
    expression(): ExpressionContext;
    
}

export declare class TypeContext extends ParserRuleContext {
    
    SimpleType(): TerminalNode;
    
    ArrayType(): TerminalNode;
    
    Identifier(): TerminalNode;
    
}

export declare class AssignmentContext extends ParserRuleContext {
    
    Equals(): TerminalNode;
    
    expression(): ExpressionContext;
    
    Dot(): TerminalNode;
    
}

export declare class ArrayAssignmentContext extends ParserRuleContext {
    
    Identifier(): TerminalNode;
    
    LeftBracket(): TerminalNode;
    
    RightBracket(): TerminalNode;
    
    Equals(): TerminalNode;
    
}

export declare class ExpressionContext extends ParserRuleContext {
    
}

export declare class SimpleExpressionContext extends ParserRuleContext {
    
}

export declare class TermContext extends ParserRuleContext {
    
}

export declare class FactorContext extends ParserRuleContext {
    
    Literal(): TerminalNode;
    
    Dot(): TerminalNode;
    
    functionCall(): FunctionCallContext;
    
    arrayLookup(): ArrayLookupContext;
    
    ArrayLength(): TerminalNode;
    
    subExpression(): SubExpressionContext;
    
    arrayAllocationExpression(): ArrayAllocationExpressionContext;
    
    allocationExpression(): AllocationExpressionContext;
    
    unary(): UnaryContext;
    
}

export declare class UnaryContext extends ParserRuleContext {
    
    expression(): ExpressionContext;
    
    Hyphen(): TerminalNode;
    
    Exclamation(): TerminalNode;
    
}

export declare class SubExpressionContext extends ParserRuleContext {
    
    LeftParenthesis(): TerminalNode;
    
    expression(): ExpressionContext;
    
    RightParenthesis(): TerminalNode;
    
}

export declare class AllocationExpressionContext extends ParserRuleContext {
    
    New(): TerminalNode;
    
    Identifier(): TerminalNode;
    
    LeftParenthesis(): TerminalNode;
    
    RightParenthesis(): TerminalNode;
    
}

export declare class ArrayAllocationExpressionContext extends ParserRuleContext {
    
    New(): TerminalNode;
    
    SimpleType(): TerminalNode;
    
    LeftBracket(): TerminalNode;
    
    expression(): ExpressionContext;
    
    RightBracket(): TerminalNode;
    
}

export declare class ArrayLookupContext extends ParserRuleContext {
    
    Identifier(): TerminalNode;
    
    LeftBracket(): TerminalNode;
    
    expression(): ExpressionContext;
    
    RightBracket(): TerminalNode;
    
}

export declare class FunctionCallContext extends ParserRuleContext {
    
    Identifier(): TerminalNode;
    
    LeftParenthesis(): TerminalNode;
    
    RightParenthesis(): TerminalNode;
    
    actualParams(): ActualParamsContext;
    
}

export declare class ActualParamsContext extends ParserRuleContext {
    
}


export declare class MyParser extends Parser {
    readonly ruleNames: string[];
    readonly literalNames: string[];
    readonly symbolicNames: string[];

    constructor(input: CommonTokenStream);
    
    program(): ProgramContext;

    statement(): StatementContext;

    block(): BlockContext;

    functionDeclaration(): FunctionDeclarationContext;

    formalParams(): FormalParamsContext;

    formalParam(): FormalParamContext;

    whileStatement(): WhileStatementContext;

    ifStatement(): IfStatementContext;

    returnStatement(): ReturnStatementContext;

    printStatement(): PrintStatementContext;

    classDeclaration(): ClassDeclarationContext;

    classVariableDeclaration(): ClassVariableDeclarationContext;

    variableDeclaration(): VariableDeclarationContext;

    type(): TypeContext;

    assignment(): AssignmentContext;

    arrayAssignment(): ArrayAssignmentContext;

    expression(): ExpressionContext;

    simpleExpression(): SimpleExpressionContext;

    term(): TermContext;

    factor(): FactorContext;

    unary(): UnaryContext;

    subExpression(): SubExpressionContext;

    allocationExpression(): AllocationExpressionContext;

    arrayAllocationExpression(): ArrayAllocationExpressionContext;

    arrayLookup(): ArrayLookupContext;

    functionCall(): FunctionCallContext;

    actualParams(): ActualParamsContext;

}
