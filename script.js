function computerPlay() {
    // random a number between 1 - 3 to be used for selecting between rock paper and scissors
    let random = Math.floor(Math.random()*3)+1;
    // make an if selection based on the random number for rock, paper, and scissors
    if (random === 1) {
        return "Rock";
    } else if (random===2) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

// function to make input case insensitive
function formatPlayerSelection(playerSelection) {
    // lowercase all the characters
    let formattedPlayerSelection = playerSelection.toLowerCase();
    // replace the first character with the capitazed first character of that string
    return formattedPlayerSelection.replace(formattedPlayerSelection[0],formattedPlayerSelection.toUpperCase()[0]);
}

function playRound(playerSelection, computerSelection) {
    let formattedPlayerSelection = formatPlayerSelection(playerSelection);
    // check the round result
    // if player chooses rock
    if (formattedPlayerSelection === "Rock") { 
        // and then if computer chooses rock, its a draw
        if(computerSelection === "Rock") {
            console.log("Draw! Rock equal Rock");
            return "draw";
        // and then if computer chooses paper, player lose
        } else if(computerSelection === "Paper") {
            console.log("You Lose! Paper beats Rock");
            return "lose";
        // and then if computer chooses scissors, player win
        } else {
            console.log("You Win! Rock beats Scissors");
            return "win";
        }
    // if player chooses paper
    } else if(formattedPlayerSelection === "Paper") {
    // and then if computer chooses rock, player wins
        if(computerSelection === "Rock") {
            console.log("You Win! Paper beats Rock");
            return "win";
    // and then if computer chooses paper, it's a draw
        } else if(computerSelection === "Paper") {
            console.log("Draw! Paper equal Paper");
            return "draw";
    // and then if computer chooses scissors, player lose
        } else {
            console.log("You Lose! Scissors beats Paper");
            return "lose";
        }
    // if the player chooses scissors
    } else {
    // and then if computer chooses rock, player lose
        if(computerSelection === "Rock") {
            console.log("You Lose! Rock beats Scissors");
            return "lose";
    // and then if computer chooses paper, player wins
        } else if(computerSelection === "Paper") {
            console.log("You Win! Scissors beats Paper");
            return "win";
    // and then if computer chooses scissors, it's a draw
        } else {
            console.log("Draw! Scissors equal Scissors");
            return "draw";
        }
    }
}


game();