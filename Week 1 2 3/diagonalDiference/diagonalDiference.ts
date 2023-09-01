const diagonalDifference2 = (arr:number[][]):number =>{
    let n= arr.length;
    let leftDiagonalSum: number = 0;
    let rightDiagonalSum: number = 0;

    for(let i = 0;  i < n; i++){
        leftDiagonalSum += arr[i][i];
        rightDiagonalSum += arr[i][(arr.length - 1) - i ]
    }

    return Math.abs(leftDiagonalSum - rightDiagonalSum);
};

const matrix2 = [
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12],
  ];
  
  console.log(diagonalDifference2(matrix2)); 