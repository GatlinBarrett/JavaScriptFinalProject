// https://www.omdbapi.com/?apikey=380dd029&s=fast

localStorage.getItem("search")

const results = document.getElementById("search");

function Display() {
  localStorage.getItem("search")
  let text = results.value;
  document.getElementById("show").innerHTML = text;
  localStorage.setItem("search", results.value);
}

async function onSearchChange(event) {
  console.log(event);
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
}

const movieListEl = document.querySelector("#movies");

function showMovieDesc(imdbID) {
  console.log(imdbID);
  localStorage.setItem("imdbID", imdbID);
  window.location.href = `${window.location.origin}/movie.html`;
}

function movieHtml(movie) {
  return `<div class="movie" onclick="showMovieDesc('${movie.imdbID}')">
            <figure class="movie__cover--wrapper">
            <img src="${movie.Poster}" class="movie__cover" alt="" />
            </figure>
            <h4 class="movie__title">${movie.Title} (${movie.Year})</h4>
        </div>`;
}
