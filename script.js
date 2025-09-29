// Alle Play-Buttons anklickbar machen
document.querySelectorAll(".play-btn").forEach(btn => {
  btn.addEventListener("click", e => {
    e.preventDefault();
    let url = btn.getAttribute("data-game");
    openGame(url);
  });
});

function openGame(url) {
  document.getElementById("game-overlay").classList.remove("hidden");
  document.getElementById("game-frame").src = url;
}

function closeGame() {
  document.getElementById("game-overlay").classList.add("hidden");
  document.getElementById("game-frame").src = "";
}

document.getElementById("back-btn").addEventListener("click", closeGame);
