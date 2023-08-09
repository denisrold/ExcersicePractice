const subArrayDivision2 = (s:number[], d:number, m:number):number => {
    let count:number = 0;
    //s.length - m como el límite superior del bucle. Si m es 2 y s.length es 5, entonces s.length - m será 3. Esto significa que el bucle solo iterará hasta el índice 3 (i <= 3), lo que nos permitirá formar un segmento completo de longitud m a partir de ese índice.
    for (let i = 0; i <= s.length - m; i++) {
      let sum = 0;
      //i+m Sera el fragmento que recorrera
      for (let j = i; j < i + m; j++) {
            sum += s[j];
        }
      if (sum === d) {
            count++;
        }
    }
    return count;
  };