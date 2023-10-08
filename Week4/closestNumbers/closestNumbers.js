function closestNumber(arr) {
  let difference, smallestDif;
  const difAndPairs = [];
  const pairs = [];

  const sortedArr = arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    difference = Math.abs(sortedArr[i + 1] - sortedArr[i]);

    // Store the smallest difference between pairs
    if (smallestDif === undefined || smallestDif > difference) {
      smallestDif = difference;
    }

    // Push difference and pairs to the difAndPairs array
    difAndPairs.push([difference, sortedArr[i], sortedArr[i + 1]]);
  }
  //chequea las diferencias minimas y agrega los pares que lo realizaron asi sean diferentes y tengan la misma diferencia minima,
  // Loop over the difAndPairs and push to pairs only the ones that have the smallest difference
  for (let k = 0; k < difAndPairs.length; k++) {
    difAndPairs[k][0] === smallestDif &&
      pairs.push(difAndPairs[k][1], difAndPairs[k][2]);
  }

  // Output all pairs in ascending order
  return pairs;
}

const numbers = [
  -20, -3916237, -357920, -3620601, 7374819, -7330761, 30, 6246457, -6461594,
  266854,
];

console.log(closestNumber(numbers));
