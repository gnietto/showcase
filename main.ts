import { Hono } from "https://deno.land/x/hono@v4.0.0/mod.ts";
import { html } from "https://deno.land/x/hono@v4.0.0/helper.ts";
import {
  logger,
  serveStatic,
} from "https://deno.land/x/hono@v4.0.0/middleware.ts";
import { select, selectAll } from "https://esm.sh/d3-selection@3";
import { drag } from "https://esm.sh/d3-drag@3";

const app = new Hono();

app.use(logger());
app.use("/fonts/*", serveStatic({ root: "./" }));

const vistaHtml = (componente1, componente2) =>
  html`
  <!DOCTYPE html>
  <html>
    <head>
      <link rel="preload" as="font" href="/fonts/lora-latin-ext-regular.woff2" type="font/woff2" crossorigin="anonymous">
      <link rel="preload" as="font" href="/fonts/quattrocento-latin-ext-regular.woff2" type="font/woff2" crossorigin="anonymous">
      <style>
        @font-face{
          font-family: "Lora";
          font-style: normal;
          font-weight: 400;
          font-display: swap;
          src: url("./fonts/lora-latin-ext-regular.woff2") format('woff2');
        }
        @font-face{
          font-family: "Quattrocento";
          font-style: normal;
          font-weight: 400;
          font-display: swap;
          src: url("./fonts/quattrocento-latin-ext-regular.woff2") format('woff2');
        }
        .tipografiaTitulo {
          font-family:"Quattrocento",serif;
        }
        .tipografiaDescripcion {
          font-family:"Lora",serif;
        }
        .borde {
          border-radius: 0.75rem;
          border-style: double;
        }
        .cuadrado1 {
          width: 100px;
          height: 100px;
          background-color: green;
        }
        .cuadrado2 {
          width: 100px;
          height: 100px;
          background-color: orange;
        }
        .cuadrado3 {
          width: 100px;
          height: 100px;
          background-color: magenta;
        }
        .estiloMain {
          position: relative;
          border-style: double;
        }
        .flex1 {
          display: flex;
        }
        .flex2 {
          display: flex;
        }
        .frutaSeleccionada {
          width: 100px;
          height: 100px;
          border-style: solid;
        }
        .cajon1 {
          width: 100px;
          height: 100px;
          border-style: solid;
        }
        .cajon2 {
          width: 100px;
          height: 100px;
          border-style: solid;
        }
        .cajon3 {
          width: 100px;
          height: 100px;
          border-style: solid;
        }
        .estiloEval {
          background-color: lime;
        }
      </style>
    </head>
    <body>
      <nav>
        <div> <a href="/"> Inicio </a> </div>
        <div> <a href="/dashboard"> Dashboard </a> </div>
        <div> <a href="/frutakids"> Frutakids </a> </div>
        <div> <a href="/comic"> Comic </a> </div>
      </nav>
      <div>
        ${componente1}
      </div>
      <div>
        ${componente2}
      </div>
    </body>
  </html>
`;

const Encabezado = (titulo, descripcion, estilo1, estilo2, estilo3) =>
  html`
  <header class=${estilo3}>
    <h1 class=${estilo1}> ${titulo} </h1>
    <p class=${estilo2}> ${descripcion} </p>
  </header>
`;

const Cuerpo = (placeholder, estiloMain) =>
  html`
  <main class=${estiloMain}>
    ${placeholder}
  </main>
`;

const Juego = (flex1, flex2, cuadrado1, cuadrado2, cuadrado3, frutaSeleccionada, cajon1, cajon2, cajon3, estiloEval, evaluacion) => html`
  <div class=${flex1}>
    <div id=#cuadrado1 class=${cuadrado1}> </div>
    <div id=#cuadrado2 class=${cuadrado2}> </div>
    <div id=#cuadrado3 class=${cuadrado3}> </div>
    <div id=#muestraFrutaSeleccionada class=${frutaSeleccionada}> </div>
  </div>
  <div class=${flex2}>
    <div id=#recibe1 class=${cajon1}> </div>
    <div id=#recibe2 class=${cajon2}> </div>
    <div id=#recibe3 class=${cajon3}> </div>
  </div>
  <footer class=${estiloEval}> ${evaluacion} </footer>
`;

