const timeConversion = (s: string):string /*lo que devuelte la funcion*/ => {
    const time : string[] = s.slice(0, 8).split(":");
    const minutes : number = parseInt(time[1], 10);
    const seconds:number  = parseInt(time[2], 10);
    let hours:number = parseInt(time[0], 10);
  
    const PM: string = s.slice(-2);
    if (PM == "PM" && hours != 12) hours += 12;
    else if (PM != "PM" && hours === 12) hours = 0;
  
    const formatHours: string = hours.toString().padStart(2, "0");
    const formatMinuts: string = minutes.toString().padStart(2, "0");
    const formatSeconds: string = seconds.toString().padStart(2, "0");
  
    return `${formatHours + ":" + formatMinuts + ":" + formatSeconds}`;
  };
  
  const string: string = "12:05:45PM";
  console.log(timeConversion(string));
  