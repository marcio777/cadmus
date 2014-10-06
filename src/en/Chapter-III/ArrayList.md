ArrayList
===

So far you have met arrays, but now it's time to meet `ArrayLists`. An ArrayList is almost identical to an array with one or tow major exceptions. Firstly, an ArrayList is resizeable. An array, on the other hand, has a set size which cannot be exceeded. Secondly, an ArrayList is a lot easier to use. There are a set list of methods which do various things, which you will meet later. The use them you will have to import this:

```java
java.util.ArrayList
```

## How to create an ArrayList

An ArrayList is declared and instantiated in exactly the same way as you do for every other component. You do not need to declare the size of these ArrayLists (as their sizes are variable), and can declare them in the following ways.

```java
ArrayList al1 = new ArrayList();
ArrayList al2 = new ArrayList(5);
ArrayList al3 = new ArrayList(initialCapacity);
```

The first way assumes that the length is going to be 10, because you have not stated otherwise. The second one however does declare a length, which is 5. The third one also has the same effect, setting the length to whatever `initialCapacity` turns out to be. You may want to also declare what kind of ArrayList you want i.e. what data type you want the data to be. To do this you will need to instead declare this:

```java
ArrayList<String> al1 = new ArrayList<String>();
ArrayList<Integer> al2 = new ArrayList<Integer>();
```

As expected, the first one creates an ArrayList with Strings, and the second one contains Integers. You may also notice that the data type is a class type rather than a primitive type i.e. we have used `Integer` insted of `int`. This is the same for boolean and char.

## A Few Useful Methods

*1) Adding an element:*

```java
al.add(e) //Adds an element at the end, where 'al' is the name of an ArrayList
```

As mentioned in the comment, whatever `e` turns out to be (a number, a String, a char etc) will be added to the end of the ArrayList. It is worth mentioning that `e` must be the same data type as the ArrayList itself, as in you cant add an int to a String ArrayList.

*2) Removing all the data:*

```java
al.clear(); //'al' is the name of an ArrayList
```

Have a guess what that does.

*3) Finding the size of the ArrayList:*

```java
al.size();
```

You wouldn't just use that on its own however, you would need to set a variable to be that value or print that value out. 

*4) Removing single elements:*

```java
al.remove("F");
al.remove(2);
```

The first command above removes the letter F from the ArrayList (bearing in mind that the letter F is in the ArrayList). The second one removes the value at index 2.

*5) Finding the contents of the ArrayList:*

```java
System.out.println(al);
```

This will print out the contents of the ArrayList. This is not the only thing you can do with the contents, for example you could set a variable to be it.

So, using the above concepts you could create a chain of manipulation of an ArrayList, by means of example:

```java
ArrayList<String> al = new ArrayList<String>();
System.out.println("The size of the list: " + al);

al.add("A");
al.add("A");
al.add("A");
