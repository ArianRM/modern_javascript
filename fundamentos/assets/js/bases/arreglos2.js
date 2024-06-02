let juegos = ['Zelda','Mario','Metroid','Chrono'];
console.log('Largo:', juegos.length);

let primero = juegos[0];
let ultimo = juegos[juegos.length - 1];

console.log({primero, ultimo});


// recorrer elementos de un arreglo
juegos.forEach(
    (elemento, index, arr) => {
        console.log({elemento, index, arr});
    }
);

// insertar nuevos elementos
let nuevaLongitud = juegos.push('F-Zero');
console.log({nuevaLongitud, juegos});

// inserta un elemento al inicio del arreglo
nuevaLongitud = juegos.unshift('COD');
console.log({nuevaLongitud, juegos});

// elimina ultimo elemento del arreglo
let juegoBorrado = juegos.pop();
console.log({juegoBorrado, juegos});

// elimina elemento en posicion especifica
console.log(juegos);
let pos = 1;
let juegosBorrados = juegos.splice(pos, 2);
console.log({juegosBorrados, juegos});

// saber la posicion de un elemento
let metroidIndex = juegos.indexOf('Metroid');
console.log(metroidIndex);