package brakingRecords;

import java.util.List;

import java.util.ArrayList;

public class BreakingRecords{
   
    public static List<Integer> breakingRecords (List<Integer> scores){
    int totalMin = 0;
    int totalMax = 0;
    int minAux = scores.get(0);
    int maxAux = scores.get(0);

    for(int score : scores){
        if(minAux>score){totalMin += 1; minAux=score;}
        else if (maxAux<score){totalMax += 1; maxAux=score;}
    }
    List<Integer> TotalScore =  new ArrayList<>();
    TotalScore.add(totalMax);
    TotalScore.add(totalMin);
     
    return TotalScore; 
    }

public static void main(String[] args){
        List<Integer> scores = new ArrayList<>();
        scores.add(12);
        scores.add(24);
        scores.add(10);
        scores.add(24);
        breakingRecords(scores);
    } 
}