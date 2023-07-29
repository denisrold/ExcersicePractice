package countingValleys;

class  CountingValleys{
     public static void main(String[] args){
      String[] valleys = {"U", "D", "D", "D", "U", "D", "U", "U"};
        countingValleys(valleys);
     }
     public static Number countingValleys(String[] arr){
        int level = 0;
        int valleys = 0;
        boolean isInValley = false;
        for(int i = 0; i < arr.length; i++ ){

            String step = arr[i];
            if(step.equals("U")){
                level+=1;
            }
            else if(step.equals("D")){
                level-=1;
            }
            if(level < 0 && !isInValley){
                isInValley = true;
            } 
             if(level >= 0 && isInValley){
                isInValley = false;
                valleys++;
            } 
        }
        System.out.println(valleys);
        return valleys;
     }
} 