Parameters
===

So far you have learnt that parameters can be declared between the brackets (____) in a method header: 
```java
public void divideBy2(double a)
```
The more technical term for this kind of parameter is a **formal parameter**. To understand parameters better, let’s say that they’re comparable to how you use variables. How do you declare a variable to hold an integer, 10?
```java
int myVariable = 10;
```
So what you’ve done here is:

1. Declared the variable to be of type `int` because we want it to hold the value 10.
2. Given it a name `myVariable`.
3. Assigned (given) it the value of 10.

The only difference with formal parameters is that you skip the last point iii) and do that inside the method header instead. So, for example, looking at this method header again:
```java
public void divideBy2(double a)
```
The method body could be something like:
```java
{
  a = a/2; 
}
```
Writing `a = a/2` is OK because we’ve already declared it as a formal parameter of type `double` in the parameter list. Note that `a` only exists within the method body, due to its **scope**. Essentially this means is that `a` can only be used within the `divideBy2` method; if you try to do something like `a = ...` somewhere else in the program, it won’t work.

