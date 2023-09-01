function pageCount1(n:number, p:number):number {
    // Calculamos el número de páginas a voltear desde el principio
    const fromFront:number = Math.floor(p / 2);
  
    // Calculamos el número de páginas a voltear desde el final
    const fromBack:number = Math.floor(n / 2) - Math.floor(p / 2);
  
    // Devolvemos el mínimo de páginas a voltear
    return Math.min(fromFront, fromBack);
  }
  const n1 = 5;
  const p1 = 4;
  console.log(pageCount1(n1, p1));