Accepting user input from the console
===

In order to accept user input from the console, one must first import `java.util.Scanner`. Then have some statement such as `System.out.println("Enter number:");` in order to prompt the user to enter a number. Otherwise they won’t know! Then instantiate a new `Scanner` object by following this rule: 

```java
Scanner myScanner = new Scanner(System.in); 
```

This will store the user's input inside a variable. Let’s take a string for example. In this case, we would first, declare a new String:

```java
String myString;
```

and secondly, store information inside the variable using:

```java
myString = myScanner.nextLine();
```

By letting `myString` equal the `Scanner` object `.nextLine`, we’re telling the scanner input object to give us the entire line that was just typed in by the user and assign/store it in `myString`.

When placing the dot after `myScanner`, you should notice Eclipse provides you a bunch of options other than `nextLine()`. Depending on what kind of input you’d like to accept you can choose `nextInt()` to accept an integer input or `nextDouble()` to accept a double.

You can also react to what the user inputs. One way to do this is to use the method `hasNextInt()`. This is also possible for doubles and floats and booleans etc. Add this to an if statement and you can react to what type of input the user inputted. So, you can create the following:

```java
if(myScan.hasNextInt()) {
  System.out.println("Why did you enter an integer????? We wanted a double");
}
```

### Ex 1 (Computer Science)
Create a method that will continually prompt the user for an integer until a valid integer is entered. That valid integer is a multiple of 13.

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
- Also for methods in the `math` package you can refer to [the official documents](http://docs.oracle.com/javase/7/docs/api/java/lang/Math.html)
- The sin/tan/cos methods in Java give back a result in radians. What method (that you have previously made) will you have to utilise?

### Ex 4 (Games): Guess that number:
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
N.B. This exercise is designed to stretch your computational thinking.

Use what you have been taught to create a command line version of the game, Hangman. For the sake of simplicity display the lives as a number, rather than drawing out a pretty diagram, unless you really want to. Use `.nextLine()` coupled with `.substring()` to get a `char`. Some of what you'll need:
- A global variable to store a series of possibilites
- A variable (perhaps a boolean array) to store the characters that have been discovered
- A method to filter out the word with underscores

[And finally, more on classes &rarr;](./Part VI: Classes.html)
