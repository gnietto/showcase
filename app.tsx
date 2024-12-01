import { Hono } from "hono";
import { html } from "hono/html";
import { Style } from "hono/css";
import type { FC } from "hono/jsx";
import { Frutakids } from "./frutakids/index.tsx";
import { Calculadora } from "./calculadora/index.tsx";
import {
  borderDouble,
  listNone,
  rootFontSize,
  textCenter,
} from "./utils/clasesJsx.tsx";

export const app = new Hono();

const Layout: FC = (props) => (html`
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

app.get("/", (c) => {
  return c.html(
    <Layout estilos={<Style />} rootFontSize={rootFontSize}>
      <header class={borderDouble}>
        <h1>Bienvenido a Spaceger</h1>
        <p>
          Spaceger es mi espacio digital que muestra parte del trabajo que
          realizo en el ámbito del desarrollo de software. En este ámbito, hace
          un tiempo ya que me ha hecho sentido enfocar mis esfuerzos en el ciclo
          de vida del software y profundizar sus implicancias prácticas. Este
          horizonte me ha conducido a construir una base conceptual —en continuo
          mejoramiento— en ciencia de la computación, metodologías de desarrollo
          de software modernas (Agile y DevOps), y de mantenimiento de software
          existente —por algunos llamado legacy code.
        </p>
        <p>
          Presento a ustedes algunos libros destacados que he leído/apuntado o
          estoy leyendo/apuntando:
        </p>
        <ul>
          <li class={listNone}>✓ The DevOps Handbook</li>
          <li class={listNone}>✓ The Pragmatic Programmer</li>
          <li class={listNone}>✓ Clean Architecture</li>
          <li class={listNone}>🖉 Working Effectively with Legacy Code</li>
        </ul>
      </header>
      <Frutakids estilos={borderDouble} />
      <Calculadora estilos={borderDouble} />
      <footer class={borderDouble}>
        <p class={textCenter}>Diseñado y codificado por Spaceger</p>
      </footer>
    </Layout>,
  );
});
