export const Presentacion: FC = (props) => (
  <header class={props.estiloPresentacion}>
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
      <li class={props.estiloLista}>✓ The Elements of Computer Systems (aka. Nand2Tetris, Nisan & Schocken, 2021)</li>
      <li class={props.estiloLista}>✓ The DevOps Handbook (Kim, Humble, Debois, Willis & Forsgren, 2016/2021)</li>
      <li class={props.estiloLista}>✓ The Pragmatic Programmer (Thomas & Hunt, 2020)</li>
      <li class={props.estiloLista}>✓ Clean Architecture (Martin, 2018)</li>
      <li class={props.estiloLista}>✓ Clean Code (Martin, 2009)</li>
      <li class={props.estiloLista}>🖉Clean Agile (Martin, 2020)</li>
      <li class={props.estiloLista}>🖉Working Effectively with Legacy Code (Feathers, 2005)</li>
      <li class={props.estiloLista}>🖉Modern C (Gustedt, 2024)</li>
      <li class={props.estiloLista}>🖉Computer Networking: A Top Down Approach (Kurose & Ross, 2020)</li>
      <li class={props.estiloLista}>...entre otros.</li>
    </ul>
  </header>
);
