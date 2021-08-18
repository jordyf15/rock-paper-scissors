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

function resetGame(){
    console.log('reset');
    const playerOptionDisplay = document.querySelector('#player-option');
    const computerOptionDisplay = document.querySelector('#computer-option');
    const playerScoreDisplay = document.querySelector('#player-score');
    const computerScoreDisplay = document.querySelector('#computer-score');
    const roundResult = document.querySelector('#round-result');
    playerScore = 0;
    computerScore = 0;
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
    roundResult.textContent ='';
    playerOptionDisplay.innerHTML ="";
    computerOptionDisplay.innerHTML="";
}

function checkWinner(){
    const main = document.querySelector('main');
    const popUpBackground = document.createElement('div');
    popUpBackground.id = "pop-up-background";
    popUpBackground.addEventListener('click',() => {
        main.removeChild(popUpBackground);
    });
        
    const popUpContainer = document.createElement('div');
    popUpContainer.id = 'pop-up-container';
        
    const popUpResult = document.createElement('p');
    popUpResult.id = 'pop-up-result';
    popUpResult.textContent = playerScore===5?'You Win!':'You Lose!';
    popUpContainer.appendChild(popUpResult);

    const popUpQuestion = document.createElement('p');
    popUpQuestion.id = 'pop-up-question';
    popUpQuestion.textContent = 'Do you want to play again?';
    popUpContainer.appendChild(popUpQuestion);

    const popUpButton = document.createElement('button');
    popUpButton.id = 'pop-up-button';
    popUpButton.textContent = "Restart";
    popUpButton.addEventListener('click',() =>{
        resetGame();
    });

    popUpContainer.appendChild(popUpButton);
    popUpBackground.appendChild(popUpContainer);
    main.appendChild(popUpBackground);
}

function playRound(playerSelection, computerSelection) {
    if(playerScore === 5 || computerScore === 5){
        checkWinner();
        return;
    }  
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