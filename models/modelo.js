class Modelo {
    constructor(my_value) {
    this.attribute_1 = my_value;
    }

    save() {
    objetos.push(this);
    }

    static fetchAll() {
    return objetos;
    }
}

const objetos = [];
module.exports = Modelo;
