// 16
// 32 16 8 4 2 1
//     1 0 0 0 0

// 8
//       1 0 0 0
//           1
// 7       1 1 1

// 4
//         1 0 0

// 2
//           1

//

function sqrt(x: number): number {
  let count = 0;

  while (true) {
    const product = count * count;
    if (product === x) break;
    if (product > x) {
      count--;
      break;
    }
    count++;
  }

  return count;
}

console.log(sqrt(64));
