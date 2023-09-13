const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');

let moto = [

    {
        nombre: "Enduro",
        imagen: "https://cdn05.zipify.com/AjYhTwQQbjYOyVeVbMTAsqEMVck=/fit-in/1030x0/adf540beb8b94502855eb58f2bc300c2/104352_fe-250-2023.jpeg",
        descripcion: "El enduro es una carrera en motocicleta o bicicleta en la que básicamente se deben superar obstáculos logrando el mejor tiempo posible y teniendo la mejor pericia sobre el vehículo."
    },
    {
        nombre: "Cross",
        imagen: "https://cdn05.zipify.com/bm6SD-f3RQ27x_vMame8Ye_zyok=/fit-in/1030x0/9c129927277041ec80880ba23798550a/434070_125-sx-my23-90-right_my23_01-studio.jpeg",
        descripcion: "Motocross. A menos que se homologuen y matriculen, las motos de motocross tampoco están autorizadas a circular públicamente. Ligeras y muy manejables, cuentan con motores de 2 y 4 tiempos, suspensiones blandas y neumáticos con tacos para maximizar el agarre y ofrecer una mayor seguridad."
    },
    {
        nombre: "Doble Proposito",
        imagen: "https://i5.walmartimages.com.mx/mg/gm/3pp/asr/4107d3c9-30ef-4b73-8fec-fb0dab37d735.d825a96f3c2b2d6882efa602deeb8f68.png?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
        descripcion: "Las motos doble propósito, conocidas también como Trail, BigTrail o Adventure, son motocicletas que tienen la capacidad de funcionar en diversos caminos, pistas, carreteras pavimentadas o no. Están diseñadas para competir en prácticas donde las motos se destacan por su polivalencia."
    },
];


router.post('/submit-form', (req, res) => {
    const nombre = req.body.nombre;    
    fs.appendFile('datos.txt', `Nombre: ${nombre}\n`, err => {
        if (err) {
            console.error(err);
            return res.status(500).send('Ocurrió un error al guardar los datos');
        }        
        res.send('Datos recibidos y guardados');
    });
});


router.get('/dobleprop', (request, response, next) => {
    response.sendFile(path.join(__dirname, '..', 'views', 'doble.html'));
});

router.post('/dobleprop', (request, response, next) => {
    console.log(request.body);
    moto.push({
        nombre: request.body.nombre,
        imagen: "https://i5.walmartimages.com.mx/mg/gm/3pp/asr/4107d3c9-30ef-4b73-8fec-fb0dab37d735.d825a96f3c2b2d6882efa602deeb8f68.png?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
        descripcion: request.body.descripcion,
    });

    response.redirect('/Lab');

});



router.get('/enduro', (request, response, next) => {
    response.render('moto/list');
});


router.use('/cross', (request, response, next) => {
    const html = `
    <!DOCTYPE html>
<html>
    <head>
        <title>
            CROSS
        </title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Laboratorios</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
        <link rel="stylesheet" href="cross.css">
    </head>
    <body>
        <header>
            <nav class="navbar is-info" role="navigation" aria-label="main navigation">
                <div class="navbar-brand">
                    <a class="navbar-item" href="#">
                        <figure class="image is 20x20">
                            <img src="https://w7.pngwing.com/pngs/864/664/png-transparent-fox-logo-fox-racing-logo-desktop-blue-motocross-blue-angle-white-thumbnail.png" alt="Motocross" width="95" height="200">
                        </figure>
                    </a>
                    <section class="section">
                        <div class="container">
                            <h1 class="title is-5">CROSS</h1>
                        </div>
                    </section>
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
                <br>
                <br>
                <br>
                <div class="columns">
                <div class="column">
                    <figure class="image">
                        <img src="https://ucarecdn.com/6012218f-45cf-4fa3-9ad1-2cfaf907f87f/-/format/auto/-/preview/1024x1024/-/quality/lighter/Motocicletas-offroad.png">
                    </figure>
                </div>
                <button id="boton_imagen" class="button is-info is-rounded">Info Eventos</button>
                <div id="equipo"></div>
            </section>
            
        </main>
    </body>
</html>
    ` 
    response.send('html')
});

router.use('/',(request, response, next) => {
    const html =` 
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Laboratorio</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
        <link rel="stylesheet" href="lab.css">
    </head>
    <body>
        <header>
            <nav class="navbar is-dark" role="navigation" aria-label="main navigation">
                <div class="navbar-brand">
                    <a class="navbar-item" href="#">
                        <figure class="image is 20x20">
                            <img src="https://w7.pngwing.com/pngs/864/664/png-transparent-fox-logo-fox-racing-logo-desktop-blue-motocross-blue-angle-white-thumbnail.png" alt="Motocross" width="95" height="200">
                        </figure>
                    </a>
                    <section class="section">
                        <div class="container">
                            <h1 class="title is-5", style="color:white"> El Camino Motocicletas</h1>
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
                            Equipo
                            </a>
                            <a class="navbar-item">
                            Ropa
                            </a>
                            <a class="navbar-item">
                            Herramientas
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
                <br>
                <br>
                <br>
                <div class="columns">
                <div class="column">
                    <figure class="image">
                        <img src="https://hansenmxschool.com/wp-content/uploads/2017/11/Fox-Raceway-Logo-2280x987-Clipped-2.png">
                    </figure>
                </div>
                <div class="column">
                    <figure class="image">
                        <img src="https://www.2xpromotions.com/wp-content/uploads/2021/01/2022_motocrosssm.png">
                    </figure>
                </div>
                <div class="column">
                    <figure class="image">
                        <img src="https://redbudmx.com/wp-content/uploads/2023/06/2023_ProMX_RedBud_TitleSponsor_REVERSE.png">
                    </figure>
                </div>
                <button id="boton_imagen" class="button is-info is-rounded">Info Eventos</button>
    
    
                <div id="equipo"></div>
            </section>
            <section id="cajaNombre">
            <div>
                <form class="box", style="background-color: transparent">
                <div class="field">
                    <label for="Nombre", style="color:white">Nombre</label>
                    <div class="control">
                    <input id="Nombre" class="input" type="text" placeholder="Usuario-123">
                    </div>
                </div>
            </div>
            </section>
            <section class="section">
                <div class="container">
                    <h3 class="title is-5">Datos de Altleta</h3>
                    <table class="table", style="background-color: transparent">
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
                    <div class="container">
                        <h5 id="title">
                            HolaHolaaaa
                        </h5>
                    </div>
            </section>
        </main>
        <footer class="section">
            <div class="container">
                <h4 class="title is-5">Referencias</h4>
            </div>
        </footer>
        <script src="lab.js"></script>
    </body>
    </html>
    
    
    
    <!---Links de referencia-->
    <!---https://blog.hubspot.es/website/como-poner-imagen-en-html#:~:text=Si%20deseas%20establecer%20una%20imagen,en%20versiones%20anteriores%20de%20HTML.-->
    
`;
    
    response.send(html);
});

module.exports = router;


/*
router.get('/', (request, response) => {
    // Define your route logic here
    res.send('This is the /enduro route');
  });
*/