function maxSubArray(list: number[]): number {
  let maxSum = -Infinity;
  let tempSum = list[0];

  for (let i = 1; i < list.length; i++) {
    tempSum = Math.max(tempSum + list[i], list[i]);
    maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum;
}

// 6
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
