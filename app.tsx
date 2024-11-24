import { Hono } from "hono";
import { html } from "hono/html";
import { css, Style } from "hono/css";

export const app = new Hono();

const Frutakids = (props) => (html`
  <p class=${props.estilos}> Yo soy frutakids </p>
`);

const Calculadora = (props) => (html`
  <p class=${props.estilos}> Y yo soy calculadora </p>
`);

const Layout = (props) => (html`
  <!doctype html>
  <html class=${props.rootFontSize}>
    <head>
      <meta charset="UTF-8" />
      <link rel="icon" type="image/svg+xml" href="/src/favicon.svg" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Spaceger</title>
      ${props.estilos}
    </head>
    <body>
      ${props.children}
    </body>
  </html>
`);

const rootFontSize = css`
  font-size: 12px;
  font-family: Arial;
`;

const presentacionBasico = css`
  height: 15rem;
  border-style: double;
`;

const frutakidsBasico = css`
  height: 15rem;
  border-style: double;
`;

const calculadoraBasico = css`
  height: 15rem;
  border-style: double;
`;

const footerBasico = css`
  height: 5rem;
  border-style: ridge;
`;

app.get("/", (c) => {
  return c.html(
    <Layout estilos={<Style />} rootFontSize={rootFontSize}>
      <header class={presentacionBasico}>
        <h1>Spaceger</h1>
        <p>
          Esta colección de aplicaciones web son parte de mi portafolio para el
          rol de desarrollador de software.
        </p>
        <p>
          A través de la lectura de libros especializados, he avanzado en la
          construcción de una base conceptual -en continuo mejoramiento- en
          ciencia de la computación, metodologías de desarrollo de software
          modernas (Agile y DevOps), y de mantenimiento de software existente.
        </p>
      </header>
      <Frutakids estilos={frutakidsBasico} />
      <Calculadora estilos={calculadoraBasico} />
      <footer class={footerBasico}>
        <p>Diseñado y codificado por Spaceger</p>
      </footer>
    </Layout>,
  );
});
