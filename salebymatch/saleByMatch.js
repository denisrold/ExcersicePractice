const saleByMatch = (n, ar) => {
  const objects = {};
  let cont = 0;
  for (let i = 0; i < n; i++) {
    if (objects[ar[i]]) {
      console.log(objects[ar[i]]);
      objects[ar[i]] += 1;
    }
    if (objects[ar[i]] === 2) {
      cont += 1;
      delete objects[ar[i]];
      continue;
    } else {
      objects[ar[i]] = 1;
    }
  }
  return cont;
};

console.log(saleByMatch(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]));
