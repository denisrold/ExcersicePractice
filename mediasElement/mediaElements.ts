const mediaElement2 = (arr: number[]):number => {
    let newArray: number[] = arr.slice(0);
    let flag:boolean = true;
    while (flag) {
      flag = false;
      for (let i = 0; i < newArray.length - 1; i++) {
        if (newArray[i] > newArray[i + 1]) {
          let aux:number = newArray[i];
          newArray[i] = newArray[i + 1];
          newArray[i + 1] = aux;
          flag = true;
        }
      }
    }
    let mediaLength:number = Math.floor(arr.length / 2);
  
    return newArray[mediaLength];
  };
  
  const arrayNumber2 = [0, 1, 2, 4, 6, 5, 3];
  
  console.log(mediaElement2(arrayNumber2));