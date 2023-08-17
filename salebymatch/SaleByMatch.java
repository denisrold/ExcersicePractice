package salebymatch;

import java.util.*;


public class SaleByMatch{
    public static Integer saleByMatch(int n , List<Integer> ar){
      Set<Integer> obj = new HashSet<>();
        int cont = 0; 
        for (int i = 0; i < n; i++) {
            if(obj.contains(ar.get(i))){
            cont++;
            obj.remove(ar.get(i));    
            }
            else{obj.add(ar.get(i));}
        }
        return cont;
    }


    public static void main(String[] args){
    
    List<Integer> ar = new ArrayList<>();
    ar.addAll(Arrays.asList(10, 20, 20, 10, 10, 30, 50, 10, 20));
    Integer n = 9;    
    System.out.println(saleByMatch(n,ar));
    }
}