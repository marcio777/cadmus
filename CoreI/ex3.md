```java
public class Ex3 {
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
    System.out.println("This isn't going to make sense: " + (30/8));
    // Before running the program think about what the last line should print
  }
}
```

### Explanation
1. In line 4, you will notice that unlike in the previous exercises where only strings were printed out, here a number was printed out. To be precise, an integer was printed out. An integer, like a string, is an example of a **data type** in Java. Whereas strings need to be surrounded by speech marks, integers do not. It is important to note that numbers or rather numeric characters (e.g. 1,2,3,4,5,6,7,8,9,0) can be written inside of strings as in line 13, but unlike integers that are outside of strings they cannot be added, subtracted, etc. Instead, Java treats them the same as letters and other symbols. It is essential that you understand that `13` is different from `"13"`, as while `13 + 13` will result in `26`, `"13" + "13"` will result in `"1313"`.
2. As you can see from line 10, integers in Java can be added, subtracted, multiplied and divided. The symbol for multiplication is `*` and division is `/`. In Java this follows the same rules as maths, i.e. BIDMAS (Brackets, Indices, Division, Multiplication, Addition, Subtraction). So `2 + 3 * 5` will be treated as `2 + (3 * 5)` not `(2 + 3) * 5`. A symbol you might not be familiar with is in line 23: `%`, the modulo operator. The modulo operator calculates the remainder when a number is divided by another number. So `8 % 5` is `3` as the remainder of `8/5` is 3. You can also use parentheses/brackets to make calculations clearer.
3. It is important that you recognise that while `System.out.println(3229 - 234234)` makes sense, `System.out.println(3229) - 234234` does not.  `System.out.println(3229) - 234234` makes no sense as you're saying to print `3229` and then subtract 234234 from whatever `System.out.println(3229)` equals. However, `System.out.println(3229)` is a method and doesn't equal a value or rather **return** any value, so you are trying to subtract 234234 from nothing.
4. In line 16 you can see that you can add, or rather **concatenate**, a string and an integer by using the `+` **operator**. For example, `"aaa" + 5` becomes `"aaa5"`.
5. In line 17, in the expression `"How tall am I in cm?" + (2*100)`, `(2 * 100)` is first simplified to `200` and then concatenated with `"How tall am I in cm? "`. Although technically you don't need to put parentheses, as `*` has a higher precedence in BIDMAS than `+`.
