class Clock {
  constructor() {
    this.date = new Date;
    this.seconds = this.date.getSeconds();
    this.minutes = this.date.getMinutes();
    this.hours = this.date.getHours();
    this.printTime();
    setInterval(this._tick.bind(this), 1000);
    // 1. Create a Date object.
    // 2. Store the hours, minutes, and seconds.
    // 3. Call printTime.
    // 4. Schedule the tick at 1 second intervals.
  }

  printTime() {
    let currentTime = `${this.hours}:${this.minutes}:${this.seconds}`;
    console.log(currentTime);
    // Format the time in HH:MM:SS
    // Use console.log to print it.
  }

  _tick() {
    if (this.seconds > 59) {
      this.minutes++;
      this.seconds = 0;
    }

    if (this.minutes > 59) {
      this.hours++;
      this.minutes = 0;
    }

    if (this.hour > 23) {
      this.hour = 0;
    }

    this.seconds++;
    this.printTime();
    // 1. Increment the time by one second.
    // 2. Call printTime.
  }
}


// const clock = new Clock();

const readline = require('readline');
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback) {
  if (numsLeft > 0) {
    reader.question("Pick a number!", function(number) {
      sum += parseInt(number);
      console.log(`Current sum is ${sum}.`);
      numsLeft -= 1;
      addNumbers(sum, numsLeft, completionCallback);

    });
  }
  else {
    reader.close();
    completionCallback(sum);
  }
}

// addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));

function askIfGreaterThan(el1, el2, callback) {
  reader.question(`Is ${el1} greater than ${el2}?`, function(answer) {
    answer === 'yes' ? callback(true) : callback(false);
  });
}

function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
  if (i < arr.length - 1) {
    askIfGreaterThan(arr[i], arr[i + 1], (isGreaterThan) => {
      if (isGreaterThan) {
        let temp = arr[i + 1];
        arr[i + 1] = arr[i];
        arr[i] = temp;
        madeAnySwaps = true;
      }
      innerBubbleSortLoop(arr, i + 1, madeAnySwaps, outerBubbleSortLoop);
    });
  }
  else {
    outerBubbleSortLoop(madeAnySwaps);
  }
}

function absurdBubbleSort(arr, sortCompletionCallback) {
  function outerBubbleSortLoop(madeAnySwaps) {
    if (madeAnySwaps) {
      innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
    }
    else {
      sortCompletionCallback(arr);
    }
  }
  outerBubbleSortLoop(true);
}

// askIfGreaterThan(5, 25, function(boolean) { console.log(boolean); });

// askIfGreaterThan(5, 25, boolean => console.log(boolean));

// absurdBubbleSort([3, 2, 1], function (arr) {
//   console.log("Sorted array: " + JSON.stringify(arr));
//   reader.close();
// });

Function.prototype.myBind = function(context) {
  return () => this.apply(context);
};

class Lamp {
  constructor() {
    this.name = "a lamp";
  }
}

const turnOn = function() {
   console.log("Turning on " + this.name);
};

const lamp = new Lamp();

// turnOn(); // should not work the way we want it to

const boundTurnOn = turnOn.bind(lamp);
const myBoundTurnOn = turnOn.myBind(lamp);

// boundTurnOn(); // should say "Turning on a lamp"
myBoundTurnOn(); // should say "Turning on a lamp"
