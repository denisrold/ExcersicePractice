package LonelyInteger;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class LonelyInteger {
    public static Object lonelyInteger(List<Integer> arr){
       Map<Integer,Integer> numberMap = new HashMap<>();
       
       for(Integer num : arr){
         numberMap.put(num,numberMap.getOrDefault(num,0)+1);
       }
       for(Integer num : arr){
            if(numberMap.get(num) ==1){return num;}
        }
        return "Not Lonely Number";
    }

    public static void main(String[] args) {
        List<Integer> arrayNumber = new ArrayList<>();
        arrayNumber.add(1);
        arrayNumber.add(2);
        arrayNumber.add(3);
        arrayNumber.add(4);
        arrayNumber.add(5);
        arrayNumber.add(5);
        arrayNumber.add(3);
        arrayNumber.add(2);
        arrayNumber.add(1);
        lonelyInteger(arrayNumber);
    }
}
