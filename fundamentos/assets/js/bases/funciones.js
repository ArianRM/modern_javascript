function saludar(nombre){
    console.log(arguments);
    console.log('Hola ' + nombre);
}

saludar('Arian', 21, true, 'Lima');

const saludar2 = function(nombre){
    console.log('hello ' + nombre);
}

saludar2('Roxi');

const saludarArrow = () => {
    console.log('Hola Arrow')
}

saludarArrow();


const saludarArrow2 = (nombre) => {
    console.log('Hola '+ nombre);
}

saludarArrow2('Juan');

// Maneras de retornar

function sumar(a, b){
    return a + b;
}

console.log(sumar(1,2));

const multiplicacion = (a, b) => {
    return a * b;
}

console.log(multiplicacion(2,5));

const dividir = (a,b) => a/b;
console.log(dividir(12,3));

// obtener numero aleatorio

function getRandom(){
    return Math.random();
}
console.log(getRandom());

const getRandom2 = () => Math.random();
console.log(getRandom2());