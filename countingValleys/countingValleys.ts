const countingValley2 = (arr:string[]):number => {
    let level:number = 0;
    let valleys:number = 0;
    let isInValley = false;
 
for(let i =0; i < arr.length; i++){
    let step2:string = arr[i];
    if(step2 == "U"){level ++}
    else if(step2 == "D"){level --}
    if(level < 0 && !isInValley){isInValley = true}
    if(level >= 0 && isInValley){isInValley = false; valleys++}
 }
 console.log(valleys)
 return valleys;
};
const arr2:string[] = ["U", "D", "D", "D", "U", "D", "U", "U"];
  console.log(countingValley2(arr2));