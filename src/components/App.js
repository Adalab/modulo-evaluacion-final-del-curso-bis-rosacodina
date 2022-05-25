// import sirve para enlazar /traer las dependencias que necesitamos.
// Librerías JS
// CSS
// Imágenes
// JSON

import '../styles/App.scss';
import recipeApi from '../services/recipeApi';

// Función principal.
function App() {
  return (
    <>
      <header className="header">
        <h1 className="header__title">RECETAS</h1>
      </header>
    </>
  );
}

export default App;