const evaluacion = () => html`
  <div> Si cajon1 > cajon2 > cajon3 entonces mostrar cuadro verde con felicitacion </div>
`

app.get("/", (c) => {
  const args = {
    titulo: "Gamma Tech and Life",
    descripcion: "Iniciativa comercial",
    placeholder: "... texto de relleno...",
    Encabezado,
    Cuerpo,
    estilo1: "tipografiaTitulo",
    estilo2: "tipografiaDescripcion",
    estilo3: "borde",
    estiloMain: null
  };
  return c.html(
    vistaHtml(
      args.Encabezado(
        args.titulo,
        args.descripcion,
        args.estilo1,
        args.estilo2,
        args.estilo3,
      ),
      args.Cuerpo(args.placeholder, args.estiloMain),
    ),
  );
});

app.get("/dashboard", (c) => {
  const args = {
    titulo: "Dashboard",
    descripcion: "Descripcion gráfica de los datos actuales de alguna API",
    placeholder:
      "Este es un contenedor para el cuerpo de cada seccion del showcase",
    Encabezado,
    Cuerpo,
    estilo1: "tipografiaTitulo",
    estilo2: "tipografiaDescripcion",
    estilo3: "borde",
    estiloMain: null
  };
  return c.html(
    vistaHtml(
      args.Encabezado(
        args.titulo,
        args.descripcion,
        args.estilo1,
        args.estilo2,
        args.estilo3,
      ),
      args.Cuerpo(args.placeholder, args.estiloMain),
    ),
  );
});

app.get("/frutakids", (c) => {

  const args = {
    titulo: "Frutakids",
    descripcion: "Juego educativo para niños",
    placeholder: Juego,
    Encabezado,
    Cuerpo,
    estilo1: "tipografiaTitulo",
    estilo2: "tipografiaDescripcion",
    estilo3: "borde",
    estiloMain: "estiloMain",
    flex1: "flex1",
    flex2: "flex2",
    cuadrado1: "cuadrado1",
    cuadrado2: "cuadrado2",
    cuadrado3: "cuadrado3",
    frutaSeleccionada: "frutaSeleccionada",
    cajon1: "cajon1",
    cajon2: "cajon2",
    cajon3: "cajon3",
    estiloEval: "estiloEval",
    evaluacion
  };
  return c.html(
    vistaHtml(
      args.Encabezado(
        args.titulo,
        args.descripcion,
        args.estilo1,
        args.estilo2,
        args.estilo3,
      ),
      args.Cuerpo(args.placeholder(args.flex1, args.flex2, args.cuadrado1, args.cuadrado2, args.cuadrado3, args.frutaSeleccionada, args.cajon1, args.cajon2, args.cajon3, args.estiloEval,args.evaluacion()),args.estiloMain),
    ),
  );
});

app.get("/comic", async (c) => {
  const respuestaAPI = await fetch("https://xkcd.com/info.0.json");
  const data = await respuestaAPI.json();
  const numeroDeComic = data.num;
  const numeroAleatorio = Math.floor(Math.random() * (numeroDeComic - 1)) + 1;

  const JSONDeComic = await fetch(
    `https://xkcd.com/${numeroAleatorio}/info.0.json`,
  );
  const ObjetoComic = await JSONDeComic.json();
  const stringImgSrc =
    html`<img src="${ObjetoComic.img}" alt="imagen de comic del autor xkcd mostrada aleatoriamente cada vez que se muestra esta ruta" />`;

  const args = {
    titulo: "Comic",
    descripcion: "Esta sección muestra un comic aleatorio del autor xkcd",
    placeholder: stringImgSrc,
    Encabezado,
    Cuerpo,
    estilo1: "tipografiaTitulo",
    estilo2: "tipografiaDescripcion",
    estilo3: "borde",
    estiloMain: null
  };
  return c.html(
    vistaHtml(
      args.Encabezado(
        args.titulo,
        args.descripcion,
        args.estilo1,
        args.estilo2,
        args.estilo3,
      ),
      args.Cuerpo(args.placeholder, args.estiloMain),
    ),
  );
});

Deno.serve(app.fetch);
