Arithmetic
===

## Basic Arithmetic
I really hope that you know how to do basic arithmetic already, so I'm going to skip through this quickly.
 
Adding two ints x and y (given that they have already been initialised to a value):

```java
int z = x + y;
```

Subtracting two ints x and y:

```java
int z = x - y;
```

Dividing two ints x and y:

```java
int z = x / y;
```

Beware, as x and y are ints z is also an int, and if you remember, ints are whole numbers, so whatever z comes out to be will be rounded down to the nearest integer (i.e. whole number). For example, if `x` was 7, and `y` was 5, then `z` would be `1` when `x` is divided by `y`.

To avoid this problem you can use a double instead, so if `p` is a double equal to `7.0` and `q` is a double `5.0`, we could do the following:

```java
double p = 7;
double q = 5;
double r = p / q;
//r would be 1.4
```

If, however, `p` and `q` are integers, `r` will equal `1.0`, because the `/` operator works irresepective of anything other than `p` and `q`, and their datatypes.

To multiply two integers x and y:

```java
int z = x * y;
```

The symbols for addition, subtraction, multiplication and division are `+`, `-`, `*` and `/` respectively.

#### Ex 1 (Physics)
Write a program to work out what the power in watts of a device is if the voltage is 10V and the current is 6A, and print the result.
Hint: Power (W) = Current * Voltage

#### Ex 2 (Physics)
Write a program to work out the kinetic energy of an object with a mass of 500kg that has a velocity of 12 m/s, and print the result.
Hint: Kinetic Energy = 0.5 * Mass * (Velocity)<sup>2</sup>

#### Ex 3 (Physics)
Write a program to answer the following physics question and print the result.  If a car has a mass of 800 kg and moves with a velocity of 25 m/s, what force is needed to stop the car in 50 metres?
Hint: You will need the equation Energy = Force * Distance and the previous exercise.

#### Ex 4 (Maths)
Write a program to work out the missing angle of a triangle which has two known angles of 108 degrees and 24 degrees.
Hint: The angles of a triangle must sum up to 180 degrees.

#### Ex 5 (Ecology)
![A quadrat](../../Images/Chapter-I/Arithmetic/Quadrants.png)

A standard quadrat used in school has an area of 0.25m<sup>2</sup>. A quadrat is used to sample a random area of a field to estimate the abundance/variety/percentage coverage of a species. For a random sampling to be statistically viable, at least 3% of the area must be sampled. Write a program, given the size of an area, (say 2000m<sup>2</sup>) works out the amount of different samplings that must be done.

## Advanced Arithmetic
Advanced Arithmetic is one way to describe this, the other is endless Math functions. This will be mentioned again, but to import this you will need the import `java.lang.Math`. This contains a load of functions which do various mathematical things, which we will now explore.

### Absolute values
The first function turns a number into an absolute value. But for that to mean anything, we need to know what an absolute value is. The basic way of saying it is that it is a number regardless of its sign. Therefore -6 = 6 just as 6 = 6. To do this you will need the function `Math.abs()` which can be used in situations such as the following:

```java
int a = 20;
int b = 27;
int c = a - b;
//in that case c = -7, or you could do the following:
int c = Math.abs(20 - 27);
//in which case c = 7
```

### Maximum & Minimum
The maximum and the minimum functions take two values and returns either the biggest or the smallest value respectively. You could just do this using two values, which is what I will use as an example, or you could takes two numbers that the user inputted and return the maximum or minimum value. You will learn how to do this in the next chapter. Back on track, this is how they work:

```java
int a = Math.max(27, 38);
//a = 38
int b = Math.min(27, 38);
//b = 27
```

### Rounding
Rounding can be done in three forms using the `java.lang.Math` package. These three forms are `Math.ceil()`, `Math.floor()` and `Math.round()`. Let's do these in order. `Math.ceil()` will round a number up, no matter what the decimal is. So, this is possible:

```java
Math.ceil(5.23);
//prints out 6 despite 0.23 being under 0.5
```

`Math.floor()` does the exact opposite and will always round down:

```java
Math.floor(5.76);
//prints out 5
```

Finally there is `Math.round()`, which actually works like rounding is supposed to!! It's a miracle:

```java
Math.round(5.23);
//prints out 5 whereas:
Math.round(5.76);
//prints out 6
```

### Powers
To get the value of a number to a given power you can use the `Math.pow()` function, which takes two parameters: a number and a power. Then in your `main` method, you can write:

```java
int number = 2;
int power = 3;
System.out.println(Math.pow(number, power));
// Prints 8
```

### Square Roots
Another function in that package is the `Math.sqrt()` that returns the square root of a number.

```java
System.out.println(Math.sqrt(25)); // Prints 5
```

### Remainders
To get the remainder of an int a when divided by another int b we can use `%` instead of `/` when dividing, so `a % b`, where a = 7 and b = 5...

```java
int n = 7 % 5;
// would result in n being 2.
```

#### Ex 7 (Geometry, Physics, Chemistry, Game Programming)
Write a programs that given four numbers *x<sub>1</sub>*, *y<sub>1</sub>*, *x<sub>2</sub>* and *y<sub>2</sub>*, that are points on a graph, and calculates the distance between them, using the formula:

![Distance formula](../../Images/Chapter-I/Arithmetic/calculations_for_points_on_a_graph.png)

This is very useful in collision dectection, in scientific models and game programming.

[Let's go see some arrays &rarr;](./Part V: Arrays.html)
