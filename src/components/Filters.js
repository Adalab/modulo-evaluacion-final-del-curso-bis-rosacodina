import CuisineFilter from './CuisineFilter';
import TimeFilter from './TimeFilter';

function Filters(props) {
  return (
    <section>
      <form>
        <CuisineFilter handleCuisineFilter={props.handleCuisineFilter} />
        <TimeFilter handleTimeFilter={props.handleTimeFilter} />
      </form>
    </section>
  );
}

export default Filters;
