const sparseArray = (strings, queries) => {
  const frecuencyMap = {};

  for (const string of strings) {
    frecuencyMap[string] = (frecuencyMap[string] || 0) + 1;
    console.log(frecuencyMap);
  }
  const result = [];
  for (const query of queries) {
    const frecuency = frecuencyMap[query] || 0;
    console.log(frecuency);
    result.push(frecuency);
  }

  return result;
};
/*const sparseArray = (string, query) => {
  let total = [];
  let sum = 0;
  for (let i = 0; i < query.length; i++) {
    for (let j = 0; j < string.length; j++) {
      if (query[i] === string[j]) {
        sum++;
      }
    }
    total.push(sum);
    sum = 0;
  }
  return total;
};*/

const q = ["aba", "xzxb", "ab"];
const s = ["aba", "baba", "aba", "xzxb"];

console.log(sparseArray(s, q));
