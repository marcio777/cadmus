

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

