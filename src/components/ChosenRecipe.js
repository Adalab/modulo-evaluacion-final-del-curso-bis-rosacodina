function ChosenRecipe(props) {
  const renderId = () => {
    return props.id.map((id) => {
      return (
        <li>
          <label htmlFor="">{id}</label>
          <input type="checkbox" name="recipe" id=""></input>
        </li>
      );
    });
  };
  return (
    <>
      <label>Recetas</label>
      <ul>{renderId}</ul>
    </>
  );
}
export default ChosenRecipe;
