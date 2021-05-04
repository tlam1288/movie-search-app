import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Movie from "./components/Movie";

function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

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

  return (
    <div>
      <h1>Nominate your favorite movie for a Shoppie Award!</h1>
      <input
        placeholder="Search for a movie"
        value={search}
        onChange={handleInputChange}
      />
      <div>
        <Movie movies={movies} />
      </div>
    </div>
  );
}

export default App;
