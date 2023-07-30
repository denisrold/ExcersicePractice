package marsExploration;

public class MarsExploration {
    public static Number marsExploration(String s){
        Integer count = 0;
        String SOS= "SOS";
        for(int i = 0; i < s.length() ; i++ ){
            if(s.charAt(i) != SOS.charAt(i % 3)){
                count++;
            }
        }
        return count;
    }
}
