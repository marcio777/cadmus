Arithmetic
===

Write out the following code fully (do not copy and paste!) and run it to inspect what it does.

```java
public class Numbers {
  public static void main(String[] args) {
    // Look, numbers!!!
    System.out.println(2);
    System.out.println(5034);

    // Look, arithmetic!!!
    System.out.println("How old am I?");
    System.out.println(5 + 20);

    // Look, negative numbers!!!
    System.out.println("What is 3229 minus 234234?");
    System.out.println(3229 - 234234);

    // We can also have numbers and strings on the same line
    System.out.println("How tall am I in m? " + 2);
    System.out.println("How tall am I in cm? " + (2*100));
    System.out.println("How many eggs do I own? " + 36);
    System.out.println("How many dozens of eggs do I own? " + (36/12));

    // Remainders and division fun
    System.out.println("What is the remainder of 6 divided by 5? " + (6 % 5));
  }
}
```

### Explanation
1. As you can see integers in Java can be added, subtracted, multiplied and divided. The symbol for multiplication is `*` and division is `/`. In Java this follows the same rules as maths, i.e. BIDMAS (Brackets, Indices, Division, Multiplication, Addition, Subtraction). So `2 + 3 * 5` will be treated as `2 + (3 * 5)` not `(2 + 3) * 5`. A symbol you might not be familiar with is in line 22: `%`, the modulo operator. The modulo operator calculates the remainder when a number is divided by another number. So `6 % 5` is `1` as the remainder of `6/5` is `1`. You can also use parentheses/brackets to make calculations clearer.

2. It is important that you recognise that while `System.out.println(3229 - 234234)` makes sense, `System.out.println(3229) - 234234` does not.  `System.out.println(3229) - 234234` makes no sense as you're saying print `3229` and then subtract `234234` from whatever `System.out.println(3229)` equals. However, `System.out.println(3229)` isn't a number and doesn't equal a value, so you are trying to subtract `234234` from nothing.

3. In line 16 you can see that you can add, or rather **concatenate**, a string and an integer by using the `+` **operator**. For example, `"aaa" + 5` becomes `"aaa5"`.

4. In line 17, in the expression `"How tall am I in cm?" + (2*100)`, `(2*100)` is first simplified to `200` and then concatenated with `"How tall am I in cm? "`. Although technically you don't need to put parentheses, as `*` has a higher precedence in BIDMAS than `+`.

### Exercises
1. Write a program to work out what the power in watts of a device is if the voltage is 10V and the current is 6A, and print the result.
Hint: Power (W) = Current * Voltage

2. Write a program to work out the kinetic energy of an object with a mass of 500kg that has a velocity of 12m/s, and print the result.
Hint: Kinetic Energy = 0.5 \* Mass \* (Velocity)<sup>2</sup>

3. Write a program to answer the following physics question and print the result.  If a car has a mass of 800 kg and moves with a velocity of 25 m/s, what force is needed to stop the car in 50 metres?
Hint: You will need the equation Energy = Force * Distance and the previous exercise.

4. Write a program to work out the missing angle of a triangle which has two known angles of 108 degrees and 24 degrees.
Hint: The angles of a triangle must sum to 180 degrees.

5. Write a program in which you work out the percentage efficiency of a light bulb that is supplied with 50J (Joules) of energy, and uses 2J to produce light, leaving 48J wasted as thermal energy. Then, print the result.
Hint: percentage efficiency = (useful power)/(total power).
