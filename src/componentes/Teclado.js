import { Tecla } from "./Tecla";

export const Teclado = (props) => {
  const { teclas, teclasDesabilitadas, marcarNumero, borraDigito } = props;
  return (
    <div className="botones">
      <ol className="teclado">
        {teclas.map((tecla) => (
          <Tecla
            key={tecla}
            contenido={tecla}
            marcarNumero={marcarNumero}
            teclasDesabilitada={teclasDesabilitadas}
          />
        ))}
        <li>
          <button
            className="big"
            onClick={borraDigito}
            disabled={teclasDesabilitadas}
          >
            borrar
          </button>
        </li>
      </ol>
    </div>
  );
};
