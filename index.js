function movieName(event) {
  console.log(event);
  const search = event.target.value;
  console.log(search)
  localStorage.setItem("search", search)
}

function searchMovie() {
  window.location.href = `${window.location.origin}/search.html`;
}

// function showMovieDesc(imdbID) {
//   console.log(imdbID);
//   localStorage.setItem("imdbID", imdbID);
//   window.location.href = `${window.location.origin}/movie.html`;
// }

// window.onload = function() {
//   var getInput = prompt("Hey type something here: ");
//   localStorage.setItem("storageName",getInput);
// }