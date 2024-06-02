const regresaTrue = () =>{
    console.log('Regresa True');
    return true;
}
const regresaFalse = () =>{
    console.log('Regresa False');
    return false;
}

console.warn('Not o negación');
console.log(!true); // regresa false
console.log(!false); // regresa true
console.log(!regresaFalse()); // true
console.log(!regresaTrue()); // False

console.warn('And'); // los dos deben ser verdadero para que retorne true
console.log(true && true); // true
console.log(true && false); // false
console.log(true && !false); // true

console.log('======');
console.log( regresaFalse() && regresaTrue() );
console.log( regresaTrue() && regresaFalse() );
console.log('======');
regresaTrue() && regresaFalse();
regresaFalse() && regresaTrue();

console.warn('OR'); // al menos una debe ser true
console.log(true || false);
console.log(false || false);
console.log( regresaTrue() || regresaFalse() );
console.log( regresaFalse() || regresaTrue() );

console.warn('Asignaciones');

const soyUndefined = undefined;
const soyNull = null;
const soyFalso = false;

const a1 = true && 'Hola Mundo' && 150;
const a2 = 'Hola' && 'Mundo' && soyFalso && true;
const a3 = soyFalso || 'ya no soy falso';
const a4 = soyFalso || soyUndefined || soyNull ||'ya no soy falso de nuevo' || true;
const a5 = soyFalso || soyUndefined || regresaTrue() ||'ya no soy falso de nuevo' || true;
console.log(a1, a2, a3, a4, a5);