const marsExploration2 = (s:string):number=> {
    let count:number = 0;
    let SOS:string = "SOS";
    for (let i = 0; i < s.length; i++) {
      if (s[i] !== SOS[i % 3]) {
        count++;
      }
    }
    return count;
  };
  
  const Array2 = "SOSSPSSQSSOR";
  console.log(marsExploration2(Array2));
  