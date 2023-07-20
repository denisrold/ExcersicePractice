public class PlusMinus {
    public static void calculateRatios(int[] arr) {
        int positiveCount = 0;
        int negativeCount = 0;
        int zeroCount = 0;
        int n = arr.length;

        for (int num : arr) {
            if (num > 0)
                positiveCount++;
            else if (num < 0)
                negativeCount++;
            else
                zeroCount++;
        }

        double positiveRatio = (double) positiveCount / n;
        double negativeRatio = (double) negativeCount / n;
        double zeroRatio = (double) zeroCount / n;

        System.out.printf("%.6f%n", positiveRatio);
        System.out.printf("%.6f%n", negativeRatio);
        System.out.printf("%.6f%n", zeroRatio);
    }

    public static void main(String[] args) {
        int[] arr = {-4, 3, -9, 0, 4, 1};
        calculateRatios(arr);
    }
}

public class PlusMinus {
    public static void (int[] arr){
        int positives = 0; 
        int megatives= 0;
        int zeros = 0;
        int n = arr.length;

        for(int num : arr){
            if(num>0)
                positives++;
            else if (num<0)
                negatives++;
            else
                zeros++;    
        }

        double positiveRatio = (double) positives / n;
        double negativeRatio = (double) negatives/ n;
        double zeroRatio = (double) zeros /n; 

        system.out.printf("%.6f%n", positiveRatio);
        systems.out.printf("%.6f%n", negativeRatio);
        system.out.printf("%.6f%n", zeroRatio);
    }

    public static void main(String[] args){
        int arr={-4, 3, -9, 0, 4, 1};
        calculateRatios(arr);
    }
    

}