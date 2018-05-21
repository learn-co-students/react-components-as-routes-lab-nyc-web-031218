import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
    <h1>Directors Page</h1>
      {
        directors.map(director =>
          (
          <div>
        <h2>{director.name}</h2>
        <h3>Movies</h3>
        <ul>
        {director.movies.map(director => (
          <li>{director}</li>
        ))}

        </ul>
        </div>
      ))}
    </div>
  );
}

export default Directors
// {
//   name: 'Scott Derrickson',
//   movies: ['Doctor Strange', 'Sinister', 'The Exorcism of Emily Rose']
// }
