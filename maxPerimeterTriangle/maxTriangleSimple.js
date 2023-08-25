function maximumPerimeterTriangle(sticks) {
  let n = sticks.length;
  sticks.sort((a, b) => a - b);
  //Iteracion contraria encuentra el triangulo mas grande
  for (let i = n - 3; i >= 0; i--) {
    if (sticks[i] + sticks[i + 1] > sticks[i + 2]) {
      return [sticks[i], sticks[i + 1], sticks[i + 2]];
    }
  }

  return [-1];
}

const sticks = [2, 1, 1, 1, 3, 2, 3];
console.log(maximumPerimeterTriangle(sticks));
