import { Tecla } from "./Tecla";

export const Teclado = (props) => {
  const { teclas, marcarNumero, borraDigito } = props;
  return (
    <div className="botones">
      <ol className="teclado">
        {teclas.map((tecla) => (
          <Tecla key={tecla} contenido={tecla} marcarNumero={marcarNumero} />
        ))}
        <li>
          <button className="big" onClick={borraDigito}>
            borrar
          </button>
        </li>
      </ol>
    </div>
  );
};
