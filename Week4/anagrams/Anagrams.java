package anagrams;

import java.util.HashMap;
import java.util.Map;

public class Anagrams {
    public static void main(String[] args){
               System.out.println(anagrams("cxxssxxc"));
    }

    public static int anagrams(String s){
    
        if(s.length() % 2 != 0 ){return -1;}

        int mid = Math.floorDiv(s.length(),2);
        String s1 = s.substring(0, mid);
        String s2 = s.substring(mid);

        Map<Character,Integer> charCount = new HashMap<>();

        for (char element : s1.toCharArray()){
            charCount.put(element, charCount.getOrDefault(charCount, 0) + 1);
        }
        int changesNeeded = 0;
        for (char element : s2.toCharArray()){
            if(charCount.get(element) != null & charCount.get(element) > 0){
                charCount.put(element,charCount.getOrDefault(charCount, -1));
            }
            else{
            changesNeeded += 1;
            }
        }

        return changesNeeded;
    }
}
