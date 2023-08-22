const express = require('express');
const app = express();

//Middleware
app.use((request, response, next) => {
    console.log('Middleware!');
    next(); //Le permite a la petición avanzar hacia el siguiente middleware
});

app.get('/new', (request, response, next) => {

    const html = `
    <!DOCTYPE html>
    <html>
    <head>
    <meta charset="utf-8">
    <title>Películas</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    </head>
    <body>
    <header>
    <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
    <a class="navbar-item" href="https://bulma.io">
    <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: Free, open source, and modern CSS framework based on Flexbox" width="112" height="28">
    </a>
    
    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
    <span aria-hidden="true"></span>
    <span aria-hidden="true"></span>
    <span aria-hidden="true"></span>
    </a>
    </div>
    </nav>
    </header>
    <main>
    <section class="section">
    <div class="container">
    <h1 class="title">Registro de películas</h1>
    <form action="/new" method="POST">
    <label for="nombre">Nombre de la película</label>
    <input id="nombre" name="nombre" class="input" type="text" placeholder="Oppenheimer">
    <br><br>
    <label for="sinapsis">Sinapsis de la película</label>
    <textarea id="sinapsis" name="sinapsis" class="textarea" placeholder="La historia de la bomba atómica"></textarea>
    <br>
    <input id="registrar" name="registrar" type="submit" value="Registrar" class="button is-info">
    </form>
    </div>
    </section>
    </main>
    </body>
    </html>
    `;
    
    response.send(html);
});

app.post('/new', (request, response, next) => {

    console.log(request.body);

    response.redirect('/');

});

app.use((request, response, next) => {
    console.log('Otro middleware!');
    response.send('¡Hola mundo!'); //Manda la respuesta
});

app.listen(3000);