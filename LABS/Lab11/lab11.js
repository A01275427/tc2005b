const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

let equipo = [
    {
        agarre:"Enduro",
        imagen:"https://cdn05.zipify.com/AjYhTwQQbjYOyVeVbMTAsqEMVck=/fit-in/1030x0/adf540beb8b94502855eb58f2bc300c2/104352_fe-250-2023.jpeg",
        descripcion:"Se adaptan a la mano en forma por por lo que están aconsejados para personas con manos grandes a las que les gusta sentir que usan toda la superficie de la pala."
    },
    {
        agarre:"Cross",
        imagen:"https://cdn05.zipify.com/bm6SD-f3RQ27x_vMame8Ye_zyok=/fit-in/1030x0/9c129927277041ec80880ba23798550a/434070_125-sx-my23-90-right_my23_01-studio.jpeg",
        descripcion:"Son más anchos por el extremo del mango y más estrechos en la conexión con la cabeza de la pala. Una forma diseñada para evitar que la pala se resbale de las manos. En este tipo existen algunos modelos que varían la anchura del mango, por lo que se puede conseguir un agarre casi perfecto."
    },
    {
        agarre:"Doble Proposito",
        imagen:"https://i5.walmartimages.com.mx/mg/gm/3pp/asr/4107d3c9-30ef-4b73-8fec-fb0dab37d735.d825a96f3c2b2d6882efa602deeb8f68.png?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
        descripcion:"Se adaptan a la mano en forma por por lo que están aconsejados para personas con manos grandes a las que les gusta sentir que usan toda la superficie de la pala."
    }
]

app.post('/', (request, response, next) => {
    const agarre = request.body.agarre;
    const descripcion = request.body.descripcion;

    // Añadir los datos al arreglo equipo
    equipo.push({
        agarre: agarre,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_958731-MLA48578386701_122021-O.webp",
        descripcion: descripcion,
    });

    // Enviar una respuesta si es necesario
    response.send('Datos agregados correctamente');
});


app.use((request, response, next) => {
    console.log('Middleware');
    next();//Le permite a la petición avanzar hacia el siguiente middleware
});

/*
app.use((request, response, next) => {
    console.log('Otro middleware!');
    response.send('¡Hola mundo!'); //Manda la respuesta
});
*/

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

app.use('/',(request, response, next) => {
    const html =` 
    <!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Laboratorios</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
    <link rel="stylesheet" href="lab11.css">
</head>
<body>
    <header>
        <nav class="navbar is-dark" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
                <a class="navbar-item" href="#">
                    <figure class="image is 20x20">
                        <img src="https://o.remove.bg/downloads/ed17a291-158f-49be-8c29-ff382ec51cc5/cascooo-removebg-preview.png" alt="Motocross" width="95" height="200">
                    </figure>
                </a>
                <section class="section">
                    <div class="container">
                        <h1 class="title is-2">Motocross</h1>
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
                        Comunidad
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
    <script src="lab11.js"></script>
</body>
</html>
`;
    
    response.send(html);
});




app.use((request, response, next) => {
    response.statusCode = 404;
    response.send('Es película es muuuy independiente'); //Manda la respuesta

});

app.listen(3000);
