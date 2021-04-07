
const antlr4 = require('antlr4');
const myScanner = require('./antlr4/MyScanner').MyScanner;
const myParser = require('./antlr4/MyParser').MyParser;

exports.compile = async (req) => {
    const InputStream = antlr4.InputStream;
    const CommonTokenStream = antlr4.CommonTokenStream;

    const inputStream = new InputStream(req.code);
    const scanner = new myScanner(inputStream);

    const tokens = new CommonTokenStream(scanner);

    const parser = new myParser(tokens);
    var logs = [];
    parser.buildParseTrees = true;

    parser.addErrorListener({
        syntaxError: (recognizer, offendingSymbol, line, column, msg, err) => {
            logs.push(`line ${line}, col ${column}: ${msg}`);
        }
    })
    const tree = parser.program();

    
    return { success: true, result: {logs:logs,tree:tree.getText()} };
}


module.exports;