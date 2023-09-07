import java.util.*;


public class TwoSets{
    public static void main (String[] args){
        List<Integer> a = new ArrayList<>();
        List<Integer> b = new ArrayList<>();
        a.addAll(Arrays.asList(2,6));
        b.addAll(Arrays.asList(24,36));
        System.out.println(getTotalX(a, b));
        
    }
     public static int getTotalX(List<Integer> a, List<Integer> b) {
   // Write your code here
        int result = 0;
        int mcmA = a.get(0);
        int mcmB = b.get(0);
        
        for (int i = 1; i < a.size(); i++){
            mcmA = mcm(mcmA,a.get(i));
        }
        
        for (int i = 1; i < a.size(); i++){
            mcmB = mcm(mcmB,a.get(i));
        }

        for(int i = mcmA; i<mcmB; i += mcmA){
            if(mcmB % i == 0){
                result+=1;
            }
        }
    return result;
   }

   public static int mcd(int x , int y ){
    while(y!=0){
    int temp = y;
     y= x % y;
     x = temp;   
    }
    return x;
   }

   public static int mcm(int x, int y ){
    int m = (x*y);
    int mcd = mcd(x,y);
    int mcm= m/mcd; 
    return mcm; 
   }
}

    