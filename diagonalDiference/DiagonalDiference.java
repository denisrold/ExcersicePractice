package diagonalDiference;

import java.util.ArrayList;
import java.util.List;

public class DiagonalDiference {
    public static void main (String[] args){
        List<List<Integer>> matrix = new ArrayList<>();
        matrix.add(List.of(11, 2, 4));
        matrix.add(List.of(4, 5, 6));
        matrix.add(List.of(10, 8, -12));
        
        diagonalDifference(matrix);
    }

   public static Integer diagonalDifference(List<List<Integer>> arr) {
    // Write your code here
        int n = arr.size();
    int leftDiagonalSum = 0;
    int rightDiagonalSum = 0;

        for(Integer i =0;i <n;i++){
            leftDiagonalSum += arr.get(i).get(i);
            rightDiagonalSum += arr.get(i).get((n - 1) - i);
        }
    int difference = Math.abs(leftDiagonalSum - rightDiagonalSum);
    System.out.println(difference);
        return difference;
    }
}
