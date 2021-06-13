import { Acciones } from "./componentes/Acciones";
import { Display } from "./componentes/Display";
import { Info } from "./componentes/Info";
import { Teclado } from "./componentes/Teclado";

function App() {
  const teclas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  return (
    <div className="contenedor">
      {/* <!-- El siguiente elemento se oculta añadiéndole la clase "off" --> */}
      <Info />
      <main className="telefono">
        <Teclado teclas={teclas} />
        <div className="acciones">
          <Display />
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
