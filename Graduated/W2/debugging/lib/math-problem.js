import { renderFeedback } from './feedback';

const getRandNum = () => {
  return Math.floor((Math.random() * 10) + 1);
};

const getRandSymbol = () => {
  const randNum = Math.random();
  if (randNum < 0.33) {
    return "+";
  } else if (randNum >= 0.33 && randNum < 0.66) {
    return "-";
  } else {
    return "*";
  }
};

const mathProblem = {
  firstNum: getRandNum(),
  secondNum: getRandNum(),
  operationSymbol: getRandSymbol(),
  answer: function() {
    return eval(`${this.firstNum} ${this.operationSymbol} ${this.secondNum}`);
  },
};

const evaluateAnswer = (event) => {
  event.preventDefault();

  const userAnswer = event.currentTarget.children[5].value;
  renderFeedback(userAnswer == mathProblem.answer());
};

export { mathProblem, evaluateAnswer };
