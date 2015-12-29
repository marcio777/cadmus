```java
public class Ex5 {
  public static void main(String[] args) {
    String library_card_id = "4KFSD4HFFD433";
    System.out.println("My library card id is " + library_card_id);

    String book = "Harry Potter";
    String book_author = "J. K. Rowling";
    System.out.println("My favourite book is " + book + " by " + book_author);

    System.out.println("My library card id has a length of " + library_card_id.length());
    System.out.println("'Harry Potter' has " + book.length() + " characters in it.");

    String post_code = "CW3400E";
    int post_code_length = post_code.length();
    System.out.println("My Post Code is " + post_code + " and it is " + post_code_length + " characters long.");
  }
}
```

### Explanation
1. In this exercise, there are variables which use the data type of `String`, not just the data type `int`. The reason `String` is spelt with a capital "S", and `int` with a lowercase "i" is a matter I shall attend to later.

2. One thing you haven't seen before, is `.length()`. `.length()` is a method that every string has. It is a method that **returns** the length of the string. So far we have only met methods which perform an action, but these methods return a value; the returned value is their **output**. `.length()` returns the length of a string as an integer. Note that all strings have the `.length()` method, not just those assigned to a variable. So you could equally write `"CW3400E".length()` and get the same result as `post_code.length()`.
