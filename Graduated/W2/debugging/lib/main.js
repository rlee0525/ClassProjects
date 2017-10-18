import { getNumberFact } from './feedback';
import { mathProblem, evaluateAnswer } from './math-problem';

document.addEventListener('DOMContentLoaded', () => {
  // Use the mathProblem obj to display the problem for the user
  const firstDisplayNum = document.getElementById('first-num');
  firstDisplayNum.innerHTML = mathProblem.firstNum;
  const displaySymbol = document.getElementById('operation');
  displaySymbol.innerHTML = mathProblem.operationSymbol;
  const secondDisplayNum = document.getElementById('second-num');
  secondDisplayNum.innerHTML = mathProblem.secondNum;
  
  // Get a Number Fact and set its number-fact innerHTML while keeping it hidden
  const num = eval(`${mathProblem.firstNum} ${mathProblem.operationSymbol} ${mathProblem.secondNum}`);
  getNumberFact(num);

  // add evaluateAnswer callback to the form
  const mathForm = document.getElementById('math-form');
  mathForm.addEventListener('submit', evaluateAnswer);
  const newProblem = document.getElementById("new-problem");
  newProblem.style.display = "none";
  newProblem.addEventListener('click', () => location.reload());
});
