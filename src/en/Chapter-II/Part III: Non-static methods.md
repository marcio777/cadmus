Non-static methods
===
To define a non-static method, you have to - bet you can't guess - remove the `static` keyword. You can call non-static methods inside the main method like so:

i) First, instantiate the class (for example if the class were called `Task`):

```java
Task myNewObject = new Task();
```

ii)	Then, call the method on the object like so:

```java
myNewObject.methodName();
```

Note that in order to call a method on an object, all you really need to do is put a dot after the object name, followed by the method name and parameter list. 

### Ex 1
Write a non-static method called quintuple (and the main method of course), which quintuples a number.  Get the program to triple the number 34 and then print out the result.

### Ex 2
Write a non-static method, which returns a Hello World-style greeting. For instance if I called it with `George`, it would respond with: `Hello George!`.

## String methods
I've told you previously that `String` is a class, not a primitive. Therefore it can, and does, have its own non-static methods.

### Length
The `.length()` method returns the length of a string as an `int`. Unlike (if you know JavaScript) in a JavaScript  string, `.length()` is a method, that must be called with parentheses.

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

