const breakingRecord = (arr: number[]):number[] => {
    let totalMin : number = 0;
    let totalMax : number = 0;
    let minAux : number = arr[0];
    let maxAux: number = arr[0];
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < minAux) {
        totalMin += 1;
        minAux = arr[i];
      } else if (maxAux < arr[i]) {
        totalMax += 1;
        maxAux = arr[i];
      }
    }
  
    const totalScores: number[] = [totalMax, totalMin];
    return totalScores;
  };
  
  const score : number[] = [12, 24, 10, 24];
  console.log(breakingRecord(score));