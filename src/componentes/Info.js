export const Info = (props) => {
  const { mostrarMensaje } = props;
  return (
    <span className={`mensaje${mostrarMensaje ? "" : " off"}`}>
      Llamando...
    </span>
  );
};
