let Banner1,
  Banner2,
  Banner3,
  Banner4,
  FrutasAleatorias,
  InformacionFrutas,
  Cajones,
  canastaFrutas,
  seleccionFrutas,
  FrutakidsPresentacion;

const iniciarFrutakids = () => {
  canastaFrutas = [
    { nombre: "Manzana", precio: 1295, imagen: "🍎" },
    { nombre: "Pera", precio: 975, imagen: "🍐" },
    { nombre: "Cereza", precio: 2990, imagen: "🍒" },
    { nombre: "Naranja", precio: 995, imagen: "🍊" },
    { nombre: "Plátano", precio: 725, imagen: "🍌" },
    { nombre: "Piña", precio: 2590, imagen: "🍍" },
    { nombre: "Mango", precio: 3990, imagen: "🥭" },
    { nombre: "Frutilla", precio: 3790, imagen: "🍓" },
    { nombre: "Durazno", precio: 1490, imagen: "🍑" },
    { nombre: "Kiwi", precio: 3850, imagen: "🥝" },
    { nombre: "Limón", precio: 925, imagen: "🍋" },
  ];

  seleccionFrutas = canastaFrutas.sort(() => 0.5 - Math.random()).slice(0, 3);

  FrutasAleatorias = `
  <div id="tresfrutas" class="colSpan3 flex justifyAround itemsCenter">
    <div
      id="fruta1"
      class="text4xl"
      draggable="true"
      data-drag="a"
      data-nombre=${seleccionFrutas[0].nombre}
      data-precio=${seleccionFrutas[0].precio}
      data-imagen=${seleccionFrutas[0].imagen}
    >
       ${seleccionFrutas[0].imagen}
    </div>
    <div
      id="fruta2"
      class="text4xl"
      draggable="true"
      data-drag="a"
      data-nombre=${seleccionFrutas[1].nombre}
      data-precio=${seleccionFrutas[1].precio}
      data-imagen=${seleccionFrutas[1].imagen}
    >
      ${seleccionFrutas[1].imagen}
    </div>
    <div
      id="fruta3"
      class="text4xl"
      draggable="true"
      data-drag="a"
      data-nombre=${seleccionFrutas[2].nombre}
      data-precio=${seleccionFrutas[2].precio}
      data-imagen=${seleccionFrutas[2].imagen}
    >
      ${seleccionFrutas[2].imagen}
    </div>
  </div>`;

  FrutakidsPresentacion = `
    <div class="colSpan5">
      <h1>Frutakids</h1>
      <p>
        Frutakids es un juego para niños cuyo objetivo es clasificar frutas
        según su precio de mayor a menor.
      </p>
      <p>
        Haz click en cada fruta para conocer la información de cada fruta.
      </p>
      <p>
        Arrastra las frutas de la parte superior hacia los cajones de la parte
        inferior (arrastre no disponible en dispositivos "touch" por el momento).
      </p>
      <p>
        Por último, evalúa tu respuesta haciendo click en el botón "Evaluar". Y
        listo!
      </p>
    </div>
`;

  InformacionFrutas = `
  <div id="inicioInfo" class="borderSolid colSpan2 textCenter itemsCenter myAuto h32">
    <p id="imagenfruta" class="text4xl my3">?</p>
    <p id="nombrefruta" class="text2xlCustom my3"></p>
    <p id="preciofruta" class="text2xlCustom my3"></p>
  </div>`;

  Cajones = `
  <div id="trescajones" class="colSpan5 flex justifyAround itemsCenter">
    <div id="cajon1" class="border4 borderSolid text4xl textCenter size12" data-drop="b"></div>
    <div id="mayorque1" class="border4 borderNone text4xl textCenter size12"> > </div>
    <div id="cajon2" class="border4 borderSolid text4xl textCenter size12" data-drop="b"></div>
    <div id="mayorque2" class="border4 borderNone text4xl textCenter size12"> > </div>
    <div id="cajon3" class="border4 borderSolid text4xl textCenter size12" data-drop="b"></div>
  </div>`;

  Banner1 = `
  <div id="bannerinicial" class="colSpan5 flex justifyAround bgStone400 itemsCenter">
    <p>Ordena las frutas según su precio de mayor a menor</p>
    <button id="botoninicial" class="h5"> Evaluar </button>
  </div>`;

  const contenedorFrutakids = document.getElementById("frutakids");
  contenedorFrutakids.insertAdjacentHTML("beforeend", FrutakidsPresentacion);
  contenedorFrutakids.insertAdjacentHTML("beforeend", FrutasAleatorias);
  contenedorFrutakids.insertAdjacentHTML("beforeend", InformacionFrutas);
  contenedorFrutakids.insertAdjacentHTML("beforeend", Cajones);
  contenedorFrutakids.insertAdjacentHTML("beforeend", Banner1);

  const tresFrutas = document.querySelectorAll("[data-drag]");
  const tresCajas = document.querySelectorAll("[data-drop]");

  tresFrutas.forEach((fruta) => {
    fruta.addEventListener("dragstart", (event) => {
      event.dataTransfer.setData("text/plain", event.target.id);
    });
  });

  tresCajas.forEach((caja) => {
    caja.addEventListener("dragover", (event) => {
      event.preventDefault();
    });
  });

  tresCajas.forEach((caja) => {
    caja.addEventListener("drop", (event) => {
      event.preventDefault();
      const item = event.dataTransfer.getData("text/plain");
      event.target.appendChild(document.getElementById(item));
    });
  });

  const imagenFruta = document.getElementById("imagenfruta");
  const nombreFruta = document.getElementById("nombrefruta");
  const precioFruta = document.getElementById("preciofruta");

  tresFrutas.forEach((fruta) => {
    fruta.addEventListener("click", () => {
      const frutaClickeada = event.currentTarget;
      const nombre = frutaClickeada.getAttribute("data-nombre");
      const precio = frutaClickeada.getAttribute("data-precio");
      const imagen = frutaClickeada.getAttribute("data-imagen");

      imagenFruta.textContent = `${imagen}`;
      nombreFruta.textContent = `${nombre}`;
      precioFruta.textContent = `$${precio}`;
    });
  });

  Banner2 = `
  <div id="bannerverde" class="colSpan5 flex justifyAround bgLime500 itemsCenter">
    <p>Felicitaciones! Tu respuesta es correcta</p>
    <button id="reiniciajuego1" class="h5" data-valor="reinicio"> Reiniciar juego </button>
  </div>`;

  Banner3 = `
  <div id="bannerrojo1" class="colSpan5 flex justifyAround bgRed600 itemsCenter">
    <p>Error! Presiona el botón para conocer la respuesta correcta</p>
    <button id="muestrarespuesta" class="h5"> Mostrar Respuesta correcta </button>
  </div>`;

  Banner4 = `
  <div id="bannerrojo2" class="colSpan5 flex justifyAround bgRed600 itemsCenter">
    <p>Esta es la respuesta correcta. Juguemos de nuevo</p>
    <button id="reiniciajuego2" class="h5"i data-valor="reinicio"> Reiniciar juego </button>
  </div>`;

  const botonInicial = document.getElementById("botoninicial");

  const evaluacion = () => {
    const bannerInicial = document.getElementById("bannerinicial");
    const precioFrutasCajon = document.querySelectorAll("[data-precio]");

    const preciosCajon = Array.from(precioFrutasCajon)
      .map((cajon) => parseInt(cajon.getAttribute("data-precio")));

    const ordenDescendente = (preciosCajon[0] > preciosCajon[1]) &&
      (preciosCajon[1] > preciosCajon[2]);

    if (ordenDescendente) {
      bannerInicial.outerHTML = Banner2;

      const reiniciaJuegoVerde = document.getElementById("reiniciajuego1");
      reiniciaJuegoVerde.addEventListener("click", limpiarFrutakids);
    } else {
      bannerInicial.outerHTML = Banner3;

      const muestraRespuesta = document.getElementById("muestrarespuesta");
      muestraRespuesta.addEventListener("click", () => {
        const precioFrutasCajon = document.querySelectorAll("[data-precio]");

        const arrayPrecioFrutas = Array.from(precioFrutasCajon);

        const ordenarElementosFruta = arrayPrecioFrutas.sort((a, b) =>
          b.dataset.precio - a.dataset.precio
        );

        const cajon1 = document.getElementById("cajon1");
        const cajon2 = document.getElementById("cajon2");
        const cajon3 = document.getElementById("cajon3");

        cajon1.appendChild(ordenarElementosFruta[0]);
        cajon2.appendChild(ordenarElementosFruta[1]);
        cajon3.appendChild(ordenarElementosFruta[2]);

        const bannerRojo1 = document.getElementById("bannerrojo1");
        bannerRojo1.outerHTML = Banner4;

        const reiniciaJuegoRojo = document.getElementById("reiniciajuego2");
        reiniciaJuegoRojo.addEventListener("click", limpiarFrutakids);
      });
    }
  };

  botonInicial.addEventListener("click", evaluacion);
};

iniciarFrutakids();

const limpiarFrutakids = () => {
  const limpiar = document.getElementById("frutakids");

  while (limpiar.hasChildNodes()) {
    limpiar.removeChild(limpiar.firstChild);
  }

  iniciarFrutakids();
};
