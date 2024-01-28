package MaxMin;


import java.util.*;


public class Maxmin {
    public static void main(String args[]){
       int k = 3;
        List<Integer> arr = new ArrayList<>();
       arr.addAll(Arrays.asList(7, 3, 10, 100, 300, 200, 1000, 20, 30));

       System.out.println(maxmin(3, arr)); 
    }
    public static Integer maxmin(int k, List<Integer> arr ){
            Collections.sort(arr);
            Integer min = Integer.MAX_VALUE ;

            for(int i = 0 ; i <= (k - 1); i++ ){
            Long injusticia  =  arr.get(i + k -1).longValue() - arr.get(i).longValue();
            
            if(injusticia.intValue() < min.intValue()){
                min = injusticia.intValue();
            }    
        }
        return min;
    }
}
