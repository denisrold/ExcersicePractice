function flippingBits(n) {
  // Crear una máscara con todos los bits activados (1)
  // 32 bits con todos los bits activados (1) excepto el bit más significativo, que será 0.
  let mask = 0xffffffff;
  // Invertir los bits del número usando el operador XOR con la máscara
  let flippedNumber = n ^ mask;
  //convierto el numero denuevo a bits
  return flippedNumber >>> 0; // Convertir el resultado a un entero no signado de 32 bits
}

// Ejemplo de uso
console.log(flippingBits(2147483647)); // Salida: 2147483648
console.log(flippingBits(1)); // Salida: 4294967294
console.log(flippingBits(0)); // Salida: 4294967295
