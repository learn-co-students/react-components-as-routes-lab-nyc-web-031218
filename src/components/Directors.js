import React from 'react';
import { directors } from '../data';

const Directors = () => {
  const dir = directors.map(director => {
    return (
      <div>
        <h3>Name: {director.name}</h3>
        <h4>Movies:</h4>
        <ul>
        {director.movies.map(movie =>{
          return (
            <li>{movie}</li>
          )
        })}
        </ul>
      </div>
    )
  })
  return (
    <div>
      <h1>Directors Page</h1>
      {dir}
    </div>
  );
}

export default Directors
