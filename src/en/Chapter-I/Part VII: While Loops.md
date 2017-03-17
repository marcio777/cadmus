While loops
==

```java
public class WhileLoops {
  public static void main(String[] args) {
    // A different type of loop
    int i = 1;
    while(i < 11) {
      System.out.println(i);
      i++;
    }
    System.out.println("End: " + i);

    // The condition can be anything
    i = 1;
    while(i % 5 != 0) {
      System.out.println(i);
      i++;
    }
    System.out.println("End: " + i);

    i = 10;
    while(i > 0) {
      System.out.println(i);
      i--;
    }
    System.out.println("End: " + i);
  }
}
```

### Explanation
1. In this exercise, we introduce `while` loops, which are another kind of loop. They are like `for` loops, but they only have one condition that has to be met, and no initialisation or increment. That is why variables used in the condition are defined beforehand.

2. Like `for` loops, the `while` loops continue until the condition specified in parentheses is no longer met.

3. The first `while` loop repeats until `i` equals `11`, whereas the second `while` loop repeats until `i` is divisible by 5.

4. In the third `while` loop, `i` is decremented. It continues to run until `i` becomes `0`.

5. `While` loops are always in the form:
```
while(CONDITION) {
    BODY;
}
```

6. Note: You must remember to change `i` when you code a `while` loop. Imagine line 7 were omitted - the value of `i` would never change and the `while` loop's condition would always be true. This would create an `infinite while loop`, and for now must be avoided.

### Exercises

##### Note: These are the same exercises as in Part VI, but using `while` loops.

1. Write a program, `Ex7B`, that uses a `while` loop to produce the following sequence: `1 -2 4 -8 16 -32`, stopping once it gets to 2000.

2. Write a program, `Ex7C` that uses a `while` loop to produce the following sequence: `1 3 6 10 15 21 28 36`. Hint: Use a counter to store the last number you've printed out, and think about what number to start at.

3. Write a program, `Ex7D`, that prints out all the multiples of 9 between 0 and 108.

4. Write a program, `Ex7E`, that prints out the sum of all the multiples of 9 between 0 and 108. 
