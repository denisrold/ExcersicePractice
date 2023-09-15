function rotateLeft(d, arr) {
  // Write your code here
  for (let i = 0; i < d; i++) {
    let aux = arr.shift();
    arr.push(aux);
  }

  return arr.join(" ");
}

const n = 54;
const arr = [1, 2, 3, 4, 5];
console.log(rotateLeft(n, arr));
