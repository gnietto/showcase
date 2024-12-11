import type { FC } from "hono/jsx";
import { cx } from "hono/css";
import { Contenedor } from "../utils/contenedor.tsx";
import {
  border4,
  borderSolid,
  flex,
  justifyAround,
  mb4,
  text4xl,
  size12
} from "../utils/clasesJsx.tsx";


const FrutasInfo: FC = (props) => (
  <div class={props.estilos}>
    <div id="fruta1" class={props.estilofruta} draggable data-drag="a">{props.fruta1}</div>
    <div id="fruta2" class={props.estilofruta} draggable data-drag="a">{props.fruta2}</div>
    <div id="fruta3" class={props.estilofruta} draggable data-drag="a">{props.fruta3}</div>
    <div class={props.estiloinfofruta}>{props.infofruta}</div>
  </div>
);

const Boxes: FC = (props) => (
  <div class={props.estilos}>
    <div class={props.estilobox} data-drop="b">{props.box1}</div>
    <div class={props.estilocomparador}>{">"}</div>
    <div class={props.estilobox} data-drop="b">{props.box1}</div>
    <div class={props.estilocomparador}>{">"}</div>
    <div class={props.estilobox} data-drop="b">{props.box1}</div>
  </div>
);

const Banner: FC = (props) => (
  <div class={props.estilos}>
    <p>{props.mensaje}</p>
    <button>{props.accion}</button>
  </div>
);

export const Frutakids: FC = (props) => {
  const canastaFrutas = [
    {nombre:"manzana", precio:1295, imagen:"🍎"},
    {nombre:"pera", precio:975, imagen:"🍐"},
    {nombre:"cereza", precio:2990, imagen:"🍒"},
    {nombre:"naranja", precio:995, imagen:"🍊"},
    {nombre:"plátano", precio:725, imagen:"🍌"},
    {nombre:"piña", precio:2590, imagen:"🍍"},
    {nombre:"mango", precio:3990, imagen:"🥭"},
    {nombre:"frutilla", precio:3790, imagen:"🍓"},
    {nombre:"durazno", precio:1490, imagen:"🍑"},
    {nombre:"kiwi", precio:3850, imagen:"🥝"},
    {nombre:"limón", precio:925, imagen:"🍋"}
  ];

  const obtieneFrutasAleatorias = () => {
    const aplicaAleatoriedad = canastaFrutas.sort(() => 0.5 - Math.random());
    return aplicaAleatoriedad.slice(0, 3);
  };

  const seleccionFrutas = obtieneFrutasAleatorias();

  return (
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
        fruta1={seleccionFrutas[0].imagen}
        fruta2={seleccionFrutas[1].imagen}
        fruta3={seleccionFrutas[2].imagen}
        infofruta="?"
        estilos={cx(flex, justifyAround, mb4)}
        estilofruta={cx(text4xl)}
        estiloinfofruta={cx(borderSolid, text4xl)}
      />
      <Boxes
        estilobox={cx(border4, borderSolid, text4xl, size12)}
        estilos={cx(flex, justifyAround)}
        estilocomparador={cx(text4xl)}
        box1=""
      />
      <Banner
        mensaje="Ordena las frutas según su precio de mayor a menor"
        accion="Evaluar"
        estilos={cx(flex, justifyAround)}
      />
    </Contenedor>
  </div>
)};
