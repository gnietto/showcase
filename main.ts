import { Hono } from "https://deno.land/x/hono@v4.0.0/mod.ts";
import { html, css, Style } from "https://deno.land/x/hono/helper.ts";

const app = new Hono();

const Encabezado = (titulo, descripcion) => html`
  <header>
    <h1> ${titulo} </h1>
    <p> ${descripcion} </p>
  </header>
`

app.get("/", (c) => {
  const props = {
    titulo:"Gamma Tech and Life",
    descripcion: "Iniciativa comercial"
  }
  return c.html(Encabezado(props.titulo, props.descripcion))
});

app.get("/dashboard", (c) => {
  const props = {
    titulo:"Dashboard",
    descripcion: "Descripcion gráfica de los datos actuales de alguna API"
  }
  return c.html(Encabezado(props.titulo, props.descripcion))
});

app.get("/frutakids", (c) => {
  const props = {
    titulo:"Frutakids",
    descripcion: "Juego educativo para niños"
  }
  return c.html(Encabezado(props.titulo, props.descripcion))
});

app.get("/horoscopo", (c) => {
  const props = {
    titulo:"Horóscopo",
    descripcion: "Predicciones astrológicas de algún tipo"
  }
  return c.html(Encabezado(props.titulo, props.descripcion))
});

Deno.serve(app.fetch);
