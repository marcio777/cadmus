Switch statements
===

The first thing to tackle in the world of switch statements is what on earth they are. In short, a switch statement is a different form of an if statement. They are however less useful, and should not be regularly replacing if statements. A switch statement takes one value (specifically one character) and compares it to values that you want. That is a bad way of saying that it is an if statement that only works for one character. They work using things called cases, which can be seen as possibilities for what the value may be. If this sounds confusing, seeing one should clear it up. So, you can create one like this:

```java
char myGrade = 'A';

switch (myGrade) {
  case 'A':
    System.out.println("You're amazing");
    break;
  case 'B':
    System.out.println("Well done");
    break;
  case 'C':
    System.out.prtinln("Need to do better");
    break;
  default:
    System.out.println("You are a failure");
    break;
}
```

So, first I set `myGrade` to be an A. Then the switch statement takes the name of whatever it wants to compare and compares it using the cases. So, the first case checks if myGrade = A, and if so it prints out "You're amazing". Then it *breaks* the statement, using the `break` command. This makes the computer skip the rest of the switch statement an move on to the next piece of code. Bear in mind that `break` is not a necessity, rather that it is a shortcut. If myGrade does not equal A, then the statement will move on to the next case. If neither A, B or C are entered (i.e. a lower grade or an invalid entry) then the statement will move on to the default case. This fires if anything goes wrong. Once again, this is not a necessity. 

Finally, I would just like to point out that if you were to input a lower case grade, then the switch statement will move straight to the default. To catch and fix this you add another case without a block on top of the upper case version of that letter. In other words:

```java
switch (myGrade) {
  case 'a':
  case 'A':
    System.out.println("You're amazing");
    break;
  case 'b':
  case 'B':
    System.out.println("Well done");
    break;
}
```

That is not the full statement as seen above, but you get the picture.
