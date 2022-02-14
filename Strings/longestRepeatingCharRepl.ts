function longestRepeatingCharRepl(s: string, k: number): number {
  const letters = {
    [s[0]]: 1,
  };
  let maxCount = 1;
  let highCount = 1;
  let pt1 = 0;
  let pt2 = 0;

  while (true) {
    if (pt2 - pt1 + 1 - highCount <= k) {
      maxCount = Math.max(maxCount, pt2 - pt1 + 1);

      pt2++;
      if (pt2 === s.length) break;
      letters[s[pt2]] = letters[s[pt2]] + 1 || 1;
      if (letters[s[pt2]] > highCount) {
        highCount = letters[s[pt2]];
      }
    } else {
      pt1++;
      letters[s[pt1]] = letters[s[pt1]] - 1;
      if (highCount === letters[s[pt1]] + 1) {
        highCount--;
      }
    }
  }

  return maxCount;
}

// Brainstorm

// => store a character in a hash map
// { a: 1, b: 2 }
// k = 1
// Math.max(2 + 1);
// Sliding Window
// if current letter number is less than k it cannot be the character with the most

// 4
console.log(longestRepeatingCharRepl("AABABBA", 1));
// 5
console.log(longestRepeatingCharRepl("AABABBA", 2));
