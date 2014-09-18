ArrayList
===
ArrayList is a class in Java which allows the user to make lists of resizable arrays. The full import path is:
```java
java.util.ArrayList
```
However, it needs a paarmeter during it's construction. This is in the form of `ArrayList<E>`. Normally the `<E>` part is not added to an import statement but it is needed when constructing an ArrayList. The `E` is replaced with the data type you would use to make the ArrayList. However, it is not a primitive. The `E` has to be replaced with an actual class and for the primitives, you would use the class versions. For example:  
> int:Integer  
> char:Character  
> boolean:Boolean  

The full declration of the ArrayList class is as follows:
```java
public class ArrayList<E> extends AbstractList<E> implements List<E>,RandomAccess,Clonable,Serializable
```
It implements the Clonable interface so the
```java
protected Object clone() throws CloneNotSupportedException
``` 
can be used to clone it. Otherwise the `CloneNotSupportedException` is thrown. Furthermore, the Serializable interface means that it can be put into the secondary storage. 
