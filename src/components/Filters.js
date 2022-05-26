import CuisineFilter from './CuisineFilter';

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
