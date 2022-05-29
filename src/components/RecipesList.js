import Item from './Item';

function RecipesList(props) {
  const recipeElements = props.recipes.map((recipe) => {
    return (
      <li key={recipe.id}>
        <Item recipe={recipe} />
      </li>
    );
  });
  return (
    <section>
      <section>
        <button>Save recipes</button>
        <button>Recover recipes</button>
      </section>
      <ul>{recipeElements}</ul>
    </section>
  );
}

export default RecipesList;
