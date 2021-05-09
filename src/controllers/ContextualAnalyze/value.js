 // un valor es una varaible, funcion,clase, etc..
exports.Value = class Value {
    constructor(id, type, value, context) {
        this.id = id; //nombre 
        this.type = type; // tipo (Int,boolean,..)
        this.value = value; // valor que posee
        this.context = context; // el objeto en el arbol
    }
}

/**
 * id: variable
 * type:int
 * value
 */

module.exports;