// get variables - elements

let target = document.querySelector("#target");
let playgroung = document.querySelector("#playground");
let scoreContainer = document.querySelector("#score-container");
let retryBtn = document.querySelector("#retry");
let score = document.querySelector("#score");
let minute = document.querySelector("#minute");
let time = document.querySelector("#time");

// variables for action

let counterScore = 0;
let counterTimer = 0;
let shootingRepetation = 1000;
let gameDuration = 10000;

scoreContainer.style.display = "none";

let clearInt = setInterval(() => {
  startGame();
}, shootingRepetation);

function startGame() {
  const randomWidth = playgroung.clientWidth - target.clientWidth;
  const randomHeight = playgroung.clientHeight - target.clientHeight;

  let randomX = Math.floor(Math.random() * randomWidth);
  let randomY = Math.floor(Math.random() * randomHeight);

  target.style.top = randomX + "px";
  target.style.left = randomY + "px";

  target.addEventListener("click", clickedTarget);

  function clickedTarget() {
    counterScore++;
    target.style.classList.add("targetHiddenBorder");
  }
}

setTimeout(() => {
  gameEnd();
}, gameDuration);

function gameEnd() {
  clearInterval(clearInt);
  // target.removeEventListener('click');
  time.style.display = "none";

  scoreContainer.style.display = "block";
  target.style.display = "none";
  score.innerText = `${counterScore}`;
}
retryBtn.addEventListener("click", () => {
  scoreContainer.style.display = "none";
  target.style.display = "block";
  counterScore = 0;
  clearInt = setInterval(() => {
    startGame();
  }, shootingRepetation);

  setTimeout(() => {
    gameEnd();
  }, gameDuration);
});

// timer part**********************************************************
let totalSeconds = gameDuration / 1000;

function getMinutesAndSeconds(seconds) {
  let minutes = Math.floor(seconds / 60);
  let remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
}

const minuteDisplay = document.querySelector("#minute"); // Bu satırı dakika ve saniyenin görüntüleneceği DOM öğesine göre güncelleyin.

setInterval(() => {
  if (totalSeconds >= 0) {
    minuteDisplay.innerText = getMinutesAndSeconds(totalSeconds);
    totalSeconds--;
  }
}, 1000);