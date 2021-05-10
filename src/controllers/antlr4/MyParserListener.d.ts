import {CommonTokenStream, ParserRuleContext, Token} from 'antlr4';
import {ErrorNode, ParseTreeListener, TerminalNode} from 'antlr4/tree/Tree';

import {ProgramContext} from './MyParser';

import {StatementContext} from './MyParser';

import {BlockContext} from './MyParser';

import {UnaryContext} from './MyParser';

import {FunctionDeclarationContext} from './MyParser';

import {FormalParamsContext} from './MyParser';

import {FormalParamContext} from './MyParser';

import {WhileStatementContext} from './MyParser';

import {IfStatementContext} from './MyParser';

import {ReturnStatementContext} from './MyParser';

import {PrintStatementContext} from './MyParser';

import {ClassDeclarationContext} from './MyParser';

import {ClassVariableDeclarationContext} from './MyParser';

import {VariableDeclarationContext} from './MyParser';

import {TypeContext} from './MyParser';

import {AssignmentContext} from './MyParser';

import {ArrayAssignmentContext} from './MyParser';

import {ExpressionContext} from './MyParser';

import {SimpleExpressionContext} from './MyParser';

import {TermContext} from './MyParser';

import {FactorContext} from './MyParser';

import {SubExpressionContext} from './MyParser';

import {AllocationExpressionContext} from './MyParser';

import {ArrayAllocationExpressionContext} from './MyParser';

import {ArrayLookupContext} from './MyParser';

import {FunctionCallContext} from './MyParser';

import {ActualParamsContext} from './MyParser';


export declare class MyParserListener implements ParseTreeListener {
    constructor();
    
    enterProgram(ctx: ProgramContext): void;
    
    exitProgram(ctx: ProgramContext): void;
    
    enterStatement(ctx: StatementContext): void;
    
    exitStatement(ctx: StatementContext): void;
    
    enterBlock(ctx: BlockContext): void;
    
    exitBlock(ctx: BlockContext): void;
    
    enterUnary(ctx: UnaryContext): void;
    
    exitUnary(ctx: UnaryContext): void;
    
    enterFunctionDeclaration(ctx: FunctionDeclarationContext): void;
    
    exitFunctionDeclaration(ctx: FunctionDeclarationContext): void;
    
    enterFormalParams(ctx: FormalParamsContext): void;
    
    exitFormalParams(ctx: FormalParamsContext): void;
    
    enterFormalParam(ctx: FormalParamContext): void;
    
    exitFormalParam(ctx: FormalParamContext): void;
    
    enterWhileStatement(ctx: WhileStatementContext): void;
    
    exitWhileStatement(ctx: WhileStatementContext): void;
    
    enterIfStatement(ctx: IfStatementContext): void;
    
    exitIfStatement(ctx: IfStatementContext): void;
    
    enterReturnStatement(ctx: ReturnStatementContext): void;
    
    exitReturnStatement(ctx: ReturnStatementContext): void;
    
    enterPrintStatement(ctx: PrintStatementContext): void;
    
    exitPrintStatement(ctx: PrintStatementContext): void;
    
    enterClassDeclaration(ctx: ClassDeclarationContext): void;
    
    exitClassDeclaration(ctx: ClassDeclarationContext): void;
    
    enterClassVariableDeclaration(ctx: ClassVariableDeclarationContext): void;
    
    exitClassVariableDeclaration(ctx: ClassVariableDeclarationContext): void;
    
    enterVariableDeclaration(ctx: VariableDeclarationContext): void;
    
    exitVariableDeclaration(ctx: VariableDeclarationContext): void;
    
    enterType(ctx: TypeContext): void;
    
    exitType(ctx: TypeContext): void;
    
    enterAssignment(ctx: AssignmentContext): void;
    
    exitAssignment(ctx: AssignmentContext): void;
    
    enterArrayAssignment(ctx: ArrayAssignmentContext): void;
    
    exitArrayAssignment(ctx: ArrayAssignmentContext): void;
    
    enterExpression(ctx: ExpressionContext): void;
    
    exitExpression(ctx: ExpressionContext): void;
    
    enterSimpleExpression(ctx: SimpleExpressionContext): void;
    
    exitSimpleExpression(ctx: SimpleExpressionContext): void;
    
    enterTerm(ctx: TermContext): void;
    
    exitTerm(ctx: TermContext): void;
    
    enterFactor(ctx: FactorContext): void;
    
    exitFactor(ctx: FactorContext): void;
    
    enterSubExpression(ctx: SubExpressionContext): void;
    
    exitSubExpression(ctx: SubExpressionContext): void;
    
    enterAllocationExpression(ctx: AllocationExpressionContext): void;
    
    exitAllocationExpression(ctx: AllocationExpressionContext): void;
    
    enterArrayAllocationExpression(ctx: ArrayAllocationExpressionContext): void;
    
    exitArrayAllocationExpression(ctx: ArrayAllocationExpressionContext): void;
    
    enterArrayLookup(ctx: ArrayLookupContext): void;
    
    exitArrayLookup(ctx: ArrayLookupContext): void;
    
    enterFunctionCall(ctx: FunctionCallContext): void;
    
    exitFunctionCall(ctx: FunctionCallContext): void;
    
    enterActualParams(ctx: ActualParamsContext): void;
    
    exitActualParams(ctx: ActualParamsContext): void;
    
    visitTerminal(node: TerminalNode): void;

    visitErrorNode(node: ErrorNode): void;

    enterEveryRule(node: ParserRuleContext): void;

    exitEveryRule(node: ParserRuleContext): void;
}
