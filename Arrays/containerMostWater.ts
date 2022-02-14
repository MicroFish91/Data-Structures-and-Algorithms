function containerMostWater(list: number[]): number {
  if (list.length < 2) return 0;

  let maxWater = 0;
  let greatestHeight = 0;

  for (let i = 1; i < list.length; i++) {
    const lesserHeight = list[i] < greatestHeight ? list[i] : null;

    greatestHeight = Math.max(greatestHeight, list[i]);

    maxWater = Math.max(maxWater, lesserHeight ? lesserHeight ** 2 : 0);
  }

  return maxWater;
}

// Brainstorm
// n^2  brute force
// DP - Kadane's Algorithm?

// 49
console.log(containerMostWater([1, 8, 6, 2, 5, 4, 8, 3, 7]));
