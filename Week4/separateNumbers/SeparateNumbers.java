package separateNumbers;

public class SeparateNumbers {
    public static void main(String[] args){
        String strOne = "1234";
         String strTwo = "91011";
          String strThree  = "99100101";
          separatedNumbers(strThree);
    }
    public static void separatedNumbers(String s){
        if(s.length() < 1){
            System.out.println("NO");
        }

        for (int i = 1; i <= Math.floor((s.length()/2));i++){
            String firstNumberStr = s.substring(0, i);
            Long firstNumber =Long.parseLong(firstNumberStr);
            Long expected = firstNumber;
            String remaining = s.substring(i);

            while(remaining.length() > 0 ){
                expected++;
                String expectedStr = expected.toString();
                if(remaining.startsWith(expectedStr)){
                    remaining = remaining.substring(expectedStr.length());
            
                }else{break;}

                if(remaining.length() == 0){
                    System.out.println("YES " + firstNumberStr);
                    return;
                }
            }
        }
        System.out.println("NO");
    } 
}
