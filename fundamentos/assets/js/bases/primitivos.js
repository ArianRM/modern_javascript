//* TIPOS DE DATOS PRIMITIVOS
//* JS Debilmente Tipado -> infiere el tipo de dato de la variable.
//* Primitivo -> informacion que no es un objeto y no es inmutable

// Boolean - True/False
let esMarvel = true;
console.log(typeof esMarvel);

// Null - Sin valor
let soyNull = null;
console.log(typeof soyNull);

// Undefined -> variable declarada que aun no se le asigna un valor
let superPoder;
console.log(typeof superPoder);

// Number -> int, float, etc.
let edad = 33;
console.log(typeof edad);

// String -> cadena de caracteres
let nombre = 'Peter Parker';
console.log(nombre);

nombre = 'Ben Parker';
console.log(nombre);

nombre = "Tia May";
nombre = `Tia May`;

console.log(typeof nombre);

// Symbol -> valor unico que no es igual a ningun otro valor, js le da un unico identificador
let symbol1 = Symbol('a');
let symbol2 = Symbol('a');
console.log(typeof symbol1);
console.log(symbol1 === symbol2);