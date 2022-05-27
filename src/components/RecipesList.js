import ItemRecipe from './ItemRecipe';

function RecipesList(props) {
  const recipeElements = props.recipes.map((recipe) => {
    return (
      <li>
        <ItemRecipe recipe={recipe} />
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
