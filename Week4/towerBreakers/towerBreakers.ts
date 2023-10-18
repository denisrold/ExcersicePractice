const towerBreakers1=(n:number,m:number):number=>{
    if (n % 2 === 0 || m === 1) {
        return 2;
      } else {
        return 1;
      }
};