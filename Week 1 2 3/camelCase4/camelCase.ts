const camelCase2 = (input: string):string => {
    let inputSplit : string[] = input.split(";");
    let inputMethod : string[];
    let auxMethod : string[];
    let inputOut : string;
    let finalCase : string="";
  
    if (inputSplit[0] == "S") {
      inputMethod = inputSplit[inputSplit.length - 1].split(/(?=[A-Z])/);
      for (let i = 0; i < inputMethod.length; i++) {
        inputMethod[i] = inputMethod[i].toLowerCase();
      }
      if (inputSplit[1] == "M") {
        auxMethod = inputMethod[inputMethod.length - 1].split("(");
        inputMethod.pop();
        inputMethod.push(auxMethod[0]);
      }
      inputOut = inputMethod.join(" ");
      finalCase = inputOut;
    }
  
    if (inputSplit[0] == "C") {
      inputMethod = inputSplit.slice(2);
  
      inputMethod = inputMethod.join().split(" ");
      auxMethod = [];
      for (let i = 0; i < inputMethod.length; i++) {
        if (inputSplit[1] != "C" && i == 0) {
          auxMethod.push(inputMethod[i]);
          continue;
        }
        const firstLetter = inputMethod[i].charAt(0).toUpperCase();
        const restWord = inputMethod[i].slice(1);
        let wordUpper = firstLetter + restWord;
  
        auxMethod.push(wordUpper);
      }
      if (inputSplit[1] == "M") auxMethod.push("()");
      inputOut = auxMethod.join("");
      finalCase = inputOut;
    }
   return finalCase; 
  };
  
  const input2:string = "S;M;plasticCup()";
  console.log(camelCase2(input2));
  