import { Tecla } from "./Tecla";

export const Teclado = (props) => {
  const { teclas } = props;
  return (
    <div className="botones">
      <ol className="teclado">
        {teclas.map((tecla) => (
          <Tecla key={tecla} contenido={tecla} />
        ))}
        <li>
          <button className="big">borrar</button>
        </li>
      </ol>
    </div>
  );
};
