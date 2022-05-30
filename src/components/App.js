import { useState, useEffect } from 'react';
import '../styles/App.scss';
import apiData from '../services/recipeApi';
import RecipesList from './RecipesList';
import Filters from './Filters';
import { matchPath, useLocation } from 'react-router';
import { Routes, Route } from 'react-router-dom';
import DetailRecipe from './DetailRecipe';
/*-----------------*/
function App() {
  //Function to modify a state variable
  const [dataRecipes, setDataRecipes] = useState([]);
  /*-----------------*/
  /*-----------------*/
  //State variable that will change when the user types
  const [cuisineFilter, setCuisineFilter] = useState('');
  /*-----------------*/
  const [timeFilter, setTimeFilter] = useState('');
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
  const handleTimeFilter = (value) => {
    setTimeFilter(value);
  };
  /*-----------------*/
  //To send filtered data to RecipiesList
  //Conditional to paint all recipes
  const recipesFilters = dataRecipes.filter((recipe) => {
    return cuisineFilter === ''
      ? true
      : recipe.cuisine.toLowerCase().includes(cuisineFilter.toLowerCase());
  });

  /*-----------------*/
  const totalTimeFilter = recipesFilters.filter((recipe) => {
    return timeFilter === '' ? true : recipe.totalTime === parseInt(timeFilter);
  });
  /*-----------------*/
  const { pathname } = useLocation();
  const dataPath = matchPath('/recipe/:recipeId', pathname);
  const recipeId = dataPath !== null ? dataPath.params.recipeId : null;
  const recipeFind = dataRecipes.find((item) => item.id === parseInt(recipeId));
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <h1 className="header__title">RECETAS</h1>
              <Filters
                handleCuisineFilter={handleCuisineFilter}
                handleTimeFilter={handleTimeFilter}
              />

              <RecipesList recipes={totalTimeFilter} />
            </>
          }
        />
        <Route
          path="/recipe/:recipeId"
          element={<DetailRecipe recipe={recipeFind} />}
        />
      </Routes>
    </>
  );
}
export default App;
