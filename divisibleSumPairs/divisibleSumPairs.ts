function divisibleSumPairs2(n:number , k:number, ar:number[]):number {
    let total: number= 0;
  
    for (let i = 0; i < ar.length; i++) {
      for (let j = i + 1; j < ar.length; j++) {
        if ((ar[i] + ar[j]) % k == 0) {
          total++;
        }
      }
    }
  
    return total;
  }
  
  let arr2:number[] = [1, 3, 2, 6, 1, 2];
  console.log(divisibleSumPairs2(6, 3, arr2));
  