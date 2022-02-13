// Brute Force
// function threeSum(nums: number[]): number[][] {
//   const sums = {};

//   for (let a = 0; a < nums.length; a++) {
//     for (let b = a + 1; b < nums.length; b++) {
//       for (let c = b + 1; c < nums.length; c++) {
//         const sum = nums[a] + nums[b] + nums[c];
//         if (sum === 0) {
//           const val = [nums[a], nums[b], nums[c]].sort((a, b) => a - b);
//           sums[val.toString()] = val;
//         }
//       }
//     }
//   }

//   return [Object.values(sums)];
// }

function threeSum(list: number[]): number[][] {
  if (list.length < 3) return [];

  const sums = {};
  const newList = [...list].sort((a, b) => a - b);

  // O(n^2) => O(n) * O(3n)
  for (let i = 0; i < list.length; i++) {
    let newArr;
    if (i === 0) {
      newArr = newList.slice(1);
    } else {
      newArr = newList.slice(0, i).concat(newList.slice(i + 1, newList.length));
    }
    twoSum(sums, newList[i], newArr);
  }

  return Object.values(sums);
}

// O(2n)
function twoSum(sums: {}, target: number, list: number[]): void {
  let pt1 = 0;
  let pt2 = list.length - 1;
  let sum;

  while (true) {
    if (pt1 === pt2) break;

    sum = list[pt1] + list[pt2];

    if (sum === -target) {
      const val = [target, list[pt1], list[pt2]].sort((a, b) => a - b);
      sums[val.toString()] = val;

      pt1++;
    } else if (sum < target) {
      pt1++;
    } else {
      pt2--;
    }
  }
}

// Brainstorm
// Option 1: Brute Force - O(n^3)
// Option 2: Sort - O(n*logn); two pointer O(n * 1/2n) => O(n^2)
// Option 3: Maybe... DP?

// [[-1,-1,2],[-1,0,1]]
//                     1  2  3
console.log(threeSum([-1, 0, 1, 2, -1, -4]));
