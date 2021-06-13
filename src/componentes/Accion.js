export const Accion = (props) => {
  const { contenido, clase, off } = props;
  return (
    <a href={clase} className={`${clase}${off ? " off" : ""}`}>
      {contenido}
    </a>
  );
};
