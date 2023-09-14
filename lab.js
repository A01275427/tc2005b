const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

const motosRoutes = require('./routes/motos.routes');
app.use('/', motosRoutes);

app.listen(3000, () => {
    console.log('Servidor corriendo en el puerto 3000');
});
