function mergeIntervals(intervals: number[][]): number[][] {
  const sortedIntervals = intervals.sort((a, b) => a[0] - b[0]);
  let i = 0;

  while (true) {
    if (i + 1 >= intervals.length) break;

    const mergedIntervals = mergeInterval(
      sortedIntervals[i],
      sortedIntervals[i + 1]
    );

    if (mergedIntervals) {
      sortedIntervals[i] = mergedIntervals;
      sortedIntervals.splice(i + 1, 1);
    } else {
      i++;
    }
  }

  return sortedIntervals;
}

// Merge Two Intervals, start of intervalTwo must be >= start of intervalOne
function mergeInterval(intervalOne: number[], intervalTwo: number[]): number[] {
  const merged = [];
  const [startOne, endOne] = intervalOne;
  const [startTwo, endTwo] = intervalTwo;

  if (startTwo > endOne) return null;

  // Starting
  if (startOne === startTwo || startTwo <= endOne) {
    merged.push(startOne);
  } else {
    merged.push(startTwo);
  }

  // Ending
  if (endTwo >= endOne) {
    merged.push(endTwo);
  } else {
    merged.push(endOne);
  }

  return merged;
}

// console.log(mergeInterval([1, 3], [2, 5]));
// console.log(mergeInterval([1, 5], [1, 3]));
// console.log(mergeInterval([1, 2], [3, 4]));
console.log(
  mergeIntervals([
    [1, 3],
    [2, 6],
    [15, 18],
    [8, 10],
  ])
);
