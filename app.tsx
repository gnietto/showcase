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

const Footer: FC = (props) => (
  <footer class={props.estilofooter}>
    <p class={props.estiloparrafo}>Diseñado y codificado por Spaceger</p>
  </footer>
);

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
          <li class={listNone}>✓ The Elements of Computer Systems (aka. Nand2Tetris, Nisan & Schocken, 2021)</li>
          <li class={listNone}>✓ The DevOps Handbook (Kim, Humble, Debois, Willis & Forsgren, 2016/2021)</li>
          <li class={listNone}>✓ The Pragmatic Programmer (Thomas & Hunt, 2020)</li>
          <li class={listNone}>✓ Clean Architecture (Martin, 2018)</li>
          <li class={listNone}>✓ Clean Code (Martin, 2009)</li>
          <li class={listNone}>🖉Clean Agile (Martin, 2020)</li>
          <li class={listNone}>🖉Working Effectively with Legacy Code (Feathers, 2005)</li>
          <li class={listNone}>🖉Modern C (Gustedt, 2024)</li>
          <li class={listNone}>🖉Computer Networking: A Top Down Approach (Kurose & Ross, 2020)</li>
          <li class={listNone}>...entre otros.</li>
        </ul>
      </header>
      <Frutakids estilos={borderDouble} />
      <Calculadora estilos={borderDouble} />
      <Footer estilofooter={borderDouble} estiloparrafo={textCenter} />
    </Layout>,
  );
});
