ArrayList
===

ArrayList is a class in Java which allows the user to make lists of resizable arrays. The use them you will have to import this:

```java
java.util.ArrayList
```

## How to create an ArrayList

Everything you have deckared and instantiated so far follows a set pattern: `<component> <identifier> = <component(parameters)>`. The ArrayList is no different to this, but you have to declare the length of the list. You can do this in two ways:

```java
ArrayList al1 = new ArrayList();
ArrayList al2 = new ArrayList(5);
ArrayList al3 = new ArrayList(initialCapacity);
```

The first way assumes that the length is going to be 10, because you have not stated otherwise. The second one however does declare a length, which is 5. The third one also has the same effect, setting the length to whatever `initialCapacity` turns out to be.

## A Few Useful Methods

*1) Adding an element:*

```java
al.add(E e) //Adds an element at the end, where 'al' is the name of an ArrayList
```

The `E` is replaced with the data type you would like to insert. However, you cannot use a primitive data type. We mentioned the difference earlier and that there is no need to use the class type versions. Well, now they need to be used. For example:  
> int:Integer  
> char:Character  
> boolean:Boolean 

*2) Removing all the data:*

```java
al.clear(); //'al' is the name of an ArrayList
```

Have a guess what that does.

