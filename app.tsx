import { Hono } from "hono";
import { html } from "hono/html";
import { css, cx, Style } from "hono/css";
import type { FC } from "hono/jsx";

export const app = new Hono();

const Contenedor: FC = (props) => (
  <div class={props.layout}>
    {props.children}
  </div>
);

const FrutasInfo: FC = (props) => (
  <div class={props.estilos}>
    <div class={props.estilofruta}>{props.fruta1}</div>
    <div class={props.estilofruta}>{props.fruta2}</div>
    <div class={props.estilofruta}>{props.fruta3}</div>
    <div class={props.estiloinfofruta}>{props.infofruta}</div>
  </div>
);

const Boxes: FC = (props) => (
  <div class={props.estilos}>
    <div class={props.estilobox}>{props.box1}</div>
    <div class={props.estilocomparador}>{">"}</div>
    <div class={props.estilobox}>{props.box1}</div>
    <div class={props.estilocomparador}>{">"}</div>
    <div class={props.estilobox}>{props.box1}</div>
  </div>
);

const Banner: FC = (props) => (
  <div class={props.estilos}>
    <p>{props.mensaje}</p>
    <button>{props.accion}</button>
  </div>
);

const Frutakids: FC = (props) => (
  <div class={props.estilos}>
    <h1>Frutakids</h1>
    <p>
      Frutakids es un juego para niños cuyo objetivo es clasificar frutas según
      su precio de mayor a menor.
    </p>
    <p>Haz click en cada fruta para conocer la información de cada fruta.</p>
    <p>
      Arrastra las frutas de la parte superior hacia los cajones de la parte
      inferior.
    </p>
    <p>
      Por último, evalúa tu respuesta haciendo click en el botón "evaluar". Y
      listo!
    </p>
    <Contenedor>
      <FrutasInfo
        fruta1="🍎"
        fruta2="🍒"
        fruta3="🍍"
        infofruta="?"
        estilos={cx(flex, justifyAround, mb4)}
        estilofruta={cx(text4xl)}
        estiloinfofruta={cx(borderSolid, text4xl)}
      />
      <Boxes
        estilobox={cx(border4, borderSolid, text4xl)}
        estilos={cx(flex, justifyAround)}
        estilocomparador={cx(text4xl)}
        box1="|-----|"
      />
      <Banner
        mensaje="Ordena las frutas según su precio de mayor a menor"
        accion="Evaluar"
        estilos={cx(flex, justifyAround)}
      />
    </Contenedor>
  </div>
);

const Calculadora: FC = (props) => (
  <div class={props.estilos}>
    <h1>Calculadora JSX</h1>
    <p>
      Calcula operaciones aritméticas simples tal como una calculadora manual.
    </p>
    <Contenedor layout={cx(grid, gridCols4, gridRows5, gap1)}>
      <div class={cx(colSpan4, border2, borderSolid, textRight)}>visor</div>
      <div class={cx(border2, borderSolid, textCenter)}>7</div>
      <div class={cx(border2, borderSolid, textCenter)}>8</div>
      <div class={cx(border2, borderSolid, textCenter)}>9</div>
      <div class={cx(border2, borderSolid, textCenter)}>divide por</div>
      <div class={cx(border2, borderSolid, textCenter)}>4</div>
      <div class={cx(border2, borderSolid, textCenter)}>5</div>
      <div class={cx(border2, borderSolid, textCenter)}>6</div>
      <div class={cx(border2, borderSolid, textCenter)}>multiplica por</div>
      <div class={cx(border2, borderSolid, textCenter)}>1</div>
      <div class={cx(border2, borderSolid, textCenter)}>2</div>
      <div class={cx(border2, borderSolid, textCenter)}>3</div>
      <div class={cx(border2, borderSolid, textCenter)}>menos</div>
      <div class={cx(border2, borderSolid, textCenter)}>0</div>
      <div class={cx(border2, borderSolid, textCenter)}>.</div>
      <div class={cx(border2, borderSolid, textCenter)}>igual</div>
      <div class={cx(border2, borderSolid, textCenter)}>más</div>
    </Contenedor>
  </div>
);

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

const rootFontSize = css`
  font-size: 16px;
  font-family: Arial;
`;

const borderDouble = css`
  border-style: double;
`;

const flex = css`
  display: flex;
`;

const justifyAround = css`
  justify-content: space-around;
`;

const mb4 = css`
  margin-bottom: 1rem;
`;

const p4 = css`
  padding: 1rem;
`;

const bgGray200 = css`
  background-color: rgb(229 231 235);
`;

const roundedLg = css`
  border-radius: 0.5rem;
`;

const textCenter = css`
  text-align: center;
`;

const textRight = css`
  text-align: right;
`;

const mxAuto = css`
  margin-left: auto;
  margin-right: auto;
`;

const mb2 = css`
  margin-bottom: 0.5rem;
`;

const w1quarter = css`
  width: 25%;
`;

const h24 = css`
  height: 6rem;
`;

const bgBlue500 = css`
  background-color: rgb(59 130 246);
`;

const textWhite = css`
  color: rgb(255 255 255);
`;

const px4 = css`
  padding-left: 1rem;
  padding-right: 1rem;
`;

const py2 = css`
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
`;

const bottom0 = css`
  bottom: 0px;
`;

const left0 = css`
  left:0px;
`;

const right0 = css`
  right: 0px;
`;

const bgGray800 = css`
  background-color: rgb(31 41 55);
`;

const hidden = css`
  display:none;
`;

const bgRed500 = css`
  background-color: rgb(239 68 68);
`;

const bgGreen500 = css`
  background-color: rgb(34 197 94);
`;

const borderSolid = css`
  border-style: solid;
`;

const text4xl = css`
  font-size: 2.25rem;
  line-height: 2.5rem;
`;

const grid = css`
  display: grid;
`;

const gridCols4 = css`
  grid-template-columns: repeat(4, minmax(0, 1fr));
`;

const gridRows5 = css`
  grid-template-rows: repeat(5, minmax(0, 1fr));
`;

const colSpan4 = css`
  grid-column: span 4 / span 4;
`;

const border2 = css`
  border-width: 2px;
`;

const border4 = css`
  border-width: 4px;
`;

const gap1 = css`
  gap: 0.25rem;
`;

app.get("/", (c) => {
  return c.html(
    <Layout estilos={<Style />} rootFontSize={rootFontSize}>
      <header class={borderDouble}>
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
      <Frutakids estilos={borderDouble} />
      <Calculadora estilos={borderDouble} />
      <footer class={borderDouble}>
        <p>Diseñado y codificado por Spaceger</p>
      </footer>
    </Layout>
  );
});
