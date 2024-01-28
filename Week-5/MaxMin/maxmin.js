function maxMin(k, arr) {
  let min = Number.MAX_VALUE;
  arr.sort((a, b) => a - b);
  for (let i = 0; i <= arr.length - k; i++) {
    let injusticia = arr[i + k - 1] - arr[i];
    if (injusticia < min) {
      min = injusticia;
    }
  }

  return min;
}

console.log(maxMin(3, [7, 3, 10, 100, 300, 200, 1000, 20, 30]));
