// Generated from MyParser.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by MyParser.

function MyParserVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

MyParserVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
MyParserVisitor.prototype.constructor = MyParserVisitor;

// Visit a parse tree produced by MyParser#program.
MyParserVisitor.prototype.visitProgram = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MyParser#statement.
MyParserVisitor.prototype.visitStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MyParser#block.
MyParserVisitor.prototype.visitBlock = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MyParser#functionDeclaration.
MyParserVisitor.prototype.visitFunctionDeclaration = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MyParser#formalParams.
MyParserVisitor.prototype.visitFormalParams = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MyParser#formalParam.
MyParserVisitor.prototype.visitFormalParam = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MyParser#whileStatement.
MyParserVisitor.prototype.visitWhileStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MyParser#ifStatement.
MyParserVisitor.prototype.visitIfStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MyParser#returnStatement.
MyParserVisitor.prototype.visitReturnStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MyParser#printStatement.
MyParserVisitor.prototype.visitPrintStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MyParser#classDeclaration.
MyParserVisitor.prototype.visitClassDeclaration = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MyParser#classVariableDeclaration.
MyParserVisitor.prototype.visitClassVariableDeclaration = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MyParser#variableDeclaration.
MyParserVisitor.prototype.visitVariableDeclaration = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MyParser#type.
MyParserVisitor.prototype.visitType = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MyParser#assignment.
MyParserVisitor.prototype.visitAssignment = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MyParser#arrayAssignment.
MyParserVisitor.prototype.visitArrayAssignment = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MyParser#expression.
MyParserVisitor.prototype.visitExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MyParser#simpleExpression.
MyParserVisitor.prototype.visitSimpleExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MyParser#term.
MyParserVisitor.prototype.visitTerm = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MyParser#factor.
MyParserVisitor.prototype.visitFactor = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MyParser#unary.
MyParserVisitor.prototype.visitUnary = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MyParser#subExpression.
MyParserVisitor.prototype.visitSubExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MyParser#allocationExpression.
MyParserVisitor.prototype.visitAllocationExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MyParser#arrayAllocationExpression.
MyParserVisitor.prototype.visitArrayAllocationExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MyParser#arrayLookup.
MyParserVisitor.prototype.visitArrayLookup = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MyParser#functionCall.
MyParserVisitor.prototype.visitFunctionCall = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MyParser#actualParams.
MyParserVisitor.prototype.visitActualParams = function(ctx) {
  return this.visitChildren(ctx);
};



exports.MyParserVisitor = MyParserVisitor;