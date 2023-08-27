function zigZagSeq(input) {
  const lines = input.trim().split("\n");
  // Extraer el número de elementos y los elementos del arreglo
  //const numElements = parseInt(lines[0]);
  //separo lo numeros de la linea 1 en cada
  const arrayElements = lines[1].split(",");
  if (arrayElements.length === 1) {
    return arrayElements[0];
  }
  let orderInput = arrayElements.map(Number).sort((a, b) => {
    return a - b;
  });
  //encuentro la mitad del array para poder dividirlo
  let lengthArr = Math.floor(orderInput.length / 2);
  //divido el array en dos mitades y ordeno la segunda mitad en orden decreciente
  let first = orderInput.splice(0, lengthArr);
  let last = orderInput.sort((a, b) => {
    return b - a;
  });

  let response = [...first, ...last].join(" ");

  console.log(response);
  return response;
}

//Capturo un input parala funcion.que se pasa por parametros.
process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
  _input += input;
});

process.stdin.on("end", function () {
  zigZagSeq(_input);
});

//corro el programa con:
// Get-Content datos.txt | node zigZagSeq.js
//cargo el archivo data con lo que quiero que se suba al programa.
