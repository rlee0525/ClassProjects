const longestConsecutive = nums => {
  const set = {};

  for (let i = 0; i < nums.length; i++) {
    set[nums[i]] = true;
  }

  let longest = 0;
  let currentCount = 0;

  let num;
  for (num in set) {
    if (!(num - 1 in set)) {
      while (num in set) {
        currentCount++;
        num++;
      }

      longest = Math.max(longest, currentCount);
      currentCount = 0;
    }
  }

  return longest;
};

let arr = [100, 4, 200, 1, 3, 2];
console.log(longestConsecutive(arr) === 4);