Returning values
===

So far, every method you have defined has had the return type of `void` - in essence, the methods return *nothing*. However in many cases you may want the method to return a value in the form of an `int`, `double`, `String`, `boolean` or any other data type.

Here's an example:

```java
public static int divideBy4(int num) {
	num = num/4;
	return num;
}
```

In the example above, note that the return type has changed from `void` to `int`. Because it is not `void` anymore, this means that we're specifying the method to return something, and we've specified it to return an integer value.

```java
public static void main(String[] args) {
	int division = divideBy4(5);
}
```

### Ex 1
Write a method which calculates and returns the curved surface area of a cylinder.

(Hint: You will need to import the maths API in order to use pi: `import java.lang.Math`; in order to use pi you will have to call it with `Math.PI`)

#### Ex 2
Write an accompanying method which calculates and returns the volume of a cylinder.

### Ex 3
Write a method which converts and returns a given angle in degrees to radians. The write a method that converts radians to degrees.

(Hint: Research what radians are and how to convert to them. Also, think carefully: do we want to be using variables of type `int` or type `double`?)

### Ex 4
Write another method which calculates the hypotenuse of a right-angled triangle.

### Ex 5
Write two methods which calculate and return the curve surface area and volume of a cone.

### Ex 6
Finally, write another two more methods which calculate and return the surface area and volume of a sphere.

## Parameters
So far you have learnt that parameters can be declared between the brackets (____) in a method header:

```java
public static void divideBy2(double a)
```

The method body could be something like:

```java
{
  a = a/2;
}
```

Writing `a = a/2` is OK because we've already declared it as a  parameter of type `double` in the parameter list. Note that `a` only exists within the method body, due to its **scope**. Essentially this means is that `a` can only be used within the `divideBy2` method; if you try to do something like `a = ...` somewhere else in the program, it won't work.

[Accepting user input &rarr;](./Part-V:-Accepting-user-input-from-the-console.html)
