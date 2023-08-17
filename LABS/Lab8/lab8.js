console.log("hola desde node");

// fs es el modulo de filsystem de node, que sirve para acceder métodos para manupular el sistema de archivos
const filesystem = require('fs'); //Solamente la tiene Node, no la tiene el navegador (para procesar archivos)

//writeFileSync es un método que sirve para escribir en un archio de manera sincrónica. Por default, los métodos de node son asíncronos
filesystem.writeFileSync('hola.txt', 'Hola desde node');//Node maneja código asincrono, no se ejucta de manera secuencial

console.log("YA ACABE");
//Imprime a los 7 segundos el código

setTimeout( () => {console.error("Ya te hackié jojojojo")}, 11000)

const arreglo = [5000, 60, 90, 100, 10, 20, 10000, 0, 120, 2000, 340, 1000, 50];

//El siguiente código imprime de manera asíncrona el arreglo ordenado
for(let item of arreglo){
    setTimeout(()=>{
        console.log(item)
    }, item)
}

//El módulo http contiene las fucnioes para recibir peticiones http y enviar respuestas http
const http = require('http');

const server = http.createServer((request, response) => {
    console.log(request.url);
    response.setHeader('Content-Type', 'text/html');
    response.write(`
    <!DOCTYPE html>
<html>
<head>
    <title>Arturo Sanchez Rodriguez, estudiante en el Tecnológico de Monterrey</title>
    <style>
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
    <main>
        <h2>Carrera ITC:</h2>
        <p>
            La carrera de ingeniería de tecnologías computacionales es una carrera del modelo Tec21, en la cual aprendemos a ser programadores y enfrentarnos con retos que nos preparan para la vida profesional.
        </p>
        <h3>Materiales que ocupamos:</h3>
        <ul>
            <li>Computadora</li>
            <li>Programa para programar</li>
            <li>Ordenador</li>
            <li>Github</li>
            <li>ETC</li>
        </ul>
        <h4>Materias que más me gustan:</h4>
        <ol class="gustan">
            <li>Matemáticas</li>
            <li>Programación</li>
            <li>Idiomas</li>
        </ol>
        <table>
                <h5>Escuelas:</h5>
            <tbody>
                <tr>
                    <td id="TEC">TEC</td>
                </tr>
            </tbody>
        </table>
        <footer>
            <td style="color:yellow">Fecha: 13 de Agosto del 2023</td>
        </footer>
    </main>
</body>
</html>
    `);
    response.end();
});

server.listen(3000);