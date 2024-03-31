const btnRock = document.querySelector(".rock");
const btnPaper = document.querySelector(".paper");
const btnScissors = document.querySelector(".scissors");

const text = document.querySelector(".text");
const score = document.querySelector(".score");

let playerScore = 0;
let computerScore = 0;

btnRock.addEventListener("click", () => playRound("Rock", getComputerChoice()));
btnPaper.addEventListener("click", () => playRound("Paper", getComputerChoice()));
btnScissors.addEventListener("click", () => playRound("Scissors", getComputerChoice()));

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);

    if (choice == 0) return 'Rock';
    else if (choice == 1) return 'Paper';
    else return 'Scissors';
}

function chooseWinner(playerSelection, computerSelection) {
    if(playerSelection == computerSelection) {return "Tie"}; 

    if(playerSelection == "Rock" && computerSelection == "Paper") {return "Loose"}
    if(playerSelection == "Rock" && computerSelection == "Scissors") {return "Win"}

    if(playerSelection == "Paper" && computerSelection == "Scissors") {return "Loose"}
    if(playerSelection == "Paper" && computerSelection == "Rock") {return "Win"}

    if(playerSelection == "Scissors" && computerSelection == "Rock") {return "Loose"}
    if(playerSelection == "Scissors" && computerSelection == "Paper") {return "Win"}
}

function displayScore() {
    score.innerHTML = `Player score: ${playerScore} | Computer score: ${computerScore}`;
}

function displayWinner(winner) {
    text.innerHTML = `${winner} has won!`;
    score.innerHTML = "";
}

function playRound(playerSelection, computerSelection) {
    console.log(playerSelection);
    console.log(computerSelection);

    
    
    let msg = `You choose: ${playerSelection}, computer chooses: ${computerSelection}. `;

    switch(chooseWinner(playerSelection, computerSelection)){
        case "Tie":
            console.log("Tie");
            msg += "It's a Tie!";
            break;
        case "Loose":
            console.log("Loose");
            msg += "You Loose!";
            computerScore++;
            break;
        case "Win":
            console.log("Win");
            msg += "You Win!";
            playerScore++;
            break;
    }

    displayScore();
    text.innerHTML = msg;

    if(playerScore == 5) {
        displayWinner("Player");
        [computerScore, playerScore] = [0, 0];
    }
    else if(computerScore == 5) {
        displayWinner("Computer");
        [computerScore, playerScore] = [0, 0];
    }
}