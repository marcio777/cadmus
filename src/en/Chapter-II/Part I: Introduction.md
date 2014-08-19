Introduction
===

## Aims:
- To provide a general introduction to the concept of what a program is, and the programming mindset
- Through examples, highlight the ideas that: 

  There may be more than one way to solve a given problem

  Problems should be simplified and thought of in steps first

- To introduce the 'bare bones' of any Java program (consisting of a main function within a class)
- To briefly cover some basic programming constructs (i.e. if statements and general idea of looping)

## The basic make-up of any Java program

To put it simply, the basic make-up of any java program consists of two things:

-	A class
-	A main method inside of a class

Both of which are usually written inside an IDE / code editor software. (See later pages on ‘Eclipse’ for a run through of how to set up the software and start writing your very first program).

Here is an example of some actual code:

```java
public class FirstProject {
   
    public static void main(String[] args) {
        
        System.out.println("Hello World");
        
    }
    
}
```

All of the code belongs to the class FirstProject, and within it exists the main method. Note that while one program can have many classes, it can only have one main method: any more and your program will not know how to run.

## What is a method?

Put simply, a method - also known as a function or procedure in other languages - is a block of code that carries out a task. You can think of them as helpers which all come together in order to help you build your program.

Methods are generally created in order to carry out some specified task, to check if some condition is true or not, or to accept user input. The main point is, they are usually used to segment a program into more understandable steps which can be called in a desired order. 

#### Ex 1

After creating a new class, copy and paste this inside the curly braces on your screen. 
	
```java
public static void main(String[] args) {
        
        System.out.println("Hello World");
        
}
```

If you already see a main method, copy and paste only this line inside the main method.

        System.out.println("Hello World");

Now try changing the words inside of the quote marks. What happens?
