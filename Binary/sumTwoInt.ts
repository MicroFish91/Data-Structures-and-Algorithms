function sumTwoIntegers(a: number, b: number): number {
  let carry;

  while (b) {
    // XOR => answer without carry
    carry = a & b;
    a ^= b;
    carry = carry << 1;
  }

  return a;
}

console.log(sumTwoIntegers(5, 12));
