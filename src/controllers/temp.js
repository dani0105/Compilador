
const antlr4 = require('antlr4');
const MyParserVisitor = require('./antlr4/MyParserVisitor').MyParserVisitor;

const HASH_LENGTH = 221;
const SHIFT = 4;


exports.ContextualAnalyze = class ContextualAnalyze extends MyParserVisitor {

    constructor() {
        super();
        this.scopeManager = new ScopeManager();
    }

    visitBlock(ctx) {
        this.scopeManager.openScope();
        this.visitChildren(ctx);
        this.scopeManager.closeScope();
    }

    visitVariableDeclaration(ctx) {
        const type =  this.getType(ctx.type().getText());
        const key = ctx.Identifier().getText();
        const value = this.visit(ctx.expression());
        //this.scopeManager.enter(key,type,null,ctx);
    }

    visitExpression(ctx){
        const simpleExpressionType = this.visit(ctx.simpleExpression());

        return simpleExpressionType;
    }

    visitSimpleExpression(ctx){
        this.visit(ctx.term())
    }

    visitTerm(ctx){
        this.visit(ctx.factor())
    }

    visitFactor(ctx){
        if(ctx.Literal()){
            return 4;
        }

        if(ctx.Identifier()){
            const value = this.scopeManager.retrieve(ctx.Identifier().getText());
            if(value){
                return value.type;
            }
            return null
        }

        if(ctx.functionCall()){
            return this.visit(ctx.functionCall());
        }

        if(ctx.arrayLookup()){
            return this.visit(ctx.functionCall());
        }

        if(ctx.ArrayLength()){
            return this.visit(ctx.functionCall());
        }

        if(ctx.subExpression()){
            return this.visit(ctx.functionCall());
        }

        if(ctx.arrayAllocationExpression()){
            return this.visit(ctx.functionCall());
        }

        if(ctx.allocationExpression()){
            return this.visit(ctx.functionCall());
        }

        if(ctx.unary()){
            return this.visit(ctx.functionCall());
        }
    }

    visitFunctionCall(ctx){
        const key = ctx.Identifier().getText();
        const value = this.scopeManager().retrieve(key);
        
        //falta verificar sus parametros 
        return type;
    }

    getType(type){
        switch(type){
            case 'int':
                return 1;
            case 'boolean':
                return 2;
            case 'char':
                return 3;
            case 'string':
                return 4;
            default :
                return 5; // tipo objeto
        }
    }
}

ScopeManager = class ScopeManager { // almacenaría todas los ambitos

    constructor() {
        this.scopes = [];
        this.initScope();
    }

    initScope() {
        let scope = new Table();
        // insertar aqui los valores por defecto;
        //scope.insertValue(key, context, value, type)

        this.scopes.push(scope) // esto es como una pila
    }

    openScope() {
        this.scopes.push(new Table());
    }


    enter(id,type,value,params,context) {
        let index = this.scopes.length-1;
        const another = this.retrieve(id);
        if(another)
            throw "Already Exist";
        return this.scopes[index].insertValue(id,context,value,type,params)
    }


    retrieve(key) {
        let level = this.scopes.length;
        for (let i = (level - 1); i >= 0; i--) {
            let temp = this.scopes[i].searchValue(key);
            if (temp)
                return temp;
        }
        return null;
    }

    closeScope() {
        this.nivel++;
        this.scopes.pop();
    }
}

Table = class Table { // una tabla es un ambito

    constructor() {
        this.generateTable();
        this.active = true;
    }

    generateTable() {
        this.table = new Array(HASH_LENGTH);  // table sería [ ] 
        for (let i = 0; i < HASH_LENGTH; i++) {
            this.table[i] = []; // quedaría [ [], [] ]
        }
    
    }

    generateHash(key) {
        let temp = 0;
        let i = 0;
        while (i < key.length ) {
            temp = ((temp << SHIFT) +  key.charCodeAt(i)) % HASH_LENGTH;
            ++i;
        }
        return temp;
    }

    insertValue(key, context, value, type,params) {
        let index = this.generateHash(key);
        let vars = new Value(key, type, value, context,params);
        this.table[index].push(vars);
        return true;
    }

    searchValue(key) {
        let index = this.generateHash(key);
        for (let i = 0; i < this.table[index].length; i++) {
            if (this.table[index][i].id == key)
                return this.table[index][i];
        }
        return null;
    }

    updateValue(key) {
        let value = this.searchValue(key)
        if (value) {

            return true;
        }
        return false;
    }

}

Value = class Value { // un valor es una varaible, funcion,clase, etc..
    constructor(id, type, value, context,params) {
        this.id = id;
        this.type = type;
        this.value = value;
        this.params = params
        this.context = context;
    }
}

Param = class Param{
    constructor(type,key) {
        this.type = type;
        this.key = key;
    }
}

module.exports;