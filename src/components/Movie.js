import React from "react";

function Movie(props) {
  const Btn = props.nominateComponent;
  //const DeleteBtn = props.nominate;
  return (
    <div>
      {props.movies.map((movie, index) => (
        <div key={index}>
          <h1>{movie.Title}</h1>
          <p>{movie.Year}</p>
          <img src={movie.Poster} alt="movie poster"></img>
          <br />
          <div onClick={() => props.handleClick(movie)}>
            <Btn />
          </div>
          {/* <button onClick={() => props.handleAddNominee(movie)}>
            Nominate
          </button>

          <button onClick={() => props.handleDeleteNominee(movie)}>
            Delete
          </button> */}
        </div>
      ))}
    </div>
  );
}

export default Movie;
