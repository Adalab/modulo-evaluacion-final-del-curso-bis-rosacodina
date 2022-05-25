import { useState, useEffect } from 'react';
import '../styles/App.scss';
import apiData from '../services/recipeApi';

// Función principal.
function App() {
  //Function to modify a state variable
  const [dataRecipes, setDataRecipes] = useState([]);

  useEffect(() => {
    //To bring the cleaned data
    apiData().then((dataClean) => {
      console.log(dataClean);
      setDataRecipes(dataClean);
    });
  }, []);
  return (
    <>
      <header className="header">
        <h1 className="header__title">RECETAS</h1>
      </header>
    </>
  );
}

export default App;
