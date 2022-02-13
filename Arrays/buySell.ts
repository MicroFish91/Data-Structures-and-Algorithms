function buySell(prices: number[]): number {
  if (!prices) return 0;

  let maxSold = 0;
  let minPrice = Infinity;

  for (let i = 0; i < prices.length; i++) {
    const price = prices[i];
    minPrice = Math.min(minPrice, price);
    const sold = price - minPrice;
    maxSold = Math.max(maxSold, sold);
  }

  return maxSold;
}

// prices[i] where i represents the ith day
// choose a day to buy stock then another day to sell
// what's the max profit you can achieve
// If no profit can be made, return 0

// 8
console.log(buySell([3, 10, 5, 1, 2, 5, 3, 9, 7]));

// 5
console.log(buySell([7, 1, 5, 3, 6, 4]));
