import './App.css';
import { useState, useEffect } from 'react';
import { useQuery, gql } from '@apollo/client';
import Movie from './Movie';
import AddMovie from './AddMovie';

const GET_MOVIES = gql`
  {
    movies {
      title
      director
      year
      genre
      rating
      _id
    }
  }
`;

function App() {
  const [display, setDisplay] = useState(false);
  const { data, loading, error } = useQuery(GET_MOVIES);
  if (loading) return 'Loading...';
  if (error) return <pre>{error.message}</pre>;

  const displayForm = (e) => setDisplay(!display);

  return (
    <div className='App'>
      <h1>My favorite Movies</h1>
      <button onClick={displayForm}>add new movie</button>
      {display && <AddMovie />}
      {data.movies.map((movie) => (
        <Movie key={movie._id} {...movie} GET_MOVIES={GET_MOVIES} />
      ))}
    </div>
  );
}

export default App;
