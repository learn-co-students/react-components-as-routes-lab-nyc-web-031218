import React from 'react';
import { movies } from '../data';

const Movies = () => {
  const movierender = movies.map((movie, index) => { return (
    <div key={ index }>
      <h2>Title: { movie.title }</h2>
      <p>Time: { movie.time }</p>
      <p>Genres:</p>
      <ul>
        { movie.genres.map((genre, index) => (<li key={ index }>{ genre }</li>)) }
      </ul>
    </div>
  )})

  return (
    <div>
        <h1>Movies Page</h1>
        { movierender }
    </div>
  );
};

export default Movies;
