package flippinfBits;

public class FlippingBits {

    public static long flippingBits(int n ){
         long mask = 0xFFFFFFFF; // Máscara con todos los bits activados (32 bits en 1 en hexadecimal)
         long flippedNumber = n ^ mask;
         flippedNumber = flippedNumber & 0xFFFFFFFFL; //asi me aseguro que solo tome los 32 bits importantes/ activados. 
         return flippedNumber;
    }

    public static void main(String[] args){
        int n = 2147483647;
        long flippedNumber = flippingBits(n);
        System.out.println(flippedNumber);
    }
}
         long mask = 0xFFFFFFFF; 
         long flippedNumber = n ^ mask;
         flippedNumber = flippedNumber & 0xFFFFFFFFL;
         return flippedNumber;