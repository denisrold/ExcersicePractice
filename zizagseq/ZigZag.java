package zizagseq;

import java.util.Arrays;
import java.util.Scanner;

public class ZigZag {
   

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n = scanner.nextInt();
        int[] arr = new int[n];
        for (int i = 0; i < n; i++) {
            arr[i] = scanner.nextInt();
        }
        int midIndex = n / 2;
        int lastIndex = n - 1;
        System.out.println(zigZag(arr,midIndex,lastIndex ));
        scanner.close();
       
    }


public static String zigZag(int[] arr,int midIndex,int lastIndex){

        Arrays.sort(arr);

        int max = arr[lastIndex];
        arr[lastIndex] = arr[midIndex];
        arr[midIndex] = max;

        
        int leftIndex = midIndex + 1;
        int rightIndex = lastIndex - 1;

        while (leftIndex < rightIndex) {
            int tmp = arr[leftIndex];
            arr[leftIndex] = arr[rightIndex];
            arr[rightIndex] = tmp;

            leftIndex++;
            rightIndex--;
        }
    
        return Arrays.toString(arr);
}
}

