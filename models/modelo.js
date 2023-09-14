class Modelo {
    constructor(my_value) {
        this.attribute_1 = my_value;
    }

    static objetos = [];

    save() {
        Modelo.objetos.push(this);
    }

    static fetchAll() {
        return Modelo.objetos;
    }
}

module.exports = Modelo;
