package leftRotation;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

public class LeftRotation {
        public static List<Integer> rotateLeft(int d, List<Integer> arr) {
    // Rota los numeros hacia izquierda o derecha. 
    Collections.rotate(arr, -d);
    return arr;
    }
    public static void main (String[]  args){
        List<Integer> arr = new ArrayList<>();
        arr.addAll(Arrays.asList(1, 2, 3, 4, 5));
        int d = 54;
        System.out.println(rotateLeft(d, arr));
    }
}
