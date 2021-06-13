export const Tecla = (props) => {
  const { contenido, teclasDesabilitada, marcarNumero } = props;
  return (
    <li>
      <button
        onClick={() => marcarNumero(contenido)}
        disabled={teclasDesabilitada}
      >
        {contenido}
      </button>
    </li>
  );
};
