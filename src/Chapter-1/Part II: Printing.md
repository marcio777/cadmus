Printing
===

To output text to the console, use `System.out.println` e.g.:

```java
System.out.println("Hello world");
```

Try printing out "Hello world" (like above) and if it works, try printing out your own custom messages. Remember to put it in the `main` method. Notice that once you type in `System.out` followed by a full stop you will get many different options popping up, this is simply Eclipse offering you suggestions for what to type, but for now we will only be interested in two of these; `print` and `println`.  'print' simply prints out whatever you have inserted in speech marks. However if you use 'println' like we have done above, then Hello world will be printed and then a new line will be made (like when you hit enter in word); here the ln stands for "line new".

Try the following, which will output exactly the same, but in more lines of code:

```java
System.out.print("Hello ");
System.out.print("world");
```

Now, what if we were to put the "world" on a new line?  Well we would simply write the following code instead:

```java
System.out.println("Hello");
System.out.println("world");
``` 
 
Which would print "Hello" then a new line, and then print "world" on that new line.

You can also print out variables (which you will encounter next). When you print out a variable you do not need to add `" "` or `' '`, you simply put the variable name inside the the brackets.  So if you had an int called `n` which is equal to 5, you could print it out using:

```java
System.out.println(n);
// which would output: 5
```

You could also print out variables and strings at the same time, you simply separate them with a `+` sign as shown below:

```java
System.out.println("The value of n is " + n);
// which would output: The value of n is 5
```

### Ex 1
Write a program to print a simple drawing of a house, once you have done that have some fun and see what else you can draw!
Hint: Use `*` or `+` or another symbol and the `println` function.
