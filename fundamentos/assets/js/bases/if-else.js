let a = 11;
if(a > 10){
    console.log('es mayor a 10');
}

console.log('fin');

const hoy = new Date();
console.log(hoy);
let dia = hoy.getDate();
console.log({dia});
if (dia === 0){
    console.log('domingo')
}else if (dia !== 1){
    console.log('si es');
}else{
    console.log('no domingo')
}

// sin  usar if else, o switch, unicamente objetos
// dia de la semana
const semana = {
    1: 'Lunes',
    2: 'Martes',
    3: 'Miercoles',
    4: 'Jueves',
    5: 'Viernes',
    6: 'Sabado',
    7: 'Domingo'
}
const date = new Date();
let today = date.getDay();
console.log(semana[today]);