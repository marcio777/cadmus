Arrays
===

## Declaring Arrays
An array is a list of variables, and arrays must be of a type. That is to say you cannot have an array that contains some integers, next to some strings, next to some booleans. To declare an array in Java you use:

```java
int[] myArray;
```

Notice the square bracket notation. It tells the computer that `myArray` isn't an integer, but a list of integers. You must also initialise arrays.

### When you don't know what you want inside

```java
myArray = new int[10];
//this sets the array's length to be 10 without any values
```

### When you do know what you want inside

```java
myArray = {10, 523, 34, 63, 32, 64, 992, 353, 5, 0};
```

Both ways create arrays of type Integer that have a size of 10. The second way however, initialises the array with values. Arrays must have sizes. You cannot fill the array past said sizes. In the second way, Java assumes the size to be the number of values the array is set to.

Finally, arrays can be declared and initialised together:

```java
bool[] myArray = new bool[10];
String[] girlfriends = {"Jessica", "Abbey", "Zoey", "Daisy"};
//yes, Agent X has that many girlfriends at once
```

### Ex 1
Create an array containing consisting of all your (real or imaginery) boyfriends/girlfriends.

## Accessing Arrays
You access arrays in Java using square bracket notation. For instance:

```java
int[] myArray = {5, 6, 7, 8};
System.out.println(myArray[0]); // Prints 5
System.out.println(myArray[1]); // Prints 6
System.out.println(myArray[2]); // Prints 7
System.out.println(myArray[3]); // Prints 8
```

Notice how the index `0` in the square brackets corresponds to the first item; how the index `1` corresponds to the second item etc. This is because programmers count from 0, because we are **non-conformists**. That is to say we are against the *status quo* (which is Latin for 'the way things are' - yes I am a show-off).

## Settings Arrays
Arrays can be set in a similar manner:

```java
String[] days = new String[10];
days[0] = "Monday";
days[1] = "Tuesday";
days[2] = "Wednesday";
days[3] = "Thursday";
days[4] = "Friday";
days[5] = "Saturday";
days[6] = "Sunday";
```

## Printing an entire Array
Sometimes, for the sake of debugging, you will want to print an entire array. In the `java.util.Arrays` package, that you will have to import, there is a function called `Arrays.toString()`, that takes an Array and outputs a string representation. For example:

```java
String[] primaryColours = {"Red", "Green", "Blue"};
System.out.println(Arrays.toString(primaryColours));
// Prints: ["Red", "Green", "Blue"]
```

## Length of an array
Unlike strings where there is the `.length()` method, for arrays there is the `.length` property. E.g.:

```java
String[] primaryColours = {"Red", "Green", "Blue"};
System.out.println("There are " + primaryColours.length + " primary colours.");
// Prints: There are 3 primary colours.
```

[I'm feeling a bit loopy &rarr;](./Part-VI:-Loops.html)
