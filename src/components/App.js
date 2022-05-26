import { useState, useEffect } from 'react';
import '../styles/App.scss';
import apiData from '../services/recipeApi';
import RecipesList from './RecipesList';

// Función principal.
function App() {
  //Function to modify a state variable
  const [dataRecipes, setDataRecipes] = useState([]);

  //To bring the cleaned data
  useEffect(() => {
    apiData().then((dataClean) => {
      console.log(dataClean);
      setDataRecipes(dataClean);
    });
  }, []);
  return (
    <>
      <h1 className="header__title">RECETAS</h1>
      <RecipesList recipes={dataRecipes} />
    </>
  );
}

export default App;
