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
      <title>Spaceger</title>
      <style>
        .colSpan2 {
          grid-column : span 2 / span 2;
        }
        .colSpan3 {
          grid-column: span 3 / span 3;
        }
        .colSpan5 {
          grid-column: span 5 / span 5;
        }
        .borderSolid {
          border-style: solid;
        }
        .borderNone{
          border-style: none;
        }
        .border4 {
          border-width: 4px;
        }
        .flex {
          display: flex;
        }
        .justifyAround {
          justify-content: space-around;
        }
        .itemsCenter {
          align-items: center;
        }
        .my3 {
          margin-top: 0.75rem;
          margin-bottom: 0.75rem;
        }
        .myAuto {
          margin-top: auto;
          margin-bottom: auto;
        }
        .h5 {
          height: 1.25rem;
        }
        .h20 {
          height: 5rem;
        }
        .h32 {
          height: 8rem;
        }
        .size12 {
          width: 3rem;
          height: 3rem;
        }
        .text4xl {
          font-size: 2.25rem;
          line-height: 2.5rem;
        }
        .text2xlCustom {
          font-size: 1.5rem;
          line-height: 0.75rem;
        }
        .textCenter {
          text-align: center;
        }
        .bgStone400 {
          background-color: rgb(168 162 158);
        }
        .bgLime500 {
          background-color: rgb(132 204 22);
        }
        .bgRed600 {
          background-color: rgb(220 38 38);
        }
      </style>
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
