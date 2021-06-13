import { Accion } from "./Accion.js";
export const Acciones = (props) => {
  const {
    desabilitadoLlamar,
    ocultarLlamar,
    ocultarColgar,
    funcionLlamar,
    funcionColgar,
  } = props;
  return (
    <>
      <Accion
        contenido="Llamar"
        clases="llamar"
        desabilitado={desabilitadoLlamar}
        ocultar={ocultarLlamar}
        realizarAccion={funcionLlamar}
      />
      <Accion
        contenido="Colgar"
        clases="colgar"
        desabilitado={false}
        ocultar={ocultarColgar}
        realizarAccion={funcionColgar}
      />
    </>
  );
};
