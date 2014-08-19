Parameters
===

So far you have learnt that parameters can be declared between the brackets (____) in a method header: 

```java
public void divideBy2(double a)
```

The method body could be something like:

```java
{
  a = a/2; 
}
```

Writing `a = a/2` is OK because we’ve already declared it as a  parameter of type `double` in the parameter list. Note that `a` only exists within the method body, due to its **scope**. Essentially this means is that `a` can only be used within the `divideBy2` method; if you try to do something like `a = ...` somewhere else in the program, it won’t work.

