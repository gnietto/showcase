import type { FC } from "hono/jsx";
import { cx } from "hono/css";
import { Contenedor } from "../utils/contenedor.tsx";
import {
  border4,
  borderSolid,
  flex,
  justifyAround,
  mb4,
  size12,
  text4xl,
  text2xlCustom,
} from "../utils/clasesJsx.tsx";

const FrutasInfo: FC = (props) => (
  <div class={props.estilos}>
    <div
      id="fruta1"
      class={props.estilofruta}
      draggable
      data-drag="a"
      data-imagen={props.imagenfruta1}
      data-nombre={props.nombrefruta1}
      data-precio={props.preciofruta1}
    >
      {props.fruta1}
    </div>
    <div
      id="fruta2"
      class={props.estilofruta}
      draggable
      data-drag="a"
      data-imagen={props.imagenfruta2}
      data-nombre={props.nombrefruta2}
      data-precio={props.preciofruta2}
    >
      {props.fruta2}
    </div>
    <div
      id="fruta3"
      class={props.estilofruta}
      draggable
      data-drag="a"
      data-imagen={props.imagenfruta3}
      data-nombre={props.nombrefruta3}
      data-precio={props.preciofruta3}
    >
      {props.fruta3}
    </div>
    <div class={props.estiloinfofruta}>
      <p id="inicioinfofrutas" class={props.estiloiniciofruta}>{props.infofruta}</p>
      <p id="imagenfruta" class={props.estiloimagenfruta}> </p>
      <p id="textonombrefruta" class={props.estilonombrefruta}></p>
      <p id="textopreciofruta" class={props.estilopreciofruta}></p>
    </div>
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
    { nombre: "manzana", precio: 1295, imagen: "🍎" },
    { nombre: "pera", precio: 975, imagen: "🍐" },
    { nombre: "cereza", precio: 2990, imagen: "🍒" },
    { nombre: "naranja", precio: 995, imagen: "🍊" },
    { nombre: "plátano", precio: 725, imagen: "🍌" },
    { nombre: "piña", precio: 2590, imagen: "🍍" },
    { nombre: "mango", precio: 3990, imagen: "🥭" },
    { nombre: "frutilla", precio: 3790, imagen: "🍓" },
    { nombre: "durazno", precio: 1490, imagen: "🍑" },
    { nombre: "kiwi", precio: 3850, imagen: "🥝" },
    { nombre: "limón", precio: 925, imagen: "🍋" },
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
        Frutakids es un juego para niños cuyo objetivo es clasificar frutas
        según su precio de mayor a menor.
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
          estiloinfofruta={cx(borderSolid)}
          imagenfruta1={seleccionFrutas[0].imagen}
          nombrefruta1={seleccionFrutas[0].nombre}
          preciofruta1={seleccionFrutas[0].precio}
          imagenfruta2={seleccionFrutas[1].imagen}
          nombrefruta2={seleccionFrutas[1].nombre}
          preciofruta2={seleccionFrutas[1].precio}
          imagenfruta3={seleccionFrutas[2].imagen}
          nombrefruta3={seleccionFrutas[2].nombre}
          preciofruta3={seleccionFrutas[2].precio}
          estiloiniciofruta={text4xl}
          estiloimagenfruta={text4xl}
          estilonombrefruta={text2xlCustom}
          estilopreciofruta={text2xlCustom}
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
  );
};
