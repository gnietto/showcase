import type { FC } from "hono/jsx";
import { cx } from "hono/css";
import { Contenedor } from "../utils/contenedor.tsx";
import {
  border2,
  borderSolid,
  colSpan3,
  gap1,
  grid,
  gridCols4,
  gridRows5,
  textCenter,
  textRight
} from "../utils/clasesJsx.tsx";

export const Calculadora: FC = (props) => (
  <div class={props.estilos}>
    <h1>Calculadora JSX</h1>
    <p>
      Calculadora JSX es una calculadora básica codificada usando la sintaxis JSX disponible para aplicaciones web Typescript/Javascript.
    </p>
    <p> Agregaré más funcionalidades a esta aplicación de forma gradual. </p>
    <Contenedor layout={cx(grid, gridCols4, gridRows5, gap1)}>
      <div id="visor" class={cx(colSpan3, border2, borderSolid, textRight)}>0</div>
      <div class={cx(border2, borderSolid, textCenter)} data-limpiardata="">Limpia</div>
      <div class={cx(border2, borderSolid, textCenter)} data-valorboton="7">7</div>
      <div class={cx(border2, borderSolid, textCenter)} data-valorboton="8">8</div>
      <div class={cx(border2, borderSolid, textCenter)} data-valorboton="9">9</div>
      <div class={cx(border2, borderSolid, textCenter)} data-valorboton="/">Divide por</div>
      <div class={cx(border2, borderSolid, textCenter)} data-valorboton="4">4</div>
      <div class={cx(border2, borderSolid, textCenter)} data-valorboton="5">5</div>
      <div class={cx(border2, borderSolid, textCenter)} data-valorboton="6">6</div>
      <div class={cx(border2, borderSolid, textCenter)} data-valorboton="*">Multiplica por</div>
      <div class={cx(border2, borderSolid, textCenter)} data-valorboton="1">1</div>
      <div class={cx(border2, borderSolid, textCenter)} data-valorboton="2">2</div>
      <div class={cx(border2, borderSolid, textCenter)} data-valorboton="3">3</div>
      <div class={cx(border2, borderSolid, textCenter)} data-valorboton="-">Menos</div>
      <div class={cx(border2, borderSolid, textCenter)} data-valorboton="0">0</div>
      <div class={cx(border2, borderSolid, textCenter)} data-valorboton=".">.</div>
      <div class={cx(border2, borderSolid, textCenter)} data-evaluardata="">Igual</div>
      <div class={cx(border2, borderSolid, textCenter)} data-valorboton="+">Más</div>
    </Contenedor>
  </div>
);
