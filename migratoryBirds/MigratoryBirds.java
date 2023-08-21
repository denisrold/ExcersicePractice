package migratoryBirds;

import java.util.*;


public class MigratoryBirds{
    public static void main (String[] args){
    List<Integer> Birds = new ArrayList<>();
    Birds.addAll(Arrays.asList(1, 4, 4, 5, 3, 3, 3));
    System.out.println(migratoryBirds(Birds));
    }
    public static Number migratoryBirds(List<Integer> arr){
        Map<Integer, Long> birdCount = new HashMap<>();
    Integer commonBird = 0;
    Long maxCount = 0L;
    
    for (Integer bird : arr) {
        birdCount.put(bird, birdCount.getOrDefault(bird, 0L) + 1);

        if (birdCount.get(bird) > maxCount) {
            maxCount = birdCount.get(bird);
            commonBird = bird;
        } else if (birdCount.get(bird).equals(maxCount) && commonBird > bird) {
            commonBird = bird;
        }
    }
    return commonBird;
    }
}