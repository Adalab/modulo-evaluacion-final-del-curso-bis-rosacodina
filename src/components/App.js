import { useState, useEffect } from 'react';
import '../styles/App.scss';
import apiData from '../services/recipeApi';
import RecipesList from './RecipesList';
import Filters from './Filters';

/*-----------------*/
function App() {
  //Function to modify a state variable
  const [dataRecipes, setDataRecipes] = useState([]);
  /*-----------------*/

  /*-----------------*/
  //State variable that will change when the user types
  const [cuisineFilter, setCuisineFilter] = useState('');
  /*-----------------*/

  /*-----------------*/
  //To bring the cleaned data
  useEffect(() => {
    apiData().then((dataClean) => {
      console.log(dataClean);
      setDataRecipes(dataClean);
    });
  }, []);
  /*-----------------*/

  /*-----------------*/
  //Function to modify the state variable of cuisine type
  const handleCuisineFilter = (value) => {
    setCuisineFilter(value);
  };
  /*-----------------*/

  /*-----------------*/
  //To send filtered data to RecipiesList
  const recipesFilters = dataRecipes.filter((recipe) => {
    return recipe.cuisine === cuisineFilter;
  });
  /*-----------------*/

  return (
    <>
      <h1 className="header__title">RECETAS</h1>
      <RecipesList recipes={recipesFilters} />
      <Filters handleCuisineFilter={handleCuisineFilter} />
    </>
  );
}

export default App;
