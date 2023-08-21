const migratoryBirds = (arr) => {
  let birdCount = {};
  let commonBird = 0;
  let maxCount = 0;

  for (let bird of arr) {
    if (!birdCount[bird]) {
      birdCount[bird] = 1;
    } else {
      birdCount[bird] += 1;
    }
    if (birdCount[bird] > maxCount) {
      maxCount = birdCount[bird];
      commonBird = bird;
    } else if (birdCount[bird] == maxCount && commonBird > bird) {
      commonBird = bird;
    }
  }
  return commonBird;
};

const birds = [1, 4, 4, 5, 3, 3, 3];
console.log(migratoryBirds(birds));
