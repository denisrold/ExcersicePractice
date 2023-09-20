function kangaroo(x1, v1, x2, v2) {
  // Si tienen la misma velocidad y estan en diferentes posiciones sera NO
  if (v1 === v2 && x1 !== x2) {
    return "NO";
  }

  // Verificar si se encontrarán en el mismo lugar
  if ((x2 - x1) % (v1 - v2) === 0 && (x2 - x1) / (v1 - v2) >= 0) {
    return "YES";
  }
  /*(x2 - x1): Esto calcula la diferencia entre las ubicaciones iniciales de los dos canguros.
 Si es negativo, significa que el segundo canguro está detrás del primero, y si es positivo,
  significa que el segundo canguro está adelante.

(v1 - v2): Esto calcula la diferencia entre las velocidades de los dos canguros. 
Si es positivo, significa que el primer canguro es más rápido que el segundo,
 y si es negativo, significa que el segundo canguro es más rápido.

(x2 - x1) % (v1 - v2): Esto calcula el residuo de la división de la diferencia de ubicaciones 
iniciales entre la diferencia de velocidades. Si este residuo es igual a cero, 
significa que la diferencia entre las ubicaciones iniciales es un múltiplo exacto de la diferencia de velocidades.
 Esto implica que en algún punto en el futuro, los canguros se encontrarán en el mismo lugar,
  ya que el primero habrá alcanzado o superado al segundo debido a la diferencia de velocidades.

Si el residuo es igual a cero, el código devuelve "YES", 
lo que indica que los canguros se encontrarán en el mismo lugar en algún momento.
 De lo contrario, si el residuo no es cero, el código no entra en este bloque y continúa con otras comprobaciones. */
  /*La verificación (x2 - x1) / (v1 - v2) >= 0 es importante para asegurarse de que los canguros se estén moviendo en la misma dirección, es decir, que estén saltando hacia el mismo lado a lo largo de la línea numérica. Esto es crucial para determinar si alguna vez se encontrarán.

En el caso  (x1=0, v1=2, x2=5, v2=3),
 si no verificamos la dirección del movimiento, 
 obtendríamos un resultado incorrecto. Veamos por qué:

Kangaroo 1 comienza en la posición 0 y salta 2 unidades por salto.
Kangaroo 2 comienza en la posición 5 y salta 3 unidades por salto.
Si solo consideramos la primera parte de la condición (x2 - x1) % (v1 - v2) === 0,
 obtendríamos que (5 - 0) % (2 - 3) === 0, lo cual es verdadero,
  lo que sugiere que podrían encontrarse. Pero si no consideramos la dirección,
   estaríamos ignorando el hecho de que uno de los canguros se está moviendo hacia la derecha y el otro hacia la izquierda.

En realidad, en este caso, los canguros nunca se encontrarán,
 ya que uno se aleja del otro. Por lo tanto, 
 es necesario verificar que el cociente (x2 - x1) / (v1 - v2) sea mayor o igual a cero
  para garantizar que los canguros estén moviéndose en la misma dirección antes de considerar
   si se encontrarán o no. En este caso en particular, 
   la condición (x2 - x1) / (v1 - v2) dará un valor negativo, 
   lo que significa que los canguros se están alejando y la función devolverá "NO",
    lo cual es la respuesta correcta. */
  return "NO";
}

let x1 = 0;
let v1 = 3;
let x2 = 4;
let v2 = 2;

console.log(kangaroo(x1, v1, x2, v2));
