import { useState } from "react";
import { Acciones } from "./componentes/Acciones";
import { Display } from "./componentes/Display";
import { Info } from "./componentes/Info";
import { Teclado } from "./componentes/Teclado";

function App() {
  const teclas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const [numeroLlamar, setNumeroLlamar] = useState("");
  const marcarNumero = (numero) => {
    if (numeroLlamar.length >= 9) {
      return;
    }
    setNumeroLlamar(numeroLlamar + numero);
  };
  const borraDigito = () => {
    setNumeroLlamar(numeroLlamar.slice(0, numeroLlamar.length - 1));
  };
  return (
    <div className="contenedor">
      {/* <!-- El siguiente elemento se oculta añadiéndole la clase "off" --> */}
      <Info />
      <main className="telefono">
        <Teclado
          teclas={teclas}
          marcarNumero={marcarNumero}
          borraDigito={borraDigito}
        />
        <div className="acciones">
          <Display numero={numeroLlamar} />
          {/* <!-- El botón de llamar debe tener la clase "activo" cuando -->
                <!-- el número de teléfono tiene 9 cifras --> */}
          {/* <!-- Sólo se tiene que ver un botón u otro --> */}
          <Acciones />
        </div>
      </main>
    </div>
  );
}

export default App;
