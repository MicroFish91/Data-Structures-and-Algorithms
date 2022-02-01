/*
  Write a function called averagePair. Given a sorted array of integers
  and a target average, determine if there is a pair of values in the
  array where the average of the pair equals the target average.
  There may be more than one pair that matches the average target.

  @param - numList: number[] (sorted)
  @param - avg: number
  returns - boolean

            Pt1
                         Pt2
  Example: [-1, 2, 4, 5, 10]
  Answer: 7
*/

function averagePair(numList: number[], avg: number): boolean {
  if (!numList?.length) return null;
  if (numList.length === 1) return avg === numList[0];

  let currentAvg, num1, num2;
  let pt1 = 0;
  let pt2 = numList.length - 1;

  while (true) {
    num1 = numList[pt1];
    num2 = numList[pt2];
    currentAvg = (num1 + num2) / 2;

    if (pt1 === pt2) break;

    if (currentAvg === avg) {
      return true;
    } else if (currentAvg < avg) {
      pt1++;
    } else {
      pt2--;
    }
  }

  return false;
}

console.log(averagePair([-1, 2, 4, 5, 10], 3));
