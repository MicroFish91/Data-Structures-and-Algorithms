function spiralMatrix(matrix: number[][]): number[] {
  const spiralPath = [];
  const visited = new Set<string>();
  let currentState = "cInc";
  let r = 0;
  let c = 0;

  while (true) {
    console.log(r, c, visited);

    const elem = matrix[r][c];

    spiralPath.push(elem);
    visited.add(`${r},${c}`);

    if (visited.size === matrix.length * matrix[0].length) {
      break;
    }

    switch (currentState) {
      case "cInc":
        c++;
        if (!isInBounds(visited, matrix, r, c + 1)) {
          currentState = "rInc";
        }
        break;
      case "rInc":
        r++;
        if (!isInBounds(visited, matrix, r + 1, c)) {
          currentState = "cDec";
        }
        break;
      case "cDec":
        c--;
        if (!isInBounds(visited, matrix, r, c - 1)) {
          currentState = "rDec";
        }
        break;
      case "rDec":
        r--;
        if (!isInBounds(visited, matrix, r - 1, c)) {
          currentState = "cInc";
        }
        break;
      default:
        break;
    }
  }

  return spiralPath;
}

function isInBounds(
  visited: Set<string>,
  matrix: number[][],
  row: number,
  col: number
) {
  const isInRow = row < matrix.length && row >= 0;
  const isInCol = col < matrix[0].length && col >= 0;
  return isInRow && isInCol && !visited.has(`${row},${col}`);
}

/*
  [
    [1,2,3],
    [4,5,6],
    [7,8,9]
  ]
  [1,   2,  3,  6,  9,  8,  7,  4,  5]
  [00, 01, 02, 12, 22, 21, 20, 10, 11]
*/

console.log(
  spiralMatrix([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
  ])
);
