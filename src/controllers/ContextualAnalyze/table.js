const Value = require('./value').Value;
const Constants = require('./constants').CONSTANTS;

exports.Table = class Table { // una tabla es un ambito

    constructor() {
        this.generateTable();
        this.active = true;
    }

    generateTable() {
        this.table = new Array(Constants.HASH_LENGTH);  // table sería [ ] 
        for (let i = 0; i < Constants.HASH_LENGTH; i++) {
            this.table[i] = []; // quedaría [ [], [] ]
        }
    
    }

    generateHash(key) {
        let temp = 0;
        let i = 0;
        while (i < key.length ) {
            temp = ((temp << Constants.SHIFT) +  key.charCodeAt(i)) % Constants.HASH_LENGTH;
            ++i;
        }
        return temp;
    }

    insertValue(key, context, value, type) {
        let index = this.generateHash(key);
        let vars = new Value(key, type, value, context);
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

    updateValue(key,value) {
        let result = this.searchValue(key)
        if (result) {
            result.value = value
            return true;
        }
        return false;
    }

}

module.exports;