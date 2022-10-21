/*
* Function that initiates the whole Game application.
*/

let randomChest = 0;
let scoreResult = 0;
let chestOne = document.createElement("img");
let chestTwo = document.createElement("img");
let chestThree = document.createElement("img");

function init() {
  initGameUI();
}

function initGameUI() {
  // Call functions that creates the Game UI
  initChests();
  initScoreBoard();
  // initRefreshButton();
  // initChestEventListeners();
}

function initChests() {

  let chestDiv = document.getElementById("chests");

  chestDiv.appendChild(chestOne);

  chestOne.setAttribute("src", "images/chest-closed.png");
  chestOne.setAttribute("style", "margin: 10px;");
  chestOne.setAttribute("id", "1");

  chestDiv.appendChild(chestTwo);

  chestTwo.setAttribute("src", "images/chest-closed.png");
  chestTwo.setAttribute("style", "margin: 10px;");
  chestTwo.setAttribute("id", "2");

  chestDiv.appendChild(chestThree);

  chestThree.setAttribute("src", "images/chest-closed.png");
  chestThree.setAttribute("style", "margin: 10px;");
  chestThree.setAttribute("id", "3");

  initRefreshButton();
  initChestEventListeners();
  console.log('1');

}

function initScoreBoard() {
  let score = document.createElement("h3");
  let wrapper = document.getElementById("game-wrapper");  
  wrapper.appendChild(score);
  score.setAttribute("style", "font-family: sans-serif; color: white; margin: auto; padding: 20px;");
  score.id = "scoreBoard";
  score.innerHTML = "Score: " + scoreResult;    
  console.log(score + "initScoreBoard");
}

function scoreUpdate() {
  let scoreBoard = document.getElementById("scoreBoard");
  scoreBoard.textContent = "Score: " + scoreResult;
}

function initRefreshButton() {
  randomChest = Math.floor(Math.random() * 3) + 1;
  let button = document.getElementById("refresh-button");
  button.addEventListener("click", initChests);
  console.log(randomChest);
}

function initChestEventListeners() {
  chestOne.addEventListener("click", chestClicked);
  chestTwo.addEventListener("click", chestClicked);
  chestThree.addEventListener("click", chestClicked);
}

function chestClicked(e) {
  if (randomChest == e.target.id) {
    getImageFromPexels(e);
        scoreUpdate(scoreResult += 5);
  } else {
    e.target.src = "/images/chest-open.png";
  }

  removeChestEvents();
}

function getImageFromPexels(e) {
  let url = "https://api.pexels.com/v1/search?query=diamonds+query&per_page1&page=1";
  let xhr = new XMLHttpRequest();
  xhr.open('GET',url,true);  
  xhr.setRequestHeader('Authorization', '563492ad6f91700001000001a6dbba555c844b588e304e3069629c91');
  xhr.send();
  xhr.addEventListener('load', function(){
    let imgePexels= JSON.parse(this.response);
    e.target.src=imgePexels.photos[10].src.small;
  });




  // make a request towards pexels API and get 1 Diamond image
}

function refresh() {

}

function removeChestEvents() {

  chestOne.removeEventListener('click',chestClicked);
  chestTwo.removeEventListener('click',chestClicked);
  chestThree.removeEventListener('click',chestClicked);
}
document.addEventListener("DOMContentLoaded", init);