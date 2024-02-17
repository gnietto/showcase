import { Hono } from "https://deno.land/x/hono@v4.0.0/mod.ts";
import { html } from "https://deno.land/x/hono@v4.0.0/helper.ts";
import {
  logger,
  serveStatic,
} from "https://deno.land/x/hono@v4.0.0/middleware.ts";

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
        .tipografiaDescripcion{
          font-family:"Lora",serif;
        }
        .borde {
          border-radius: 0.75rem;
          border-style: double;

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

const Cuerpo = (placeholder) =>
  html`
  <main>
    ${placeholder}
  </main>
`;

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
      args.Cuerpo(args.placeholder),
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
      args.Cuerpo(args.placeholder),
    ),
  );
});

app.get("/frutakids", (c) => {
  const args = {
    titulo: "Frutakids",
    descripcion: "Juego educativo para niños",
    placeholder:
      "Este es un contenedor para el cuerpo de cada seccion del showcase",
    Encabezado,
    Cuerpo,
    estilo1: "tipografiaTitulo",
    estilo2: "tipografiaDescripcion",
    estilo3: "borde",
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
      args.Cuerpo(args.placeholder),
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
      args.Cuerpo(args.placeholder),
    ),
  );
});

Deno.serve(app.fetch);
