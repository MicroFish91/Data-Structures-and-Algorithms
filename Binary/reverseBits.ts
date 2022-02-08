// Unrelated, not bits and add 1 for negative verson of number with two's complement
// The runtime console won't show all the bits flipped but it should get the negative version of
// the same number which means underneath the hood it works

function reverseBits(a: number): number {
  let reversed = 0;

  for (let i = 0; i < 32; i++) {
    const holder = a & 1;
    a = a >>> 1;
    reversed = reversed << 1;
    reversed |= holder;
  }

  return reversed;
}

//964176192
console.log(reverseBits(43261596));
