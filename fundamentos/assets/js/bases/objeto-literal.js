let personaje = {
    nombre: 'Tony Stark',
    codeName: 'IronMan',
    vivo: false,
    edad: 40,
    coords: {
        lat: 34.934,
        lng: -118.23
    },
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
    dirección: {
        zip: '10880, 90265',
        ubicacion: 'Malibu, California'
    },
    'ultima-pelicula': 'Infinity War'
};

console.log(personaje)
console.log('Nombre', personaje.nombre)
console.log('Code Name', personaje['codeName'])
console.log('Edad', personaje.edad)
console.log('Coords', personaje.coords)
console.log('Lat', personaje.coords.lat)
console.log('N° Trajes', personaje.trajes.length)
console.log('Ultimo Traje', personaje.trajes[personaje.trajes.length - 1])

const x = 'vivo';
console.log('Vivo', personaje[x])
console.log('Ultima Pelicula', personaje['ultima-pelicula'])

// Mas detalles

// eliminar atributo
delete personaje.edad;
console.log(personaje);

// agregar atributo
personaje.casado = true;
console.log(personaje);

// ver indices
const entriesPares = Object.entries(personaje);
console.log(entriesPares);

// inmutabilidad del objeto
Object.freeze(personaje);
console.log(personaje);

// obtener propiedades y nombres
const propiedades = Object.getOwnPropertyNames(personaje);
const valores = Object.values(personaje);
console.log(propiedades, valores);