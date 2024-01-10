package dinamicArray;

import java.util.*;

public class DinamicArray {
   public static List<Integer> dynamicArray(int n, List<List<Integer>> queries) {
        List<List<Integer>> arr = new ArrayList<>();
        int[] lastAnswer = {0};
        List<Integer> answers = new ArrayList<>();

        for (int i = 0; i < n; i++) {
            arr.add(new ArrayList<>());
        }
 
        for (List<Integer> q : queries) {
            if (q.get(0) == 1) {
                queryOne(q.get(1), q.get(2), lastAnswer,arr,answers, n);
            } else if (q.get(0) == 2) {
                queryTwo(q.get(1), q.get(2), lastAnswer,arr,answers, n);
            }
        }
        return answers;
    }


         static int getIndex(int x,int[] lastAnswer,int n) {
            return (x ^ lastAnswer[0]) % n;
        }

        static void queryOne(int x, int y,int[] lastAnswer,List<List<Integer>> arr, List<Integer> answers,int n) {
            int i = getIndex(x,lastAnswer, n);
            arr.get(i).add(y);
        }

        static void queryTwo(int x, int y,int[] lastAnswer,List<List<Integer>> arr, List<Integer> answers,int n) {
            int i = getIndex(x,lastAnswer,n);
            int l = arr.get(i).size();
            int z = y % l;
            lastAnswer[0] = arr.get(i).get(z);
            answers.add(lastAnswer[0]);
        }
}