let deck = [];
const tipos = ["C", "D", "H", "S"];
const especiales = ["A", "J", "Q", "K"];

let puntosJugador = 0;
let puntosComputadora = 0;

// HTML REFERENCES

const btnPedir = document.querySelector("#btnPedir");
const btnNuevo = document.querySelector("#btnNuevo");
const btnDetener = document.querySelector("#btnDetener");
const puntaje = document.querySelectorAll("small");
const divCartasJugador = document.querySelector("#jugador-cartas");
const divCartasComputadora = document.querySelector("#computadora-cartas");

const crearDeck = () => {
  for (let i = 2; i <= 10; i++) {
    for (let tipo of tipos) {
      deck.push(i + tipo);
    }
  }

  for (let tipo of tipos) {
    for (let esp of especiales) {
      deck.push(esp + tipo);
    }
  }

  deck = _.shuffle(deck);
  return deck;
};

crearDeck();

const pedirCarta = () => {
  if (deck.length === 0) {
    throw "No hay cartas en el deck";
  }

  let random_card = Math.floor(Math.random() * deck.length);
  let carta = deck.pop(random_card);
  return carta;
};

const valorCarta = (carta) => {
  const valor = carta.substring(0, carta.length - 1);
  //   let puntos = isNaN(valor) ? (valor === "A" ? 11 : 10) : valor * 1;

  //   console.log(puntos);

  return isNaN(valor) ? (valor === "A" ? 11 : 10) : valor * 1;
};

// turno de computadora

const insertarCarta = () => {};

const turnoComputadora = (puntosMinimos) => {
  do {
    const carta = pedirCarta();
    puntosComputadora += valorCarta(carta);
    puntaje[1].innerText = puntosComputadora;
    const imgCarta = document.createElement("img");
    imgCarta.src = `assets/cartas/${carta}.png`;
    divCartasComputadora.append(imgCarta);
    imgCarta.classList.add("carta");

    if (puntosMinimos > 21) {
      break;
    }
  } while (puntosComputadora < puntosMinimos && puntosMinimos <= 21);

  setTimeout(()=>{
    if(puntosComputadora === puntosMinimos){
      alert('Nadie gana :(');
    }else if(puntosMinimos > 21){
      alert('Computadora gana');
    }else if(puntosComputadora > 21){
      alert('Jugador Gana');
    }else{
      alert('Computadora Gana');
    }

  },10)
};

// EVENTOS

btnPedir.addEventListener("click", () => {
  const carta = pedirCarta();
  puntosJugador += valorCarta(carta);
  puntaje[0].innerText = puntosJugador;
  const imgCarta = document.createElement("img");
  imgCarta.src = `assets/cartas/${carta}.png`;
  divCartasJugador.append(imgCarta);
  imgCarta.classList.add("carta");

  if (puntosJugador > 21) {
    console.warn("!!!PERDISTE!!!");
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora(puntosJugador);
  } else if (puntosJugador === 21) {
    btnPedir.disabled = true;
    btnDetener.disabled = true;  
    console.warn("!!!GANASTE!!!");
    turnoComputadora(puntosJugador);
  }
});

btnDetener.addEventListener("click", ()=>{
  btnPedir.disabled = true;
  btnDetener.disabled = true;
  turnoComputadora(puntosJugador);
});

btnNuevo.addEventListener("click", ()=>{
  location.reload();
})

