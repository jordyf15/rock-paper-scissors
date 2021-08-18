let playerScore = 0;
let computerScore = 0;
function computerPlay() {
    // random a number between 1 - 3 to be used for selecting between rock paper and scissors
    let random = Math.floor(Math.random()*3)+1;
    // make an if selection based on the random number for rock, paper, and scissors
    if (random === 1) {
        return "Rock";
    } else if (random === 2) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function setRoundResult(playerWin, computerWin, playerOption, computerOption) {
    const roundResult = document.querySelector('#round-result');
    if(playerWin === true && computerWin === false){ 
        playerScore++;
        const playerScoreDisplay = document.querySelector('#player-score');
        playerScoreDisplay.textContent = playerScore;
        roundResult.textContent = `You Win! ${playerOption} beats ${computerOption}`;
    } else if(computerWin === true && playerWin === false){
        computerScore++;
        const computerScoreDisplay = document.querySelector('#computer-score');
        computerScoreDisplay.textContent = computerScore;
        roundResult.textContent = `You Lose! ${computerOption} beats ${playerOption}`;
    } else {
        roundResult.textContent = `It's a Draw! ${playerOption} equals ${computerOption}`;
    }

}

function playRound(playerSelection, computerSelection) {
    const playerOptionDisplay = document.querySelector('#player-option');
    const computerOptionDisplay = document.querySelector('#computer-option');

    // check the round result
    // if player chooses rock
    if (playerSelection === "Rock") { 
        // and then if computer chooses rock, its a draw
        if(computerSelection === "Rock") {
            playerOptionDisplay.innerHTML='<i class="far fa-hand-rock"></i>';
            computerOptionDisplay.innerHTML = '<i class="far fa-hand-rock"></i>';
            setRoundResult(false, false, "Rock", "Rock");
        // and then if computer chooses paper, player lose
        } else if(computerSelection === "Paper") {
            playerOptionDisplay.innerHTML='<i class="far fa-hand-rock"></i>';
            computerOptionDisplay.innerHTML = '<i class="far fa-hand-paper"></i>';
            setRoundResult(false, true, 'Rock', 'Paper');
        // and then if computer chooses scissors, player win
        } else {
            playerOptionDisplay.innerHTML='<i class="far fa-hand-rock"></i>';
            computerOptionDisplay.innerHTML = '<i class="far fa-hand-scissors"></i>';
            setRoundResult(true, false, 'Rock', 'Scissors');
        }
    // if player chooses paper
    } else if(playerSelection === "Paper") {
    // and then if computer chooses rock, player wins
        if(computerSelection === "Rock") {
            playerOptionDisplay.innerHTML = '<i class="far fa-hand-paper"></i>';
            computerOptionDisplay.innerHTML = '<i class="far fa-hand-rock"></i>';
            setRoundResult(true, false, "Paper", "Rock");
    // and then if computer chooses paper, it's a draw
        } else if(computerSelection === "Paper") {
            playerOptionDisplay.innerHTML = '<i class="far fa-hand-paper"></i>';
            computerOptionDisplay.innerHTML = '<i class="far fa-hand-paper"></i>';
            setRoundResult(false, false, 'Paper', 'Paper');
    // and then if computer chooses scissors, player lose
        } else {
            playerOptionDisplay.innerHTML = '<i class="far fa-hand-paper"></i>';
            computerOptionDisplay.innerHTML = '<i class="far fa-hand-scissors"></i>';
            setRoundResult(false, true, "Paper", "Scissors");
        }
    // if the player chooses scissors
    } else {
    // and then if computer chooses rock, player lose
        if(computerSelection === "Rock") {
            playerOptionDisplay.innerHTML = '<i class="far fa-hand-scissors"></i>';
            computerOptionDisplay.innerHTML = '<i class="far fa-hand-rock"></i>';
            setRoundResult(false, true, "Scissors", "Rock");
    // and then if computer chooses paper, player wins
        } else if(computerSelection === "Paper") {
            playerOptionDisplay.innerHTML = '<i class="far fa-hand-scissors"></i>';
            computerOptionDisplay.innerHTML = '<i class="far fa-hand-paper"></i>';
            setRoundResult(true, false, "Scissors", "Paper");
    // and then if computer chooses scissors, it's a draw
        } else {
            playerOptionDisplay.innerHTML = '<i class="far fa-hand-scissors"></i>';
            computerOptionDisplay.innerHTML = '<i class="far fa-hand-scissors"></i>';
            setRoundResult(false, false, "Scissors", "Scissors");
        }
    }
}

let btnPaper = document.querySelector('#btn-paper');
btnPaper.addEventListener('click', () => {
    playRound("Paper", computerPlay());
});

let btnRock = document.querySelector('#btn-rock');
btnRock.addEventListener('click', () => {
    playRound('Rock', computerPlay());
});

let btnScissor = document.querySelector('#btn-scissor');
btnScissor.addEventListener('click', () => {
    playRound('Scissors', computerPlay());
});