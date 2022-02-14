// Brute Force
function palindromicSubstrings(s: string): string[] {
  const stringSets = [];
  let newString = "";

  for (let a = 0; a < s.length; a++) {
    newString = s[a];
    stringSets.push(newString);
    for (let b = a + 1; b < s.length; b++) {
      newString += s[b];
      if (isPalindrome(newString)) stringSets.push(newString);
    }
  }

  return stringSets;
}

function isPalindrome(s: string): boolean {
  let newString = "";
  for (let i = 0; i < s.length; i++) {
    newString = s[i] + newString;
  }
  return s === newString;
}

// Brute Force

// Create all substring possibilities
// Check if they are palindromes

console.log(palindromicSubstrings("aaa"));
