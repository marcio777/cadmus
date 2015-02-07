Variable methods
===

## String methods
I've told you previously that `String` is a class, not a primitive. Therefore it can, and does, have its own non-static methods.

### length
The `.length()` method returns the length of a string as an `int`. Unlike (if you know JavaScript) in a JavaScript  string, `.length()` is a method, that must be called with parentheses.

```java
String name = "George";
System.out.println(name.length()); // Prints 6
```

### toUpperCase, toLowerCase
There are also the `.toUpperCase()`, and `.toLowerCase()` methods, return an uppercase copy and lowercase copy of the original string respectively, e.g:

```java
String name = "George";
System.out.println(name.toUpperCase()); // Returns "GEORGE"
System.out.println(name.toLowerCase()); // Returns "george"
```

### equals
This takes in another string, and returns true/false depending on whether they are equal. Note `.equals()` is case sensitive. You can use this in if-statements:

```java
String personA = "George";
String personB = "George";
if(personA.equals(personB)) {
	System.out.println("They're the same person!");
}
```

### substring
This takes the string you give it and two index numbers, and returns the chars in between them, excluding the value at the final index. 

```java
String a = "last";
System.out.println(a.substring(0,1));
//prints out "l"
```

As a note, you can also use substring where you only input one index and the string keeps everything after and including the value of that index.

### indexOf
This method searches a string for another string and returns the position at which it starts. If the string cannot be found, -1 is returned. 

```java
String needle = "world";
String haystack = "hello world";
System.out.println(haystack.indexOf(needle)); // Prints 6
```

This is because `world` starts at the 7th character in `hello world`, and programmers count from zero, ergo 0 will refer to the 1st character, as 6 will refer to the 7th character. 

N.B. There are many many many more of these methods and I would advise looking them up if you need them.

## Integer methods
Now, if you care to remember, I once told you that integers are primitive variables. Therefore, theoretically, I shouldn't be able to assign methods to them. But, Java is case-sensitive and these are **Integers** which are class variables. I told you that variable types with a capital are usually burdens, but it is perfectly accceptable to use their non-static methods i.e. `Integer.parseInt()` etc, because they do not actually involve instantiating those classes. 

### toString
You can convert an integer, or a boolean, or a double, to a string, by using `Integer.toString()`, or its equivalent:

```java
int age = 13;
double pi = 3.14159265359;
Boolean bool = true;
String ageAsString = Integer.toString(age);
//Prints out "13"
String piAsString = Double.toString(pi);
//Prints out "3.14159265359"
String  boolAsString = Boolean.toString(bool);
//Prints out "true"
```

### parseInt
You can convert a string to an integer by using `Integer.parseInt()`:

```java
String ageAsString = "13";
int age = Integer.parseInt(ageAsString);
//Prints out 13
```

## Boolean methods
Booleans work the same as integers, and the `toString()` method was shown above. But there is a method that turns a String into a boolean `.parseBoolean()`:

```java
String aliveAsString = "true";
alive = Boolean.parseBoolean(aliveAsString);
//Prints out true
```

## Double methods
Doubles have three major methods, one of which has been shown i.e. the `toString()` method. There is also the `parseDouble()` method, which I'm not going to even show because you know what it means. The third major one that Oracle itself lists is the `isNaN()` method. I do not agree that it is exclusively a double method however, because `isNaN()` stands for 'is not a number'. So, this could apply to integers as well. This outputs true if the input is not a number, and false otherwise:

```java
String d = "3.1232";
double myDouble = Double.parseDouble(d);
System.out.println(myDouble.isNaN());
//outputs false
```

This converts `d` into a double and then checks if it is a number. However, if d was "hrglbrgl", then it would output true.

[How to use the outputs of methods &rarr;](./Part-IV:-Returning-values.html)
