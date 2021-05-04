import React from "react";

function Movie({ movies }) {
  return (
    <div>
      {movies.map((movie, index) => (
        <div key={index}>
          <h1>{movie.Title}</h1>
          <p>{movie.Year}</p>
          <img src={movie.Poster} alt="movie poster"></img>
        </div>
      ))}
    </div>
  );
}

export default Movie;
