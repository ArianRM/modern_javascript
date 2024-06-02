// console.log('hola mundo'); 

// VARIABLES
// Buena practica: simpre crear variable antes de asignar valor

let a = 10;
var b = 10;
const c = 10;

// Polyfill -> codigo que provee el funcionamiento de una nueva version de JS en una antigua

let a1 = 12,
    b1 = 23,
    c1 = 'Hola ',
    d1 = 'Spiderman';

let sum = a1 + b1 + c1 + d1; 
// console.log(sum);

// Conociendo la consola
// console.log('%c Mis Variables', 'color:blue; font-weight: bold') // añadir estilos
// console.log({a1}); // retornar informacion de la variable
// console.log({b1});
// console.log({c1});
// console.table({a1, b1, c1, d1});

const saludo = c1 + d1;

var miNombre = 'Arian';

//! Principal problema de VAR -> Permite reemplazar propiedades y objetos propios del objeto global WINDOW

// var outerWidth = 123232;
// var outerHeight = 600;
