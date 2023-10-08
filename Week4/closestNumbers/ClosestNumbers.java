package closestNumbers;

import java.util.*;

public class ClosestNumbers {
    public static void main(String[] args){
        List<Integer> numbers = new ArrayList<>();
        numbers.addAll(Arrays.asList(  -20, -3916237, -357920, -3620601, 7374819, -7330761, 30, 6246457, -6461594,
        266854));
        System.out.println(closestNumbers(numbers));
    }
    public static List<Integer> closestNumbers(List<Integer> arr){
        int smallestDiff = Integer.MAX_VALUE;
        List<Integer> pairs = new ArrayList<>();
        List<Integer[]> diffAndPairs = new ArrayList<>();
                
        Collections.sort(arr);
        
        for (int i = 0; i < arr.size() - 1; i++) {
            int difference = Math.abs(arr.get(i + 1) - arr.get(i));
            if (smallestDiff > difference) {
                smallestDiff = difference;
                Integer[] pair = { difference, arr.get(i), arr.get(i + 1) };
                diffAndPairs.add(pair);
            }
        }
        
        for (Integer[] pair : diffAndPairs) {
            if (pair[0].equals(smallestDiff)) {
                pairs.add(pair[1]);
                pairs.add(pair[2]);
            }
        }
        return pairs;
}
}

