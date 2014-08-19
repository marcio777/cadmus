Static Methods
===

## Creating and using your own methods
A method is another word for a function. A method performs a task, so if you want to triple a number, you may want to have a triple method. The `main` method is an example of a method that is **void** i.e. it returns nothing. That's why it has the `void` keyword before the method name. Methods should be defined in a class, e.g:

```java
public static int triple(int number) {
	int tripleNumber = 3 * number;
	return tripleNumber;
}
```

After `public static` you write the type of the thing that you are returning; in this case we are taking in an int and returning an int. If of course it returns nothing, use the `void` keyword.  After the return type you have the name of the method. I have called this method triple. It's always best to start the method name with a lower case letter and name it something similar to what it does. Inside the brackets after the method name you have the parameters, which are the pieces of information that the method is given when it is called.  So, when we call the triple function we supply it with a number, which is then multiplied by three and the tripled number is returned.

Note: `Math.abs()`, and `Math.sqrt()` (which you met in the last part) are examples of methods in the `Math` package. Inside the `Math` package, there are also trigonometric functions such as `Math.sin()`, `Math.cos()`, and `Math.tan()`.

### Ex 1
Write a program which contains a method called triple (and the main method of course), which triples a number.  Get the program to triple the number 34 and then print out the result.

### Ex 2
Write a method, that given a name, returns a Hello World-style greeting. For instance if I called it with `George`, it would respond with: `Hello George!`.

## String methods
I've told you previously that `String` is a class, not a primitive. Classes can have their own methods attached to them.

### Length
The `.length()` method returns the length of a string as an `int`. Unlike in a JavaScript string, `.length()` is a method, that must be called with parentheses.

```java
String name = "George";
System.out.println(name.length()); // Prints 6
```

### Trim
The `.trim()` method that returns a copy of the string without whitespace (spaces at the front or end of a string), e.g:

```java
String name = "     George";
System.out.println(name.trim()); 
// Prints "George" with no spaces
```

### Upper Case, Lower Case
There are also the `.toUpperCase()`, and `.toLowerCase()` methods, return an uppercase copy and lowercase copy of the original string respectively, e.g:

```java
String name = "George";
System.out.println(name.toUpperCase()); // Returns "GEORGE"
System.out.println(name.toLowerCase()); // Returns "george"
```

### Equals
This takes in another string, and returns true/false depending on whether they are equal. Note `.equals()` is case sensitive. You can use this in if-statements:

```java
String personA = "George";
String personB = "George";
if(personA.equals(personB)) {
	System.out.println("They're the same person!");
}
```

You should be feeling a profound sense of deja vu here because you've been using this for every piece of code you have written. 

[Time to look at some arrays (fancy lists) &rarr;](./Part VI: Arrays.html)
