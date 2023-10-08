function closestNumbers2(arr:number[]):number[]{
    
    let smalletDif:number|undefined;
    let pairs:number[]=[];
    let diffAndPairs:number[][]=[];
    let sortedArr = arr.sort((a,b)=>a-b)

    for(let i = 0; i < sortedArr.length; i++){
        let difference:number = Math.abs(sortedArr[i+1]-sortedArr[i]);
        if( smalletDif === undefined || smalletDif > difference){
            smalletDif = difference;
            diffAndPairs.push([difference,sortedArr[i],sortedArr[i+1]]);  
        }
    }
    for(let k =0; k < diffAndPairs.length; k++){
        diffAndPairs[k][0] === smalletDif &&
        pairs.push(diffAndPairs[k][1],diffAndPairs[k][2])
    }

    return pairs
}

let numbers2:number[]=[  -20, -3916237, -357920, -3620601, 7374819, -7330761, 30, 6246457, -6461594,
    266854]

console.log(closestNumbers2(numbers2));