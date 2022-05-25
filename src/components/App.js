// import sirve para enlazar /traer las dependencias que necesitamos.
// Librerías JS
// CSS
// Imágenes
// JSON

import '../styles/App.scss';
import logo from '../images/logo.svg';

// Función principal.
function App() {
  // Variables generales, constantes, variables de estado.
  // Hooks.
  // Funciones genrales, funnciones manejadoras de eventos.

  return (
    // Como solo se puede devolver una etiqueta, se puede usar una etiqueta ficticia vacia, llamada FRAGMENTO, y que se escribe, abiriendo y cerrando la etiqueta vacia, así "<> html </>".
    <>
      <header className='header'>
        <img src={logo} alt='Logo' className='logo' />
        <h1 className='header__title'>Título de mi página</h1>
      </header>
    </>
  );
}

export default App;
