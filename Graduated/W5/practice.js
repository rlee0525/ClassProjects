const longestValidParentheses = string => {
  let stack = [-1];
  let longest = 0;

  for (let i = 0; i < string.length; i++) {
    if (string[i] === ")" && stack.length > 0 && string[stack[stack.length - 1]] === "(") {
      stack.pop();
      longest = Math.max(longest, i - stack[stack.length - 1]);
    } else {
      stack.push(i);
    }
  }
  
  return longest;
};

let s = "()(())(())((";
console.log(longestValidParentheses(s) === 10);

// const longestConsecutive = nums => {
//   if (nums.length === 0) return 0;

//   nums = nums.sort((a, b) => a - b);
//   let currentNum = nums[0];
//   let longest = 0;
//   let currentCount = 1;
//   let i = 1;

//   while (i < nums.length) {
//     if (nums[i] === currentNum + 1) {
//       currentCount++;
//       longest = Math.max(longest, currentCount);
//     } else if (nums[i] === currentNum) {
//       i++;
//       continue;
//     } else {
//       currentCount = 1;
//     }

//     currentNum = nums[i];
//     i++;
//   }

//   longest = Math.max(longest, currentCount);
//   return longest;
// };

const longestConsecutive = nums => {
  let set = {};
  for (let i = 0; i < nums.length; i++) {
    set[nums[i]] = true;
  }

  let longest = 0;
  let current = 0;
  let num;
  for (num in set) {
    if (!(num - 1 in set)) {
      while (num in set) {
        current++;
        num++;
      }
    }

    longest = Math.max(longest, current);
    current = 0;
  }
  
  return longest;
};

let arr = [100, 4, 200, 1, 3, 2];
console.log(longestConsecutive(arr) === 4);