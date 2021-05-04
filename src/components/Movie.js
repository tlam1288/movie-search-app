import React from "react";

function Movie(props) {
  return (
    <div>
      {props.movies.map((movie, index) => (
        <div key={index}>
          <h1>{movie.Title}</h1>
          <p>{movie.Year}</p>
          <img src={movie.Poster} alt="movie poster"></img>
          <br />
          <button onClick={() => props.handleAddNominee(movie)}>
            Nominate
          </button>
          <button onClick={() => props.handleDeleteNominee(movie)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default Movie;
