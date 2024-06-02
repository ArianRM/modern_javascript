
// protip 1
function crearPersona( nombre, apellido){
    return {
        nombre, 
        apellido
    }
}

const persona = crearPersona ('Arian','Ramirez');
console.log(persona);


const crearPersona2 = (nombre, apellido) => ({nombre, apellido});

const persona2 = crearPersona2 ('Arian','Ramirez');
console.log(persona2);

// protip 2
function imprimeArgumentos(){
    console.log(arguments)
}

imprimeArgumentos(10, 231, 'fsda', 'arian');

// paramentro rest , no se puede agregar otro argumento luego de eso
const imprimeArgumentos2 = (...args) => {
    return args;
}

const [casado, vivo, nombre, saludo] = imprimeArgumentos2(10, 231, 'fsda', 'arian');
console.log({casado, vivo, nombre, saludo});

const {apellido} = crearPersona ('Arian','Ramirez');
console.log({apellido});

const {apellido: apellido2} = crearPersona ('Arian','Ramirez');
console.log({apellido2});

const tony = {
    nombre: 'Tony Stark',
    codeName: 'IronMan',
    vivo: false,
    trajes: ['Mark I', 'Mark V', 'Hulkbuster']
};

// const imprimePropiedades = (personaje) =>{
//     console.log(personaje.nombre);
//     console.log(personaje.codeName);
//     console.log(personaje.vivo);
//     console.log(personaje.edad);
//     console.log(personaje.trajes);
// }

const imprimePropiedades = ({nombre, codeName, vivo, edad = 15, trajes}) =>{
    // edad = edad || 0;
    console.log({nombre});
    console.log({codeName});
    console.log({vivo});
    console.log({edad});
    console.log({trajes});
}

imprimePropiedades(tony);