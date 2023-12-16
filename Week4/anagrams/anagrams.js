// "use strict";

// const fs = require("fs");

// process.stdin.resume();
// process.stdin.setEncoding("utf-8");

// let inputString = "";
// let currentLine = 0;

// process.stdin.on("data", function (inputStdin) {
//   inputString += inputStdin;
// });

// process.stdin.on("end", function () {
//   inputString = inputString.split("\n");

//   main();
// });

// function readLine() {
//   return inputString[currentLine++];
// }
//verify if the length of the string is odd.
function anagram(s) {
  if (s.length % 2 !== 0) {
    return -1;
  }
  let mid = Math.floor(s.length / 2);
  let s1 = s.substring(0, mid);
  let s2 = s.substring(mid);

  let charCount = {};
  for (const char of s1) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  let changeesNeded = 0;
  for (const char of s2) {
    if (charCount[char] && charCount[char] > 0) {
      charCount[char] -= 1;
    } else {
      changeesNeded += 1;
    }
  }
  return changeesNeded;
}
console.log(anagram("xaxbbcxx"));

// function main() {
//   const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

//   const q = parseInt(readLine().trim(), 10);

//   for (let qItr = 0; qItr < q; qItr++) {
//     const s = readLine();

//     const result = anagram(s);

//     ws.write(result + "\n");
//   }

//   ws.end();
// }
/*
Input (stdin)
6
aaabbb
ab
abc
mnop
xyyx
xaxbbbxx
Your Output (stdout)
undefined
undefined
undefined
undefined
undefined
undefined
Expected Output
3
1
-1
2
0
1
*/

/*
Two words are anagrams of one another if their letters can be rearranged to form the other word.

Given a string, split it into two contiguous substrings of equal length. Determine the minimum number of characters to change to make the two substrings into anagrams of one another.

Example
s= abccde
Break 8 into two parts: 'abc' and 'cde'. Note that all letters have been used, the substrings are contiguous and their lengths are equal. Now you can change 'a' and 'b' in the first substring to 'd' and 'e' to have 'dec' and 'cde' which are anagrams. Two changes were necessary.

Function Description

Complete the anagram function in the editor below.

anagram has the following parameter(s):

string s: a string
Returns

int: the minimum number of characters to change or -1.
Input Format

The first line will contain an integer, , the number of test cases.
Each test case will contain a string .

Constraints

1<=q<=100
1<=8<=10^4
 consists only of characters in the range ascii[a-z].
Sample Input

6
aaabbb
ab
abc
mnop
xyyx
xaxbbbxx
Sample Output

3
1
-1
2
0
1
Explanation

Test Case #01: We split s into two strings s1='aaa' and s2='bbb'. We have to replace all three characters from the first string with 'b' to make the strings anagrams.

Test Case #02: You have to replace 'a' with 'b', which will generate "bb".

Test Case #03: It is not possible for two strings of unequal length to be anagrams of one another.

Test Case #04: We have to replace both the characters of first string ("mn") to make it an anagram of the other one.

Test Case #05:  s1 and s2  are already anagrams of one another.

Test Case #06: Here S1 = "xaxb" and S2 = "bbxx". You must replace 'a' from S1 with 'b' so that S1 = "xbxb".

*/
