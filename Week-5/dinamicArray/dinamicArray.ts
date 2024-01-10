function dinamicArray(n:number,queries:number[][]){
    let arr:number[][] = [];
    let lastAnswer:number = 0;
    let answers:number[] = [];
  
    for (let i = 0; i < n; i++) {
      arr[i] = [];
    }
  
    const getIndex = (x:number):number => {
      return (x ^ lastAnswer) % n;
    };
  
    const queryOne = (x:number, y:number) => {
      let i = getIndex(x);
      arr[i].push(y);
    };
  
    const queryTwo = (x:number, y:number) => {
      let i = getIndex(x);
      let l = arr[i].length;
      let z = y % l;
      lastAnswer = arr[i][z];
      answers.push(lastAnswer);
    };
  
    for (let q of queries) {
      if (q[0] === 1) {
        queryOne(q[1], q[2]);
      } else if (q[0] === 2) {
        queryTwo(q[1], q[2]);
      }
    }
  
    return answers;
};

