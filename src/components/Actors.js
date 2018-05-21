import React from 'react';
import { actors } from '../data';

const Actors = () => {
  const act = actors.map(actor => {
    return (
      <div>
        <h4>Name: {actor.name}</h4>
        <h4>Movies:</h4>
        <ul>
          {actor.movies.map(movie =>
            <li>{movie}</li>
          )}
        </ul>
      </div>
    )
  })
  return (
    <div>
      <h1>Actors Page</h1>
      {act}
    </div>
  );
};

export default Actors;
