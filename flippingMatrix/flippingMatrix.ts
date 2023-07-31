function flippingMatrix2(matrix:number[][]):number {
    const n:number = matrix.length; // largo de la matrix
    let sum = 0;
  
    for (let i = 0; i < n / 2; i++) {
      for (let j = 0; j < n / 2; j++) {
        const maxElement:number = Math.max(
          matrix[i][j],
          matrix[i][n - 1 - j], // Complemento a uno de j
          matrix[n - 1 - i][j], // Complemento a uno de i
          matrix[n - 1 - i][n - 1 - j] // Complemento a uno de i y j
        );
        sum += maxElement;
      }
    }
  
    return sum;
  }
  console.log(119 + 56 + 125 + 114);
  const ok2 = [
    //     J    0   1    2    3
    /*I=0 */  [112, 42,  83,  119],
    /*I=1*/   [56,  125, 56,  49],
    /*I=2*/   [15,  78,  101, 43],
    /*I=3*/   [62,  98,  114, 108],
  ];
  
  const result2 = flippingMatrix(ok);
  console.log(result); // Salida: 414
  