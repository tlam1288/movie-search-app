import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Movie from "./components/Movie";

function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [nominees, setNominees] = useState([]);

  function searchMovie(search) {
    const api = `http://www.omdbapi.com/?apikey=8de7c732&s=${search}`;

    fetch(api)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.Search) {
          setMovies(data.Search);
        }
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    searchMovie(search);
  }, [search]);

  const handleInputChange = (e) => {
    return setSearch(e.target.value);
  };

  function addNominee(movie) {
    setNominees([...nominees, movie]);
    console.log(nominees);
  }

  function deleteNominee(movie) {
    const updatedNomineeList = nominees.filter(
      (nominee) => nominee.imdbID !== movie.imdbID
    );

    setNominees(updatedNomineeList);
  }

  return (
    <div>
      <h1>Nominate your favorite movie for a Shoppie Award!</h1>
      <input
        placeholder="Search for a movie"
        value={search}
        onChange={handleInputChange}
      />
      <div>
        <Movie movies={movies} handleAddNominee={addNominee} />
      </div>
      <div>
        <h3>Movies you nominated</h3>
        <Movie movies={nominees} handleDeleteNominee={deleteNominee} />
      </div>
    </div>
  );
}

export default App;
