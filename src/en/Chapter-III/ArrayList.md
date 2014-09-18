ArrayList
===
ArrayList is a class in Java which allows the user to make lists of resizable arrays. The full import path is:
```java
java.util.ArrayList
```
The full declaration of the ArrayList class is as follows:
```java
public class ArrayList<E> extends AbstractList<E> implements List<E>,RandomAccess,Clonable,Serializable
```
It implements the Clonable interface so the
```java
protected Object clone() throws CloneNotSupportedException
``` 
can be used to clone it. Otherwise the `CloneNotSupportedException` is thrown. Furthermore, the implementation of the Serializable interface means that it can be put into the secondary storage. 

Constructors
------------
```java
ArrayList al1 = new ArrayList(); //New ArrayList with a capacity of 10 at instantisation
ArrayList al2 = new ArrayList(int intialCapacity); //Same as above but the parameter of this constructor determines the capacity
```

A Few Useful Methods
--------------------
1.
```java
public boolean add(E e) //Adds an element at the end
```
The `E` is replaced with the data type you would like to insert. However, it is not a primitive. The `E` has to be replaced with an actual class and for the primitives, you would use the class versions. For example:  
> int:Integer  
> char:Character  
> boolean:Boolean 

2.
```java
public void clear() //Clears the entire ArrayList
```

3.
```
