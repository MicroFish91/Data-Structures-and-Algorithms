function climbingStairs(n: number): number {
  const stairCombinations = {
    1: 1,
    2: 2,
  };

  for (let i = 3; i <= n; i++) {
    stairCombinations[i] = stairCombinations[i - 1] + stairCombinations[i - 2];
  }

  return stairCombinations[n];
}

// f(5) = f(4) + f(5)
// 8 = 3 + 5
// 1 + 2 + 3 + 5 + 8
console.log(climbingStairs(5));
