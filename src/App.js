import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Movie from "./components/Movie";

function App() {
  const [movies, setMovies] = useState([]);

  function searchMovie() {
    const api = "http://www.omdbapi.com/?apikey=8de7c732&s=titanic";
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
    searchMovie();
  }, []);

  return (
    <div>
      <div>
        <Movie movies={movies} />
      </div>
    </div>
  );
}

export default App;
