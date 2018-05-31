import React from 'react';
import { actors } from '../data';

const Actors = () => {

  const actorsrender = actors.map((actor, index) => { return (
    <div key={ index }>
      <h2>Name: { actor.name }</h2>
      <p>Movies:</p>
      <ul>
        { actor.movies.map((movie, index) => (<li key={ index }>{ movie }</li>)) }
      </ul>
    </div>
  )})

  return (
    <div>
      <h1>Actors Page</h1>
      { actorsrender }
      {/*{code here}*/}
    </div>
  );
};

export default Actors;
