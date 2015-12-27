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

### Extension Programs
1. Rewrite `Ex7` as `Ex8B` but using `Double.parseDouble` and storing mass and acceleration as floating point numbers.
2. Write a program called `Ex8C` using floating point numbers to convert from fahrenheit to celsius
