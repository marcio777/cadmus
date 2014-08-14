Temperature
===

For this part, the imports will be identical to the last part's, except for the addition of `import javax.swing.JTextField;`. Also in this part I'll give you the first few lines of **the class**, and then I'll give the rest as pseudocode, which is just normal text that you have to translate into Java yourself:

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
- To do a degree symbol in Java use `\u00b0` - I know it is weird.

#### Extension
Modify the code to convert Farenheit to Celsius. You will have to add another button, and use `.getSource()` in `actionPerformed` to check which button was pressed.
