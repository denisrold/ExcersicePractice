const plusMinus = (arr) => {
  let positiveCount = 0;
  let negativeCount = 0;
  let zeroCount = 0;
  const n = arr.length;

  for (let nums of arr) {
    if (nums > 0) positiveCount++;
    if (nums < 0) negativeCount++;
    else {
      zeroCount++;
    }
  }

  console.log((positiveCount / n).toFixed(6));
  console.log((negativeCount / n).toFixed(6));
  console.log((zeroCount / n).toFixed(6));
};

let arr = [-4, 3, -9, 0, 4, 1];

console.log(plusMinus(arr));
