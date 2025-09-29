function openGame(url) {
  document.getElementById("game-overlay").classList.remove("hidden");
  document.getElementById("game-frame").src = url;
}

function closeGame() {
  document.getElementById("game-overlay").classList.add("hidden");
  document.getElementById("game-frame").src = "";
}
