const towerBreakers = (n, m) => {
  if (n % 2 === 0 || m === 1) {
    return 2;
  } else {
    return 1;
  }
};
