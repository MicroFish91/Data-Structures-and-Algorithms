function setMatrixZeroes(matrix: number[][]) {
  // O(m)
  const ROW_FILL = new Array(matrix.length).fill(0);
  const zeroesList = [];

  // O(m * n)
  for (let r = 0; r < matrix.length; r++) {
    for (let c = 0; c < matrix[0].length; c++) {
      const elem = matrix[r][c];
      if (elem === 0) {
        zeroesList.push([r, c]);
      }
    }
  }

  // O(z * n)
  for (let i = 0; i < zeroesList.length; i++) {
    const [r, c] = zeroesList[i];
    matrix[r] = ROW_FILL;
    fillColumn(matrix, c);
  }

  return matrix;
}

function fillColumn(matrix: number[][], col: number): void {
  for (let i = 0; i < matrix.length; i++) {
    matrix[i][col] = 0;
  }
}

// Step 1: Find a list of all 0s on first pass through
// Step 2: Set all same rows to 0
// Step 3: Set all same columns to 0

// Optimizing O(1) space
//

console.log(
  setMatrixZeroes([
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ])
);

console.log(
  setMatrixZeroes([
    [0, 1, 2, 0],
    [3, 4, 5, 2],
    [1, 3, 1, 5],
  ])
);
/*
  m x n
  [[1,1,1],[1,0,1],[1,1,1]]
  [
    row 0 a[m][_]: [1,1,1],
    row 1 a[m][_]: [1,0,1],
    row 2 a[m][_]: [1,1,1]
  ]

  col 0 a[_][n]
*/
/*
  [[1,0,1],[0,0,0],[1,0,1]]
  [
    [1,0,1],
    [0,0,0],
    [1,0,1]
  ]
*/
