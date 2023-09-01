package pangrams;

import java.util.HashMap;
import java.util.Map;

public class Pangrams {
    public static void main(String[] args){
      String s = "We promptly judged antique ivory buckles for the next prize";
      System.out.println(pangrams(s));  
    }

    public static String pangrams(String s){
        String newS = s.replaceAll("\\s", "").toUpperCase();
              Map<Character, Character> pangramsMap = new HashMap<>();

              for (char c = 'A'; c <= 'Z'; c++) {
                pangramsMap.put(c, c);
            }
            
              for(int i = 0; i < newS.length(); i++){
                char c = newS.charAt(i);
                if(pangramsMap.containsKey(c)){
                    pangramsMap.remove(c);
                }
              }
              if(pangramsMap.isEmpty()){return "pangram";}
              return "not pangram";
    }
}
