Variables
===

A variable is a piece of information or a value that can be changed. A variable always has a name known as a **variable identifier**, which acts a reference to the piece of information it holds. The variable identifier must not contain any spaces. For instance `my_variable` is a valid variable name, whereas `my variable` is not. A variable must also have a data type, that it is defined as. Once a variable is defined, it can be assigned a value. Data types include integers, strings, booleans, etc.

## Data types

### Strings
A string is a series of characters. To define a string called `name` do:

```java
String name;
```

Once `name` is defined, you can assign it to a value:

```java
name = "George";
```

If you want, you can define it and initialise it in a single line:

```java
String name = "George";
```

And to print it out:

```java
System.out.println(name);
```

If you want to display two lines worth of text, for example in a JPanel (which you will discover in a long time), or even in the console, you can use this:

```java
System.out.println(name + "\n" + name);
```

### Integers
An integer is a whole number. Integers are stored as the data type `int`. To define an Integer with variable identifier `age` do:

```java
int age = 15;
```

You can increment and decrement variables by one, by using unary operators, that is to say operators that take one value:

```java
age++; // Age now equals 14
age--; // Age is back to 13
```

Binary operators like `+`, `-`, `/` and `*` take two int values.

You will learn how to convert between variables at a later point.

### Real numbers
While an integer is a whole number, a real number has a decimal point in it. To use a real number in Java, use the `double` data type:

```java
double pi = 3.14159265359;
```

You can convert a double into a String, and you will find out how to do that later. That is possible because the method simply sets it to be a piece of text. However, what if you wanted to convert a double into an integer? You will be finding out how to do that using `Integer.parseInt()` in Chapter II, but doing so here will make Java have a fit - it can't understand an integer with a decimal point. To convert it you would use something called "casting". This is the only time I will mention it, so listen carefully. Casting is very easy - all you have to do is write what you want to cast it to in brackets before the actual value. In other words, to turn pi into an int you would do the following:

```java
int pi = (int) (Math.random());
//'pi' is now a random integer
```

N.B. **DO NOT USE MATH.RANDOM(), YOU WILL FIND A BETTER OPTION IN ONE OF THE EXERCISES IN THE NEXT CHAPTER. I AM SIMPLY USING IT FOR DEMOSTRATORY PURPOSES.**

This can work with other things as well, and may serve as a faster way to convert between variable formats.

### Booleans
A boolean is a variable that has two possible values - `true` or `false`. That's it:

```java
boolean myBoolean = true;
```

### Chars
A cahr is defined as a single letter of a String. So, `"Hello"` is a String but the char at index 0 is `H`. Chars are declared as follows:

```java
char myChar = 'h';
```

Bear in mind that when declaring chars, you must use quotation marks, not speech marks.

#### Ex 1
Write a program in which you initialise an int, a double, a char, a boolean and a String to suitable values of you choice, then get the program to print out the values of each variable on a new line. So if the int is equal to 4, the first line to be printed would be:
`The value of the int is 4`.

## Primitives versus Classes
You may have picked up on the fact that `String` is capitalised, while `int`, `double` and `boolean` are not. This is because `int`, `double` and `boolean` are all **primitive data types**, while  `String` is a **class data type**. These may not mean anything to you yet, but in essence there are 8 built-in primitives within Java. Primitives cannot be added or removed by the programmer; they are the DNA of the programming language. Primitives represent one scalar value. Classes are far more powerful than primitives. They shift the power to the programmer, allowing the programmer to create classes, which are composed from other datatypes. Java comes with a bunch of classes built in, namely `String`.

But what about `Integer`, `Double`, and `Boolean` etc.? These are indeed classes, that wrap around their respective primitives. So the following would be perfectly valid:

```java
Integer age = 13;
Double pi = 3.14;
Boolean alive = false;
```

However using these instead of primitives has an unnecessary performance cost, and should not be used. There are valid reasons for using them, that will come up in Chapter II, but as for now they are a burden. 

### Selection (Comparing values)
You can compare and select values by using an `if/else` statement: 

```java
int x = 5;
int y = 4;

if(x < y) {
  System.out.println("x is smaller than y");
} else {
  System.out.println("x isn't smaller than y");
}
```

The following operators apply:

| Operator        | Meaning           |
| ------------- |-------------| 
| <    | Smaller than | 
| >  | Greater than    |   
| <=  | Smaller than or equal to  |   
| >=  | Greater than or equal to  |
| == | Is equal to    | 
| != | Is not equal to  |

These are known as relational operators. 

Bear this in mind: because `String` isn't a primitive data type, the `==` operator doesn't work.

N.B. Don't mix up `==` and `=`. One is for comparison, the other is for assignment.

There are also things called logical operators, and there are another 4 of those. These are them, amd they mostly work with boolean values:

| Operator        | Meaning
| ------------- |-------------|
| !    | NOT OPERATOR - turns true into false |
| && | AND operator - returns true if both values next to it are true |
| ^  | XOR OPERATOR - returns true if one value is true and one is false |

I mentioned 4 operators, but the table only lists 3. This is because this file is being made in a format called MarkDown, and the table system in MarkDown is hell on earth. Suffice to say, it does not allow me to make the final operator, so I'm going to have to tell you in a not-so-pretty format. The final one is the OR operator, signified by this : `||`. This will return true if one or two of the values next to it are true, and doesn't require both to be.

### Else if 
If you want you can do can have multiple comparisions;

```java
int x = 5;
int y = 4;

if(x < y) {
  System.out.println("x is smaller than y");
} else if(x > y) {
  System.out.println("x is bigger than y");
} else {
  System.out.println("x is the same as y");
}
```

You don't necessarily need the `else` branch:
```java
boolean alive = true;

if(alive == true) {
  System.out.println("You're alive, good for you");
}
```

[Time to do some maths &rarr;](./Part IV: Arithmetic.html)
