Temperature Converter
===

In this part you will write the code for a temperature converter.

## Stage 1
I will give you the imports free of charge:
```java
import java.awt.*;
import java.awt.event.*;
import javax.swing.*;
```
The `*` means everything, so `java.awt.*` includes `java.awt.FlowLayout`, etc. You will need these imports in all the other parts as well. Also in this part I'll give you the first few lines of **the class**, and then I'll give the rest as pseudocode, which is just normal text that you have to translate into Java yourself:

```java
JTextField input = new JTextField(15);
JButton btn = new JButton("Celsius to Farenheit");
JLabel label = new JLabel("No value converted", JLabel.CENTER);
```

Pseudocode for the `main` method:

```
Instantiate, that is to say create, a new instance of the class.
```

Pseudocode for the constructor:

```
Add input, btn and label to the window.
Set btn's action listener to this.
Set layout to a new FlowLayout.
Set size to (400, 85).
Set title.
Set it to be visible.
Set default close operation to EXIT_ON_CLOSE.
```

Pseudocode for `actionPerformed(ActionEvent e)`:

```
Set celsiusValue to the value of input AS AN INTEGER.
Set farenheitValue to ((celsiusValue * 9) / 5) + 32.
Set the text of label to farenheitValue.
```

#### Help
- To get the value of `input`, use the `getText()` method.
- You must remember to use `Integer.parseInt()` and `Integer.toString()` appropriately.
- To do a degree symbol in Java use `"\u00b0"` - I know it is weird.

## Stage 2
Modify the code to convert Farenheit to Celsius. You will have to add another button, and use `.getSource()` in `actionPerformed` to check which button was pressed.

## Stage 3
To do the final part you will have to use a `JOptionPane`. `JOptionPane` is essentially a class with lots of static methods of getting user input and displaying message. A `JOptionPane` can be used as an alert box. Here is an example:

```java
JOptionPane.showMessageDialog(this, "This is a message");
// the first parameter is the frame to which the alert box belongs (or null if there isn't one)
// the second parameter is the message
```

The final stage of the challenge is to show an alert box, using `JOptionPane`, if the value entered is not an integer. You will need to use a try-catch block.

[That was tough - but there is no rest for the wicked; or the programmer &rarr;](./Part-V:-Layouts.html)
