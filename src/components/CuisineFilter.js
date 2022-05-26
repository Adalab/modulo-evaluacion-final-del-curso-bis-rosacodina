function CuisineFilter(props) {
  //Lifting to listen at the input
  const handleChange = (ev) => {
    props.handleCuisineFilter(ev.target.value);
  };
  return (
    <>
      <section>
        <label>
          Cuisine type
          <input
            type="text"
            placeholder="Type to search any cuisine type"
            onChange={handleChange}
          ></input>
        </label>
      </section>
    </>
  );
}

export default CuisineFilter;
