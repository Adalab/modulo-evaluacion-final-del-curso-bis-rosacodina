import { Link } from 'react-router-dom';

function Item(props) {
  return (
    <>
      <h2>{props.recipe.title}</h2>
      <img alt="" src={props.recipe.photoUrl} />
      <p>{props.recipe.cuisine}</p>
      <p>{props.recipe.calories}</p>
      <p>{props.recipe.tags}</p>
    </>
  );
}

export default Item;
