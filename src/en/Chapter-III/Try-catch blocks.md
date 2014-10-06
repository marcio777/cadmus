Try-catch blocks
===

Try typing this into Eclipse and see what happens:

```java
System.out.println(3/0);
```

If you have done this right, you should get a lot of red writing appearing in your console. This because dividing by 0 is not possible, and the computer comes up with an error. So, if you were to input this into a program then god knows what might happen. Basically the computer will not know what to do and will ignore it, or in the most extreme cases, close. But, a good program designer will want to catch these errors and tell the user about what went wrong. To do this you will need a *try-catch block*. A try catch block is very easy to use because you need only to wrap the code around it. By that statement I mean you need to do something like the following:

```java
try {
  //code
}
```

That however is not the full statement, as the catch part has been so helpfully omitted. As a result this code would output an error, because essentially you have checked the code but have not specified what to do if it finds an error. By the way, an error in this case is called an `Exception`. However Java becomes a bit annoying at this point. With the catch part of the statement you actually have to define which exception in particular you want to catch. The point of this is so you can change the program's reaction based on what went wrong, but actually is rather annoying. To full statement is as follows:

```java
try {
  //code
} catch (Exception e) {

}
```

In this case I have used the parameters `Exception`, which is a generalised version for all exceptions. As a point of interest, the `e` needs to be there too. You can of course stack exceptions to differentiate the responses, and you do so like this:

```java
try {
  //code
} catch(ArithmeticException e) {

} catch (NumberFormatException e) 

}
```

There are a great number of exceptions, and to work out which one you need to use you mainly just have to create the error and read the report generated in the console. As a result I cannot list them, and will leave it up to you to work them out.

