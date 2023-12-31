const camelCase = (input) => {
  let inputSplit = input.split(";");
  let inputMethod;
  let auxMethod;
  let finalCase;

  if (inputSplit[0] == "S") {
    inputMethod = inputSplit[inputSplit.length - 1].split(/(?=[A-Z])/);
    for (let i = 0; i < inputMethod.length; i++) {
      inputMethod[i] = inputMethod[i].toLowerCase();
    }
    if (inputSplit[1] == "M") {
      auxMethod = inputMethod[inputMethod.length - 1].split("(").shift();
      inputMethod.pop();
      inputMethod.push(auxMethod);
    }
    inputMethod = inputMethod.join(" ");
    finalCase = inputMethod;
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
      let WordUpper = firstLetter + restWord;

      auxMethod.push(WordUpper);
    }
    if (inputSplit[1] == "M") auxMethod.push("()");
    inputMethod = auxMethod.join("");
    finalCase = inputMethod;
  }
  console.log(finalCase);
};

const input = "S;M;plasticCup()";
console.log(camelCase(input));
