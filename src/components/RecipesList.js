import Item from './Item';

function RecipesList(props) {
  const recipeElements = props.recipes.map((recipe) => {
    return (
      <li>
        <Item recipe={recipe} />
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
