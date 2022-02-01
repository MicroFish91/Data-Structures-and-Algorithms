/*
  Write a function called isSubsequence which takes in two strings and checks whether
  the characters in the first string form a subsequence of the characters in the second
  string.  In other words, the function should check whether the characters in the first
  string appear somewhere in the second string, without their order changing.

  @param - sub: string
  @param - main: string
  @return - boolean

            1
                    2
  Example: "nana", "banana"
  Result: True
*/

function isSubsequence(sub: string, main: string): boolean {
  if (!sub?.length || !main?.length || sub.length > main.length) return null;

  let letter1, letter2;
  let pt1 = 0;
  let pt2 = 0;

  while (true) {
    letter1 = sub[pt1];
    letter2 = main[pt2];

    if (letter1 !== letter2) {
      pt2++;
      if (pt2 === main.length) return false;

      pt1 = 0;
    } else {
      pt2++;
      pt1++;

      if (pt1 === sub.length) return true;
    }
  }
}

console.log(isSubsequence("nana", "banana"));
