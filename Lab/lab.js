const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

app.use((request, response, next) => {
    console.log('Middleware');
    next();//Le permite a la petición avanzar hacia el siguiente middleware
});


app.post((request, response, next) => {
    response.statusCode = 404;
    response.send('Es película es muuuy independiente'); //Manda la respuesta

});

const rutasMotos = require('./routes/lab.routes');

app.use('/Lab', rutasMotos);

app.use((request, response, next) => {

    console.log('Otro middleware!');

})


app.listen(3000);
