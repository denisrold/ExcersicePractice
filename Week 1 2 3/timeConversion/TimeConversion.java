
public class TimeConversion {

    public static String timeConversion(String s){
       String[] time = s.substring(0,8).split(":"); 
       int minutes = Integer.parseInt(time[1]);
       int seconds = Integer.parseInt(time[2]);
       int hours = Integer.parseInt(time[0]);
       

       String PM = s.substring(s.length() - 2);
       if(PM.equals("PM") & hours != 12){
        hours += 12;
       }
       else if (!PM.equals("PM") & hours == 12){
        hours = 0;
       };
       
        String formatHour = String.format("%02d",hours);
        String formatMinutes = String.format("%02d",minutes);
        String formatSeconds = String.format("%02d",seconds);

       return formatHour +":"+ formatMinutes+":"+ formatSeconds;
    }

    public static void main (String[] args) {
        String times = "07:05:15PM";
        System.out.println(timeConversion(times));
    }
}
