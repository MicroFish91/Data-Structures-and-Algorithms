function pacificAtlantic(map: number[][]): number[][] {
  const DIRECTIONS = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  const atlantic = [];
  const pacific = [];
  const combined = [];

  for (let i = 0; i < map.length; i++) {
    atlantic.push(new Array(map[0].length).fill(0));
    pacific.push(new Array(map[0].length).fill(0));
  }

  // left-right
  for (let m = 0; m < map.length; m++) {
    dfs(m, 0, -Infinity, pacific);
    dfs(m, map[0].length - 1, -Infinity, atlantic);
  }

  // top-bottom
  for (let n = 0; n < map[0].length; n++) {
    dfs(0, n, -Infinity, pacific);
    dfs(map.length - 1, n, -Infinity, atlantic);
  }

  for (let m = 0; m < map.length; m++) {
    for (let n = 0; n < map[0].length; n++) {
      if (pacific[m][n] === 1 && atlantic[m][n] === 1) {
        combined.push([m, n]);
      }
    }
  }

  return combined;

  function dfs(
    row: number,
    col: number,
    prevHeight: number,
    ocean: number[][]
  ) {
    if (!isInBounds(map, row, col)) return;
    if (ocean[row][col] === 1) return;

    const currHeight = map[row][col];

    if (currHeight < prevHeight) return;

    ocean[row][col] = 1;

    for (const [dr, dc] of DIRECTIONS) {
      const newRow = row + dr;
      const newCol = col + dc;

      dfs(newRow, newCol, currHeight, ocean);
    }
  }

  function isInBounds(matrix: number[][], row: number, col: number): boolean {
    const isInRows = row >= 0 && row < matrix.length;
    const isInCols = col >= 0 && col < matrix[0].length;
    return isInRows && isInCols;
  }
}

// m x n matrix
// pacific = 0
// atlantic = length

// [[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]
console.log(
  pacificAtlantic([
    [1, 2, 2, 3, 5],
    [3, 2, 3, 4, 4],
    [2, 4, 5, 3, 1],
    [6, 7, 1, 4, 5],
    [5, 1, 1, 2, 4],
  ])
);
