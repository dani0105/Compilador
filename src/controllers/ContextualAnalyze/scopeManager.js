const Table = require('./table').Table;
const TYPES_CONSTANTS = require('./constants').TYPES_CONSTANTS;
const CONSTANTS = require('./constants').CONSTANTS;

exports.ScopeManager = class ScopeManager { // almacenaría todas los ambitos

    constructor() {
        this.scopes = [];
        this.initScope();
        this.declarationTree = [];
    }

    initScope() {
        let scope = new Table();
        scope.insertValue('chr',null,[{type:CONSTANTS.INTEGER}],CONSTANTS.CHAR);
        scope.insertValue('ord',null,[{type:CONSTANTS.CHAR}],CONSTANTS.INTEGER);
        scope.insertValue('len',null,[{type:CONSTANTS.STRING}],CONSTANTS.INTEGER);

        this.scopes.push(scope) // esto es como una pila
    }

    openScope() {
        this.scopes.push(new Table());
    }

    enter(id,type,value,context) {
        let index = this.scopes.length-1;
        const another = this.retrieve(id);
        if(another)
            throw "Already Exist";
        
        this.declarationTree.push({type:TYPES_CONSTANTS[type],name:id})
        return this.scopes[index].insertValue(id,context,value,type)
    }

    existInScopes(key){
        return this.retrieve(key)? true:false;
    }

    retrieve(key) {
        //Este solobusca en el nivel actual
        //return this.scopes[this.scopes.length-1].searchValue(key);


        //Este busca desde el ultimo nivel hasta el primero
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

    getCurrentScope(){
        let level = this.scopes.length-1;
        return this.scopes[level];
    }

}

module.exports;