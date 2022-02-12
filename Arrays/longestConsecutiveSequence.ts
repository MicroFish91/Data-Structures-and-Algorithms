function longestSequence(list: number[]): number {
  const numSet = new Set(list);
  let maxCount = -Infinity;

  numSet.forEach((n) => {
    if (numSet.has(n - 1)) return;

    let i = 1;

    while (true) {
      if (numSet.has(n + i)) {
        i++;
      } else {
        maxCount = Math.max(maxCount, i);
        break;
      }
    }
  });

  return maxCount;
}

console.log(longestSequence([5, 100, 4, 200, 1, 3, 2]));
