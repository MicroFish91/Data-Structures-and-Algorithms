// 1011
// 1111

// bruce force
// time O(2n), space O(n)
function missingNumber(a: number[]): number {
  if (!a?.length) return null;

  const n = a.length;
  const numberMap = new Set();

  for (let i = 0; i < n + 1; i++) {
    numberMap.add(i);
  }

  for (let i = 0; i < n; i++) {
    const elem = a[i];
    if (!numberMap.has(elem)) return null;
    numberMap.delete(elem);
  }

  return numberMap.size === 1 ? ([...numberMap][0] as number) : -1;
}

// 8 1000
// 9 1001

console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));
