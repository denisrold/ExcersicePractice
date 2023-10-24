function minimumAbsoluteDifference2(arr:number[]):number {
    let aux = Number.MAX_SAFE_INTEGER;
    let i = 0;
  
    while (i < arr.length) {
      for (let j = i + 1; j <= arr.length - 1; j++) {
        if (Math.abs(arr[i] - arr[j]) < aux) {
          aux = Math.abs(arr[i] - arr[j]);
        }
      }
      i++;
    }
  
    return aux;
  }

  const arr11 = [3, -7, 0];
const arr12 = [-59, -36, -13, 1, -53, -92, -2, -96, -54, 75];
const arr33 = [1, -3, 71, 68, 17];

console.log(minimumAbsoluteDifference2(arr33));