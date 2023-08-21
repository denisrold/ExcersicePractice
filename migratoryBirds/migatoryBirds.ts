const migratoryBirds1 = (arr:number[]):number => {
    let birdCount:Record<number,number> = {};
    let commonBird:number = 0;
    let maxCount:number = 0;
  
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
  
  const birds1 = [1, 4, 4, 5, 3, 3, 3];
  console.log(migratoryBirds1(birds1));