```java
public class Ex8 {
  public static void main(String[] args) {
    int a = 10;
    int b = 3;
    System.out.println(a/b);

    double c = 10;
    double d = 3;
    System.out.println(c/d);

    double g = 4.5;
    double h = 9.7;
    System.out.println("4.5 + 9.7 = " + (g + h));

    System.out.println("10 divided by 3 = " + (10/3));
    System.out.println("5.5 divided by 0.54 = " + (5.5/0.54));

    System.out.println("10 divided by 3 = " + (10/3));
    System.out.println("10 divided by 3 = " + (10.0/3));
    System.out.println("10 divided by 3 = " + (10/3.0));
    System.out.println("10 divided by 3 = " + (10.0/3.0));
  }
}
```
### Explanation
1. In this program the `double` data type is introduced. The `double` data type lets you use and manipulate floating-point numbers (i.e. decimals). In Java, if you divide two integers, Java will always round downwards, as in line 18. 

2. If you divide a floating-point number by an integer (as in line 19), or an integer by a floating-point number (as in line 20), or a floating-point number by another floating-point number (as in line 21), then you get a floating-point number, and Java will not round. Java treats any number with a decimal point as a floating-point number, even if it is just `.0`, that is why `10.0/3` will give `3.333...` but `10/3` will just give `3`.

3.  However, if you assign an integer e.g. `10` to a variable that has a `double` as a data type, then it will be implicitly converted to a `double`. This is shown in lines 7 and 8.

### Extension Programs
1. Rewrite the program in `Ex7` as `Ex8B`, but using `Double.parseDouble()` and storing mass and acceleration as floating point numbers.

2. Write a program called `Ex8C` using floating point numbers to convert from fahrenheit to celsius.
