
const Value = require('./value').Value;
const ScopeManager = require('./scopeManager').ScopeManager;
const Table = require('./table').Table;
const MyParserVisitor = require('../antlr4/MyParserVisitor').MyParserVisitor;
const constants = require('./constants').CONSTANTS;

exports.ContextualAnalyze = class ContextualAnalyze extends MyParserVisitor {

    queue = [];
    logs = [];


    constructor(scopeManager) {
        super();
        this.scopeManager = scopeManager;
    }

    printError(ctx,message){
        return `Line ${ctx.parentCtx.start.line}, col ${ctx.parentCtx.start.column}: ${message}`;
    }

    checkValidity(ctx,key) {
        if (this.scopeManager.existInScope(key))
            throw  this.printError(ctx,`'${key}' ya fue declarado previamante`);
    }

    visitStatement(ctx){
        return this.visitChildren(ctx)
    }

    visitBlock(ctx,functionType=null) {
        this.scopeManager.openScope();
        var result = this.visitChildren(ctx);
        if(result){
            result = result.flat().filter(element=> element != undefined? true:false)[0];
            
        }
        this.scopeManager.closeScope();
        return result;
    }

    visitPrintStatement(ctx){
        const expressionType = this.visit(ctx.expression());
        const lastI = this.queue.length-1;
        if(lastI >=0){
            if(this.queue[lastI].runOthers){
                this.logs.push(expressionType.value);
            }
        }else{
            this.logs.push(expressionType.value);
        }
    }

    visitIfStatement(ctx) {
        const expressionType = this.visit(ctx.expression());
        if (expressionType.type != constants.BOOLEAN) {
            throw this.printError(ctx, "se experaba un boolean");
        }

        if (expressionType.value) { // el block principal
            this.visit(ctx.block()[0]);
        }else if (ctx.Else()) { // el else
            var lastI = ctx.children.length-1;
            this.visit(ctx.children[lastI]);
        }
    }

    visitWhileStatement(ctx) {
        const result = this.visit(ctx.expression());
        if (result.type != constants.BOOLEAN) {
            throw this.printError(ctx, "se experaba un boolean");
        }
        this.visit(ctx.block());
    }

    visitArrayAssignment(ctx) {
        const key = ctx.children[0].getText();
        const value = this.scopeManager.retrieve(key);
        if(value){
            const expression1 = this.visit(ctx.children[2]);
            if(expression1.type != constants.INTEGER)
                throw this.printError(ctx, "solo se permite enteros");
            var lastI = ctx.children.length-1;
            const expression2 = this.visit(ctx.children[lastI]);

            const arrayType = this.getSingleArrayValue(value.type);
            if(expression2.type != arrayType)
                throw this.printError(ctx, " tipos diferentes");
            
            value.value[expression1.value] = expression2.value;

            return null;
        }
        throw this.printError(ctx, ` '${key}' no existe`)
    }

    visitVariableDeclaration(ctx) {
        const key = ctx.children[1].getText();
        this.checkValidity(ctx,key);
        const type = this.visit(ctx.type());

        var value = null;
        if(ctx.expression()){
            const result = this.visit(ctx.expression());
            if (result) {
                if (result.type != type)
                    throw this.printError(ctx, 'los tipos no coinciden');
                value = result.value;
            }
        }

        this.scopeManager.enter(key, type, value, ctx);
    }

    visitClassDeclaration(ctx) {
        const key = ctx.children[1].getText();
        this.checkValidity(ctx,key);
        var localScope = new Table();

        for (let i = 1; i < ctx.children.length; i++) {
            const result = this.visit(ctx.children[i]);
            if (result) {
                const value = localScope.searchValue(result.id);
                if (value)
                    throw this.printError(ctx, `'${result.id}' ya existe en la clase`);
                localScope.insertValue(result.id, ctx.children[i], result.value, result.type, null);
            }
        }
        this.scopeManager.enter(key, constants.OBJECT, localScope, ctx)

    }

    visitClassVariableDeclaration(ctx) {
        const key = ctx.children[1].getText();

        const type = this.simpleTypeScan(ctx.children[0].getText())

        var value = null;
        if (ctx.expression()) {
            const result = this.visit(ctx.expression());
            if (result) {
                if (result.type != type)
                    throw this.printError(ctx, 'Los tipo no coinciden'); 
                value = result.value;
            }
        }

        return new Value(key, type, value, ctx);
    }

    visitAssignment(ctx) {
        const primaryKey = ctx.children[0].getText();
        const variable = this.scopeManager.retrieve(primaryKey);
        const result = this.visit(ctx.expression());
        if (variable) {
            if (ctx.Dot()) {
                const secondaryKey = ctx.children[2].getText();
                const variable2 = variable.value.value.searchValue(secondaryKey);
                if (variable2) {
                    if (result.type != variable2.type)
                        throw this.printError(ctx, 'Los tipo no coinciden'); 
                    variable2.value = result.value;
                    return null;
                }
                throw this.printError(ctx, ` '${secondaryKey}' no existe`); 
            }

            if (result.type != variable.type)
                throw this.printError(ctx, 'Los tipo no coinciden'); 
            variable.value = result.value;
            return null;
        }
        throw this.printError(ctx, ` '${primaryKey}' no existe`); 
    }

    visitReturnStatement(ctx) {
        const value = this.visit(ctx.expression());
        const last= this.queue.length-1;
        if(this.queue[last].type != value.type)
            throw this.printError(ctx, 'El tipo del return no coincide con el de la funcion')
        this.queue[last].haveReturn = true;
        if(!this.queue[last].value){
            this.queue[last].value = value;
        }
        return value.value;
    }

    visitType(ctx) {
        const type = ctx.parser.symbolicNames[ctx.children[0].symbol.type];

        if (type == 'Identifier') {
            const object = this.scopeManager.retrieve(ctx.children[0].getText());
            if(object){
                return ctx.children[0].getText();
            }
            throw this.printError(ctx,` no existe '${ctx.children[0].getText()}'`);
        }

        if (type == 'SimpleType') {
            return this.simpleTypeScan(ctx.children[0].getText())
        }

        if (type == 'ArrayType') {
            switch (ctx.children[0].getText()) {
                case 'int[]':
                    return constants.INTEGER_ARRAY;
                case 'char[]':
                    return constants.CHAR_ARRAY;
                case 'string[]':
                    return constants.STRING_ARRAY;
                case 'boolean[]':
                    return constants.BOOLEAN_ARRAY;
            }
        }
    }

    simpleTypeScan(text) {
        switch (text) {
            case 'int':
                return constants.INTEGER;
            case 'char':
                return constants.CHAR;
            case 'string':
                return constants.STRING;
            case 'boolean':
                return constants.BOOLEAN;
        }
    }

    visitFunctionDeclaration(ctx){
        const type = this.visit(ctx.children[0]);
        const key = ctx.children[1].getText();
        this.checkValidity(ctx,key);
        var params =[];
        this.scopeManager.openScope();
        if(ctx.formalParams()){
            params= this.visit(ctx.formalParams());
            for(let i = 0; i < params.length; i++){
                this.checkValidity(ctx,params[i].value);
                this.scopeManager.enter(params[i].value,params[i].type,null,params[i].ctx);
            }
        }
        this.queue.push({type:type,haveReturn:false,runOthers:false});
        var lastI = ctx.children.length-1;
        this.visitBlock(ctx.children[lastI],type);
        const last = this.queue.pop();
        if(!last.haveReturn){
            throw this.printError(ctx, ` la funcion '${key}' no posse un return`)
        }
        this.scopeManager.closeScope();
        this.scopeManager.enter(key,type,params,ctx);
    }

    visitFormalParams(ctx){
        return this.visit(ctx.formalParam());
    }

    visitFormalParam(ctx){
        const type = this.visitType(ctx.children[0]);
        const key = ctx.children[1].getText();
        return new TypeAnalyze(type,key,ctx);
    }

    // Esta es la parte más importante del contextual analyze 

    visitExpression(ctx) {// tiene que devolver el tipo de expression
        var before = this.visit(ctx.simpleExpression())[0];
        var type = before.type;
        var operation = null;
        for (let i = 1; i < ctx.children.length; i++) {
            
            if (ctx.children[i].symbol) {
                operation = ctx.children[i].getText();
                type = constants.BOOLEAN;
            }else{
                var temp = this.visitSimpleExpression(ctx.children[i]);
                
                if (operation == '<') {
                    temp.value = before.value < temp.value; 
                }
                if (operation == '>') {
                    temp.value = before.value > temp.value;
                }
                if (operation == '==') {
                    temp.value = before.value == temp.value;
                }
                if (operation == '<=') {
                    temp.value = before.value <= temp.value;
                }
                if (operation == '>=') {
                    temp.value = before.value >= temp.value;
                }
                if (operation == '!=') {
                    temp.value = before.value != temp.value;
                }

                before = temp;
            }

        }
        
        return new TypeAnalyze(type, before.value);
    }

    visitSimpleExpression(ctx) {
        var before = this.visitTerm(ctx.children[0]);
        var type = before.type;
        var operation = null;
        for (let i = 1; i < ctx.children.length; i++) {
            if (ctx.children[i].symbol) {
                if (ctx.children[i].getText() == 'or') {
                    if (before.type != constants.BOOLEAN)
                    throw this.printError(ctx, ' solo puede comparar boolean');
                    type = constants.BOOLEAN;
                    continue;
                }
                if (before.type == constants.STRING || before.type == constants.INTEGER) {
                    operation = ctx.children[i].getText();
                } else
                    throw this.printError(ctx, ' solo se permite string o integer');
                continue
            }
            var temp = this.visitTerm(ctx.children[i]);

            if (operation == '+') {
                if (before.type == constants.STRING) {
                    if (temp.type == constants.STRING) {
                        type = constants.STRING;
                        temp.value = before.value + temp.value;
                    } else
                    throw this.printError(ctx, ' no se pueden concatenar los valores');
                }
                else if (before.type == constants.INTEGER){
                    if (temp.type == constants.INTEGER) {
                        type = constants.INTEGER;
                        temp.value = Number(before.value) + Number(temp.value);
                    } else
                    throw this.printError(ctx, ' solo se pueden sumar integers');
                }
            }
            else if (operation == '-') {
                if (before.type == constants.INTEGER) {
                    if (temp.type == constants.INTEGER) {
                        type = constants.INTEGER;
                        temp.value = Number(before.value) - Number(temp.value);
                    } else
                    throw this.printError(ctx, ' solo se pueden restar integers');
                }
            }else {
                if (before.type == constants.BOOLEAN &&  temp.type == constants.BOOLEAN ) {
                    type = constants.BOOLEAN;
                    temp.value = before.value || temp.value;
                }
                else
                    throw this.printError(ctx, 'tipos invalidos');
            }
            before = temp;

        }

        return new TypeAnalyze(type, before.value);
    }

    /**
     * Esta funcion puede ser más optima 
     * @param {*} ctx 
     * @returns 
     */
    visitTerm(ctx) {
        var before = this.visitFactor(ctx.children[0]);
        var type = before.type;
        var operation = null;
        for (let i = 1; i < ctx.children.length; i++) {
            if (ctx.children[i].symbol) { // cuando es un simbolo como *, /,and
                if (ctx.children[i].getText() == 'and') {
                    if (before.type != constants.BOOLEAN)
                    throw this.printError(ctx, ' solo se puden comparar un boolean');
                    type = constants.BOOLEAN;
                    continue;
                }
                else{
                    operation = ctx.children[i].getText();
                    type = constants.INTEGER;
                }
                
            }
            else {
                var temp = this.visitFactor(ctx.children[i]);

                if (operation == '*') {
                    if (before.type == constants.INTEGER &&  temp.type == constants.INTEGER ) {
                        type = constants.INTEGER;
                        temp.value = Number(before.value) * Number(temp.value);
                    }
                    else
                        throw this.printError(ctx, 'tipos invalidos');
                }
                else if(operation == '/'){
                    if (before.type == constants.INTEGER &&  temp.type == constants.INTEGER ) {
                        type = constants.INTEGER;
                        temp.value = Number(before.value) / Number(temp.value);
                    }
                    else
                        throw this.printError(ctx, 'tipos invalidos');
                }else{
                    if (before.type == constants.BOOLEAN &&  temp.type == constants.BOOLEAN ) {
                        type = constants.BOOLEAN;
                        temp.value = before.value && temp.value;
                    }
                    else
                        throw this.printError(ctx, 'tipos invalidos');
                }
                before = temp;
            }
        }
        return new TypeAnalyze(type, before.value);
    }

    visitFactor(ctx) {
        if (ctx.Literal()) {
            var value = ctx.Literal().getText();
            
            if (value == 'true' || value == 'false'){
                value = value == 'true'
                return new TypeAnalyze(constants.BOOLEAN, value);
            }
        
            if (value[0] == '"')
                return new TypeAnalyze(constants.STRING, value);
            
            if (value[0] == '\'')
                return new TypeAnalyze(constants.CHAR, value);
            return new TypeAnalyze(constants.INTEGER, value);
        }

        if(ctx.functionCall()){
            //aqui debo hacer algo con el contenido de la funcion
            return this.visit(ctx.functionCall());
        }

        if(ctx.arrayLookup()){
            return this.visit(ctx.arrayLookup());
        }

        if(ctx.subExpression()){
            return this.visit(ctx.subExpression());
        }

        if(ctx.arrayAllocationExpression()){
            return this.visit(ctx.arrayAllocationExpression());
        }

        if(ctx.allocationExpression()){
            return this.visit(ctx.allocationExpression());
        }

        if(ctx.unary()){
            return this.visit(ctx.unary());
        }

        if (ctx.ArrayLength()) {
            const key = ctx.ArrayLength().getText().split('.')[0];
            var variable = this.scopeManager.retrieve(key);
            if(variable){
                if(variable.type >= 6 && variable.type <= 9){
                    var runOthers = this.queue[this.queue.length-1].runOthers;
                    
                    if(runOthers){
                        console.log("lengt",runOthers,variable.value)
                        return new TypeAnalyze(constants.INTEGER, variable.value.length);
                        
                    }else
                        return new TypeAnalyze(constants.INTEGER, 0);
                }else{
                    throw this.printError(ctx,` solo se puede acceder al atributo length en listas`);
                }
                
            }
            throw this.printError(ctx,` la variable ${key} no existe`);
        }

        if (ctx.Identifier()) {
            const key = ctx.children[0].getText();
            const value = this.scopeManager.retrieve(key);
            if(value){
                if (ctx.Dot()) {
                    const object = this.scopeManager.retrieve(value.type);
                    if(object){
                        if (object.type != constants.OBJECT)
                            throw this.printError(ctx, ' solo se puede acceder a atributos en clases');
                        var lastI = ctx.children.length-1;
                        const value2 = value.value.value.searchValue(ctx.children[lastI].getText());
                        return new TypeAnalyze(value2.type, value2.value);
                    }
                    throw this.printError(ctx, `el objeto '${value.type}' no existe`);
                }
                return new TypeAnalyze(value.type, value.value);
            }
            throw this.printError(ctx,` la variable '${key}' no existe `);
        }

        

    }

    visitUnary(ctx){
        const value = this.visit(ctx.expression());
        switch(ctx.children[0].getText()){
            case '!':
                if(value.type == constants.BOOLEAN){
                    return new TypeAnalyze(value.type,!Boolean(value.value),ctx);
                }
                throw this.printError(ctx," Solo puede usar ! con valores boolean")
            case '-':
                if(value.type == constants.INTEGER){
                    return new TypeAnalyze(value.type,-Number(value.value),ctx);
                }
                throw this.printError(ctx," solo pude crear integers negativos")
        }
        throw "Unary Error"
    }

    visitAllocationExpression(ctx){
        const key = ctx.Identifier().getText();
        const value = this.scopeManager.retrieve(key);
        if(value){
            if(value.type != constants.OBJECT){
                throw this.printError(ctx, 'solo objetos');
            }
            return new TypeAnalyze(key,value);
        }
        throw this.printError(ctx, `'${key}' no existe`);
    }

    visitArrayAllocationExpression(ctx){
        const type = this.simpleTypeScan(ctx.children[1].getText());
        const arrayType = this.getSingleValueArray(type);
        const result = this.visit(ctx.expression());
        if(result.type != constants.INTEGER)
            throw this.printError(ctx, `solo se pueden usar integers como indices`);
        if(result.value <0)
            throw this.printError(ctx, `el indice debe ser un numero positivo`);
        
            console.log("Creacion ",result.value)
        var lastI = this.queue.length-1;
        if(lastI >=0){
            
            if(this.queue[lastI].runOthers){
                if(result.value){
                    return new TypeAnalyze(arrayType,new Array( Number(result.value)));}
                else{
                    throw this.printError(ctx, ` valor nulo`);
                }
            }
            
            return new TypeAnalyze(arrayType,[]);
        }else{
            if(result.value){
                return new TypeAnalyze(arrayType,new Array( Number(result.value)));}
            else{
                throw this.printError(ctx, ` valor nulo`);
            }
        }
        
    }

    visitSubExpression(ctx){
        const result = this.visit(ctx.expression());
        return result
    }

    visitFunctionCall(ctx) {
        const key = ctx.Identifier().getText();
        const value = this.scopeManager.retrieve(key);
        if(value){
            var lastFunction = this.queue.length-1;
            
            var params = [];
            if(ctx.actualParams()){
                params = this.visit(ctx.actualParams());
            }

            if(params.length == value.value.length){
                this.scopeManager.openScope();
                //analizo si los tipos son el mismo;
                for(let x = 0; x < params.length; x++){
                    if (params[x].type != value.value[x].type)
                        throw this.printError(ctx, ` Tipos de datos distintos en la llamada a la funcion '${key}'`);
                    else{
                        this.scopeManager.enter(value.value[x].value,value.value[x].type,params[x].value,value.value[x].ctx)
                        console.log(value.value[x].value,params[x].value)
                    }
                }
                //aqui debería analizar la funcion y optener el resultado de la funcion
                
                var resultFunction = null;
                if(lastFunction >=0){
                    if(this.queue[lastFunction].runOthers ){
                        this.queue.push({type:value.type,haveReturn:false,runOthers:true});
                        this.getFunctionResult(value.context);
                        resultFunction  = this.queue.pop().value.value;
                    }
                    else{
                        if(value.type >= 6 && value.type <= 9){
                            resultFunction = [];
                        }
                    }
                }else{
                    this.queue.push({type:value.type,haveReturn:false,runOthers:true});
                        this.getFunctionResult(value.context);
                        resultFunction  = this.queue.pop().value.value;
                }
                this.scopeManager.closeScope();
                return new TypeAnalyze(value.type, resultFunction);
            }
            throw this.printError(ctx, ` La función '${key}' solo recibe ${value.value.length} pero se estan pasando ${params.length}`);
        }
        throw this.printError(ctx, ` La funcion '${key}' no existe`);
    }

    getFunctionResult(ctx){
        var lastI = ctx.children.length-1;
        return this.visitBlock(ctx.children[lastI]);
    }

    visitActualParams(ctx){
        return this.visit(ctx.expression());
    }

    visitArrayLookup(ctx){
        const key = ctx.children[0].getText();
        
        const value = this.scopeManager.retrieve(key);
        if(value){
            const result = this.visit(ctx.expression());
            if(result.type != constants.INTEGER)
                throw this.printError(ctx, 'solo se permite integers');
            const type = this.getSingleArrayValue(value.type);
            return new TypeAnalyze(type,value.value[result.value],ctx);
        }
        throw this.printError(ctx, `${key}' no existe`);
    }

    getSingleArrayValue(type){
        switch(type){
            case constants.BOOLEAN_ARRAY:
                return constants.BOOLEAN;
            case constants.INTEGER_ARRAY:
                return constants.INTEGER;
            case constants.STRING_ARRAY:
                return constants.STRING;
            case constants.CHAR_ARRAY:
                return constants.CHAR;
        }
    }

    getSingleValueArray(type){
        switch(type){
            case constants.BOOLEAN:
                return constants.BOOLEAN_ARRAY;
            case constants.INTEGER:
                return constants.INTEGER_ARRAY;
            case constants.STRING:
                return constants.STRING_ARRAY;
            case constants.CHAR:
                return constants.CHAR_ARRAY;
        }
    }
}

const TypeAnalyze = class TypeAnalyze {
    constructor(type, value,ctx) {
        this.type = type;
        this.value = value;
        this.ctx = ctx;
    }
}




module.exports;