let a = 10;
let b = a;
a=30;
console.log({a,b});

let juan = {nombre : 'juan'};
let ana = {...juan};
ana.nombre = 'ana';

console.log({juan,ana});

//todos los primitivos se pasan por valor, y los objetos por referencia
//rompemos la relacion poniendo entre llaves para definir objeto y luego añadimos el spread operator {...var}

const cambiaNombre = ({...persona}) => {
    persona.nombre = 'Tony';
    return persona;
};

let peter = {nombre: 'Peter'};
let tony = cambiaNombre(peter);

console.log(peter, tony);

//arreglos
const frutas = ['Manzana', 'Pera', 'Piña']

//asignarlo como nuevo arreglo con spread operator
console.time('spread');
const otrasFrutas = [...frutas];
console.timeEnd('spread');

//tambien podemos usar slice() para romper la relacion ya que se crearía un nuevo arreglo;
console.time('slice');
const otrasFrutas2 = frutas.slice();
console.timeEnd('slice');

otrasFrutas.push('Mango');
console.table({frutas, otrasFrutas});