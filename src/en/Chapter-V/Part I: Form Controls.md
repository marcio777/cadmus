Form Controls
===

## JRadioButton
A radio button is a button that you often see on multiple choice quizzes, the ones that are circular and fill in when you click them. To create these you have to use `JRadioButton`, which work exactly the same as normal buttons. To create one you would have to do this:

```java
JRadioButton btn1 = new JRadioButton("One");
//where "One" is the label of the button.
```

Adding this to the JFrame will create a radio button. To listen to changes use `setActionListener()` and `actionPerformed()`. However, what use would a radio button be if you could click more than one at the same time? Anything that requires only one option being selected would be broken. To fix this you have to add the buttons ot a `ButtonGroup`. This makes sure that only one option works at a time. The following code would be used:

```java
ButtonGroup buttons = new ButtonGroup();
```

to create the buttongroup, and then:

```java
buttons.add(btn1);
```

would be used in the constructor to add the button to the button group. Therefore the following would be outputted:

![Radio buttons](../../Images/Chapter-IV/Buttons/radio.png)

### Ex 1
Make 3 radio buttons with different names of subjects (History, Computing, Maths etc.) and have a JLabel ask which is the user's favourite. Also have the JLabel respond to that with an appropriate message.

## JCheckBox
Check boxes are exactly the same a radio buttons, only look slightly different. These, instead of becoming a filled circle upon  being clicked, become a ticked box. To use these you will require a ButtonGroup, as before, and to import JCheckBoxes. These also interact with ActionListeners. The code for these is pretty intuitive, but I'll display it anyway:

```java
JCheckBox one = new JCheckBox("Noodles");
```

Using these you can create things like the following:

![Some check boxes](../../Images/Chapter-IV/Buttons/check_boxes.png)

## JSlider
A JSlider is exactly what you think it is, and needs to be added to a JFrame:

```java
JSlider slide = new JSlider(JSlider.HORIZONTAL, 0, 255, 0);
```

The contents of the parameters are necessary for this component. The HORIZONTAL refers to the positioning of the slider i.e. horizontally or vertically. The first 0 dictates the number the slider starts at and the 255 is the number the slider ends at. The second 0 dicates where the pointer will be when you start the program. And that's pretty much it, adding that to a JFrame will create a slider. You can however further customise the slider. Including the following code in the constructor will change the slider:

```java
slide.setMajorTickSpacing(10);
//every big number comes along every 10.
slide.setMinorTickSpacing(1);
//every small number is shown every 1.
slide.setPaintLabels(true);
//creates the numbers.
slide.setPaintTicks(true);
//creates the lines
```

![A Slider at no value](../../Images/Chapter-V/Complex_Interfaces/slider1.png)

To listen for a change in value for a JSlider, you must use `ChangeListener`, as opposed to an `ActionListener`. This listener is used to, rather unimaginably, listen for a change. Shock horror it is named sensibly!!!! To do so the class must `implement` the `ChangeListener` e.g.:

```java
public class Sliders implements ChangeListener {

}
```

A class can implement both an `ActionListener` and a `ChangeListener` and whatever else you want, just by separating them by commas, e.g.:
```java
public class ImplementsManyThings implements ChangeListener, ActionListener, MouseListener {

}
```

A `ChangeListener` must have the method `stateChanged(ChangeEvent e)` which is called when the slider value is changed.

```java
public void stateChanged(ChangeEvent e) {
  //code
}
```

## Ex 2
Create an application with three sliders that correspond to red, green and blue. You see in computing (and science) any colour can be represented by 3 different values: red, green and blue. Each value is an integer between 0 to 255. So for example black is (0,0,0) i.e. all of its values are 0. This is because black is the absence of light. White, on the other hand, is (255,255,255), because white is a mixture of all colours. If you want, look up RGB values for other colours. The sliders change the background of the `JFrame`. Put the sliders in a panel with a different background colour to see them better. To do this use the `Color` class, e.g.:

```java
new Color(redValue, blueValue, greenValue);
```

[You've seen listeners before but let's get them done with &rarr;](./Part-II:-Complex-Listeners.html)
