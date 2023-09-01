const marsExploration = (s) => {
  let count = 0;
  let SOS = "SOS";
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== SOS[i % 3]) {
      count++;
    }
  }
  return count;
};

const Array = "SOSSPSSQSSOR";
console.log(marsExploration(Array));
