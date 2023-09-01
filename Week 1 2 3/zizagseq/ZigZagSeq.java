package zizagseq;
import java.util.Arrays;
import java.util.Scanner;

public class ZigZagSeq {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter the length of the array: ");
        int n = scanner.nextInt();

        int[] arr = new int[n];
        for (int i = 0; i < n; i++) {
            System.out.print("Enter element " + (i + 1) + ": ");
            arr[i] = scanner.nextInt();
        }
        scanner.close();
        int midIndex = n / 2;
        int lastIndex = n - 1;

        // Step 1 - Sort
        Arrays.sort(arr);

        // Step 2 - Swap largest element into the middle
        int max = arr[lastIndex];
        arr[lastIndex] = arr[midIndex];
        arr[midIndex] = max;

        // Step 3 - Reverse remaining elements
        int leftIndex = midIndex + 1;
        int rightIndex = lastIndex - 1;

        while (leftIndex < rightIndex) {
            int tmp = arr[leftIndex];
            arr[leftIndex] = arr[rightIndex];
            arr[rightIndex] = tmp;

            leftIndex++;
            rightIndex--;
        }

        System.out.println("Resulting array: " + Arrays.toString(arr));
    }
}