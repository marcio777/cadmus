```java
public class Ex9 {
  public static void main(String[] args) {
    int alpha = 5;
    double beta = Math.pow(5, 2);
    System.out.println("5 to the power of 2 is " + beta);

    int gamma = 5.5;
    double delta = Math.pow(5.5, 2.2);
    System.out.println("5.5 to the power of 2 is " + delta);

    int epsilon = 10;
    int zeta = (int) Math.pow(5, 2);
    System.out.println("5 to the power of 2.2 is " + zeta);

    int eta = 4;
    double sqrt = Math.sqrt(4);
    System.out.println("The square root of 4 is " + sqrt);

    int theta = 5;
    sqrt = Math.sqrt(5);
    System.out.println("The square root of 5 is " + sqrt);
  }
}
```

### Explanation
1. In this exercise, we introduce the functions `Math.pow()` and `Math.sqrt()`. `Math.pow()` puts the first argument to the power of the second argument. It takes a double for both its arguments, hence why we can do `Math.pow(5.5, 2.2)`. It's fine to put integers as its arguments, since integers can be implicitly cast to doubles. `Math.pow()` and `Math.sqrt()` return doubles as well. 

2. If you want to store the values returned from `Math.pow()` and `Math.sqrt()` as integers, as in line 13, then you must explicitly cast it by putting `(int)` in front of double you want to cast to an int. The reason that doubles aren't implicitly cast to integers is because doubles are more precise.

### Extension Programs
1. Given that momentum = mass * (velocity to the power of 2), write a program to calculate momentum given mass and velocity. You will need to input mass and velocity (hence use `args`).

2. Write a program to calculate BMI (Body Mass Index) using the formula: BMI = mass / (height to the power of 2). You will need to input mass and height.
