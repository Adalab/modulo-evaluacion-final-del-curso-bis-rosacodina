function TimeFilter(props) {
  const handleTimeFilter = (ev) => {
    props.handleTimeFilter(ev.target.value);
  };

  return (
    <>
      <section>
        <label>
          {' '}
          Cooking time
          <input
            type="text"
            onChange={handleTimeFilter}
            placeholder="Type amount of minutes"
            value={props.timeFilter}
          ></input>
        </label>
      </section>
    </>
  );
}

export default TimeFilter;
