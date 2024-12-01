import type { FC } from "hono/jsx";
import { cx } from "hono/css";
import { Contenedor } from "../utils/contenedor.tsx";
import {
  border2,
  borderSolid,
  colSpan4,
  gap1,
  grid,
  gridCols4,
  gridRows5,
  textCenter,
  textRight,
} from "../utils/clasesJsx.tsx";

export const Calculadora: FC = (props) => (
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
