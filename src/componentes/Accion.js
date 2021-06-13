export const Accion = (props) => {
  const { contenido, clases, ocultar, desabilitado, realizarAccion } = props;
  return (
    <a
      href={contenido}
      className={`${clases}${desabilitado ? "" : " activo"}${
        ocultar ? " off" : ""
      }`}
      onClick={realizarAccion}
    >
      {contenido}
    </a>
  );
};
