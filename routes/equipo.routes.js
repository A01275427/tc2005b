const express = require('express');
const app = express();

const bodyParser = require('body-parser');

const router = express.Router();

const path = require('path');

app.use(bodyParser.urlencoded({extended: false}));
let equipo = [
    {
        agarre:"Anatomico",
        imagen:"https://http2.mlstatic.com/D_NQ_NP_958731-MLA48578386701_122021-O.webp",
        descripcion:"Se adaptan a la mano en forma por por lo que están aconsejados para personas con manos grandes a las que les gusta sentir que usan toda la superficie de la pala."
    },
    {
        agarre:"Recto",
        imagen:"https://http2.mlstatic.com/D_Q_NP_655478-MLA48578011679_122021-O.webp",
        descripcion:"Son más anchos por el extremo del mango y más estrechos en la conexión con la cabeza de la pala. Una forma diseñada para evitar que la pala se resbale de las manos. En este tipo existen algunos modelos que varían la anchura del mango, por lo que se puede conseguir un agarre casi perfecto."
    },
    {
        agarre:"Concavo",
        imagen:"https://http2.mlstatic.com/D_NQ_NP_953046-CBT68938758100_042023-O.webp",
        descripcion:"Se adaptan a la mano en forma por por lo que están aconsejados para personas con manos grandes a las que les gusta sentir que usan toda la superficie de la pala."
    }
]
equipo.push({
    agarre: request.body.agarre,
    imagen: "https://http2.mlstatic.com/D_NQ_NP_958731-MLA48578386701_122021-O.webp",
    descripcion: request.body.descripcion,
})

app.use((request, response, next) => {
    console.log('Middleware');
    next();//Le permite a la petición avanzar hacia el siguiente middleware
});

app.use((request, response, next) => {
    console.log('Otro middleware!');
    response.send('¡Hola mundo!'); //Manda la respuesta
});


app.get('/',(request, response, next) => {
    const html =` 
    <!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Laboratorios</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
    <link rel="stylesheet" href="lab6.css">
</head>
<body>
    <header>
        <nav class="navbar is-dark" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
                <a class="navbar-item" href="#">
                    <img src="https://cdn.pixabay.com/photo/2022/05/23/16/05/table-tennis-7216580_1280.png" alt="Tenis de Mesa" width="20" height="20">
                </a>
                <section class="section">
                    <div class="container">
                        <h1 class="title is-4">Tenis de Mesa</h1>
                    </div>
                </section>
                <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
                </div>
                <div class="tile">
                </div>

                <div id="navbarBasicExample" class="navbar-menu">
                <div class="navbar-start">
                    <a class="navbar-item">
                    Inicio
                    </a>
            
                    <a class="navbar-item">
                    Historia
                    </a>
            
                    <div class="navbar-item has-dropdown is-hoverable">
                    <a class="navbar-link">
                        Mas
                    </a>
            
                    <div class="navbar-dropdown">
                        <a class="navbar-item">
                        Ranking
                        </a>
                        <a class="navbar-item">
                        Arbitraje
                        </a>
                        <a class="navbar-item">
                        Contact
                        </a>
                        <hr class="navbar-divider">
                        <a class="navbar-item">
                        Soporte
                        </a>
            </div>
        </nav>
        
    </header>
    <main>
        <section class="section">
            <div class="container">
                <h2 class="title is-4">Informacion General</h2>
                <ul class="buttons">
                    <li><button class="button is-transparent">Torneos</button></li>
                    <li><button class="button is-transparent">Categoria</button></li>
                    <li><button class="button is-transparent">Reglas</button></li>
                    <li><button class="button is-transparent">Equipo</button></li>
                </ul>
            </div>

            <div class="columns">
            <div class="column">
                <figure class="image">
                    <img class="is-rounded" src="https://http2.mlstatic.com/D_NQ_NP_958731-MLA48578386701_122021-O.webp">
                </figure>
            </div>
            <div class="column">
                <figure class="image">
                    <img class="is-rounded" src="https://http2.mlstatic.com/D_Q_NP_655478-MLA48578011679_122021-O.webp">
                </figure>
            </div>
            <div class="column">
                <figure class="image">
                    <img class="is-rounded" src="https://http2.mlstatic.com/D_NQ_NP_953046-CBT68938758100_042023-O.webp">
                </figure>
            </div>
            <button id="boton_imagen" class="button is-info is-rounded">Info Equipo</button>


            <div id="equipo"></div>
        </section>
        <section id="cajaNombre">
        <div>
            <form class="box is-transparent">
            <div class="field">
                <label for="Nombre">Nombre</label>
                <div class="control">
                <input id="Nombre" class="input" type="text" placeholder="Usuario-123">
                </div>
            </div>
        </div>
        </section>
        <section class="section">
            <div class="container">
                <h3 class="title is-5">Datos de Altleta</h3>
                <table class="table", style="background-color: transparent;">
                    <caption></caption>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Fecha Nacimiento</th>
                            <th>Edad</th>
                            <th>Categoria</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Arturo Sanchez Rodriguez</td>
                            <td>27/08/2002</td>
                            <td>21</td>
                            <td>Sub-21</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <br>
            <framset>
                <div class="container">
                    <h5 id="title">
                        HolaHolaaaa
                    </h5>
                </div>
            </framset>
        </section>
    </main>
    <footer class="section">
        <div class="container">
            <h4 class="title is-5">Referencias</h4>
        </div>
    </footer>
    <script src="lab6.js"></script>
</body>
</html>
`;
    
    response.send(html);
});

app.get('/ola', (request, response, next) => {
    const html = `
    <main>
    <section class="section">
        <div class="container">
            <h1 class="title">Laboratorio 11: Express</h1>
            <p class="subtitle">Arturo Sánchez Rodríguez - A01275427</p>
        </div>
    </section>
    <section class="section">
        <div class="container">
            <h2 class="title is-4">Aprendizajes</h2>
            <ul class="buttons">
                <li><button class="button is-primary">HTML</button></li>
                <li><button class="button is-primary">JavaScript</button></li>
                <li><button class="button is-primary">Git</button></li>
                <li><button class="button is-primary">Terminal</button></li>
            </ul>
        </div>
    </section>
    <section class="section">
        <div class="container">
            <h2 class="title is-4">Datos Personales</h2>
            <table class="table">
                <caption>Datos Personales</caption>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Fecha Nacimiento</th>
                        <th>Edad</th>
                        <th>Carrera</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Arturo</td>
                        <td>27/08/2002</td>
                        <td>20</td>
                        <td>ITC</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </section>
</main>
`
    response.send();
})

app.post('/new', (request, response, next) => {

    console.log(request.body);

    response.redirect('/');

});

app.use((request, response, next) => {
    console.log('Otro middleware!');
    response.statusCode = 404;
    response.send('Es película es muuuy independiente'); //Manda la respuesta

});

app.listen(3000);

module.exports = router;
