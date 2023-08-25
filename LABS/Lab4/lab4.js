alert("Ya lo logre profe LOL");

console.error("Este es un mensaje de error");

/*const nombre = prompt("Como te llamas?");
console.log("Hola " + nombre);

console.assert();*/


//Ejercicio1.- Entrada: un número pedido con un prompt. 
//Salida: Una tabla con los números del 1 al número dado con sus cuadrados y cubos. 
//Utiliza document.write para producir la salida 

document.write("Ejercicio 1 <br></br>");

var numero = parseInt(prompt("Ingresa un número QUE SEA UN NUMERO NORMAAAAALLL xfa"));

if(!isNaN(numero)){
    document.write("<style>");
    document.write("table { border-collapse: collapse; width: 100%; }");
    document.write("th, td { border: 1px solid black; padding: 8px; text-align: center; }");
    document.write("</style>");
    document.write("<table>");
    document.write("<tr><th>Número</th><th>Cuadrado</th><th>Cubo</th></tr>");

    for(var i = 1; i<= numero; i++){
        var cuad = i*i;
        var cub = i*i*i;
        document.write("<tr><td>" + i + "</td><td>" + cuad + "</tr><td>" + cub + "</td></tr>");
    }
    document.write("</table>");
}else{
    document.write("No fue válido tu número mijit@");
}

let tabla = `<table>`;



//Ejercicio2.-
//Entrada: Usando un prompt se pide el resultado de la suma de 2 números generados de manera aleatoria. 
//Salida: La página debe indicar si el resultado fue correcto o incorrecto, y el tiempo que tardó el 
//usuario en escribir la respuesta. 

document.write("<br></br> Ejercicio 2 <br></br>");

var rannum1 = Math.floor(Math.random()*10);

var rannum2 = Math.floor(Math.random()*10);

var suma = rannum1 + rannum2;

var tiempoInicio = new Date();

var numUsuario = parseInt(prompt("Ingrese la suma de " + rannum1 + " y " + rannum2));

var tiempoFin = new Date();

var tiempoTotal = (tiempoFin - tiempoInicio) / 1000;

var correcto = numUsuario === suma;

document.write("<p>Tu respuesta fue: " + (correcto ? "SIUUUUUU (Correcto)" : "NEL PASTEL") + "</p>");

document.write("<p>Tiempo que tardaste amiko: " + tiempoTotal + " segundos</p>");

//Ejercicio3.-
//Función: contador. Parámetros: Un arreglo de números. Regresa: La cantidad de números negativos en el 
//arreglo, la cantidad de 0's, y la cantidad de valores mayores a 0 en el arreglo.

document.write("<br></br> Ejercicio 3 <br></br>");

const array = [1, 6, 7, 4, 9, 6, 8, 7, 11, 0, -19, 5, 45, -66];

array.sort((a, b) => a - b);

document.write(array);

function contador(arr) {
    let numeroNeg = 0;
    let ceros = 0;
    let numeroPos = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            numeroNeg++;
        } else if (arr[i] === 0) {
            ceros++;
        } else {
            numeroPos++;
        }
    }

    return {
        cantidadNegativos: numeroNeg,
        cantidadCeros: ceros,
        cantidadNumeroPos: numeroPos
    };
}

const resultado = contador(array);

document.write("<br></br> Números negativos: " + resultado.cantidadNegativos);
document.write("<br></br> Cantidad de ceros: " + resultado.cantidadCeros);
document.write("<br></br> Números mayores a cero: " + resultado.cantidadNumeroPos);

//Ejercicio4.-
//Función: promedios. Parámetros: Un arreglo de arreglos de números. Regresa: Un arreglo con los promedios 
//de cada uno de los renglones de la matriz.

document.write("<br></br> Ejercicio 4 <br></br>");

//Ejercicio5.-
//Función: inverso. Parámetros: Un número. Regresa: El número con sus dígitos en orden inverso.

document.write("<br></br> Ejercicio 5 <br></br>")

//Ejercicio6.-
//Crea una solución para un problema de tu elección (puede ser algo relacionado con tus intereses, 
//alguna problemática que hayas identificado en algún ámbito, un problema de programación que hayas resuelto 
//en otro lenguaje, un problema de la ACM, entre otros). El problema debe estar descrito en un documento HTML,
//y la solución implementada en JavaScript, utilizando al menos la creación de un objeto, el objeto además 
//de su constructor deben tener al menos 2 métodos. Muestra los resultados en el documento HTML.

