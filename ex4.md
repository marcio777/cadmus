```java
public class Ex4 {
  public static void main(String[] args) {
    int boys = 400;
    int girls = 600;
    int students = boys + girls;
    int teachers = 10;
    int total_school_buses = 15;
    int broken_school_buses = 6;
    int working_school_buses = total_school_buses - broken_school_buses;
    int max_bus_capacity = 100;

    System.out.println("There are " + boys + " boys in Learnalott School");
    System.out.println("There are " + girls + "girls in Learnalott School");
    System.out.println("In total there are " + students + "in Learnalott School");
    System.out.println("There are " + (students/teachers) + " students per teacher.");
    System.out.println("There are total of " + total_school_buses + " school buses.");
    System.out.println("However only " + working_school_buses + " buses work.");
    System.out.println("This means the total school bus capacity is " + (max_bus_capacity * working_school_buses) + ".");
  }
}
```
