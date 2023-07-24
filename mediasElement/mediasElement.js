const mediaElement = (arr) => {
  let newArray = arr.slice(0);
  let flag = true;
  while (flag) {
    flag = false;
    for (let i = 0; i < newArray.length - 1; i++) {
      if (newArray[i] > newArray[i + 1]) {
        let aux = newArray[i];
        newArray[i] = newArray[i + 1];
        newArray[i + 1] = aux;
        flag = true;
      }
    }
  }
  let mediaLength = Math.floor(arr.length / 2);

  return newArray[3];
};

const arrayNumber = [0, 1, 2, 4, 6, 5, 3];

console.log(mediaElement(arrayNumber));
