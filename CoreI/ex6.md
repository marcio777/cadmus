```java
public class Ex6 {
  public static void main(String[] args) {
    System.out.println("First Argument is: " + args[0]);
    System.out.println("Second Argument is: " + args[1]);
    System.out.println("Third Argument is: " + args[2]);

    System.out.println("All together your arguments are: " + args[0] + " " + args[1] + " " + args[2]);

    System.out.println("The length of your first argument is " + args[0].length());
    System.out.println("The length of your second argument is " + args[1].length());
    System.out.println("The length of your third argument is " + args[2].length());
  }
}
```

### Explanation
In this exercise we use the `args` variable. The `args` variable which has been mentioned of line 2 of every program you have written is of type `String[]`. While `String` is just a string data type, `String[]` means an array of strings. An array is a list of values. In this case `args` refers to the everything passed after `java Ex6`. So if you pass in `java Ex6 hello there mr`, `"hello"` is the first argument, `"there"` the second, and `"mr"` the third. Arrays are zero-indexed. That means the first argument is accessed by doing `args[0]`, the second, `args[1]` and so on.

### Extension Programs
Write a program that takes in a name as `args[0]` e.g. Susan and prints out a greeting e.g. `"Hello Susan"`.
