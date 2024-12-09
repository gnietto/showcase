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
