package maxPerimeterTriangle;

import java.util.*;

public class MaxTrinagle {
    public static void main(String[] args){
        List<Integer> sticks = new ArrayList<>(); 
        sticks.addAll(Arrays.asList(2, 1, 1, 1, 3, 2, 3));
             System.out.println(maximumPerimeterTriangle(sticks));
    }

    public static List<Integer> maximumPerimeterTriangle(List<Integer> sticks){
    // Write your code here
    Collections.sort(sticks);
    long maxPerimeter = 0;
    List<Integer> maxTriangle = new ArrayList<>();
    int size = sticks.size();
    for (int i = 0; i < size - 2; i++) {
        for (int j = i + 1; j < size - 1; j++) {
            for (int k = j + 1; k < size; k++) {
                long a = sticks.get(i);
                long b = sticks.get(j);
                long c = sticks.get(k);
                if (a + b > c && a + c > b && b + c > a) {
                    long perimeter = a + b + c;
                    if (perimeter > maxPerimeter) {
                        maxPerimeter = perimeter;
                        maxTriangle.clear();
                        maxTriangle.addAll(Arrays.asList((int) a, (int) b, (int) c));
                    }
                }
            }
        }
    }
    if (maxPerimeter > 0) {
        return maxTriangle;
    } else {
        List<Integer> none = new ArrayList<>();
        none.add(-1);
        return none;
    }
}
}