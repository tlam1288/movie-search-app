import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Movie from "./components/Movie";

function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [nominees, setNominees] = useState([]);

  const notify = () =>
    toast.error(
      "This movie has already been nominated!",
      {
        position: toast.POSITION.TOP_CENTER,
      },
      { autoClose: 1000 }
    );

  const fiveTotal = () =>
    toast.info(
      "You have nominated 5 or more films!",
      {
        position: toast.POSITION.TOP_CENTER,
      },
      { autoClose: 1000 }
    );

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

  useEffect(() => {
    searchMovie(search);
  }, [search]);

  useEffect(() => {
    if (nominees.length === 5) {
      fiveTotal();
    }
  }, [nominees]);

  //renders local storage upon loading
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
      notify();
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
    <div className="container-fluid movie">
      <div className="row d-flex align-items-center mt-4 mb-4">
        <h3>Nominate your favorite movie for a Shoppie Award!</h3>

        <div className="col col-sm-6">
          <input
            placeholder="Search for a movie"
            value={search}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="row">
        <Movie movies={movies} status={true} handleClick={addNominee} />
      </div>
      <div className="row d-flex align-items-center mt-4 mb-4">
        <h3>Movies you have nominated</h3>
      </div>

      <div className="row">
        <Movie movies={nominees} status={false} handleClick={deleteNominee} />
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
