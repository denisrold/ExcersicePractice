const pickingNumbers1 = (a:number[]):number =>{
    a.sort((x, y) => x - y);
    console.log(a);
    let maxCount:number = 0;
    let prevNum= a[0];
    let currentCount:number = 0;
    for (let i = 0; i < a.length; i++) {
      if ((Math.abs(a[i] - prevNum) <= 1)) {
        currentCount++;
      } else {
        prevNum = a[i];
        maxCount = Math.max(maxCount, currentCount);
        currentCount = 1;
      }
    }
    return Math.max(maxCount, currentCount);

};

const a1 = [4, 6, 5, 3, 3, 1];
console.log(pickingNumbers1(a1));
