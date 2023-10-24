package minAbsoluteDif;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

public class MinAbsoluteDif {
    public static void main(String[] args){
        List<Integer> arr = new ArrayList<>();
        arr.addAll(Arrays.asList(-59, -36, -13, 1, -53, -92, -2, -96, -54, 75));
        System.out.println(minAbsoluteDif(arr));
    }

    public static Number minAbsoluteDif(List<Integer> arr){
    Collections.sort(arr); // Ordena la lista en orden ascendente porque es la diferencia absoluta. 
    int aux = Integer.MAX_VALUE;

    for (int i = 1; i < arr.size(); i++) {
        int absoluteNumber = Math.abs(arr.get(i) - arr.get(i - 1));
        if (absoluteNumber < aux) {
            aux = absoluteNumber;
        }
    }

    return aux;
}
    
}
