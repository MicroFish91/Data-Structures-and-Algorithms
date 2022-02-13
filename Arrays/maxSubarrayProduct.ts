function maxSubarrayProduct(list: number[]): number {
  let maxProduct = -Infinity;
  let min = 1;
  let max = 1;

  for (let i = 0; i < list.length; i++) {
    max = Math.max(list[i], max * list[i], min * list[i]);
    min = Math.min(list[i], min * list[i], max * list[i]);

    maxProduct = Math.max(maxProduct, max);
  }

  return maxProduct;
}

// 6
console.log(maxSubarrayProduct([0, 2, 3, -2, 6, 4]));

// 6
console.log(maxSubarrayProduct([-2, 2, -1, -3]));

// -2
