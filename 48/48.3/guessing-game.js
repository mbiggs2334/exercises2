function guessingGame() {
    let randomNum = Math.floor((Math.random() * 100));
    let gameWon = false;
    let guesses = 0;
    return function(num){

        if(gameWon) return "The game is over, you already won!";
        guesses++;
        if(num > randomNum) return `${num} is too high!`;
        if(num < randomNum) return `${num} is too low!`;
        if(num === randomNum){
            gameWon = true;
            return `You win! You found ${randomNum} in ${guesses} guesses.`;
        };

    };
};

module.exports = { guessingGame };
