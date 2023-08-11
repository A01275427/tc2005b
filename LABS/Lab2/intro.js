// variables, constantes, consola (log, info, warn, error, assert)

//Declaramos variables con let
let pelicula_del_momento =  "Barbie";

//Imprimimos en la consola con console.log()
console.log(pelicula_del_momento);

//Declaramos constantes con const
const precio = 55;

console.log(precio);

console.error("Este es un mensaje de error");

console.warn("Esta es una advertencia");

console.info("Esto es información");

//assert continúa la ejecución si el valor es verdadero
console.assert(precio === 55);


// Alcance de las variables

if(precio > 50) {
    var respuesta = "Muy caro";
} else {
    var respuesta = "Buen precio";
}
//respuesta sigue existiendo porque var tiene alcance de función
console.log(respuesta);

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

//La siguiente línea tiene error porque i tiene alcance de ámbito
//console.log(i);


// alert, prompt, confirm
alert("Hola mundo!")

const is_hungry = confirm("¿Tienes hambre?");
console.log(is_hungry);

const nombre = prompt("¿Cómo te llamas?");
console.log("Hola " + nombre);


// funciones tradicionales

function vamonos() {
    console.log("¡Vámonos, ya se acabó la clase!");
}

vamonos();


// funciones modernas

















//arreglos

//const arreglo = ["Elemento"];














//arreglo.push("Otro elemento");
















//arreglo[10] = "Uno más";
















//arreglos asociativos
















//html dinámico con eventos