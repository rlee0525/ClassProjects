// Time: O(N) Space: highestScore
const linearSorting = (arr, highestScore) => {
  let scores = Array(highestScore + 1).fill(0);
  for (let i = 0; i < arr.length; i++) {
    scores[arr[i]]++;
  }

  let sorted = [];
  for (let i = 0; i < scores.length; i++) {
    for (let j = 0; j < scores[i]; j++) {
      sorted.push(i);
    }
  }

  return sorted;
};

let unsortedScores = [37, 89, 41, 65, 91, 53];
let highestScore = 100;

console.log(linearSorting(unsortedScores, highestScore));
// [37, 41, 53, 65, 89, 91]