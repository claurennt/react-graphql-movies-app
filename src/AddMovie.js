import { gql, useMutation } from '@apollo/client';
import { useState } from 'react';

const ADD_MOVIE = gql`
  mutation {
    createMovie(
      movie: {
        title: $title
        director: $director
        year: $year
        rating: $rating
        genre: $genre
      }
    ) {
      _id
    }
  }
`;

const AddMovie = (props) => {
  const [newMovie, setNewMovie] = useState({
    title: '',
    director: '',
    year: null,
    rating: null,
    genre: '',
  });
  // Refetches two queries after mutation completes
  const [createMovie, { data, loading, error }] = useMutation(ADD_MOVIE, {
    refetchQueries: [
      { query: props.GET_POST }, // DocumentNode object parsed with gql
    ],
  });

  const handleChange = (e) =>
    setNewMovie({ ...newMovie, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    createMovie({ variables: { movie: newMovie } });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name='title' placeholder='title' onChange={handleChange} />
      <input name='director' placeholder='director' onChange={handleChange} />
      <input name='rating' placeholder='rating' onChange={handleChange} />
      <input name='year' placeholder='year' onChange={handleChange} />
      <input name='genre' placeholder='genre' onChange={handleChange} />

      <button type='submit'>Add Movie</button>
    </form>
  );
};
export default AddMovie;
