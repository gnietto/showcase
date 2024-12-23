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
    botonInicial.setAttribute("id","reiniciajuego");
  } else {
    banner.style.backgroundColor = "rgb(220 38 38)";
    mensajeFeedback.textContent = "Error! Presiona el botón para conocer la respuesta correcta";
    botonInicial.textContent = "Respuesta correcta";
    botonInicial.setAttribute("id","muestrarespuesta");
  }
};

function reordenarFrutas () {
  const precioFrutasCajon = document.querySelectorAll("[data-precio]");
  const nodeListToArray = Array.from(precioFrutasCajon);
  const ordenarElementosFruta = nodeListToArray.sort((a, b) => b.dataset.precio - a.dataset.precio);
  const cajon1 = document.getElementById("cajon1");
  const cajon2 = document.getElementById("cajon2");
  const cajon3 = document.getElementById("cajon3");
  cajon1.appendChild(ordenarElementosFruta[0]);
  cajon2.appendChild(ordenarElementosFruta[1]);
  cajon3.appendChild(ordenarElementosFruta[2]);
};

botonInicial.addEventListener("click", evaluarOrdenamiento);

async function esperarElemento(id) {
  while (!document.getElementById(id)) {
    await new Promise(resolve => setTimeout(resolve, 100));
  };
  return document.getElementById(id);
};

async function iniciaBannerRojoMuestraRespuesta() {
  const proximoElemento = await esperarElemento("muestrarespuesta");
  proximoElemento.addEventListener('click', () => {
    banner.style.backgroundColor = "rgb(220 38 38)";
    mensajeFeedback.textContent = "La respuesta correcta es ésta";
    botonInicial.textContent = "Reiniciar juego";
    botonInicial.setAttribute("id","reiniciajuego");
    reordenarFrutas();
  });
};


iniciaBannerRojoMuestraRespuesta();
