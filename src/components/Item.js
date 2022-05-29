import { Link } from 'react-router-dom';

function Item(props) {
  return (
    <>
      <Link to={`/recipe/${props.recipe.id}`}>
        <h2>{props.recipe.title}</h2>
        <img alt="" src={props.recipe.photoUrl} />
        <p>{props.recipe.cuisine}</p>
        <p>{props.recipe.calories}</p>
        <p>{props.recipe.tags}</p>
      </Link>
    </>
  );
}

export default Item;
