import { Link } from 'react-router-dom';
import RecipesList from './RecipesList';

let favourites = [];

function handleClick(e) {
  favourites.push(e.currentTarget.id);
  console.log(favourites);
  const idSelectedRecipe = e.currentTarget.id; //I get the recipe was clicked
}

function ItemRecipe(props) {
  return (
    <>
      <div id={props.recipe.id} onClick={handleClick}>
        <h2>{props.recipe.title}</h2>
        <img alt="" src={props.recipe.photoUrl} />
        <p>{props.recipe.cuisine}</p>
        <p>{props.recipe.calories}</p>
        <p>{props.recipe.tags}</p>
      </div>
    </>
  );
}

export default ItemRecipe;
