const screen1 = document.querySelector(".screen1");
const closedCookie = screen1.querySelector("a");
const screen2 = document.querySelector(".screen2");
const openedCookie = screen2.querySelector("a");
let phrase = screen2.querySelector("p");
let phrases = [
  "Voce encontrará a felicidade onde menos esperar.",
  "A vida é uma jornada, aproveite cada momento",
  "O sucesso está no horizonte",
  "Siga o seu coração, ele conhece o caminho.",
  "Você é mais forte do que imagina.",
];

closedCookie.addEventListener("click", readPhrase);
openedCookie.addEventListener("click", changePhrase);
document.addEventListener("keydown", tryAgain);

function readPhrase(event) {
  event.preventDefault();
  toggleScreen();

  let index = randomPhrases(0, phrases.length - 1);
  phrase.innerText = phrases[index];
}

function randomPhrases(min, max) {
  let step1 = max - min + 1;
  let step2 = Math.random() * step1;
  let phrase = Math.floor(step2) + min;
  return phrase;
}

/**
 * outro modo de gerar string aleatórias 
 * function pickFortune() {
    let allFortunes = fortune.length
    let randomNumber = Math.floor(Math.random() * allFortunes)  
    screen2.querySelector("h2").innerText = `${fortune[randomNumber]}`
    onde fortune é a array com frases declarada fora do escopo
}
 */

function changePhrase(event) {
  event.preventDefault();
  toggleScreen();
}

function toggleScreen() {
  screen1.classList.toggle("hide");
  screen2.classList.toggle("hide");
}

function tryAgain(e) {
  if (e.key == "Enter" && screen1.classList.contains("hide")) {
    toggleScreen();
  }
}
