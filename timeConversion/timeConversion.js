const timeConversion = (s) => {
  const time = s.slice(0, 8).split(":");
  const minutes = parseInt(time[1], 10);
  const seconds = parseInt(time[2], 10);
  let hours = parseInt(time[0], 10);

  const PM = s.slice(-2);
  if (PM == "PM" && hours != 12) hours += 12;
  else if (PM != "PM" && hours === 12) {
    hours = 0;
  }

  formatHours = hours.toString().padStart(2, "0");
  formatMinuts = minutes.toString().padStart(2, "0");
  formatSeconds = seconds.toString().padStart(2, "0");

  return `${formatHours + ":" + formatMinuts + ":" + formatSeconds}`;
};

const string = "12:05:45PM";
console.log(timeConversion(string));
