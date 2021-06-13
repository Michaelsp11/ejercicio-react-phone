import { Accion } from "./Accion.js";
export const Acciones = (props) => {
  return (
    <>
      <Accion contenido="Llamar" clase="llamar" />
      <Accion contenido="Colgar" clase="colgar" off={true} />
    </>
  );
};
