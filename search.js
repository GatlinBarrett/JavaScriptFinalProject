// https://www.omdbapi.com/?apikey=380dd029&s=fast

const searchResult = localStorage.getItem("search");

const results = document.getElementById("search");
const movieListEl = document.querySelector("#movies");
const movieFunction = document.querySelector(".movie__function");
const noResults = document.querySelector(".movie__empty--function");
const showMovies = document.querySelector(".movies");

setTimeout(checkSearch, 1000);

// movieFunction.classList += ' movies__loading'

async function checkSearch() {
  showMovies.classList += " show__movies";
  noResults.classList.remove("no__result--movies");
  if (searchResult === "") {
    showMovies.classList.remove("show__movies");
    movieFunction.classList.remove("movies__loading");
    noResults.classList += " no__result--movies";
  } else if (searchResult) {
    try {
      movieFunction.classList.remove("movies__loading");
      const search = searchResult;
      console.log(search);
      const movies = await fetch(
        `https://www.omdbapi.com/?apikey=380dd029&s=${search}`
      );
      const moviesData = await movies.json();
      console.log(moviesData);
      movieListEl.innerHTML = moviesData.Search.map((movie) =>
        movieHtml(movie)
      ).join("");

      console.log(searchResult);
      document.getElementById("show").innerHTML = searchResult;
      localStorage.setItem("search", searchResult);
    } catch (err) {
      showMovies.classList.remove("show__movies");
      movieFunction.classList.remove("movies__loading");
      noResults.classList += " no__result--movies";
    }
  }
}

function Display() {
  let text = results.value;
  console.log(text);
  document.getElementById("show").innerHTML = text;
  localStorage.setItem("search", results.value);
}

async function onSearchChange(event) {
  showMovies.classList += " show__movies";
  noResults.classList.remove("no__result--movies");
  if (searchResult === "") {
    showMovies.classList.remove("show__movies");
    movieFunction.classList.remove("movies__loading");
    noResults.classList += " no__result--movies";
  } else {
    try {
      const search = event.target.value;
      console.log(search);
      const movies = await fetch(
        `https://www.omdbapi.com/?apikey=380dd029&s=${search}`
      );
      const moviesData = await movies.json();
      console.log(moviesData);
      movieListEl.innerHTML = moviesData.Search.map((movie) =>
        movieHtml(movie)
      ).join("");
    } catch (err) {
      showMovies.classList.remove("show__movies");
      movieFunction.classList.remove("movies__loading");
      noResults.classList += " no__result--movies";
    }
  }
}

function showMovieDesc(imdbID) {
  console.log(imdbID);
  localStorage.setItem("imdbID", imdbID);
  window.location.href = `${window.location.origin}/movie.html`;
}

function movieHtml(movie) {
  return `<div class="movie show__movies" onclick="showMovieDesc('${movie.imdbID}')">
            <figure class="movie__cover--wrapper">
            <img src="${movie.Poster}" class="movie__cover" alt="" />
            </figure>
            <h4 class="movie__title">${movie.Title} (${movie.Year})</h4>
        </div>`;
}
