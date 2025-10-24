
const imgCom = document.getElementById("imgcom");
const imgUser = document.getElementById("imguser");
const result = document.getElementById("result-text");
const cs = document.getElementById("cs");
const ys = document.getElementById("ys");
const play = document.getElementById("play");
const reset = document.getElementById("reset");
const icons = document.querySelectorAll(".iconcontrol");

const choices = ["rock", "paper", "scissors"];
let userChoice = "", userScore = 0, compScore = 0;
let compChoice = "paper";


icons.forEach(icon => {
  icon.onclick = () => {
    icons.forEach(i => i.classList.remove("selected"));
    icon.classList.add("selected");
    userChoice = icon.id;
    imgUser.src = `rock/${userChoice}icon.png`;
  };
});


play.onclick = () => {
  const compChoice = choices[Math.floor(Math.random() * 3)];
  imgCom.src = `rock/${compChoice}icon.png`;

  if (userChoice === ""){
    result.textContent = "Please select an option!";
    result.style.color = "#ffff00";
    return;
  } ;

  if (userChoice === compChoice) {
    result.textContent = "Draw!";
    result.style.color = "#ffffff";
  } else if (
    (userChoice === "rock" && compChoice === "scissors") ||
    (userChoice === "paper" && compChoice === "rock") ||
    (userChoice === "scissors" && compChoice === "paper")
  ) {
    ys.textContent = ++userScore;
    result.textContent = "You Win!";
    result.style.color = "#00ffcc";
  } else {
    cs.textContent = ++compScore;
    result.textContent = "Computer Wins!";
    result.style.color = "#ff5555";
  }
};


reset.onclick = () => {
  userScore = compScore = 0;
  ys.textContent = cs.textContent = "0";
  result.textContent = "Start !";
  result.style.color = "#ffffff";
  imgCom.src = imgUser.src = "rock/rockicon.png";
  icons.forEach(i => i.classList.remove("selected"));
};

function playSound(soundFile) {
  const audio = new Audio(soundFile);
  audio.play();
}