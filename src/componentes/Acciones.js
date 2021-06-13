import { Accion } from "./Accion.js";
export const Acciones = (props) => {
  const { desabilitadoLlamar } = props;
  return (
    <>
      <Accion
        contenido="Llamar"
        clase="llamar"
        desabilitado={desabilitadoLlamar}
        off={false}
      />
      <Accion
        contenido="Colgar"
        clase="colgar"
        desabilitado={desabilitadoLlamar}
        off={true}
      />
    </>
  );
};
