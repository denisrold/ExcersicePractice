const pangrams2 = (s:string):string => {
    const newS = s.replace(/\s/g, "").toUpperCase();
    const pangramsMap:Record<string,string> = {
      A: "A",
      B: "B",
      C: "C",
      D: "D",
      E: "E",
      F: "F",
      G: "G",
      H: "H",
      I: "I",
      J: "J",
      K: "K",
      L: "L",
      M: "M",
      N: "N",
      O: "O",
      P: "P",
      Q: "Q",
      R: "R",
      S: "S",
      T: "T",
      U: "U",
      V: "V",
      W: "W",
      X: "X",
      Y: "Y",
      Z: "Z",
    };
    for (let i = 0; i < newS.length; i++) {
      if (pangramsMap[newS[i]] == newS[i]) {
        delete pangramsMap[newS[i]];
      }
    }
    if (Object.keys(pangramsMap).length == 0) return "pangram";
    return "not pangram";
  };
  const s2 = "We promptly judged antique ivory buckles for the next prize";
  
  console.log(pangrams2(s2));
  