//PAra numeros muy grandes
function separateNumbers(s) {
  if (s.length === 1) {
    console.log("NO");
    return;
  }

  for (let i = 1; i <= Math.floor(s.length / 2); i++) {
    const firstNumStr = s.slice(0, i);
    const firstNum = BigInt(firstNumStr);
    let expected = firstNum;
    let remaining = s.slice(i);

    while (remaining.length > 0) {
      expected++;
      const expectedStr = expected.toString();

      if (remaining.startsWith(expectedStr)) {
        remaining = remaining.slice(expectedStr.length);
      } else {
        break;
      }
    }

    if (remaining.length === 0) {
      console.log("YES", firstNumStr);
      return;
    }
  }

  console.log("NO");
}

function separatedNumbers(s) {
  if (s.length === 1) {
    console.log("NO");
    return;
  }
  //primero descarta la secuencia segun lo grande el primer numero.
  //si el primer numero es mayor que la mitad lo descarta porqe no seria posible una secuencia.

  for (let i = 1; i <= Math.floor(s.length / 2); i++) {
    const firstNum = parseInt(s.slice(0, i));
    console.log(firstNum);
    let expected = firstNum;
    console.log(expected);

    let remaining = s.slice(i);
    console.log(remaining);
    console.log(remaining.length);
    while (remaining.length > 0) {
      expected++;
      console.log(expected);
      const expectedStr = expected.toString();
      if (remaining.startsWith(expectedStr)) {
        remaining = remaining.slice(expectedStr.length);
      } else {
        break;
      }
    }
    if (remaining.length === 0) {
      console.log("YES", firstNum);
      return;
    }
  }

  console.log("NO");
}

const varOne = "1234";
const varTwo = "91011";
const varThree = "99100101";
console.log(separatedNumbers(varThree));
