function pageCount(n, p) {
  // Calculamos el número de páginas a voltear desde el principio
  const fromFront = Math.floor(p / 2);

  // Calculamos el número de páginas a voltear desde el final
  const fromBack = Math.floor(n / 2) - Math.floor(p / 2);

  // Devolvemos el mínimo de páginas a voltear
  return Math.min(fromFront, fromBack);
}
const n = 5;
const p = 4;
console.log(pageCount(n, p));
