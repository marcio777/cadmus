```java
public class Ex2 {
  public static void main(String[] args) {
    // This is a comment
    // It is ignored by the computer
    System.out.println("Hello World"); // This line prints out Hello World
    /* As you can see comments can be used to document what you are doing
       Comments can come after an actual line of code
       You don't need a semi-colon after a comment */

    // Comments are also useful when you don't want
    // to run a particular line of code:
    // System.out.println("Hello World");
    // The computer will ignore the comment and not run the code

    System.out.println("Hello \n Hello");
    // Notice the backslash n in the last line
    // I wonder what it does?

    System.out.println("\t Hello");
    // Notice the backslash t in the last line
    // I wonder what it does?
  }
}
```

### What you should get as output
--- IMAGE HERE ---

### Explanation
1. As before there are two code blocks, both made clear by curly brackets, and one inside of the other. As you can hopefully tell, the innermost code block here is from line 3 to line 21. You might have noticed at the beginning rather than saying `public class Ex1` it now says `public class Ex2`. For now just think of a class as a way to organise code, and in Java the name of the class matches the name of the file.
2. The code is very much like the last exercise, however, there are bits of code that begin with `//`. Anything after `//` up to the end of a line is called a comment. Comments are not computer code and they are ignored by the computer. They serve two purposes as explained in the comments of `Ex2.java`: they can be used to document lines of code and they can be used to "comment out" lines of code that you don't want to run (i.e. to see what happens if they don't run).
3. Notice the comments from line 6 to line 8. They are called **multi-line comments**. They work, in some ways, like code blocks, with `/*` and `*/` substituting for `{` and `}`. In other words, once `/*` is written, anything under that code will become a comment, until the `*/` which closes the comment. Multi-line comments work in exactly the same way as normal comments, they just mean that less time is wasted by the programmer typing `//` at the start of every line that is to be commented.
4. In addition you will have seen the `\n` and `\t` in the strings. `\n` is called a new line character and basically means "start a new line here". It is how computers store line breaks; with new line characters. `\n` is an example of an escape code. Escape codes are ways of representing characters such as new line characters and tab characters in strings, by using a backslash (`\`) and the appropriate letter. `\t` as you might have guessed means tab character. What if you just want to write a backslash, then write `\\`. Two backslashes? `\\\\`. You get the idea?
