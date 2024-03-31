const btnRock = document.querySelector(".rock");
const btnPaper = document.querySelector(".paper");
const btnScissors = document.querySelector(".scissors");

const textScore = document.querySelector(".score");

btnRock.addEventListener("click", () => playRound("Rock", getComputerChoice()));
btnPaper.addEventListener("click", () => playRound("Paper", getComputerChoice()));
btnScissors.addEventListener("click", () => playRound("Scissors", getComputerChoice()));

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);

    if (choice == 0) return 'Rock';
    else if (choice == 1) return 'Paper';
    else return 'Scissors';
}

function playRound(playerSelection, computerSelection) {
    console.log(playerSelection);
    console.log(computerSelection);
}

