const sparseArray2 = (strings:string[],queries:string[]):number[]=>{
   //Como usar Record --> type MyDictionary = Record<Clave, TipoValor>;
    const frecuencyMap: Record<string, number> = {};

   for(const string of strings){
    frecuencyMap[string] = (frecuencyMap[string] || 0)+1
   }

   const result:number[] = [];
   for (const query of queries){
    let frecuency:number;
    frecuency = frecuencyMap[query] || 0;
    result.push(frecuency);
   }

    return result
}

const q2:string[] = ["aba", "xzxb", "ab"];
const s2:string[] = ["aba", "baba", "aba", "xzxb"];

console.log(sparseArray2(s2, q2));