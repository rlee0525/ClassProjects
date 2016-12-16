const Game = require("./HanoiGame.js");

const readline = require('readline');
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function playAgain() {
  console.log("You won!");
  reader.question("Do you want to play again?", (answer) => {
    if (answer === 'yes') {
      const newGame = new Game;
      newGame.run(playAgain);
    }
    else {
      console.log("Thanks for playing!");
    }
  });
}

const game = new Game;
game.run(playAgain);
