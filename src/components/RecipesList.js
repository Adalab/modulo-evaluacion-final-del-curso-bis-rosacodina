import RecipeItem from './RecipeItem';

function RecipesList(props) {
  //I go to every position of the array that I get through props
  const recipeElements = props.recipes.map((recipe) => {
    return (
      <li>
        <RecipeItem />
      </li>
    );
  });
  return (
    <section>
      <ul>{recipeElements}</ul>
    </section>
  );
}

export default RecipesList;
