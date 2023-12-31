/*console.log("hola desde node!");

//fs es el módulo de filesystem de node, 
//que sirve para acceder a los métodos para manipular el sistema de archivos
const filesystem = require('fs');

//writeFileSync es un método que sirve para escribir en un archivo de manera síncrona.
//Por default, los métodos de node son asíncronos.
filesystem.writeFileSync('hola.txt', 'Hola desde node');

console.log("Ya acabé de escribir el archivo");

//Imprime a los 7 segundos un mensaje
setTimeout( () => { 
        console.log("Ya te hackié jojojo"); 
    }, 7000);

//El siguiente código imprime de manera asíncrona el arreglo ordenado
const arreglo = [5000, 60, 90, 100, 10, 20, 10000, 0, 120, 2000, 340, 1000, 50];

for (let item of arreglo) {
    setTimeout(() => {
        console.log(item);
    }, item);
} 

//El módulo http contiene las funciones para 
//recibir peticiones HTTP y enviar respuestas de HTTP
const http = require('http');
*/

const server = http.createServer( (request, response) => {    
    console.log(request.url);

    if (request.url == "/") {

        response.setHeader('Content-Type', 'text/html');
        response.write(`
<<!DOCTYPE html>
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
</html>`);

        response.end();

    } 
    
    else if(request.url == "/equipo") { 
        response.write(`<div class="columns">
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
    <div>`)
    }
    
    

    else if(request.url == "/ola" && request.method == "GET") {
        
        response.write(404);

        response.end();

    }

    /*
    const datos = [];

    request.on('data', (dato) => {
        console.log(dato);
        datos.push(dato);
    });

    return request.on('end', () => {
        const datos_completos = Buffer.concat(datos).toString();
        console.log(datos_completos);
        const nuevo_dato = datos_completos.split('=')[1];
        return response.end();
    });
    */
});

server.listen(3000);