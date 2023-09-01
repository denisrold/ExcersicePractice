const permutingArrays = (k, a, b) => {
  a.sort((a, b) => a - b);
  b.sort((a, b) => b - a);
  for (let i = 0; i < a.length; i++) {
    if (a[i] + b[i] < k) return "NO";
  }
  return "YES";
};

const k = 10;
const a = [4, 2, 4];
const b = [6, 7, 8];

console.log(permutingArrays(k, a, b));
