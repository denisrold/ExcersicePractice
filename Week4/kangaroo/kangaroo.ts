function kangaroo1(xa:number, va:number, xb:number, vb:number):String {
    if(va===vb && xa !==xb){return 'NO'};
    if((xb - xa) % (va - vb) === 0 && (xb - xa) / (va - vb) >= 0){return 'YES'}
   
    return 'NO'
}
let xa = 0;
let va = 3;
let xb = 4;
let vb = 2;

console.log(kangaroo1(xa, va, xb, vb));