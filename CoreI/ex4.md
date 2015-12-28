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
    System.out.println("There are " + girls + " girls in Learnalott School");
    System.out.println("In total there are " + students + " students in Learnalott School");
    System.out.println("There are " + (students/teachers) + " students per teacher.");
    System.out.println("There are total of " + total_school_buses + " school buses.");
    System.out.println("However, only " + working_school_buses + " buses work.");
    System.out.println("This means that the total school bus capacity is " + (max_bus_capacity * working_school_buses) + ".");
  }
}
```

### Explanation
1. In lines 3 to 10, 8 variables are declared, all of which are integers. A variable allows you to store a value in the computer's memory and retrieve it with its identifier e.g. `boys` or `girls` in our code. 
2. When creating a variable, one must begin with the data type, here `int` (for integer). The data type is when you, unsurprisingly, set the type of data which this variable will hold. Then, the variable identifier (e.g. `boys`) must be stated. Variable identifiers must start with a letter and can contain underscores and numbers, e.g. `boys_1` is a valid identifier but `1boys` is not, because it starts with a number. Variable names cannot contain spaces.
3. If you wish to give the variable a value straight away you can put ` = ` and then what you want it to equal. However, you can just leave a variable without a starting value, and then give it a value later, as shown below:

        int boys;
        boys = 400;
        
4. To use a variable just call it in the place of the value it refers to, for example on line 12, the variable `boys` was used in place of the number `400` which it represents.
5. The contents of variables can be changed once the variables have been defined, however their data types can not change. This is not valid code:

        String name = "Billy";
        name = 5;

6. Finally, some terminology. **Variable declaration** is when you state the data type and identifier. **Variable initialisation** is when you give the variable a value **for the first time**. **Variable assignment** is when the variable is given a new value, replacing the old value.
