// Brute Force with dfs
function coinChange(coins: number[], amount: number): number {
  let minLength = Infinity;
  traverse(amount, 0);
  return minLength === Infinity ? -1 : minLength;

  function traverse(amount: number, length: number): void {
    if (amount === 0) {
      minLength = Math.min(length, minLength);
      return;
    }

    if (amount < 0) return;

    length = length + 1;

    for (let i = 0; i < coins.length; i++) {
      const dc = coins[i];
      const newAmount = amount - dc;
      traverse(newAmount, length);
    }
  }
}

// dp
function coinChange2(coins: number[], amount: number): number {
  const dp = {
    0: 0,
    1: 1,
    2: 2,
  };

  for (let i = 3; i <= amount; i++) {
    for (let c = 0; c < coins.length; c++) {
      const coinVal = coins[c];

      if (i - coinVal < 0) continue;

      if (dp[i]) {
        dp[i] = Math.min(dp[i], 1 + dp[i - coinVal]);
      } else {
        dp[i] = 1 + dp[i - coinVal];
      }
    }
  }

  return dp[amount];
}

console.log(coinChange2([1, 2, 5], 8));
