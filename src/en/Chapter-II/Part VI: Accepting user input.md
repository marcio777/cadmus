Accepting user input
===

In order to accept user input, one must first:

i)	Write above the line where the class begins: 
```java
import java.util.Scanner;
```
This line must be included above your class i.e. `public class...` in order for you to be able to create a `Scanner` object to accept user input.

ii)	Have some statement such as `System.out.println("Enter number:");` in order to prompt the user to enter a number. Otherwise they won’t know!

iii)	Instantiate a new `Scanner` object by following this rule: 
```java
Scanner myScanner = new Scanner(System.in); 
```
Note: `myScanner` is just a random name chosen for this example; any valid name will do.

iv)	Store user input inside a variable. Let’s take a string for example. In this case, we would first, declare a new String:
```java
String myString;
```
and secondly, store information inside the variable using:
```java
myString = myScanner.nextLine();
```
By letting `myString` equal the `Scanner` object `.nextLine`, we’re telling the scanner input object to give us the entire line that was just typed in by the user and assign/store it in `userInput`.

When placing the dot after `myScanner`, you should notice Eclipse provides you a bunch of options other than `nextLine()`. Depending on what kind of input you’d like to accept you can choose `nextInt()` to accept an `int` input or `nextDouble()` to accept a `double` input type.

### Ex 1
Modify Ex 1 and 2 from Part II so that they now accept user input. Test they work by calling them in the main method.

### Ex 2 (Maths)
Modify Ex 4 of Part IV, so that the method can now calculate any side of a triangle given two of its sides are known. 

### Ex 3 (Maths)
Following the method created on right-angled triangles, extend this by creating another method which calculates the angle of a right-angled triangle given the lengths of two of its sides and returns this value in degrees.

Things to think about:
-	What sort of prompts would you have to ask the user?
-	What sort of input would you ask the user for? Think carefully!
-	Given we are trying to calculate the angle in a right-angled triangle, what sort of ‘cases’ do you have to account for?

HINTS: 
- Remember to import the `math` package
- Also for methods in the `math` package you can refer to [the official docs](http://docs.oracle.com/javase/7/docs/api/java/lang/Math.html)
- The sin/tan/cos methods in Java give back a result in radians. What method (that you have previously made) would you have to utilise?


### Ex 4 (Games): Guess that number
Use what you have been taught to create the game, Guess that number. The computer will generate a random number and the player will have to guess it till he/she gets it right. After each attempt the computer says whether it's higher or lower until he/she gets it right. 

To generate a random number:

```java
  Random rand = new Random();
  int randomNum = rand.nextInt(max);
  // will generate a random number between 0 (inclusive) and max (exclusive)
```

You will need to import `java.util.Random`.

#### Extension
Add a lives element to the game so that the user only has ten or so lives to get it right.

### Ex 5 (Games): Hangman
Use what you have been taught to create a command line version of the game, Hangman. For the sake of simplicity display the lives as a number, rather than drawing out a pretty diagram, unless you really want to. Use `.nextLine()` coupled with `.substring()` to get a `char`. Some of what you'll:
- A global variable to store a series of possibilites
- A method to generate a random word
- A variable to store the chosen word
- A variable (perhaps a boolean array) to store the characters that have been discovered
- A method to filter out the word with underscores

