While loops
==

```java
public class WhileLoops {
  public static void main(String[] args) {
    // A different way of looping
    int i = 1;
    while(i < 11) {
      System.out.println(i);
      i++;
    }
    System.out.println("End: " + i);

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
1. In this exercise, we introduce `while` loops, which are another kind of loop. They are like for loops, but they only have one condition that has to be met, and no initialisation or increment. That is why variables used in the condition are defined beforehand.
2. Like for loops, the while loop continues until the condition specified in parentheses is no longer met.
3. The first while loop repeats itself until `i` equals 11, whereas the second while loop repeats itself, until `i` is divisible by 5.
4. In the third while loop, `i` is decremented. It continues to run, until `i` becomes 0.
5. While loops are always in the form:
```
while(CONDITION) {
    BODY;
}
```

### Exercises
1. Write a program, `Ex11B` to produce the following sequence: `1 -2 4 -8 16 -32`, stopping once it gets to 2000.

2. Write a program, `Ex11C` that produces the following sequence: `1 3 6 10 15 21 28 36`. Hint: Use a counter to store the last number you've printed out, and think about what number to start at.

3. Write a program `Ex11D` that prints out all the multiples of 9 between 0 and 108.

4. Write a program `Ex11E` that prints the sum of all the multiples of 9 between 0 and 108. 