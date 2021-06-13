export const Accion = (props) => {
  const { contenido, clase, off, desabilitado } = props;
  return (
    <a
      href={clase}
      className={`${clase}${desabilitado ? "" : " activo"}${off ? " off" : ""}`}
    >
      {contenido}
    </a>
  );
};
