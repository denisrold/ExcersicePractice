const breakingRecords = (arr) => {
  let totalMin = 0;
  let totalMax = 0;
  let minAux = arr[0];
  let maxAux = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < minAux) {
      totalMin += 1;
      minAux = arr[i];
    } else if (maxAux < arr[i]) {
      totalMax += 1;
      maxAux = arr[i];
    }
  }

  const totalScores = [totalMax, totalMin];
  return totalScores;
};

const scores = [12, 24, 10, 24];
console.log(breakingRecords(scores));
