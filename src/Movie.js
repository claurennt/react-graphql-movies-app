const Movie = ({ title, director, year, rating, genre }) => {
  console.log(title);
  return (
    <div>
      <h2>{title}</h2>
      <h3>{director}</h3>
      <p>{year}</p>
      <p>{rating}</p>
      <p>{genre}</p>
    </div>
  );
};

export default Movie;
