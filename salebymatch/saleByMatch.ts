const saleByMatch1 = (n:number , ar:number[]):number => {
const Obj:Set<number> = new Set();
let cont:number =0;
for(const num of ar){
    if(Obj.has(num)){
        cont++
        Obj.delete(num)
    }
    else{Obj.add(num)}
}

return cont;
};

console.log(saleByMatch1(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]));
