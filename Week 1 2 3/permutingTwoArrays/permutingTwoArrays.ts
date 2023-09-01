const permutingArrays2 = (k:number, a:number[], b:number[]):string => {
    a.sort((a, b) => a - b);
    b.sort((a, b) => b - a);
    for (let i = 0; i < a.length; i++) {
      if (a[i] + b[i] < k) return "NO";
    }
    return "YES";
  };
  
  const k2 = 10;
  const a2 = [4, 2, 4];
  const b2 = [6, 7, 8];
  
  console.log(permutingArrays2(k2, a2, b2));