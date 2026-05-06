"use strict"

let crear_nueva = "Hola!";

const FECHA_NAC = "06/01/94";

const birthday = "06/01/27";

console.log(crear_nueva);


console.info(`Esto es un aviso ${2 + 2}`);

console.error("esto es un error");

console.warn("esto warning");

// let edad = Number(prompt("Introduce tu edad"));

// console.info(edad);

// let entra = confirm("esto entra en el examen?");

// console.info(entra);

let numeritos = "324";

console.log(Number(numeritos));

let a = 3;

--a;

a--;


if (2 > 3) {

    console.log("esto es imposible");
} else if (3 > 3) {

    console.log("noooooo");

} else {

    console.log("no es cierto nada");
}

let dia = "01";

switch(dia){

    case "lunes":
        console.log("es lunes");
    
    case "martes":
    console.log("es martes");

    default:
        console.log("Este día no es día de la semana, comprueba el valor");

}



