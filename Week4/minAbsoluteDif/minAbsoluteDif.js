function minimumAbsoluteDifference(arr) {
  let aux = Number.MAX_SAFE_INTEGER;
  let i = 0;

  while (i < arr.length) {
    for (let j = i + 1; j <= arr.length - 1; j++) {
      if (Math.abs(arr[i] - arr[j]) < aux) {
        aux = Math.abs(arr[i] - arr[j]);
      }
    }
    i++;
  }

  return aux;
}
const arr = [3, -7, 0];
const arr1 = [-59, -36, -13, 1, -53, -92, -2, -96, -54, 75];
const arr3 = [1, -3, 71, 68, 17];

console.log(minimumAbsoluteDifference(arr3));
/*
COMPLEJIDADES TEMPORALES:
Tienes razón en tus ejemplos. Para resumir:

O(n): Una sola iteración por un array de una dimensión de tamaño "n".
O(1): Una sola operación que no depende del tamaño de los datos de entrada.
O(n * m): Un array bidimensional o una matriz de tamaño "n" por "m".
O(n^2): Un algoritmo con dos bucles anidados, 
donde el tiempo de ejecución crece cuadráticamente 
en función del tamaño de los datos de entrada.
Estos son ejemplos comunes de complejidades 
algorítmicas en términos de tiempo. Por supuesto, 
existen muchas otras complejidades y combinaciones posibles,
 pero estas son algunas de las más fundamentales. */
