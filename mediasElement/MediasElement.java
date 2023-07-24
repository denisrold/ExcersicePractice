package mediasElement;

import java.util.ArrayList;
import java.util.List;

public class MediasElement {
    public static Integer mediaElement(List<Integer> arr){
        List<Integer> arrayNumbers = new ArrayList<>();
        arrayNumbers = arr;
        Boolean flag = true;
         while (flag) {
            flag=false;
            for (int i = 0; i < arrayNumbers.size() - 1; i++) {
            if (arrayNumbers.get(i) > arrayNumbers.get(i + 1)) {
            Integer aux = arrayNumbers.get(i);
            arrayNumbers.set(i, arrayNumbers.get(i + 1));
            arrayNumbers.set(i + 1,aux);
            flag = true;
         }
        }
        }
        int result = (int) Math.floor(arrayNumbers.size() / 2.0);
        System.out.println(arrayNumbers.get(result));
        return 1;
    }
     
    public static void  main(String[] args){
      List<Integer> arrayNumber = new ArrayList<>();
      arrayNumber.add(0);
      arrayNumber.add(1);
      arrayNumber.add(2);
      arrayNumber.add(4);
      arrayNumber.add(6);
      arrayNumber.add(5);
      arrayNumber.add(3);
      
        mediaElement(arrayNumber);
    }
}


