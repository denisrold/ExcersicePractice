const pickingNumbers = (a) => {
  //ordeno de menor  a mayor
  a.sort((x, y) => x - y);
  console.log(a);
  let maxCount = 0;
  let prevNum = a[0];
  let currentCount = 0;
  for (let i = 0; i < a.length; i++) {
    if (Math.abs(a[i] - prevNum <= 1)) {
      currentCount++;
    } else {
      prevNum = a[i];
      maxCount = Math.max(maxCount, currentCount);
      currentCount = 1;
    }
  }
  return Math.max(maxCount, currentCount);
};

const a = [4, 6, 5, 3, 3, 1];
console.log(pickingNumbers(a));
