function longestSubstring(s: string): number {
  const letters = {};
  let currentLength = 0;
  let maxLength = 0;

  for (let i = 0; i < s.length; i++) {
    const ltr = s[i];
    letters[ltr] = letters[ltr] + 1 || 1;
    currentLength++;

    if (letters[ltr] === 2) {
      currentLength = 1;
    }

    maxLength = Math.max(maxLength, currentLength);
  }

  return maxLength;
}

// Brainstorm

// Brute Force - O(n^2)
// => generate every possible string combination using nested for loop
// => in each iteration, store all values in a hash map and check for duplicates
// => if duplicates exist, don't add to Math.max
// => otherwise math.max the substring length and the current max

// Optimized - Sliding Window - O(n)
// => set up a hash map
// => as we iterate through, store values in hash map
// => increment Math.max on each iteration with substring length
// => if we ever encounter a two in the map - reinitialize map, set length to 1

// 3
console.log(longestSubstring("abcabcbb"));
