const diagonalDifference = (arr) => {
  const n = arr.length;
  let sumLeftDiagonal = 0;
  let sumRightDiagonal = 0;

  for (let i = 0; i < n; i++) {
    sumLeftDiagonal += arr[i][i];
    sumRightDiagonal += arr[i][arr.length - 1 - i];
  }

  return Math.abs(sumLeftDiagonal - sumRightDiagonal);
};

// Ejemplo de uso con la matriz proporcionada en el ejercicio
const matrix = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12],
];

console.log(diagonalDifference(matrix)); // Output: 15
