package flippingMatrix;

import java.util.ArrayList;
import java.util.List;

public class FlipiingMatrix {

 public static void main(String[] args){
    List<List<Integer>> matrix = new ArrayList<>();
    matrix.add(List.of(112, 42,  83,  119));
    matrix.add(List.of(56,  125, 56,  49));
    matrix.add(List.of(15,  78,  101, 43));
    matrix.add(List.of(62,  98,  114, 108));
    flippingMatrix(matrix);
};

 public static Number flippingMatrix(List<List<Integer>> arr){
    int n = arr.size();
    int sum= 0;
    System.out.println(n);
    for(int i = 0; i < n / 2; i++ ){
        for(int j = 0 ; j < n / 2; j++ ){
            int maxElement = Math.max(
                Math.max(arr.get(i).get(j), arr.get(i).get(n - 1 - j)),
                Math.max(arr.get(n - 1 - i).get(j), arr.get(n - 1 - i).get(n - 1 - j))
            );
        sum += maxElement;
        System.out.println(sum);
    }     
}
return 0;
}
}