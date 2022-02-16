function mergeSort(nums: number[]) {
  if (nums.length <= 1) return nums;
  let middle = Math.floor(nums.length / 2);

  const left = mergeSort(nums.slice(0, middle));
  const right = mergeSort(nums.slice(middle));

  return mergeTwoSorted(left, right);
}

function mergeTwoSorted(nums1: number[], nums2: number[]) {
  if (!nums1?.length || !nums2?.length) return null;

  let pt1 = 0;
  let pt2 = 0;
  let pt3 = 0;
  let newNums = [];

  while (true) {
    if (pt1 === nums1.length || pt2 === nums2.length) break;

    if (nums1[pt1] <= nums2[pt2]) {
      newNums[pt3] = nums1[pt1];
      pt1++;
    } else {
      newNums[pt3] = nums2[pt2];
      pt2++;
    }

    pt3++;
  }

  if (pt1 === nums1.length) {
    newNums = [...newNums, ...nums2.slice(pt2)];
  } else {
    newNums = [...newNums, ...nums1.slice(pt1)];
  }

  return newNums;
}

console.log(mergeSort([2, 5, 1, 5, 4, 10, 25, 12]));
