function dinamicArrays(n, queries) {
  let arr = [];
  let lastAnswer = 0;
  let answers = [];

  for (let i = 0; i < n; i++) {
    arr[i] = [];
  }

  const getIndex = (x) => {
    return (x ^ lastAnswer) % n;
  };

  const queryOne = (x, y) => {
    let i = getIndex(x);
    arr[i].push(y);
  };

  const queryTwo = (x, y) => {
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
}

console.log(dinamicArrays());

// Your Output (stdout)
// 1,0,5
// 1,1,7
// 1,0,3
// 2,1,0
// 2,1,1

// Expected Output
// 7
// 3

//     debug output
//    [ [ 1, 0, 5 ], [ 1, 1, 7 ], [ 1, 0, 3 ], [ 2, 1, 0 ], [ 2, 1, 1 ] ]
