function App() {
  return (
    <div class="contenedor">
      {/* <!-- El siguiente elemento se oculta añadiéndole la clase "off" --> */}
      <span class="mensaje">Llamando...</span>
      <main class="telefono">
        <div class="botones">
          <ol class="teclado">
            <li>
              <button>1</button>
            </li>
            <li>
              <button>2</button>
            </li>
            <li>
              <button>3</button>
            </li>
            <li>
              <button>4</button>
            </li>
            <li>
              <button>5</button>
            </li>
            <li>
              <button>6</button>
            </li>
            <li>
              <button>7</button>
            </li>
            <li>
              <button>8</button>
            </li>
            <li>
              <button>9</button>
            </li>
            <li>
              <button>0</button>
            </li>
            <li>
              <button class="big">borrar</button>
            </li>
          </ol>
        </div>
        <div class="acciones">
          <span class="numero">667359961</span>
          {/* <!-- El botón de llamar debe tener la clase "activo" cuando -->
                <!-- el número de teléfono tiene 9 cifras --> */}
          <a href="#" class="llamar">
            Llamar
          </a>
          {/* <!-- Sólo se tiene que ver un botón u otro --> */}
          <a href="#" class="colgar activo">
            Colgar
          </a>
        </div>
      </main>
    </div>
  );
}

export default App;
