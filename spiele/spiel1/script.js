let score = 0;
const btn = document.getElementById("click-btn");
const scoreDisplay = document.getElementById("score");

btn.addEventListener("click", () => {
  score++;
  scoreDisplay.textContent = score;
});
