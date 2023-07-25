const lonelyInteger2 = (arr:number[]):(number|undefined) => {
    let numberMap:Record<string,number> = {};
    for (const num of arr) {
      numberMap[num] = (numberMap[num] || 0) + 1;
    }
  
    for (const num of arr) {
      if (numberMap[num] === 1) return num;
    }
  };
  
  const arrayNumber3:number[] = [1, 2, 3, 4, 5, 5, 3, 2, 1];
  lonelyInteger2(arrayNumber3);