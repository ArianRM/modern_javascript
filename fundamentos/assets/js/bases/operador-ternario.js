/*
    dias de semana abre a als 11,
    finde abre a las 9
*/

// entra a la web para saber si esta abierto hoy

const dia = 0;
const horaActual = 8;
let horaApertura;
let mensaje; // abierto o cerrado

// sin operador ternario
// if([0,6].includes(dia))
if (dia === 0 || dia === 6) {
	console.log("finde");
	horaApertura = 9;
} else {
	console.log("dia de semana");
	horaApertura = 11;
}

if (horaActual >= horaApertura) {
	mensaje = "Esta abierto";
} else {
	mensaje = `Esta cerrado, hoy abrimos a las ${horaApertura}`;
}

console.log({ horaApertura, mensaje });

// con operador ternario

horaApertura = [0, 6].includes(dia) ? 9 : 11;
mensaje =
	horaActual >= horaApertura
		? "Esta abierto"
		: `Esta cerrado, hoy abrimos a las ${horaApertura}`;
console.log({ horaApertura, mensaje });

// protip

const elMayor = (a, b) => (a > b ? a : b);
console.log(elMayor(20, 15));

const tieneMembresia = (miembro) => (miembro ? "2 dolares" : "10 dolare");
console.log(tieneMembresia(true));

const amigo = true;
const amigosArr = ["peter", "tony", "dr. strage", amigo ? "thor" : "loki"];
console.log(amigosArr);

const nota = 100;
const grado = nota >= 95 ? "A+" : nota >= 90 ? "A" : nota >= 85 ? "B+" : "F";
console.log(grado);
