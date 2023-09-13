const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');


app.set('view engine', 'ejs');
app.set('views', 'views');

app.listen(3000, () => {
    console.log('Servidor corriendo en el puerto 3000');
});


app.use(bodyParser.urlencoded({ extended: false }));

//Para acceder a los recursos de la carpeta public
app.use(express.static(path.join(__dirname, 'public')));

app.use((request, response, next) => {
    console.log('Middleware');
    next();
});

const rutamoto = require('./routes/motos.routes');

app.use('/', rutamoto);

app.use((request, response, next) => {
    console.log('Otro middleware!');
    response.statusCode = 404;
    response.send('Página no encontrada');
});



