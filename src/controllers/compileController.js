
const antlr4 = require('antlr4');
const myScanner = require('./antlr4/MyScanner').MyScanner;
const ScopeManager = require('./ContextualAnalyze/scopeManager').ScopeManager;
const myParser = require('./antlr4/MyParser').MyParser;
const ContextualAnalyze = require('./ContextualAnalyze').ContextualAnalyze;


var sessions = []

exports.compile = async (req) => {
    var session;
    if(req.sessionId){
        session = sessions[req.sessionId];
    }else{
        sessions.push({scopeManager:new ScopeManager()})
        req.sessionId = sessions.length-1;
        session = sessions[req.sessionId];
    }

    const InputStream = antlr4.InputStream;
    const CommonTokenStream = antlr4.CommonTokenStream;
    const inputStream = new InputStream(req.code);

    //syntax
    console.log("Syntax Analyze");
    const scanner = new myScanner(inputStream);
    const tokens = new CommonTokenStream(scanner);
    const tree = syntaxAnalyze(tokens);
    console.log("Contextual Analyze");
    //contextual
    const result = doContextualAnalyze(tree,session.scopeManager);
    session.scopeManager = result.scopeManager;
    return { 
        success: true,
        sessionId: req.sessionId,
        logs: result.logs,
        declarationTree: result.scopeManager.declarationTree
    };
}

doContextualAnalyze = (tree,scopeManager) => {
    var analyze = new ContextualAnalyze(scopeManager);
    analyze.visitProgram(tree);
    return {scopeManager:analyze.scopeManager,logs:analyze.logs}; 
}

syntaxAnalyze = (tokens) => {
    const parser = new myParser(tokens);
    parser.buildParseTrees = true;
    parser.removeErrorListeners();
    parser.addErrorListener({
        syntaxError: (recognizer, offendingSymbol, line, column, msg, err) => {
            throw `line ${line}, col ${column}: ${msg}`;
        },
        reportAttemptingFullContext:(recognizer,dfa,strart,stop,conflict,config) => {},
        reportContextSensitivity:(recognizer,dfa,strart,stop,conflict,config) => {}
    })
    return parser.program();
}


module.exports;