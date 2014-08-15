Listeners
===

As an introduction, an **event listener** is something that listens for a certain action and then executes some code if that action takes place. You have met one before, the `ActionListener`, but there are many others.

## ActionListener
If you think back to when you discovered buttons, in that tutorial you had to write this into the class: `implements ActionListener`. Then you created another method that went along the lines of:

```java
public void actionPerformed(ActionEvent e) {
    // code
}
```

In this method you then coded what should happen when you press the button. Components can pass events on to action listeners by using:

```java
component.addActionListener(this); 
// where 'component' could be the identifier of a button or any other componen
```

The method `.addActionListener()` accepts any object that implements the interface `ActionListener`. Because it implements the interface `ActionListener` the event-emitting component knows the object will implement the method `actionPerformed(ActionEvent e)`.
