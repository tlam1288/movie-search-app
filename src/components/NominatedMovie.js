import React from "react";

function NominatedMovie(props) {
  return (
    <div>
      {props.movies.map((movie, index) => (
        <div key={index}>
          <h1>{movie.Title}</h1>
          <p>{movie.Year}</p>
          <img src={movie.Poster} alt="movie poster"></img>
          <br />
          <button onClick={() => props.handleDelete(movie)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default NominatedMovie;
