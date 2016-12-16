const readline = require('readline');
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

class Game {
  constructor() {
    this.stacks = [[3, 2, 1], [], []];
  }

  promptMove() {
    let startTowerIdx = 0;
    let endTowerIdx = 0;

    console.log(this.stacks);
    reader.question("Where do you want to move a disc from?", (from) => {
      reader.question("Where do you want to move the disc to?", (to) => {
        startTowerIdx = parseInt(from);
        endTowerIdx = parseInt(to);
        this.move(startTowerIdx, endTowerIdx);
      });
    });
  }

  isValidMove(startTowerIdx, endTowerIdx) {
    let endStack = this.stacks[endTowerIdx];
    let startStack = this.stacks[startTowerIdx];

    if (startStack.length === 0) {
      return false;
    }
    else if (endStack[endStack.length - 1] < startStack[startStack.length - 1]) {
      return false;
    }

    return true;
  }

  move(startTowerIdx, endTowerIdx) {
    let endStack = this.stacks[endTowerIdx];
    let startStack = this.stacks[startTowerIdx];

    if (this.isValidMove(startTowerIdx, endTowerIdx)) {
      endStack.push(startStack.pop());
    }
    this.print();

  }

  print() {
    console.log(JSON.stringify(this.stacks));
    this.run();
  }

  isWon() {
    return (this.stacks[1].length === 3 || this.stacks[2].length === 3);
  }


  run(completionCallback) {
    if (!this.isWon()) {
      this.promptMove();
    }
    else {
      reader.close();
      completionCallback();
    }
  }
}

module.exports = Game;
