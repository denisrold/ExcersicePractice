import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

public class PickingNumbers{
    public static void main (String[] args){
        List<Integer> a = new ArrayList<>();
        a.addAll(Arrays.asList(4, 6, 5, 3, 3, 1));
        System.out.println(pickingNumbers(a));
    }
    public static int pickingNumbers(List<Integer> a){
        
        int maxCount = 0;
        int currentCount =0;
        int prevNumber = a.get(0);
        Collections.sort(a);

        for (int i = 0; i <a.size(); i++){
           if(Math.abs(a.get(i) - prevNumber )<=1){
            currentCount += 1;
           }
           else{
            prevNumber= a.get(i);
            maxCount = Math.max(maxCount,currentCount);
            currentCount = 1;
           }
        }
        return Math.max(maxCount,currentCount);
    }
}