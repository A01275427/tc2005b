class Moto {
    constructor(name, model, year) {
        this.name = name;
        this.model = model;
        this.year = year;
    }

    save() {
        Moto.motos.push(this);
    }

    static fetchAll() {
        return Moto.motos;
    }
}

Moto.motos = [];

module.exports = Moto;
