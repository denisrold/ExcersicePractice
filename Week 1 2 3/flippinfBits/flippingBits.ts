function flippingBits2(n:number):number {
let mask = 0xffffffff;
  
  let flippedNumber = n ^ mask;

  return flippedNumber >>> 0;
}
