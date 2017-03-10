Loops
===

Loops are very important to programmers as they allow us to do complicated, long-winded calculations in a short amount of time.

There are four main loops in Java, the **for loop**, **while loop**, **do loop**, and **array loop**. 

## For loops
For loops are mostly used for counting up or down in steps, usually in steps of one. There are 3 parts: initialisation, a condition and a step-change.  

The initialisation is where you declare a counter to a value of your choice (most of the time we use 0 if counting up to a certain value).

The condition is the statement which must be true for the loop to continue, usually a less than or greater than statement, involving the counter.  

We also have a step-change part to change the counter after each iteration, for increasing by one we will use ++ (as described previously), and for decreasing by one we will use --.  So now you know how a for loop works it is time to show you what one looks like.  

Below is a for loop which starts at 0, counts up by 1 each step, and prints out the number of each step, until 10 steps have been reached.

```java
for(int n = 0; n <= 10; n++) {
	System.out.println(n);
}
```

Here is what will happen:

1. In the brackets of the for loop we initialise a variable called `n` to 0, and we use `n++` to increase n by 1 after each iteration, and we continue to do this while `n` is less than or equal to 10.  
2. So, at first, the loop will run the program to check to see whether the value of `n` meets the condition `n<=10`, and since 0 is less than 10, `n` meets the condition, which means that the piece of code within the {} is run once. 
3. `n` is increased by 1. 
4. The program checks to see whether the new value of `n` meets the condition, and since 1 is still less than 10 the code inside of the {} of the for loop is run once again.
5. This process continues until `n` is no longer less than or equal to 10, so the loop will stop when `n` is 11 (and breathe). 

Once this occurs the for loop finishes and the code inside of the loop is no longer run.  Once you understand how a for loop works, the rest of the loops are fairly easy to pick up!

#### Ex 1
Use a loop of your choice to print out all the multiples of 9 within the range 0-108.
Hint: x is a multiple of 9 if `x % 9` is 0.

#### Ex 2
Modify the last exercise so that you print the sum of all the multiples of 9. Hint: You will need to use `+=`.
 
#### Ex 3
Write a program, that given a number `n`, calculates whether it is a prime number. `n` should be declared at the beginning.

#### Ex 4
Write a program that returns the syllable count of a given word. The word should be defined at the beginning. To do this count the number of vowels including `y` (unless it is at the start of a word), excluding two or more vowels that are in a row (dipthongs).

## While loops

So, onto the while loop. The while loop has only one condition and if the condition is met then the code is run, otherwise the loop finishes.  Below is an example of a while loop. (With while loops, variables must be initialised before the loop starts).

```java
public void countTenWithWhileLoop() {
	int n = 0;
	while (n <= 10) {
		System.out.println(n);
	}
}
```

Do you see any problems with this loop?  This is an example of an infinite loop, which is a loop that never ends as `n` stays the same. In order for the loop to finish, we need to include a piece of code to change the value of `n`.  Hopefully you have worked out that we could use `n++` to do this.  So, the correct loop would look like this:

```java
public void countTenWithWhileLoop() {
	int n = 0;
	while (n <= 10) {
		System.out.println(n);
		n++;
	}
}
```

The best way of having an infinite loop is to use a while loop and set the condition to true. This way the condition is always true and so the code always gets executed.  It would look like this:

```java
while(true) {
	// code to execute
}
```

#### Ex 5
Write a program, that prints all the multiples of a given number, while they are under a hundred.

## Do loops

Now onto the do loop.  This loop is nearly exactly the same as the while loop.  However the piece of code within the loop is run before checking to see if the condition is met.  This guarantees that the code is always run at least once.  Here is an example of a do loop.

```java
public void countTenWithDoLoop() {
	int n=0 ;
	do {
		System.out.println(n);
		n++;
	} while (n<=9);
}
```

Notice here that we must change the parameters of the `while` from 10 to 9, as if we keep it as 10, once n becomes 11 the piece of code will be run and then the program will check to see if the condition is met. In other words a do loop may run one more time than you want it to if you are not careful.

## Array loops

Finally the array loop.  This is just a more succinct way of looping through an array. It is constructed like a for loop, but inside the parentheses, you write: a variable instantiation of type of a given item of the array; a colon; and the name of the array.

```java
public void printIntArray() {
	for(int n : nameOfArray) {
		System.out.println(n);
	}
}
```

[Phew, I'm glad that's over; oh, there's more &rarr;](../Chapter-II/Part-I:-Introduction.html)

[Or you can read the addendum, but I find that boring &rarr;](./Addendum-I:-History-of-Java.html)
