// Generated from MyParser.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by MyParser.
function MyParserListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

MyParserListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
MyParserListener.prototype.constructor = MyParserListener;

// Enter a parse tree produced by MyParser#program.
MyParserListener.prototype.enterProgram = function(ctx) {
};

// Exit a parse tree produced by MyParser#program.
MyParserListener.prototype.exitProgram = function(ctx) {
};


// Enter a parse tree produced by MyParser#statement.
MyParserListener.prototype.enterStatement = function(ctx) {
};

// Exit a parse tree produced by MyParser#statement.
MyParserListener.prototype.exitStatement = function(ctx) {
};


// Enter a parse tree produced by MyParser#block.
MyParserListener.prototype.enterBlock = function(ctx) {
};

// Exit a parse tree produced by MyParser#block.
MyParserListener.prototype.exitBlock = function(ctx) {
};


// Enter a parse tree produced by MyParser#functionDeclaration.
MyParserListener.prototype.enterFunctionDeclaration = function(ctx) {
};

// Exit a parse tree produced by MyParser#functionDeclaration.
MyParserListener.prototype.exitFunctionDeclaration = function(ctx) {
};


// Enter a parse tree produced by MyParser#formalParams.
MyParserListener.prototype.enterFormalParams = function(ctx) {
};

// Exit a parse tree produced by MyParser#formalParams.
MyParserListener.prototype.exitFormalParams = function(ctx) {
};


// Enter a parse tree produced by MyParser#formalParam.
MyParserListener.prototype.enterFormalParam = function(ctx) {
};

// Exit a parse tree produced by MyParser#formalParam.
MyParserListener.prototype.exitFormalParam = function(ctx) {
};


// Enter a parse tree produced by MyParser#whileStatement.
MyParserListener.prototype.enterWhileStatement = function(ctx) {
};

// Exit a parse tree produced by MyParser#whileStatement.
MyParserListener.prototype.exitWhileStatement = function(ctx) {
};


// Enter a parse tree produced by MyParser#ifStatement.
MyParserListener.prototype.enterIfStatement = function(ctx) {
};

// Exit a parse tree produced by MyParser#ifStatement.
MyParserListener.prototype.exitIfStatement = function(ctx) {
};


// Enter a parse tree produced by MyParser#returnStatement.
MyParserListener.prototype.enterReturnStatement = function(ctx) {
};

// Exit a parse tree produced by MyParser#returnStatement.
MyParserListener.prototype.exitReturnStatement = function(ctx) {
};


// Enter a parse tree produced by MyParser#printStatement.
MyParserListener.prototype.enterPrintStatement = function(ctx) {
};

// Exit a parse tree produced by MyParser#printStatement.
MyParserListener.prototype.exitPrintStatement = function(ctx) {
};


// Enter a parse tree produced by MyParser#classDeclaration.
MyParserListener.prototype.enterClassDeclaration = function(ctx) {
};

// Exit a parse tree produced by MyParser#classDeclaration.
MyParserListener.prototype.exitClassDeclaration = function(ctx) {
};


// Enter a parse tree produced by MyParser#classVariableDeclaration.
MyParserListener.prototype.enterClassVariableDeclaration = function(ctx) {
};

// Exit a parse tree produced by MyParser#classVariableDeclaration.
MyParserListener.prototype.exitClassVariableDeclaration = function(ctx) {
};


// Enter a parse tree produced by MyParser#variableDeclaration.
MyParserListener.prototype.enterVariableDeclaration = function(ctx) {
};

// Exit a parse tree produced by MyParser#variableDeclaration.
MyParserListener.prototype.exitVariableDeclaration = function(ctx) {
};


// Enter a parse tree produced by MyParser#type.
MyParserListener.prototype.enterType = function(ctx) {
};

// Exit a parse tree produced by MyParser#type.
MyParserListener.prototype.exitType = function(ctx) {
};


// Enter a parse tree produced by MyParser#assignment.
MyParserListener.prototype.enterAssignment = function(ctx) {
};

// Exit a parse tree produced by MyParser#assignment.
MyParserListener.prototype.exitAssignment = function(ctx) {
};


// Enter a parse tree produced by MyParser#arrayAssignment.
MyParserListener.prototype.enterArrayAssignment = function(ctx) {
};

// Exit a parse tree produced by MyParser#arrayAssignment.
MyParserListener.prototype.exitArrayAssignment = function(ctx) {
};


// Enter a parse tree produced by MyParser#expression.
MyParserListener.prototype.enterExpression = function(ctx) {
};

// Exit a parse tree produced by MyParser#expression.
MyParserListener.prototype.exitExpression = function(ctx) {
};


// Enter a parse tree produced by MyParser#simpleExpression.
MyParserListener.prototype.enterSimpleExpression = function(ctx) {
};

// Exit a parse tree produced by MyParser#simpleExpression.
MyParserListener.prototype.exitSimpleExpression = function(ctx) {
};


// Enter a parse tree produced by MyParser#term.
MyParserListener.prototype.enterTerm = function(ctx) {
};

// Exit a parse tree produced by MyParser#term.
MyParserListener.prototype.exitTerm = function(ctx) {
};


// Enter a parse tree produced by MyParser#factor.
MyParserListener.prototype.enterFactor = function(ctx) {
};

// Exit a parse tree produced by MyParser#factor.
MyParserListener.prototype.exitFactor = function(ctx) {
};


// Enter a parse tree produced by MyParser#unary.
MyParserListener.prototype.enterUnary = function(ctx) {
};

// Exit a parse tree produced by MyParser#unary.
MyParserListener.prototype.exitUnary = function(ctx) {
};


// Enter a parse tree produced by MyParser#subExpression.
MyParserListener.prototype.enterSubExpression = function(ctx) {
};

// Exit a parse tree produced by MyParser#subExpression.
MyParserListener.prototype.exitSubExpression = function(ctx) {
};


// Enter a parse tree produced by MyParser#allocationExpression.
MyParserListener.prototype.enterAllocationExpression = function(ctx) {
};

// Exit a parse tree produced by MyParser#allocationExpression.
MyParserListener.prototype.exitAllocationExpression = function(ctx) {
};


// Enter a parse tree produced by MyParser#arrayAllocationExpression.
MyParserListener.prototype.enterArrayAllocationExpression = function(ctx) {
};

// Exit a parse tree produced by MyParser#arrayAllocationExpression.
MyParserListener.prototype.exitArrayAllocationExpression = function(ctx) {
};


// Enter a parse tree produced by MyParser#arrayLookup.
MyParserListener.prototype.enterArrayLookup = function(ctx) {
};

// Exit a parse tree produced by MyParser#arrayLookup.
MyParserListener.prototype.exitArrayLookup = function(ctx) {
};


// Enter a parse tree produced by MyParser#functionCall.
MyParserListener.prototype.enterFunctionCall = function(ctx) {
};

// Exit a parse tree produced by MyParser#functionCall.
MyParserListener.prototype.exitFunctionCall = function(ctx) {
};


// Enter a parse tree produced by MyParser#actualParams.
MyParserListener.prototype.enterActualParams = function(ctx) {
};

// Exit a parse tree produced by MyParser#actualParams.
MyParserListener.prototype.exitActualParams = function(ctx) {
};



exports.MyParserListener = MyParserListener;