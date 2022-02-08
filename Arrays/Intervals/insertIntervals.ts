function insertInterval(origInterval: number[][], newInterval: number[]) {
  // insert sort
  const [newStart, _] = newInterval;
  let startIdx = origInterval.length - 1;

  for (let i = 0; i < origInterval.length - 1; i++) {
    const [origStartOne, _] = origInterval[i];
    const [origStartTwo, __] = origInterval[i + 1];

    if (newStart >= origStartOne && newStart <= origStartTwo) {
      startIdx = i;
      break;
    }
  }

  origInterval.splice(startIdx + 1, 0, newInterval);

  for (let i = startIdx; i < origInterval.length - 1; i++) {
    const merged = mergeInterval(origInterval[i], origInterval[i + 1]);
    if (!merged) {
      break;
    }
    origInterval.splice(i + 1, 1);
    origInterval[i] = merged;
  }

  return origInterval;
}

// Assumes sorted by start time
function mergeInterval(intervalOne: number[], intervalTwo: number[]): number[] {
  const merged = [];
  const [startOne, endOne] = intervalOne;
  const [startTwo, endTwo] = intervalTwo;

  // Separate Windows
  if (startTwo > endOne) return null;

  // Start
  merged.push(startOne);

  // End
  if (endTwo > endOne) {
    merged.push(endTwo);
  } else {
    merged.push(endOne);
  }

  return merged;
}

console.log(
  insertInterval(
    [
      [1, 3],
      [6, 9],
    ],
    [2, 5]
  )
);
