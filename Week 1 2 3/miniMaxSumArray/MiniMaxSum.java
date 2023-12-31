package miniMaxSumArray;

import java.util.ArrayList;
import java.util.List;

public class MiniMaxSum {

    public static void calculateMinMax(List<Integer> arr ){
    // Se usa long para numeros extremadamente grandes 
    long minAux = arr.get(0);
    long maxAux = arr.get(0);
    long total = 0;
      for(int num : arr){
        if(minAux >num) minAux = num;
        if(maxAux<num) maxAux = num;
        total +=num;
      }
      System.out.println((total-maxAux)+" "+ (total - minAux));
    }
    
    public static void main(String[] args) {
    List<Integer> arr = new ArrayList<>();
    arr.add(1);
    arr.add(3);
    arr.add(5);
    arr.add(7);
    arr.add(9);   
    calculateMinMax(arr);        
    }
}
