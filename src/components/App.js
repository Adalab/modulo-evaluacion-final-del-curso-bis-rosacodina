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
  //Conditional to paint all recipes
  const recipesFilters = dataRecipes.filter((recipe) => {
    return cuisineFilter === ''
      ? true
      : recipe.cuisine.toLowerCase().includes(cuisineFilter.toLowerCase());
  });
  /*-----------------*/

  /*-----------------*/
  /*Function to take the id from the recipe
  const getIdRecipe = () => {
    const idRecipes = dataRecipes.map((recipe) => recipe.id);
    const uniqueRecipes = idRecipes.filter((id, index) => {
      return idRecipes.indexOf(id === index);
    });
    return uniqueRecipes;
  };
  /*-----------------*/
  //I create an array to introduce into it the recipes that the user clicks

  return (
    <>
      <h1 className="header__title">RECETAS</h1>
      <div>
        <RecipesList recipes={recipesFilters} />
        <Filters handleCuisineFilter={handleCuisineFilter} />
      </div>
    </>
  );
}
//Poner dentro de la etique Filters, a continuación de handleCuisine
//id={getIdRecipe()}
export default App;
