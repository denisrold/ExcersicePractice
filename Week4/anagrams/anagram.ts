function anagram1(s:string):number {
if (s.length % 2 !== 0) {
    return -1;
  }
  let mid:number = Math.floor(s.length / 2);
  let s1:string = s.substring(0, mid);
  let s2:string = s.substring(mid);

  let charCount:object = {};
  for (const char of s1) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  let changeesNeded:number = 0;
  for (const char of s2) {
    if (charCount[char] && charCount[char] > 0) {
      charCount[char] -= 1;
    } else {
      changeesNeded += 1;
    }
  }
  console.log(changeesNeded)
  return changeesNeded;}

  console.log(anagram1("xdcvxdxxxvcs"))