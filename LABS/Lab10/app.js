console.log("hola desde node!");

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

const server = http.createServer( (request, response) => {    
    console.log(request.url);
    console.log(request.method);

    if (request.url == "/") {

        response.setHeader('Content-Type', 'text/html');
        response.write(`
<!DOCTYPE html>
<html>
<head>
    <title>Arturo Sanchez Rodriguez, estudiante en el Tecnológico de Monterrey</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">
    <style>
        /* Tu estilo personalizado aquí */
        body {
            color: black;
        }
    </style>
    <link rel="stylesheet" href="lab3.css">
</head>
<body>
    <header>
        <h1>Arturo Sánchez Rodríguez, estudiante en el Tecnológico de Monterrey</h1>
    </header>
    <main class="section">
        <div class="container">
            <h2 class="title">Carrera ITC:</h2>
            <p>
                La carrera de ingeniería de tecnologías computacionales es una carrera del modelo Tec21, en la cual aprendemos a ser programadores y enfrentarnos con retos que nos preparan para la vida profesional.
            </p>
            <h3 class="subtitle">Materiales que ocupamos:</h3>
            <ul>
                <li>Computadora</li>
                <li>Programa para programar</li>
                <li>Ordenador</li>
                <li>Github</li>
                <li>ETC</li>
            </ul>
            <h4 class="title">Materias que más me gustan:</h4>
            <ol class="gustan">
                <li>Matemáticas</li>
                <li>Programación</li>
                <li>Idiomas</li>
            </ol>
            <table class="table">
                <thead>
                    <tr>
                        <th><h5 class="title">Escuelas:</h5></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td id="TEC">TEC</td>
                    </tr>
                </tbody>
            </table>
            <footer>
                <td style="color: yellow">Fecha: 13 de Agosto del 2023</td>
            </footer>
        </div>
    </main>
</body>
</html>`);

        response.end();

    } 
    
    else if(request.url == "/titulo" && request.method == "POST") { 
        response.write(``)
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