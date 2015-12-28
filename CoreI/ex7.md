```java
public class Ex7 {
  public static void main(String[] args) {
    String firstArg = args[0];
    String secondArg = args[1];
    int mass = Integer.parseInt(firstArg);
    int acceleration = Integer.parseInt(secondArg);
    int force = mass * acceleration;
    System.out.println("Force = " + force);
  }
}
```

### Explanation
The only thing new in this program, is the function `Integer.parseInt()`. `Integer.parseInt()` takes a single string variable and returns it as an integer. So it converts from strings to integers, essentially. This is useful as it lets you manipulate them mathematically. So if you pass in `"1234"` as its first argument, it will return `1234`.

### Extension Programs
1. Write a program `Ex7B`, that calculates the power (measured in Watts) of an electrical device, given that Power = Current (in Amps) * Voltage (in Volts).

### Bonus Exercises
1. Simplify the code for `Ex7` by removing `firstArg` and `secondArg` and instead using `args[0]` and `args[1]` directly in `Integer.parseInt()`
