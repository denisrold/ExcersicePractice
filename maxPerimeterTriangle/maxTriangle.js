function maximumPerimeterTriangle(sticks) {
  // Write your code here
  let maxPerimeter = 0;
  let maxTriangle = [];
  let orderSticks = sticks.sort((a, b) => a - b);

  for (let i = 0; i < orderSticks.length - 2; i++) {
    for (let j = i + 1; j < orderSticks.length - 1; j++) {
      for (let k = j + 1; k < orderSticks.length; k++) {
        let a = orderSticks[i];
        let b = orderSticks[j];
        let c = orderSticks[k];

        if (a + b > c && a + c > b && b + c > a) {
          let perimeter = a + b + c;
          if (perimeter > maxPerimeter) {
            maxPerimeter = perimeter;
            maxTriangle = [a, b, c];
          }
        }
      }
    }
  }

  if (maxTriangle.length > 0) {
    return maxTriangle.sort((a, b) => {
      return a - b;
    });
  } else {
    return [-1];
  }
}
const sticks = [2, 1, 1, 1, 3, 2, 3];
console.log(maximumPerimeterTriangle(sticks));
