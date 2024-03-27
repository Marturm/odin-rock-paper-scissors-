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

