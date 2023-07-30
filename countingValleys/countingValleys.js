const countingValley = (arr) => {
  let level = 0;
  let valleys = 0;
  let isInValley = false; // Establecer inicialmente en false, ya que no estamos en un valle al principio

  for (let i = 0; i < path.length; i++) {
    const step = path[i];
    if (step == "U") {
      level++;
    } else if (step == "D") {
      level--;
    }

    if (level < 0 && !isInValley) {
      // Si el nivel es menor que 0 y no estamos en un valle, comenzamos un nuevo valle
      isInValley = true;
    }

    if (level >= 0 && isInValley) {
      // Si el nivel es mayor o igual a 0 y estábamos en un valle, hemos salido del valle
      isInValley = false;
      valleys++;
    }
  }
  console.log(valleys);
  return valleys;
};
/*


*/
const arr = "DDUUDDUDUUUD";
console.log(countingValley(arr));
