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

### Integers
An integer is a whole number. Integers are stored as the data type `int`. To define an Integer with variable identifier `age` do:

```java
int age = 15;
```

You can convert an integer to a string, by using `Integer.toString()`:

```java
int age = 13;
String ageAsString = Integer.toString(age);
```

You can convert a string to an integer by using `Integer.parseInt()`:

```java
String ageAsString = "13";
int age = Integer.parseInt(ageAsString);
```

You can also increment and decrement variables by one, by using unary operators, that is to say operators that take one value:

```java
age++; // Age now equals 14
age--; // Age is back to 13
```

Binary operators like `+`, `-`, `/` and `*` take two values. 

### Real numbers
While an integer is a whole number, a real number has a decimal point in it. To use a real number in Java, use the `double` data type:

```java
double pi = 3.14159265359;
```

As with an integer, you can convert it into a string and a double, using the following:

```java
String piAsString = "3.14159265359";
double pi = Double.parseDouble(piAsString);
piAsString = Double.toString(pi);
```

### Booleans
A boolean is a variable that has two possible values - `true` or `false`. As before, you can convert between booleans and strings:

```java
boolean myBoolean = true;
String aliveAsString = "true";
alive = Boolean.parseBoolean(aliveAsString); 
aliveAsString = Boolean.toString(alive);
```

# Primitives versus Classes
You may have picked up on the fact that `String` is capitalised, while `int`, `double` and `boolean` are not. This is because `int`, `double` and `boolean` are all **primitive data types**, while  `String` is a **class data type**. These may not mean anything to you yet, but in essence there are 8 built-in primitives within Java. Primitives cannot be added or removed by the programmer; they are the DNA of the programming language. Primitives represent one scalar value. Classes are far more powerful than primitives. They shift the power to the programmer, allowing the programmer to create classes, which are composed from other datatypes. Java comes with a bunch of classes built in, namely `String`.

But what about `Integer`, `Double`, and `Boolean` as in `Integer.parseInt()` or `Double.parseDouble()` etc.? These are indeed classes, that wrap around their respective primitives. So the following would be perfectly valid:

```java
Integer age = 13;
Double pi = 3.14;
Boolean alive = false;
```

However using these instead of primitives has an unnecessary performance cost, and should not be used. There are valid reasons for using them, that will come up in Chapter II, but as for now they are a burden. 

N.B. It is perfectly accceptable to use their static methods i.e. `Integer.parseInt()` etc, because they do not actually involve instantiating those classes (Part VIII). 

## Selection (Comparing values)
You can compare values by using an `if/else` statement: 

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

Bear this in mind: because `String` isn't a primitive data type, the `==` operator doesn't work.

N.B. Don't mix up `==` and `=`. One is for comparison, the other is for assignment.

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
bool alive = true;

if(alive == true) {
  System.out.println("You're alive good for you");
}
```
