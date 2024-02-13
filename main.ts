import { Hono } from "https://deno.land/x/hono@v4.0.0/mod.ts";
import { html } from "https://deno.land/x/hono/helper.ts";

const app = new Hono();

const vistaHtml = (componente1, componente2) =>
  html`
  <!DOCTYPE html>
  <html>
    <head>
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

const Encabezado = (titulo, descripcion) =>
  html`
  <header>
    <h1> ${titulo} </h1>
    <p> ${descripcion} </p>
  </header>
`;

const Cuerpo = (placeholder) => html`
  <main>
    ${placeholder}
  </main>
`;

app.get("/", (c) => {
  const args = {
    titulo: "Gamma Tech and Life",
    descripcion: "Iniciativa comercial",
    placeholder: "Este es un contenedor para el cuerpo de cada seccion del showcase",
    Encabezado,
    Cuerpo
  };
  return c.html(vistaHtml(args.Encabezado(args.titulo, args.descripcion), args.Cuerpo(args.placeholder)));
});

app.get("/dashboard", (c) => {
  const args = {
    titulo:"Dashboard",
    descripcion: "Descripcion gráfica de los datos actuales de alguna API",
    placeholder: "Este es un contenedor para el cuerpo de cada seccion del showcase",
    Encabezado,
    Cuerpo
  };
  return c.html(vistaHtml(args.Encabezado(args.titulo, args.descripcion), args.Cuerpo(args.placeholder)));
});

app.get("/frutakids", (c) => {
  const args = {
    titulo:"Frutakids",
    descripcion: "Juego educativo para niños",
    placeholder: "Este es un contenedor para el cuerpo de cada seccion del showcase",
    Encabezado,
    Cuerpo
  }
  return c.html(vistaHtml(args.Encabezado(args.titulo, args.descripcion), args.Cuerpo(args.placeholder)));
});

app.get("/horoscopo", (c) => {
  const args  = {
    titulo:"Horóscopo",
    descripcion: "Predicciones astrológicas de algún tipo",
    placeholder: "Este es un contenedor para el cuerpo de cada seccion del showcase",
    Encabezado,
    Cuerpo
  }
  return c.html(vistaHtml(args.Encabezado(args.titulo, args.descripcion), args.Cuerpo(args.placeholder)));
});

Deno.serve(app.fetch);
