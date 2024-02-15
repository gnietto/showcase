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
      <link rel="preload" as="font" href="/lora-latin-ext-regular.woff2" type="font/woff2" crossorigin="anonymous">
      <link rel="preload" as="font" href="/quattrocento-latin-ext-regular.woff2" type="font/woff2" crossorigin="anonymous">
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

app.get("/horoscopo", (c) => {
  const args = {
    titulo: "Horóscopo",
    descripcion: "Predicciones astrológicas de algún tipo",
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

Deno.serve(app.fetch);
