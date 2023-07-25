package LonelyInteger;

import java.util.ArrayList;
import java.util.List;

public class LonelyInteger {
    public static Integer lonelyInteger(List<Integer> arr){
        System.out.println(arr);
        return 1;
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
