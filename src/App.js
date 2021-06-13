import { useState } from "react";
import { Acciones } from "./componentes/Acciones";
import { Display } from "./componentes/Display";
import { Info } from "./componentes/Info";
import { Teclado } from "./componentes/Teclado";

function App() {
  const teclas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const [numeroLlamar, setNumeroLlamar] = useState("");
  const [desabilitadoLlamar, setDesabilitadoLlamar] = useState(true);
  const [ocultarLlamar, setOcultarLlamar] = useState(false);
  const [ocultarColgar, setOcultarColgar] = useState(true);
  const [mostrarMensaje, setMostrarMensaje] = useState(false);
  const [timer, setTimer] = useState();
  const numeroCorrecto = () => numeroLlamar.length === 9;
  const marcarNumero = (numero) => {
    if (numeroCorrecto()) {
      return;
    }
    setNumeroLlamar(numeroLlamar + numero);
    setDesabilitadoLlamar(numeroLlamar.length + 1 === 9 ? false : true);
  };
  const borraDigito = () => {
    setNumeroLlamar(numeroLlamar.slice(0, numeroLlamar.length - 1));
    setDesabilitadoLlamar(true);
  };
  const llamar = (evento) => {
    evento.preventDefault();
    if (numeroCorrecto()) {
      setMostrarMensaje(true);
      setOcultarLlamar(true);
      setOcultarColgar(false);
      setTimer(
        setTimeout(() => {
          setMostrarMensaje(false);
          setOcultarLlamar(false);
          setOcultarColgar(true);
          setNumeroLlamar("");
        }, 5000)
      );
    }
  };
  const colgar = (evento) => {
    evento.preventDefault();
    setTimer(clearTimeout(timer));
    setMostrarMensaje(false);
    setOcultarLlamar(false);
    setOcultarColgar(true);
    setNumeroLlamar("");
    setDesabilitadoLlamar(true);
  };
  return (
    <div className="contenedor">
      {/* <!-- El siguiente elemento se oculta añadiéndole la clase "off" --> */}
      <Info mostrarMensaje={mostrarMensaje} />
      <main className="telefono">
        <Teclado
          teclas={teclas}
          marcarNumero={marcarNumero}
          borraDigito={borraDigito}
          teclasDesabilitadas={ocultarLlamar}
        />
        <div className="acciones">
          <Display numero={numeroLlamar} />
          {/* <!-- El botón de llamar debe tener la clase "activo" cuando -->
                <!-- el número de teléfono tiene 9 cifras --> */}
          {/* <!-- Sólo se tiene que ver un botón u otro --> */}
          <Acciones
            desabilitadoLlamar={desabilitadoLlamar}
            ocultarLlamar={ocultarLlamar}
            ocultarColgar={ocultarColgar}
            funcionLlamar={llamar}
            funcionColgar={colgar}
          />
        </div>
      </main>
    </div>
  );
}

export default App;
