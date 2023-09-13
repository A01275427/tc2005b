const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

const bodyParser = require('body-parser');



app.use(bodyParser.urlencoded({ extended: false }));

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

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});



/*
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

app.use((request, response, next) => {
    console.log('Middleware');
    next();//Le permite a la petición avanzar hacia el siguiente middleware
});


const rutamoto = require('../routes/lab.routes');

app.use('/enduro', rutamoto);



app.use((request, response, next) => {
    console.log('Otro middleware!');
    response.statusCode = 404;
    response.send('Es película es muuuy independiente'); //Manda la respuesta

});
*/