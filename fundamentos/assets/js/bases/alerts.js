// PROMPT CONFIRM ALERT

alert('hola mundo');

let nombre = prompt('¿Cual es tu nombre?', 'coloca tu nombre');
document.write('Hola ' + nombre);

let seleccion = confirm('Esta seguro?');
console.log(seleccion);

// Este codigo solo funciona si se ejecuta en un navegador ya que esta dentro del objeto global WINDOW
