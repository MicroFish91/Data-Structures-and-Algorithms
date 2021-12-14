function twoSum(numList: number[], target: number): number[] {
  const numMap = {};

  for (let i = 0; i < numList.length; i++) {
    const number = numList[i];
    const diff = target - number;
    numMap[number] = i;

    if (numMap[diff] !== undefined) {
      return [numMap[diff], i];
    }
  }

  return null;
}

// [0,1]
console.log(twoSum([2, 7, 11, 15], 9));
