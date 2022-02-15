function searchInsert(nums: number[], target: number): number {
  let leftPt = 0;
  let rightPt = nums.length - 1;
  let midPt;

  while (leftPt <= rightPt) {
    midPt = Math.floor((rightPt + leftPt) / 2);
    const midVal = nums[midPt];

    if (midVal === target) {
      while (midPt - 1 > 0 && nums[midPt - 1] === midVal) {
        midPt--;
      }
      return midPt;
    } else if (midVal > target) {
      rightPt = midPt - 1;
    } else {
      leftPt = midPt + 1;
    }
  }

  return target > nums[midPt] ? midPt + 1 : midPt;
}

// Brainstorm

// Odd length
// 5 / 2 = 2
//  0  1  2  3  4
// [1, 3, 5, 6, 9]

// Even length
// 4 / 2 = 2
//  0  1  2  3
// [1, 3, 5, 6]

// 2
console.log(searchInsert([1, 3, 3, 3, 4, 4, 6, 7], 0));
