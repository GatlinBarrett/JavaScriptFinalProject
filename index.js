console.log(window.location.origin)

function movieName(event) {
  console.log(event);
  const search = event.target.value;
  console.log(search)
  localStorage.setItem("search", search)
}

function searchMovie() {
  window.location.href = `${window.location.origin}/JavaScriptFinalProject/search.html`;
}