
function caesarsCipher3 (s2:string, k2:number):string {
    let newString = "";
    for (let i = 0; i < s2.length; i++) {
      if (s2[i].match(/[a-zA-Z]/)) {
        const codigoAscii = s2[i].charCodeAt(0);
        let offset = codigoAscii < 91 ? 65 : 97;
        const nuevoCodigoAscii = ((codigoAscii - offset + k2) % 26) + offset;
        newString += String.fromCharCode(nuevoCodigoAscii);
      } else {
        newString += s2[i];
      }
    }

    return newString;
  };

let s2 = "middle-Outz";
let k2 = 2;

console.log(caesarsCipher3(s2, k2));
//okffng-Qwvb