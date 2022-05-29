const DetailRecipe = (props) => {
  return (
    <section>
      <img src={props.recipe.photoUrl} alt={props.recipe.title} />
      <h4 className="">Nombre:{props.recipe.title}</h4>
      <p className=""> Tipo de cocina: {props.recipe.cuisine}</p>
      <p className=""> Etiquetas: {props.recipe.tags}</p>
      <p className=""> Número de calorías: {props.recipe.calories}</p>
    </section>
  );
};
export default DetailRecipe;
