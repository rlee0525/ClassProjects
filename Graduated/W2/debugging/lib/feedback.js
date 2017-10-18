const storeNumberFact = (event) => {
  const response = event.currentTarget;
  if (response.status === 200) {
    const numberFact = document.getElementById('number-fact');
    numberFact.innerHTML = response.responseText;
  } else {
    console.log('Error getting the number fact');
  }
};

const getNumberFact = (num) => {
  const req = new XMLHttpRequest();
  req.open('GET', `http://numbersapi.com/${num}/trivia`, true);
  req.onreadystatechange = storeNumberFact;
  req.send();
};

const renderFeedback = (answerIsCorrect) => {
  const correctFeedback = document.getElementById('correct-answer');
  const wrongFeedback = document.getElementById('wrong-answer');
  const newProblem = document.getElementById("new-problem");
  if (answerIsCorrect) {
    correctFeedback.style.display = "block";
    wrongFeedback.style.display = "none";
    newProblem.style.display = "block";
  } else {
    correctFeedback.style.display = "none";
    wrongFeedback.style.display = "block";
    newProblem.style.display = "none";
    setTimeout(() => {
      wrongFeedback.style.display = "none";
    }, 2000);
  }
};

export { renderFeedback, getNumberFact };
