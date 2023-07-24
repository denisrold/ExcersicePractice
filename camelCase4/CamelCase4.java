package camelCase4;

public class CamelCase4 {
    public static String camelCase4(String input  ){
        String[] inputSplit = input.split(";");
        String[] inputMethod;
        String[] auxMethod;
        String finalCase;

        if(inputSplit[0].equals("S")){
            inputMethod = inputSplit[inputSplit.length - 1].split("(?=[A-Z])");
        for(int i =0 ; i <inputMethod.length ; i++){
            inputMethod[i] = inputMethod[i].toLowerCase();
        }
        if(inputSplit[1].equals("M")){
            auxMethod = inputMethod[inputMethod.length - 1 ].split("\\(");
            inputMethod[inputMethod.length-1] = auxMethod[0]; 
        };

        finalCase = String.join(" ",inputMethod);
        }
        else if (inputSplit[0].equals("C")) {
            inputMethod = inputSplit[2].split(" ");
            auxMethod = new String[inputMethod.length];
            for (int i = 0; i < inputMethod.length; i++) {
                if (!inputSplit[1].equals("C") && i == 0) {
                    auxMethod[i] = inputMethod[i];
                } else {
                    String firstLetter = inputMethod[i].substring(0, 1).toUpperCase();
                    String restWord = inputMethod[i].substring(1);
                    auxMethod[i] = firstLetter + restWord;}
                }
                if (inputSplit[1].equals("M")) {
                    auxMethod[inputMethod.length - 1] += "()";
                }
            finalCase = String.join("", auxMethod);
        }
        else {
            finalCase = "Invalid operation";
        }
        return finalCase;
    }
    
    public static void main (String[] args){
        if (args.length >= 1) {
            for (String input : args) {
                String result = camelCase(input);
                System.out.println(result);
            }
        String input = "S;M;plasticCup()";
        camelCase4(input);
    }
};
