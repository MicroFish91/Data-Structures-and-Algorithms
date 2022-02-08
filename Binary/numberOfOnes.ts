function numOfOnes(a: number): number {
  let count = 0;
  let temp;

  while (a > 0) {
    temp = a & 1;
    a = a >>> 1;
    if (temp) {
      count++;
    }
  }

  return count;
}

console.log(numOfOnes(11));
