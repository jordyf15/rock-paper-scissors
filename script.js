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


game();