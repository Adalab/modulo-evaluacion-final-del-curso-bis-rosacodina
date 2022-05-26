import CuisineFilter from './CuisineFilter';
import ChosenRecipe from './ChosenRecipe';

function Filters(props) {
  return (
    <section>
      <form>
        <CuisineFilter handleCuisineFilter={props.handleCuisineFilter} />
        <ChosenRecipe id={props.id} />
      </form>
    </section>
  );
}

export default Filters;
