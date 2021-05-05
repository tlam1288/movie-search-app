import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Movie from "./components/Movie";
//import Add from "./components/AddNominee";
//import Delete from "./components/DeleteNominee";
//import NominatedMovie from "./components/NominatedMovie";

function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [nominees, setNominees] = useState([]);

  function searchMovie(search) {
    const api = `http://www.omdbapi.com/?apikey=8de7c732&s=${search}`;

    fetch(api)
      .then((res) => res.json())
      .then((data) => {
        if (data.Search) {
          setMovies(data.Search);
          console.log(movies);
        }
      })
      .catch((err) => console.log(err));
  }

  // searches for movies
  // function queryOMDB() {
  //   searchMovie(search);
  // }
  useEffect(() => {
    searchMovie(search);
  }, [search]);

  useEffect(() => {
    if (nominees.length > 4) {
      alert("You have nominated 5 films!");
    }
  }, [nominees]);

  useEffect(() => {
    const savedNominated = JSON.parse(localStorage.getItem("nominated-movies"));

    if (savedNominated) {
      setNominees(savedNominated);
    }
  }, []);

  const handleInputChange = (e) => {
    return setSearch(e.target.value);
  };

  function saveLocalStorage(movie) {
    localStorage.setItem("nominated-movies", JSON.stringify(movie));
  }

  function addNominee(movie) {
    console.log(nominees);

    if (nominees.includes(movie)) {
      alert("This movie has already been nominated!");
      return;
    } else {
      setNominees([...nominees, movie]);
      saveLocalStorage([...nominees, movie]);
    }
  }

  function deleteNominee(movie) {
    const updatedNomineeList = nominees.filter(
      (nominee) => nominee.imdbID !== movie.imdbID
    );

    setNominees(updatedNomineeList);
    saveLocalStorage(updatedNomineeList);
  }

  return (
    <div>
      <h1>Nominate your favorite movie for a Shoppie Award!</h1>
      <input
        placeholder="Search for a movie"
        value={search}
        onChange={handleInputChange}
      />
      {/* <input type="submit" onClick={queryOMDB} /> */}
      <div>
        {/* {movies.map((item) => (
          <Movie
            key={item.imdbID}
            nominateComponent={nominees.imdbID ? Add : Delete}
            movies={movies}
            handleClick={addNominee}
          />
        ))} */}
        <Movie
          //nominateComponent={!activeBtn.imdbID ? Add : Delete}
          movies={movies}
          status={true}
          handleClick={addNominee}
        />
      </div>
      <div>
        <h3>Movies you nominated</h3>
        {/* <NominatedMovie movies={nominees} handleDelete={deleteNominee} /> */}
        <Movie
          // nominateComponent={activeBtn.imdbID ? Delete : Add}
          movies={nominees}
          status={false}
          handleClick={deleteNominee}
        />
      </div>
    </div>
  );
}

export default App;
