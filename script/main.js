const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
//const mary = document.querySelector(".mary"); //to check something
const possibleChoices = document.querySelectorAll("button") //if you dont want to add anymore buttons
let userChoice
let computerChoice
let result
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener("click", (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice + "!"
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1 //basically just number 3
    
    if (randomNumber === 1) {
        computerChoice = "rock"
    }
    if (randomNumber === 2) {
        computerChoice = "scissors"
    }
    if (randomNumber === 3) {
        computerChoice = "paper"
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    if(computerChoice === userChoice) {
        result = "its a draw!"
    }
    if(computerChoice === "rock" && userChoice === "paper") {
        result = "you win!"
    }
    if(computerChoice === "paper" && userChoice === "rock") {
        result = "you lost!"
    }
    if(computerChoice === "scissors" && userChoice === "paper") {
        result = "you lost!"
    }
    if(computerChoice === "paper" && userChoice === "scissors") {
        result = "you win!"
    }
    if(computerChoice === "rock" && userChoice === "scissor") {
        result = "you lost!"
    }
    if(computerChoice === "scissors" && userChoice === "rock") {
        result = "you win!"
    }
    resultDisplay.innerHTML = result
}