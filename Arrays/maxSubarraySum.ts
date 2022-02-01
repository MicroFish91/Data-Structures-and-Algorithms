/*
  Given an array of integers and a number, write a function
  called maxSubarraySum, which finds the maximum sum of a
  subarray with the length of the number passed to the function.

  @param - numList: number[]
  @param - len: number
  @return - number

              1
                        2
  Example: ([100, 200, 300, 400, 500], 3)
  Return: 1200
*/

function maxSubarraySum(numList: number[], len: number): number {
  if (!numList?.length || len > numList.length) return null;

  let maxSum;
  let pt1 = 0;
  let pt2 = len - 1;
  let sum = 0;

  for (let i = 0; i < len; i++) {
    const elem = numList[i];
    sum += elem;
  }

  maxSum = sum;

  while (true) {
    sum -= numList[pt1];
    pt1++;
    pt2++;

    if (pt2 === numList.length) break;

    sum += numList[pt2];
    maxSum = Math.max(maxSum, sum);
  }

  return maxSum;
}

console.log(maxSubarraySum([100, 200, 300, 400, 500], 3));
