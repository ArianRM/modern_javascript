const carros = ['mustang', 'camaro', 'mazda', 'ford', 'ferrari']; 

let i=0;
while(i < carros.length && carros[i] !== 'ford'){
    console.log(carros[i]);
    i++;
}

// undefined, null = false

// do while
let j = 0;
do{
    console.log(carros[j]);
    j++;
}while(j < carros.length);