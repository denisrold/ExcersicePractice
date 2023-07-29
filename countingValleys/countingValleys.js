const countingValley = (arr) => {
  console.log(arr);
  let level = 0;
  let valleys = 0;
  let isInValley = true;

  for (let i = 0; i < arr.length; i++) {
    const step = arr[i];
    if (step == "U") {
      level++;
      console.log(level);
    } else if (step == "D") {
      level--;
      console.log(level);
    }
  }
  if (level < 0 && !isInValley) {
    isInValley = true;
  }
  if (level >= 0 && isInValley) {
    isInValley = false;
    valleys++;
  }
  console.log(valleys);
};

const arr = ["U", "D", "D", "D", "U", "D", "U", "U"];
console.log(countingValley(arr));
