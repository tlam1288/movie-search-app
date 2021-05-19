import React from "react";

function Movie(props) {
  return (
    <>
      {props.movies.map((movie, index) => (
        <div key={index} className=" justify-content-start m-3 ">
          <img src={movie.Poster} alt="movie poster" className="poster"></img>
          <div className="text-center">
            <h5>{movie.Title}</h5>
            <h5>{movie.Year}</h5>
            <button
              class="btn btn-primary btn-lg"
              onClick={() => props.handleClick(movie)}
            >
              {props.status ? "Add" : "Delete"}
            </button>
          </div>
        </div>
      ))}
    </>
  );
}

export default Movie;
