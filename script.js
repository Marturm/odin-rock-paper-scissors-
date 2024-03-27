function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);

    if (choice == 0) return 'Rock';
    else if (choice == 1) return 'Paper';
    else return 'Scissors';
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.at(0).toUpperCase() + playerSelection.slice(1).toLowerCase();

    if(playerSelection == computerSelection) return `It's a Tie!`;

    if(playerSelection == 'Rock') {
        if(computerSelection === 'Paper') return 'You Lose! Paper beats Rock';  
    
        else return 'You Win! Rock beats Scissors';
    }
    else if (playerSelection == 'Paper') {
        if(computerSelection == 'Rock') return 'You Win! Paper beats Rock';  
    
        else return 'You Lose! Scissors beat Paper';
    }
    else if (playerSelection == 'Scissors') {
        if(computerSelection == 'Rock') return 'You Lose! Rock beats Scissors';  
    
        else return 'You Win! Scissors beat Paper';
    }
    else return 'Invalid player input';
}

//Write a NEW function called playGame(). Use the previous function inside of this one to play a five round game that keeps score and reports a winner or loser at the end. 
function playGame() {
    let playerSelection;
    let computerSelection;
    let playerScore = 0;
    let computerScore = 0;
    let roundResult;

    for(let i = 0; i < 5; i++) {
        playerSelection = prompt('Choose: Rock, Paper or Scissors!');
        computerSelection = getComputerChoice();

        roundResult = playRound(playerSelection, computerSelection);
        console.log(roundResult);
        if(roundResult.slice(4, 7) == 'Win') playerScore++;
        else if(roundResult.slice(4, 8) == 'Lose') computerScore++;
    }

    if(playerScore == computerScore) return 'Tie!';
    if(playerScore > computerScore) return 'You Win!';
    if(playerScore < computerScore) return 'You Lose!';
}

console.log(playGame());