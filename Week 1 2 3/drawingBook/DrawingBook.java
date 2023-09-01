
package drawingBook;

public class DrawingBook {
    
    public static void main(String[] args){
        int n = 5;
        int p = 4;
        System.out.println(pageCount(n,p));
    }

    public static Number pageCount(int n,int p){
    int fromFront =(int) Math.floor(p / 2);
  
   
    int fromBack = (int) (Math.floor(n / 2) - Math.floor(p / 2));
    return Math.min(fromFront, fromBack);
    }
    
}
