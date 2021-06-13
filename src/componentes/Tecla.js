export const Tecla = (props) => {
  const { contenido } = props;
  return (
    <li>
      <button>{contenido}</button>
    </li>
  );
};
