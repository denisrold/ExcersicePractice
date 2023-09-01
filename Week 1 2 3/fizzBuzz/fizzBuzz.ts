function fizzBuzz2(n:number):void {
    // Write your code here
    let number:number = 1;
    const numberArray:(number|string)[] = [];
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
  
  console.log(fizzBuzz2(15));