package caesarsCipher;

public class CaesarsCipher {
    public static void main(String[] args){
System.out.println(caesarsCiphers("middle-Outz", 2));
    }
    public static String caesarsCiphers(String s, int k){
        StringBuilder newString = new StringBuilder();

        for (int i = 0; i < s.length(); i++) {
            char currentChar = s.charAt(i);
            //Se asegura que sea una letra.
            if (Character.isLetter(currentChar)) {
                //Transforma a numero
                int codigoAscii = (int) currentChar;
                //Busca si es mayuscula o minuscula
                int offset = codigoAscii < 91 ? 65 : 97;
                //ubica dentro del rango del codigo cada letra.
                int nuevoCodigoAscii = (((codigoAscii - offset) + k) % 26 + 26) % 26 + offset;
                //concatena transformando el numero a letra
                newString.append((char) nuevoCodigoAscii);
            } else {
                //si no era letra concatena el simbolo
                newString.append(currentChar);
            }
        }
    
        return newString.toString();
    }}
