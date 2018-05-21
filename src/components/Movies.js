import React from 'react';
import { movies } from '../data';

const movieDivs = movies.map((movie) => {
  return (
    <div key={movie.title}>
      <h2>Name: {movie.title}</h2>
      <p>Time: {movie.time} minutes</p>
      Genres:
      <ul>
        {movie.genres.map((genre) => {
          return <li key={genre}>{genre}</li>
        })}
      </ul>
    </div>
  )
})

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {movieDivs}
    </div>
  );
};

export default Movies;
