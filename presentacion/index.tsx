import type { FC } from "hono/jsx";

export const Presentacion: FC = (props) => (
  <header class={props.estiloPresentacion}>
    <h1>Bienvenido a Spaceger</h1>
    <p>
      Spaceger es el espacio digital que muestra parte del trabajo que realizo
      en el ámbito del desarrollo de software.
    </p>
    <p>
      A través de las lecturas, me ha hecho sentido enfocar mis esfuerzos en el
      ciclo de vida del software y en algunos paradigmas de programación —con
      sus respectivos procedimientos, estilos y buenas prácticas— en vez de sólo
      codificar. Estas lecturas me conducen a construir una base conceptual —en
      continuo mejoramiento— en ciencia de la computación, metodologías de
      desarrollo de software modernas Agile y DevOps, y de mantenimiento de
      software existente —por algunos llamado "legacy code".
    </p>
    <p>
      Comparto una lista de libros que he leído/apuntado o en estudio:
    </p>
    <ul>
      <li class={props.estiloLista}>
        &#9989; The Elements of Computer Systems (aka. Nand2Tetris, Nisan &
        Schocken, 2005/2021)
      </li>
      <li class={props.estiloLista}>
        &#9989; The DevOps Handbook (Kim, Humble, Debois, Willis & Forsgren,
        2016/2021)
      </li>
      <li class={props.estiloLista}>
        &#9989; The Pragmatic Programmer (Thomas & Hunt, 2008/2020)
      </li>
      <li class={props.estiloLista}>
        &#9989; Clean Architecture (Martin, 2018)
      </li>
      <li class={props.estiloLista}>&#9989; Clean Code (Martin, 2009)</li>
      <li class={props.estiloLista}>
        &#9989; Composing Software (Elliot, 2019)
      </li>
      <li class={props.estiloLista}>
        &#128221; Code Complete (McConnell, 1993/2004)
      </li>
      <li class={props.estiloLista}>
        &#128221; Object Design (Wirfs-Brock & McKean, 2003)
      </li>
      <li class={props.estiloLista}>
        &#128221; The Debugging Book (Zeller, 2021/2024)
      </li>
      <li class={props.estiloLista}>
        &#128221; Test-Driven Development By Example (Beck, 2003)
      </li>
      <li class={props.estiloLista}>&#128221; Clean Agile (Martin, 2020)</li>
      <li class={props.estiloLista}>
        &#128221; Computer Networking: A Top Down Approach (Kurose & Ross,
        2000/2020)
      </li>
      <li class={props.estiloLista}>
        &#128221; YDKJSY: Scope and Closures (Simpson, 2014/2020)
      </li>
      <li class={props.estiloLista}>
        &#128221; YDKJS: This and Prototypes (Simpson, 2014)
      </li>
    </ul>
    <p>
      Las herramientas de desarrollo de software que he usado son:
    </p>
    <ul>
      <li class={props.estiloLista}>
        &#9989; Lenguajes de programación: Typescript & Javascript
      </li>
      <li class={props.estiloLista}>
        &#9989; Ambientes de ejecución Javascript/Typescript: Node (JS) & Deno 2
        (JS & TS)
      </li>
      <li class={props.estiloLista}>
        &#9989; Bibliotecas: Hono, Expressjs, Fastify & Reactjs
      </li>
      <li class={props.estiloLista}>
        &#9989; Dev server + builder para web front-end: Vite
      </li>
      <li class={props.estiloLista}>
        &#9989; Herramientas en navegador web: Debugger, Inspector, Consola
      </li>
    </ul>
  </header>
);
