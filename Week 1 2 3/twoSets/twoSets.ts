function getTotalX1(a:number[], b:number[]):number {
    let result:number = 0;
    let mcmA:number = a[0];
    let mcdB:number = b[0];

    function mcd(x:number, y:number) {
      while (y !== 0) {
        const temp = y;
  
        y = x % y;
        x = temp;
      }
      return x;
    }

    function mcm(x:number, y:number) {

      return (x * y) / mcd(x, y);
    }
 
    for (let i = 1; i < a.length; i++) {
      mcmA = mcm(mcmA, a[i]);
    }

    for (let i = 1; i < b.length; i++) {
      mcdB = mcd(mcdB, b[i]);
    }
    
    for (let i = mcmA; i <= mcdB; i += mcmA) {
      if (mcdB % i === 0) {
        result++;
      }
   }
    return result;
}

const a1 = [2, 6];
const b1 = [24, 36];
console.log(getTotalX1(a1,b1));

/*    public static int getTotalX(List<Integer> a, List<Integer> b) {
    // Write your code here

    }

} */