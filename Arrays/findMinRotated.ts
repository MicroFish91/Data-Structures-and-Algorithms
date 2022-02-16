function findMinRotated(nums: number[]) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] > nums[right]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return nums[left];
}

// 7 > 0
// [0, 1, 2, 4, 5, 6, 7]

// 2 !> 4
// [2, 4, 5, 6, 7, 0, 1]

// 0
console.log(findMinRotated([4, 5, 6, 7, 0, 1, 2]));
