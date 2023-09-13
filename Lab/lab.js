const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.static(path.join(__dirname, 'public')));

// Importa tus rutas
const ruta1 = require('../routes/motos.routes.js');
const ruta2 = require('../routes/user.routes.js');

// Usa tus rutas
app.use('/ruta1', ruta1);
app.use('/ruta2', ruta2);

// Manejo de errores 404
app.use((req, res, next) => {
    res.status(404).render('404', { pageTitle: 'Página no encontrada' });
});

app.listen(3000);



/*
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.listen(3000, () => {
    console.log('Servidor corriendo en el puerto 3000');
});



app.set('view engine', 'ejs');
app.set('views', 'views');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use((request, response, next) => {
    console.log('Middleware');
    next();
});

const rutamoto = require('../routes/motos.routes');

app.use('/', rutamoto);

app.use((request, response, next) => {
    console.log('Otro middleware!');
    response.statusCode = 404;
    response.send('Página no encontrada');
});
*/


