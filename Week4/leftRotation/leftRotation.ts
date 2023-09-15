function rotateLeft1(d:number, arr:number[]):string {
    // Write your code here
    for (let i = 0; i < d; i++) {
      let aux = arr.shift() as number;
      arr.push(aux);
    }
  
    return arr.join(" ");
  }
  
  const n1 = 54;
  const arr1 = [1, 2, 3, 4, 5];
  console.log(rotateLeft1(n1, arr1));