function numOfIslands(grid: number[][]): number {
  const DIRECTIONS = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  let count = 0;

  for (let m = 0; m < grid.length; m++) {
    for (let n = 0; n < grid[0].length; n++) {
      const elem = grid[m][n];

      if (elem === 1) {
        dfs(m, n);
        count++;
      }
    }
  }

  return count;

  function dfs(row: number, col: number) {
    if (!isInBounds(grid, row, col)) return;

    const elem = grid[row][col];

    if (!elem) return;

    grid[row][col] = 0;

    for (const [dr, dc] of DIRECTIONS) {
      const newRow = row + dr;
      const newCol = col + dc;

      dfs(newRow, newCol);
    }
  }

  function isInBounds(matrix: number[][], row: number, col: number): boolean {
    const isInRow = row >= 0 && row < matrix.length;
    const isInCol = col >= 0 && col < matrix[0].length;
    return isInRow && isInCol;
  }
}

// 1
console.log(
  numOfIslands([
    [1, 1, 1, 1, 0],
    [1, 1, 0, 1, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0],
  ])
);

// 3
console.log(
  numOfIslands([
    [1, 1, 0, 0, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 1, 1],
  ])
);
