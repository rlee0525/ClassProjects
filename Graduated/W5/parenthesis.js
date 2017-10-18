const longestValidParentheses = string => {
  let stack = [-1];
  let longest = 0;

  for (let i = 0; i < string.length; i++) {
    if (string[i] === ")" && stack.length !== 0 && string[stack[stack.length - 1]] === "(") {
      stack.pop();
      longest = Math.max(longest, i - stack[stack.length - 1]);
    } else {
      stack.push(i);
    }
  }

  return longest;
};

let s = "()(())(())((";
console.log(longestValidParentheses(s));