function getTotalX(a, b) {
  let result = 0;
  let mcmA = a[0];
  let mcdB = b[0];
  //maximo comun divisor
  // número más grande que puede dividir exactamente a dos o más números sin dejar residuo.
  //algoritmo de euclides
  function mcd(x, y) {
    while (y !== 0) {
      const temp = y;
      //el residuo tambien sera divisor
      y = x % y;
      x = temp;
    }
    return x;
  }
  //maximo comun divisor
  function mcm(x, y) {
    // Utiliza la función gcd para encontrar el MCD de x e y
    // Luego, divide el producto de x e y por el MCD para obtener el MCM
    return (x * y) / mcd(x, y);
  }
  //MCM de todos los elementos del array a
  for (let i = 1; i < a.length; i++) {
    mcmA = mcm(mcmA, a[i]);
  }
  // Calcula el MCD de los elementos en el array 'b'
  for (let i = 1; i < b.length; i++) {
    mcdB = mcd(mcdB, b[i]);
  }
  // Encuentra cuántos múltiplos del MCM son divisores del MCD
  console.log(mcmA);
  console.log(mcdB);
  for (let i = mcmA; i <= mcdB; i += mcmA) {
    if (mcdB % i === 0) {
      result++;
    }
  }
  return result;
}

const a = [2, 6];
const b = [24, 36];
console.log(getTotalX(a, b));

/*    public static int getTotalX(List<Integer> a, List<Integer> b) {
    // Write your code here

    }

} */
