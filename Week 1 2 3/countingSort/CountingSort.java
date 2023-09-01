package countingSort;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;



public class CountingSort {
    
    public static void main (String[] args){
    List<Integer> arr = new ArrayList<>();
    arr.addAll(Arrays.asList(
        12, 55, 39, 97, 72, 27, 21, 4, 82, 95, 3, 6, 43, 45, 35, 29, 69, 88, 58, 32,
        61, 20, 24, 100, 45, 71, 90, 16, 67, 56, 13, 86, 19, 54, 23, 46, 42, 47, 0,
        97, 49, 22, 33, 15, 34, 12, 23, 14, 2, 90, 1, 53, 41, 17, 75, 39, 62, 27, 84,
        46, 2, 64, 89, 19, 45, 26, 72, 43, 73, 8, 62, 20, 74, 55, 62, 10, 83, 29, 99,
        69, 97, 93, 46, 56, 81, 23, 53, 53, 93, 84, 49, 93, 55, 93, 56, 58, 45, 38,
        91, 35, 25, 72
    ));
    
        countingSort(arr);
    }

    public static List<Integer> countingSort(List<Integer> arr){
        List<Integer> countingMap = new ArrayList<>(Collections.nCopies(101,0));
        for(int i = 0 ; i < arr.size() ; i++){
            int value = arr.get(i);
            countingMap.set(value, countingMap.get(value) + 1);
        }
       System.out.println(countingMap);
        return countingMap;
    }
}
