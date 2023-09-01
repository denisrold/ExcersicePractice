package sparseArray;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class SparseArray {
    public static List<Integer> sparseArray(String[] strings, String[] queries ){
        Map<String,Integer> frecuencyMap = new HashMap<>();
     for(String string : strings){
        frecuencyMap.put(string,frecuencyMap.getOrDefault(string,0)+1);
        }

    List<Integer> resultList = new ArrayList<>();
    for(String query : queries){
        int frecuency = frecuencyMap.getOrDefault(query,0);
        resultList.add(frecuency); 
    }
        return resultList;
    }

    public static void main (String[] args) {
        String[] q2 = {"aba", "xzxb", "ab"};
        String[] s2 = {"aba", "baba", "aba", "xzxb"};

        sparseArray(s2,q2);
    }
}
