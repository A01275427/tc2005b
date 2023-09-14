
const Modelo = require('../models/modelo');

exports.action = (request, response, next) => {
    const objeto = new Modelo('Valor de la instancia');
    objeto.save();

    const objetos = Modelo.fetchAll();

response.render('view_file', { 
    atribute_1: 'Data 1', 
    atribute_2: 'Data 2',
    objetos: objetos
});
};
