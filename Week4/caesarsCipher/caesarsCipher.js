caesarsCipher = (s, k) => {
  let newString = "";
  // Iterar sobre cada carácter en el mensaje
  for (let i = 0; i < s.length; i++) {
    // Verificar si el carácter es una letra (mayúscula o minúscula)
    if (s[i].match(/[a-zA-Z]/)) {
      //transforma a codigo Ascii
      const codigoAscii = s[i].charCodeAt(0);
      console.log(codigoAscii);
      //Determina en que rango estara dento del codigo ascii, si es mayusucula o si es minuscula
      let offset = codigoAscii < 91 ? 65 : 97;
      console.log(((codigoAscii - offset + k) % 26) + offset);
      const nuevoCodigoAscii = ((codigoAscii - offset + k) % 26) + offset; // Aplicar el desplazamiento
      newString += String.fromCharCode(nuevoCodigoAscii);
    } else {
      // Si no es una letra, devolverlo sin cambios
      newString += s[i];
    }
  }
  console.log(newString);
  // Devolver el mensaje cifrado completo
  return newString;
};

//
//
//
//
let s = "middle-Outz";
let k = 2;

caesarsCipher(s, k);
//okffng-Qwvb
