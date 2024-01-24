const movieListEl = document.querySelector("#movies");

function showMovieDesc() {
  const id = localStorage.getItem("imdbID");
  console.log(id);
}

showMovieDesc();

async function main() {
  const movies = await fetch(
    `https://www.omdbapi.com/?apikey=380dd029&i=${localStorage.getItem(
      "imdbID"
    )}`
  );
  let moviesData = await movies.json();

  if (!Array.isArray(moviesData)) {
    moviesData = [moviesData];
  }

  const movieListEl = document.querySelector(".movie");
  console.log(moviesData);
  movieListEl.innerHTML = moviesData.map((movie) => movieHtml(movie));
}

main();

function movieHtml(movie) {
  return `<div class="movie__and--title">
  <h4 class="movie__title">${movie.Title}</h4>
  <div class="movie">
    <figure class="movie__cover--wrapper">
      <div class="play__movie">
      <div class="play no-cursor">
        <i class="fas fa-play"></i>
        </div>
        <img src="${movie.Poster}" class="movie__cover" alt="" />
      </div>
    </figure>
      <div class="movie__desc">
        <p>
          <b class="fire">Released:</b> ${movie.Released}<br />
          <b class="fire">Rated:</b> ${movie.Rated}<br />
          <b class="fire">Runtime:</b> ${movie.Runtime}<br />
          <b class="fire">Genre:</b> ${movie.Genre}<br />
          <b class="fire">Director:</b> ${movie.Director}<br />
          <b class="fire">Writer(s):</b> ${movie.Writer}<br />
          <b class="fire">Actor(s):</b> ${movie.Actors}<br />
          <b class="fire">Plot:</b> ${movie.Plot}<br />
          <b class="fire">Language:</b> ${movie.Language}<br />
          <b class="fire">Country:</b> ${movie.Country}<br />
          <b class="fire">Award(s):</b> ${movie.Awards}<br />
          <b class="fire">Imdb Rating:</b> ${movie.imdbRating}<br />
        </p>
      </div>
     </div>
    </div>
  </section>`;
}
