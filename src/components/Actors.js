import React from 'react';
import { actors } from '../data';

const actorDivs = actors.map((actor) => {
  return (
    <div key={actor.name}>
      <h2>Name: {actor.name}</h2>
      Movies:
      <ul>
        {actor.movies.map((movie) => {
          return <li key={movie}>{movie}</li>
        })}
      </ul>
    </div>
  )
})

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actorDivs}
    </div>
  );
};

export default Actors;
