function separatedNumbers1(s:string){
    if(s.length < 1){return "NO"}
    for(let i= 1; i<= Math.floor(s.length/2);i++){
    let firstNumberStr:string = s.slice(0,i);
    let firstNumber = BigInt(firstNumberStr);
    console.log(firstNumber)
    let expected:bigint = firstNumber;
    let remaining:string = s.slice(i);  
    console.log(remaining)

    while(remaining.length >0){
        expected++;
        let expectedStr:string = expected.toString();
        console.log(expectedStr);
        if(remaining.startsWith(expectedStr)){
       remaining = remaining.slice(expectedStr.length);
        }else{ break; }

        if(remaining.length ===0){
        console.log("YES," , firstNumberStr);
        return;
        }
    }
}
    console.log("NO")
};

const var1 = "1234";
const var2 = "91011"
const var3 = "99100101"
console.log(separatedNumbers1(var3))