import React from 'react';
import { movies } from '../data';


const Movies = () => {

  const mov = movies.map(movie => {
    return (
      <div>
        <h2>Title: {movie.title}</h2>
        <h4>Time: {movie.time}</h4>
        <h4>Genres: </h4>
        <ul>
          {movie.genres.map(genre =>
            <li>{genre}</li>
          )}
        </ul>
      </div>
    )
  })
  return (
    <div>
      <h1>Movies Page</h1>
      {mov}
    </div>
  );
};

export default Movies;
