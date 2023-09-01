function flippingMatrix(matrix) {
  const n = matrix.length; // largo de la matrix
  let sum = 0;

  for (let i = 0; i < n / 2; i++) {
    for (let j = 0; j < n / 2; j++) {
      const maxElement = Math.max(
        matrix[i][j],
        matrix[i][n - 1 - j], // Complemento a uno de j
        matrix[n - 1 - i][j], // Complemento a uno de i
        matrix[n - 1 - i][n - 1 - j] // COmplemento de I yde J
      );
      sum += maxElement;
    }
  }

  return sum;
}

const ok = [
  [112, 42, 83, 119],
  [56, 125, 56, 49],
  [15, 78, 101, 43],
  [62, 98, 114, 108],
];

const result = flippingMatrix(ok);
console.log(result); // Salida: 414
