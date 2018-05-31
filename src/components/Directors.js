import React from 'react';
import { directors } from '../data';

const Directors = () => {
  const diretorsrender = directors.map((director, index) => { return (
    <div key={ index }>
      <h2>Name: { director.name }</h2>
      <p>Movies:</p>
      <ul>
        { director.movies.map((movie, index) => (<li key={ index }>{ movie }</li>)) }
      </ul>
    </div>
  )})

  return (
    <div>
      <h1>Directors Page</h1>
      {diretorsrender}
      {/*{code here}*/}
    </div>
  );
}

export default Directors
