function miniMaxSum(arr) {
  let minAux = 0;
  let maxAux = 0;
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    if (minAux > arr[i]) minAux = arr[i];
    if (maxAux < arr[i]) maxAux = arr[i];
    total = total + arr[i];
  }
  console.log(total - maxAux + "  " + (total - minAux));
}

const arr = [1, 3, 5, 7, 9];
console.log(miniMaxSum(arr));
