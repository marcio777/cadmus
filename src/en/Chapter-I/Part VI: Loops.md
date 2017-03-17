For Loops
===

```java
public class ForLoops {
  public static void main(String[] args) {
    // Loop from 0 to 9, incrementing by 1 each time
    for(int i = 0; i < 10; i++) {
      System.out.println(i);
    }

    // You can increment by more than 1
    for(int i = 0; i < 10; i += 2) {
      System.out.println(i);
    }

    // You can decrement too
    for(int i = 10; i > 0; i--) {
      System.out.println(i);
    }

    // You can decrement by more than 1
    for(int i = 10; i > 0; i -= 2) {
      System.out.println(i);
    }

    // Your increment can be a multiplier
    for(int i = 1; i < 257; i *= 2) {
      System.out.println(i);
    }

    // Or your increment can be a divisor
    for(int i = 1024; i > 0; i /= 2) {
      System.out.println(i);
    }
  }
}
```

### Explanation
1. In this exercise, we introduce `for` loops, structures used to repeat code a certain number of times. `For` loops consist of several parts, in the form:

  ```java
for(INITIALISATION; CONDITION; INCREMENT) {
    BODY
}
  ```

2. Loops in general are very important to programmers as they allow us to do complicated, long-winded calculations in a short amount of time and using fewer lines of code. `For` loops are mostly used for counting up or down in steps, usually in steps of 1. There are 3 parts to any `for` loop: initialisation, condition and increment.
  
3. Remember `++` means add `1`, and `--` means subtract `1`. Similarly remember `+= n` means add `n` and `-= n` means subtract `n`. If we wanted to, we could write `i = i + 1` rather than `i++`, but that would be more tedious.

3. The `BODY` is the code that is going to be repeated. The `INITIALISATION` where you declare the variable that will be increased or decreased; in most cases programmers use `i` and it is declared as an integer. The `CONDITION` is what must remain true at the end of each iteration of the `BODY` for the `for` loop to continue. The `INCREMENT` is what happens after each iteration of the `BODY` of the `for` loop.

4. So, for the first for loop, `i` is initialised to `0` and the condition `i < 10` is checked. Since that is true, the body is run. Then the increment runs, which increases `i` by 1, and the condition is checked. 1 is still less than 10, so the body is run again. This continues until `i` is incremented to `10`, after which the loop stops. Therefore the loop goes from `0` (inclusive) to `9` (inclusive).
 
5. The increment doesn't have to just be increasing `i` by 1, as is shown in the code above. In the third `for` loop, `i` starts at 10 and then decreases until it is 0. In the fifth `for` loop, `i` is multiplied by 2 every time the code runs, until it is greater than 256.

### Exercises
1. Write a program, `Ex6B`, that uses a `for` loop to produce the following sequence: `1 -2 4 -8 16 -32`, stopping once it gets to 2000.

2. Write a program, `Ex6C`, that uses a `for` loop to produce the following sequence: `1 3 6 10 15 21 28 36`. Hint: Use a counter to store the last number you've printed out, and think about what number to start at.

3. Write a program, `Ex6D`, that prints out all the multiples of 9 between 0 and 108. Hint: `x` is a multiple of 9 if `x % 9 == 0`.

4. Write a program, `Ex6E`, that prints out the sum of all the multiples of 9 between 0 and 108. Hint: You will need to use `+=`.

[Phew, I'm glad that's over; oh, there's more &rarr;](../Chapter-I/Part-VII:-While-Loops.html)
