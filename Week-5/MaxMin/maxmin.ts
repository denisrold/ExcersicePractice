function maxMin1(k:number,arr:number[]):number{
let min:number = Number.MAX_VALUE;

arr.sort((a,b)=>a-b);
// console.log(arr)
for(let i = 0; i <= arr.length-k; i++){
    // console.log(arr[i+k-1])
    // console.log(arr[i])
    let injusticia = arr[i+k-1] - arr[i];
if (injusticia < min){
    min = injusticia;
    }
}
return min;
};

console.log(maxMin1(3, [7, 3, 10, 100, 300, 200, 1000, 20, 30]));