export const Tecla = (props) => {
  const { contenido, marcarNumero } = props;
  return (
    <li>
      <button onClick={() => marcarNumero(contenido)}>{contenido}</button>
    </li>
  );
};
