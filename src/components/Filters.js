import CuisineFilter from './CuisineFilter';
import ChosenRecipe from './ChosenRecipe';

function Filters(props) {
  return (
    <section>
      <form>
        <CuisineFilter handleCuisineFilter={props.handleCuisineFilter} />
      </form>
    </section>
  );
}

export default Filters;
// poner en form <ChosenRecipe id={props.id} />
