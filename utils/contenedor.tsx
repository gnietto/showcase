import type { FC } from "hono/jsx";

export const Contenedor: FC = (props) => (
  <div class={props.layout}>
    {props.children}
  </div>
);
