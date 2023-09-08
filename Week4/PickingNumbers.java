import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class PickingNumbers{
    public static void main (String[] args){
        List<Integer> a = new ArrayList<>();
        a.addAll(Arrays.asList(4, 6, 5, 3, 3, 1));
        System.out.println(pickingNumbers(a));
    }
    public static List<Integer> pickingNumbers(List<Integer> a){
        return a;
    }
}