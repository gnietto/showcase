import { Hono } from "hono";
import { html } from "hono/html";
import { Style, cx } from "hono/css";
import type { FC } from "hono/jsx";
import {serveStatic} from "hono/deno";
import { Calculadora } from "./calculadora/index.tsx";
import { Presentacion } from "./presentacion/index.tsx";
import { Footer } from "./footer/index.tsx";
import {
  borderDouble,
  listNone,
  rootFontSize,
  textCenter,
  grid,
  gridCols5,
  gridRows3,
  gap1
} from "./utils/clasesJsx.tsx";

export const app = new Hono();

const Layout: FC = (props) => (html`
  <!doctype html>
  <html class=${props.rootFontSize}>
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" type="image/svg+xml" href="/static/favicon.png" />
      <script defer src="/static/cliente0.js"></script>
      <script defer src="/static/cliente1.js"></script>
      <link rel="stylesheet" href="/static/general.css" />
      <title>Spaceger</title>
      ${props.estilos}
    </head>
    <body>
      ${props.children}
    </body>
  </html>
`);


app.use("/static/*", serveStatic({root: "./"}));

app.get("/", (c) => {
  return c.html(
    <Layout estilos={<Style />} rootFontSize={rootFontSize}>
      <Presentacion estiloPresentacion={borderDouble} estiloLista={listNone} />
      <div id="frutakids" className={cx(borderDouble, grid, gridCols5, gridRows3, gap1)}></div>
      <Calculadora estilos={borderDouble} />
      <Footer estilofooter={borderDouble} estiloparrafo={textCenter} />
    </Layout>,
  );
});

// app.get("/api/frutelis",(c) => {
//   return c.json(canastaFrutas);
// });
