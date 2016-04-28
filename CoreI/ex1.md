```java
public class Ex1 {
  public static void main(String[] args) {
    System.out.println("Hello World");
    System.out.println("Hello Java");
    System.out.println("Hello, I am a programmer");
    System.out.println("Bonjour, je suis un programmeur");
    System.out.println("Saluton, mi estas programisto");
    System.out.println("Guten Tag, Hola, Ni Hao");
  }
}
```

### Explanation
1. Look at the curly brackets (`{` and `}`). There are 2 pairs of curly brackets in the code above. Notice that for each opening curly bracket (`{`), there is a corresponding closing curly bracket (`}`). The curly brackets represent code blocks and everything contained within them is part of that code block. That is why their contents are indented; indenting code is not necessary but makes code a lot easier to read and debug.

2. Forget about everything other than the innermost code block (lines 3 to 8) for the moment. The innermost code block contains lines that each begin with `System.out.println(` and end with `);`.

3. Inside the parentheses (`(` and `)`), there are speech marks, inside which is the text that is going to be printed out.

4. The speech marks tell the computer that what's enclosed in them is not computer code, but data that the programmer wants the computer code to manipulate/use. Pieces of textual data are called **strings**. They are, as pointed out, always enclosed by speech marks, to make clear that they are not computer code. They are also highlighted differently than the rest of the code.

5. `System.out.println` is a **method**. A method is just some computer code that does something. `System.out.println` is provided by the computer automatically. To use a method, one must write its name, `System.out.println` in this case, and put parentheses next to it, so `System.out.println()`. This tells the computer to run that method.

6. But some methods, such as `System.out.println` take pieces of data as inputs. The pieces of data are called **arguments**. `System.out.println` takes in one argument, and that argument is a string. As you've probably guessed, the job of `System.out.println` is to write to the terminal its argument.

7. Each line must end with `;`.
