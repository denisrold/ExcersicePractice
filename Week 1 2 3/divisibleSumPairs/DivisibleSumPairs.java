package divisibleSumPairs;
import java.util.ArrayList;
import java.util.List;

public class DivisibleSumPairs{
    public static Integer divisibleSumPairs(Integer n , Integer k , List<Integer> ar){
        int total = 0;
        for (int i = 0; i < ar.size(); i++) {
            for (int j = i + 1; j < ar.size(); j++) {
                if ((ar.get(i) + ar.get(j)) % k == 0) {
                    total += 1;
                }
            }
        }

        System.out.println(total);
        return total;
    }

    public static void main(String[] args) {
        List<Integer> arr = new ArrayList<>();
        arr.add(1);
        arr.add(3);
        arr.add(2);
        arr.add(6);
        arr.add(1);
        arr.add(2);
       divisibleSumPairs(6, 3, arr);
    }
}