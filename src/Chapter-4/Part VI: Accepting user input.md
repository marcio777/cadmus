Accepting user input
===

In order to accept user input, one must first:

i)	Write above the line where the class begins: 
```java
import java.util.Scanner;
```
This line must be included above your class i.e. `Public class...` in order for you to be able to create a `Scanner` object to accept user input.

ii)	Have some statement such as `System.out.println(“Enter number:”);` in order to prompt the user to enter a number. Otherwise they won’t know!

iii)	Create a new `Scanner` object by following this rule: 
```java
Scanner myScanner = new Scanner(System.in); 
```
Note: `myScanner` is just a random name chosen for this example; any valid name will do.

iv)	Store user input inside a variable. Let’s take a string for example. In this case, we would first, declare a new String:
```java
String myString = null;
```
and secondly, store information inside the variable using:
```java
myString = myScanner.nextLine();
```
By letting `myString` equal the `Scanner` object dot `nextLine`, we’re telling the scanner input object to give us the entire line that was just typed in by the user and assign/store it in `userInput`.

When placing the dot after `myScanner`, you should notice Eclipse provides you a bunch of options other than `nextLine()`. Depending on what kind of input you’d like to accept you can choose `nextInt()` to accept an `int` input or `nextDouble()` to accept a `double` input type.

### Ex 1
Modify Ex 1 and 2 from Part II so that they now accept user input. Test they work by calling them in the main method.

### Ex 2
Modify Ex 4 of Part IV, so that the method can now calculate any side of a triangle given two of its sides are known. 

### Ex 3
Following the method created on right-angled triangles, extend this by creating another method which calculates the angle of a right-angled triangle given the lengths of two of its sides and returns this value in degrees.

Things to think about:
-	What sort of prompts would you have to ask the user?
-	What sort of input would you ask the user for? Think carefully!
-	Given we are trying to calculate the angle in a right-angled triangle, what sort of ‘cases’ do you have to account for?

HINTS: 
- Remember to import the `math` package
- Also, for methods you can use refer to ![the official docs](http://docs.oracle.com/javase/7/docs/api/java/lang/Math.html)
- The sin/tan/cos methods in Java give back a result in radians. What method (that you have previously made) would you have to utilise? 
