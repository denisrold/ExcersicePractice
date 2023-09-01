package gradingStudent;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

class GradingStudent {
    public static List<Integer> gradingStudent(List<Integer> grades){
        return grades.stream().map((Integer grade) -> {
            if (grade < 38) {
                return grade;
            } else {
                int nextMult = (int) Math.ceil((grade / 5.0)) * 5;
                return (nextMult - grade < 3) ? nextMult : grade;
            }
        }).collect(Collectors.toList());
    }
    public static void main(String[] args) {
    List<Integer> grading = new ArrayList<>();
    grading.add(84);
    grading.add(37);
    grading.add(67);
    grading.add(95);
    grading.add(53);

    List<Integer> roundedGrades = gradingStudent(grading);
    System.out.println(roundedGrades);
    }
}