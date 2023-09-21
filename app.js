// get variables - elements

let target = document.querySelector("#target");
let playgroung = document.querySelector("#playground");
let scoreContainer = document.querySelector("#score-container");
let retryBtn = document.querySelector("#retry");
let score = document.querySelector("#score");
let minute = document.querySelector("#minute");

// variables for action

let counterScore = 0;
let counterTimer = 0;
let shootingRepetation = 1000;
let gameDuration =70000;

scoreContainer.style.display = "none";

let clearInt = setInterval(() => {
  gameStart();
}, shootingRepetation);

function gameStart() {
  // debugger;
  const randomWidth = playgroung.clientWidth;
  const randomHeight = playgroung.clientHeight;

  let randomX = Math.floor(Math.random() * randomWidth);
  let randomY = Math.floor(Math.random() * randomHeight);

  target.style.top = randomX + "px";
  target.style.left = randomY + "px";

  target.addEventListener("click", () => {
    counterScore++;
    target.style.background = "none";
    target.classList.add("targetHiddenBorder");
  });
}
//... sure icinde gameend metodu devreye girip oyun son bulacak
setTimeout(() => {
  gameEnd();
}, gameDuration);

function gameEnd() {
  clearInterval(clearInt);
  // target.removeEventListener('click');
  // ???
  scoreContainer.style.display = "block";
  target.style.display = "none";
  score.innerText = `${counterScore}`;

}

retryBtn.addEventListener("click", () => {
    scoreContainer.style.display = "none";
    target.style.display = "block";
    counterScore = 0;
    clearInt = setInterval(() => {
      
      gameStart();
    }, shootingRepetation);

    setTimeout(() => {
      gameEnd();
    }, gameDuration);
  });
// timer part**********************************************************
let minut= ((gameDuration/1000)/60).toFixed(0);

let second = (gameDuration/1000)%60;
let minuteSecond= `${minut} : ${second}`
// let minutes = gameDuration/1000;

setInterval(()=>{
  if(gameDuration >=0){
    minute.innerText = `${minuteSecond}`;
    minuteSecond--;
  }

},1000);

