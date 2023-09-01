package subArrayDivision;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class SubArrayDivision {
    public static void main(String[] args){
        List<Integer> s = new ArrayList<>();
        s.addAll(Arrays.asList(1, 2, 1, 3, 2));
        int d = 3;
        int m = 2;
        subArrayDivision(s,d,m);
    }
    public static Integer subArrayDivision(List<Integer> s, Integer d , Integer m){
        Integer count = 0;

        for (int i = 0 ; i <= s.size() - m; i++){
           int sum = 0;
            for(int j  = i; j < i + m ; j++){
                sum += s.get(j);
            }
        if(sum ==d){ count++; }
        }
          System.out.println(count);
        return count;
    }
}
