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

### Explanation
A variable allows you to store a value in the computer's memory and retrieve it by an identifier e.g. `boys` or `girls` in our code. Variable must start with a letter and can contain underscores and numbers. E.g. `boys_1` is a valid identifier but `1boys` is not because it starts with a number. Variable names can also not contain spaces.

In lines 3 to 10 we declare 7 variables, all of which are integers. Variable declarations begin with the data type, here `int` (for integer) then the variable identifier (e.g. `boys`). If you wish to give the variable a value straight away you can put ` = ` and then what you want it to equal.

You can also declare and set a variable on different lines e.g.:
```java
int boys;
boys = 400;
```

To use a variable just use it in the place of the value it refers to.

Variables can be changed once they're defined, however they're data type can not change. This is not valid code:
```java
String name = "Billy";
name = 5;
```
