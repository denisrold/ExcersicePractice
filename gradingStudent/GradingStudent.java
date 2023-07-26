package gradingStudent;
import java.util.ArrayList;
import java.util.List;

class GradingStudent {
    public static void gradingStudent(List<Integer> arr){
        System.out.println(arr);
    };
    public static void main(String[] args) {
    List<Integer> grading = new ArrayList<>();
    grading.add(84);
    grading.add(37);
    grading.add(67);
    grading.add(95);
    grading.add(53);

    gradingStudent(grading);
    }
}