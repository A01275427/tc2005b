const express = require('express');

const app = express();

const bodyParser = require('body-parser');

//const router = require('./router'); 


app.use(bodyParser.urlencoded({extended: false}));

app.use((request, response, next) => {
    console.log('Middleware');
    next();//Le permite a la petición avanzar hacia el siguiente middleware
});


app.post((request, response, next) => {
    response.statusCode = 404;
    response.send('Es película es muuuy independiente'); //Manda la respuesta

});


const rutamoto = require('../routes/lab.routesa');

//app.use('/enduro', rutamoto);



app.use((request, response, next) => {
    console.log('Otro middleware!');
    response.statusCode = 404;
    response.send('Es película es muuuy independiente'); //Manda la respuesta

});
