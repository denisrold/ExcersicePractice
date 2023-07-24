package fizzBuzz;

import java.util.ArrayList;
import java.util.List;

public class FizzBuzz {
    public static void fizzBuzz(Integer n){
        Integer number = 1;
        List<Object> numberArray = new ArrayList<>();

        while (number <= n) {
            if (number % 3 == 0 && number % 5 == 0) {
                numberArray.add("FizzBuzz");
            } else if (number % 3 == 0) {
                numberArray.add("Fizz");
            } else if (number % 5 == 0) {
                numberArray.add("Buzz");
            } else {
                numberArray.add(number);
            }
            number++;
        }

        for (Object element : numberArray) {
            System.out.println(element);
        }
    }

    public static void main(String[] args){
        fizzBuzz(15);
    }
}
