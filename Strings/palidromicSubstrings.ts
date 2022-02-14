// Brute Force
// function palindromicSubstrings(s: string): string[] {
//   const stringSets = [];
//   let newString = "";

//   for (let a = 0; a < s.length; a++) {
//     newString = s[a];
//     stringSets.push(newString);
//     for (let b = a + 1; b < s.length; b++) {
//       newString += s[b];
//       if (isPalindrome(newString)) stringSets.push(newString);
//     }
//   }

//   return stringSets;
// }

// function isPalindrome(s: string): boolean {
//   let newString = "";
//   for (let i = 0; i < s.length; i++) {
//     newString = s[i] + newString;
//   }
//   return s === newString;
// }

function palindromicSubstrings(s: string): string[] {
  const stringsList = [];

  for (let i = 0; i < s.length; i++) {
    expandFromCenterOdd(stringsList, s, i);
    expandFromCenterEven(stringsList, s, i);
  }

  return stringsList;
}

function expandFromCenterOdd(store: string[], s: string, pt: number) {
  let pt1 = pt - 1;
  let pt2 = pt + 1;
  let newString = `${s[pt]}`;

  store.push(newString);

  while (true) {
    if (pt1 < 0 || pt2 > s.length - 1) break;
    if (s[pt1] === s[pt2]) {
      newString = `${s[pt1]}${newString}${s[pt2]}`;
      store.push(newString);
      pt1--;
      pt2++;
    } else {
      break;
    }
  }
}

function expandFromCenterEven(store: string[], s: string, pt: number) {
  let pt1 = pt;
  let pt2 = pt + 1;
  let newString = "";

  while (true) {
    if (pt1 < 0 || pt2 > s.length - 1) break;
    if (s[pt1] === s[pt2]) {
      newString = `${s[pt1]}${s[pt2]}`;
      store.push(newString);
      pt1--;
      pt2++;
    } else {
      break;
    }
  }
}

// odd - include letter
// pt1 = pt - 1
// pt2 = pt + 1

// even
// pt2 = pt + 1
// pt1 = pt
// aabadecs

console.log(palindromicSubstrings("aaa"));
