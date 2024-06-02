//const arr = new Array(10);
//const arr = [];
//console.log(arr);

let videojuegos = ['mario kart', 'megaman', 'chrono trigger'];

console.log({videojuegos});
console.log(videojuegos[0]);

let arregloCosas = [
    true,
    123,
    'Fernando',
    1 + 2,
    function(){},
    () => {},
    {a: 1},
    ['X', 'Megaman', 'Zero', 'Dr. Light', [
        'Dr Willy', 'Dr Woodman'
    ]]
];

console.log(arregloCosas);

console.log(arregloCosas[0]);

console.log(arregloCosas[7][3]);

console.log(arregloCosas[7][4][1]);