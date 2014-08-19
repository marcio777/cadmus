Returning values
===

So far, every method you have defined has had the return type of `void` - in essence, the methods return *nothing*. However in many cases you may want the method to return a value in the form of an `int`, `double`, `String`, `boolean` or any other data type.

Here's an example:

```java
public int divideBy4(int num) {
	num = num/4;
	return num;
}
```

In the example above, note that the return type has changed from `void` to `int`. Because it is not `void` anymore, this means that we’re specifying the method to return something, and we've specified it to return an integer value.

Given that your methods now return a value other than void, you have to store the value returned in a new variable of the same type, else you can’t use it. For instance, to call a method and use the value returned from it in the main method, you would have to:

i) First, create an object:

```java
Task newExample = new Task();
```

ii) Call the method on the object:

```java
newExample.divideBy4(5);
```

iii) In front of this, create a variable of the same type as the method returns and assign the method called by the object to it:

```java
int division = newExample.divideBy4(5);
```

#### Example:

```java
public int addTwoNumbers(int a, int b) {
	return a + b;          
}
```

Calling this method in main:

```java
public static void main(String[] args) {
  ClassName objectName = new ClassName();
  int result = objectName.addTwoNumbers(1,3);
  System.out.println(result);
}
```

Calling this method in another method:

```java
public void aMethod() {
  int result = addTwoNumbers(5,1);
  System.out.println(result);
}
```

### Ex 1
Write a method which calculates and returns the curved surface area of a cylinder. 

(Hint: You will need to import the maths API in order to use pi: `import java.lang.Math`; in order to use pi you will have to call it with `Math.PI`)

#### Ex 2
Write an accompanying method which calculates and returns the volume of a cylinder.

### Ex 3
Write a method which converts and returns a given angle in degrees to radians. 

(Hint: Research what radians are and how to convert to them. Also, think carefully: do we want to be using variables of type `int` or type `double`?)

### Ex 4
Write another method which calculates the hypotenuse of a right-angled triangle.
