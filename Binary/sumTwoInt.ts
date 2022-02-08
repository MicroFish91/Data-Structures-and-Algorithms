// 5 + 12
//  168421
// 5: 0101
//12: 1100
//17:10001

// XOR : 1001
// carry: 0100 << 1 + &&

function sumTwoInt(a: number, b: number): number {
  let carry;

  while (true) {
    carry = a & b;
    a ^= b;
    if (!carry) break;
    b = carry << 1;
  }

  return a;
}

console.log(sumTwoInt(5, 12));
