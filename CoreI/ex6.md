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
1. In this exercise we use the `args` variable. The `args` variable which has been mentioned of line 2 of every program you have written is of type `String[]`. While `String` is just a string data type, `String[]` means an array of strings. 

2. An array is a list of values of a certain data type. So, if you wanted a list of words, you need the data type of `String[]`; a list of integer requires `int[]`, etc. An array can only have values of its data type, i.e. you cannot have an integer as a value in an array of strings. Arrays are **zero-indexed**. This means that the first value in the list will be of position 0, not position 1; the second value will be of position 1; the third value will be of position 2, etc. A value's position is called its **index**. Therefore, to access the first value in an array of names with the identifier `names`, you would need `names[0]`. `args` is the identifier of the string array we are using.

3. In this case `args` refers to the everything passed after `java Ex6`. **This is done after compilation.** So, if you pass into the console `java Ex6 hello there mr`, `"hello"` is the first argument, `"there"` the second, and `"mr"` the third. Since arrays are zero-indexed, the first argument is accessed by doing `args[0]`, the second, `args[1]` and so on.

### Extension Programs
Write a program that takes in a name as `args[0]` e.g. Susan and prints out a greeting e.g. `"Hello Susan"`.
