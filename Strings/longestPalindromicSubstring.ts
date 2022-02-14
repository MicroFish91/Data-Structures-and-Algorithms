function longestPalindromicSubstring(s: string): string {
  let longestPalindrome = "";
  let maxLength = 0;

  for (let i = 0; i < s.length; i++) {
    const oddPal = expandFromCenterOdd(s, i);
    const evenPal = expandFromCenterEven(s, i);

    if (oddPal.length > maxLength && oddPal.length >= evenPal.length) {
      maxLength = oddPal.length;
      longestPalindrome = oddPal;
    }

    if (evenPal.length > maxLength && evenPal.length > oddPal.length) {
      maxLength = evenPal.length;
      longestPalindrome = evenPal;
    }
  }

  return longestPalindrome;
}

function expandFromCenterOdd(s: string, pt: number): string {
  let pt1 = pt - 1;
  let pt2 = pt + 1;
  let newString = `${s[pt]}`;

  while (true) {
    if (pt1 < 0 || pt2 > s.length - 1) break;

    if (s[pt1] === s[pt2]) {
      newString = `${s[pt1]}${newString}${s[pt2]}`;
      pt1--;
      pt2++;
    } else {
      break;
    }
  }

  return newString;
}

function expandFromCenterEven(s: string, pt: number): string {
  let pt1 = pt - 1;
  let pt2 = pt;
  let newString = "";

  while (true) {
    if (pt1 < 0 || pt2 > s.length - 1) break;

    if (s[pt1] === s[pt2]) {
      newString = `${s[pt1]}${newString}${s[pt2]}`;
      pt1--;
      pt2++;
    } else {
      break;
    }
  }

  return newString;
}

// Brute Force - O(n^3)
// => Put together every string combination (nested for loop) - O(n^2)
// => run it through function to check for palindrome O(n)
// => Math.max on string length, save string combination if greater than stored length

// O(n) to find start points
// Expand from center

// pt1 = 11/2 - 1, pt2 = 11/2 + 1
// 10    pt2 = 10/2 pt1 = pt2 - 1

// babadaaabaa

// bab
console.log(longestPalindromicSubstring("bababd"));
