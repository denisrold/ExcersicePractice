package permutingTwoArrays;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;

public class PermutingTwoArrays {
    public static void main(String[] args){
        List<Integer> A = new ArrayList<>();
        List<Integer> B = new ArrayList<>();
        Integer k = 10;
        A.addAll(Arrays.asList(3,2,4));
        B.addAll(Arrays.asList(6,7,8));
        permutingTwoArrays(k,A,B);
    }
    public static String permutingTwoArrays(Integer k ,List<Integer> A,List<Integer> B ){
        Collections.sort(A);
        Collections.sort(B  ,Comparator.reverseOrder());
        for(int i = 0; i < A.size(); i++){
            if(A.get(i) + B.get(i) < k ){return "NO";}
        }
        return "YES";
    }
}
