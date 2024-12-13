// Calculadora
const visorCalculadora = document.getElementById("visor");
const teclasCalculadora = document.querySelectorAll("[data-valorboton]");
const teclaLimpiarVisor = document.querySelector("[data-limpiardata]");
const teclaEvaluarVisor = document.querySelector("[data-evaluardata]");

function actualizaVisor(event) {
  const datoBoton = event.target.getAttribute("data-valorboton");
  if (visorCalculadora.textContent === "0") {
    visorCalculadora.textContent = datoBoton;
  } else {
    visorCalculadora.textContent += datoBoton;
  }
};

function limpiarVisor() {
  visorCalculadora.textContent = "0";
};

function evaluarVisor() {
  try {
    const resultadoCalculadora = eval(visorCalculadora.textContent);
    visorCalculadora.textContent = resultadoCalculadora;
  } catch (error) {
    visorCalculadora.textContent = "Error";
  }
};

teclasCalculadora.forEach((teclas) => {
  teclas.addEventListener("click", actualizaVisor);
});
teclaLimpiarVisor.addEventListener("click", limpiarVisor);
teclaEvaluarVisor.addEventListener("click", evaluarVisor);



//Frutakids
const frutas = document.querySelectorAll("[data-drag]");
const cajas = document.querySelectorAll("[data-drop]");

function iniciaArrastre (event) {
  event.dataTransfer.setData("text/plain", event.target.id);
};

function sueltaArrastre (event) {
  event.preventDefault();
};

function finArrastre (event) {
  event.preventDefault();
  let item = event.dataTransfer.getData("text/plain");
  event.target.appendChild(document.getElementById(item));
};

frutas.forEach((fruta) => {
  fruta.addEventListener("dragstart", iniciaArrastre);
});

cajas.forEach((caja) => {
  caja.addEventListener("dragover", sueltaArrastre);
});

cajas.forEach((caja) => {
  caja.addEventListener("drop", finArrastre);
});


//feat(frutakids): despliega info de frutas cuando el usuario hace click en ella
const nombreFruta = document.getElementById("textonombrefruta");
const precioFruta = document.getElementById("textopreciofruta");
const imagenFruta = document.getElementById("imagenfruta");
const inicioInfo = document.getElementById("inicioinfofrutas");

function muestraInfoFruta () {
  const frutaClickeada = event.currentTarget;
  const nombre = frutaClickeada.getAttribute('data-nombre');
  const precio = frutaClickeada.getAttribute('data-precio');
  const imagen = frutaClickeada.getAttribute('data-imagen');

  inicioInfo.textContent = "";
  imagenFruta.textContent = `${imagen}`;
  nombreFruta.textContent = `${nombre}`;
  precioFruta.textContent = `$${precio}`;
};

frutas.forEach((fruta) => {
  fruta.addEventListener("click", muestraInfoFruta)
});


//feat(frutakids): lógica de la barra de evaluación y feedback al usuario
const banner = document.getElementById("banner");
const mensajeFeedback = document.getElementById("feedback");
const botonInicial = document.getElementById("botoninicial");

function evaluarOrdenamiento () {
  const precioFrutasCajon = document.querySelectorAll("[data-precio]");
  const preciosCajon = Array.from(precioFrutasCajon)
    .map(cajon => parseInt(cajon.getAttribute("data-precio")));
  const ordenDescendente = (preciosCajon[0] > preciosCajon[1]) && (preciosCajon[1] > preciosCajon[2]);

  if (ordenDescendente) {
    banner.style.backgroundColor = "rgb(132 204 22)";
    mensajeFeedback.textContent = "Felicitaciones! Tu respuesta es correcta";
    botonInicial.textContent = "Reiniciar juego";
  } else {
    banner.style.backgroundColor = "rgb(220 38 38)";
    mensajeFeedback.textContent = "Error! Presiona el botón para conocer la respuesta correcta";
    botonInicial.textContent = "Respuesta correcta";
    botonInicial.setAttribute("id", "botoncorreccion");
  }
};

botonInicial.addEventListener("click", evaluarOrdenamiento);
