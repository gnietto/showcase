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
