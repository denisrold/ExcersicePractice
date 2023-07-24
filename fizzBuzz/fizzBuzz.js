function fizzBuzz(n) {
  // Write your code here
  let number = 1;
  const numberArray = [];
  while (number <= n) {
    if (number % 3 == 0 && number % 5 == 0) {
      numberArray.push("FizzBuzz");
    } else if (number % 3 === 0) {
      numberArray.push("Fizz");
    } else if (number % 5 === 0) {
      numberArray.push("Buzz");
    } else {
      numberArray.push(number);
    }
    number++;
  }
  for (let number of numberArray) {
    console.log(number);
  }
}

console.log(fizzBuzz(15));
