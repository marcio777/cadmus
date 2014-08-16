Calling methods
===

You've defined a non-static method, that is to say an instance method, but it won't do anything until you call it.

You can call methods inside the main method like so:

i) First, create a new object:

```java
Task myNewObject = new Task();
```

ii)	Then, call the method on the object like so:

```java
myNewObject.methodName();
```

Note that in order to call a method on an object, all you really need to do is put a dot after the object name, followed by the method name and parameter list. 

For example, in **Ex 1** of Part II:

i) Create a new object: 
```java 
Task anObject = new Task();
``` 
(`anObject` can be any name as long as it is valid)

ii) Call the method on the object: ```java anObject.pizzazzYo(10);```

You can also call one method inside another method like so:

```java
public void iAmAMethod() {
  iAmAnotherMethod();
}
```

### Ex 1
Test your `pizzazzYo` method (**Ex 1**, Part II) is working correctly by writing some code in the main method that will then run the program. Compile it!

### Ex 2
Repeat this with your code written for the other exercises in Part II.
