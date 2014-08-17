History of Object-Oriented Programming
===
Java's concept of classes and objects is nothing new. The original idea came from the need for computers to simulate real-world models. The first language to employ classes and objects was, in fact, called *Simula*. It was the first ever **object-oriented language** and included advanced features such as inheritance and virtual methods. It went on to influence *Smalltalk*, a language invented at Xerox PARC, which was also where the GUI was invented. Another language influence by Simula was the *Eiffel* programming language. Object-oriented programming boomed when object-oriented languages based on the *C* programming language were introduced. The supersets were *C++* by Bjarne Stroustrup and *Objective C* by Apple. 

## Java
Java was introduced far later, but had two advantages. Unlike other langauges, Java didn't have to be compiled seperately for Windows, Mac & Linux. Instead a programmer could convert Java to Java bytecode, which could be run on any computer with the Java virtual machine. This advantage was so strong, that later languages such as *Scala* were built to compile straight down to Java bytecode. The second advantage was that you didn't have to delete variables once they had been used. In C, C++ and Objective C, you would have to manually erase a variable from memory once it had been used. If you hadn't erased all variables before the program ended, a **memory leak** would occur.

## Inheritance
We have already seen something called  **inheritance**. Inheritance is what happens with the `extends` keyword. Inheritance lets one class inherit all the methods of the other. That means that all methods and properties of the **super class** (the class being extended) will be accessible on the **sub class**. You have been inheriting from `javax.swing.JFrame`. You may have not known, however, that `javax.swing.JFrame` itself inherits from `java.awt.Frame`, which inherits from `java.awt.Window`. There is also a class called `javax.swing.JWindow` which extends directly from `java.awt.Window`. The difference between a `JWindow` and a `JFrame` is that a `JWindow` has neither a title bar nor the associated buttons. **You should never need to use a `JWindow`**.


## Interfaces
We have also seen **interfaces**. Interfaces are what happens with the `implements` keyword, and the `ActionListener` interface. A class implements an interface. An interface is a list of method definitions, which no method bodies. For example:
```java
public interface Bicycle {

    // wheel revolutions per minute
    public void changeCadence(int newValue);

    public void changeGear(int newValue);

    public void speedUp(int increment);

    public void applyBrakes(int decrement);
}
```
When you say a class implements an interface, it is saying it will implement the method definitions. Here's the code for an `ActionListener`:
```java
public interface ActionListener extends EventListener {

    /**
     * Invoked when an action occurs.
     */
    public void actionPerformed(ActionEvent e);

}
```
When you implement this interface, you must write out an `actionPerformed` method.
