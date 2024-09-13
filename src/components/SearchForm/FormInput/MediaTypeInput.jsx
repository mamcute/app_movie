const MediaTypeInput = ({ onChange, name, value }) => {
  return (
    <div className="accent-black">
      <input
        type="radio"
        name={name}
        value="movie"
        onChange={onChange}
        checked={value === "movie"}
        id="sf-type-movie"
      />
      <label htmlFor="sf-type-movie"> Movie</label> <br />
      <input
        type="radio"
        name={name}
        value="tv"
        onChange={onChange}
        checked={value === "tv"}
        id="sf-type-tv"
      />
      <label htmlFor="sf-type-tv"> Tv Show</label>
    </div>
  );
};

export default MediaTypeInput;
