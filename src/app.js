/* eslint-disable */
import "bootstrap";
import "./style.css";
let cardNumber = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
let cardSuit = ["♣", "♦", "♥", "♠"];

function randomNumber() {}

window.onload = function randomCard() {
  const randomNumber =
    cardNumber[Math.floor(Math.random() * cardNumber.length)];
  //console.log(randomNumber);
  const randomSuit = cardSuit[Math.floor(Math.random() * cardSuit.length)];
  //console.log(cardSuit[randomSuit]);
  document.querySelector("#cardNumber").innerText = randomNumber;
  document.querySelector("#cardSuit1").innerText = randomSuit;
  document.querySelector("#cardSuit2").innerText = randomSuit;
  if (randomSuit === cardSuit[1] || randomSuit === cardSuit[2]) {
    document.querySelector("#cardSuit1").style.color = "red";
    document.querySelector("#cardSuit2").style.color = "red";
    document.querySelector("#cardNumber").style.color = "red";
  } else {
    document.querySelector("#cardSuit1").style.color = "black";
    document.querySelector("#cardSuit2").style.color = "black";
    document.querySelector("#cardNumber").style.color = "black";
  }
};
