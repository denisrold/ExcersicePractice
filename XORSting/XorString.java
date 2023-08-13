package XORSting;

import java.util.Scanner;

public class XorString {

    public static void main(String[] args){
        Scanner scanner = new Scanner(System.in);
        String scannerIn1 = scanner.nextLine();
        String scannerIn2 = scanner.nextLine();
        scanner.close();
        System.out.println(xorString(scannerIn1, scannerIn2));
    }

    public static String xorString(String s1, String s2){
        String result = "";
        for(int i = 0; i <s1.length();i++){
            if(s1.charAt(i) != s2.charAt(i)){result += "1";}
            else {result += "0";}
        }
        System.out.println(result);
        return result;
    }
}
