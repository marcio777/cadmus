Tic-Tac-Toe
===

In this part you are going to make a version of the game Tic-Tac-Toe, where a human plays against a computer. To do this you are going to understand layouts. A **layout manager** is a way of presenting and displaying the elements of either a frame or a panel. In other words, layouts allow you to tell the computer where you want to display your different objects and in what order. As we have seen previously, you  apply the layouts to a frame. In Java, there exists many different types of layouts, three of which are: the grid layout, the flow layout and the border layout. You have already met the simplest of which, the flow layout.

## Stage 1: Grid Layout
A Grid Layout arranges the components into a two dimensional grid with a number of rows and columns.

```java
setLayout(new GridLayout(2, 3));
// the different values are as follows: number of rows; and number of columns.
```

OR

```java
setLayout(new GridLayout(2, 3, 3, 5));
// the different values are as follows: number of rows; number of columns; horizontal padding and vertical padding.
```

This creates a layout with two rows and three columns as seen below:

![The grid layout](../../Images/Chapter-IV/Layouts/grid_layout.png)

Components are added by using the `add()` method, as usual. If you added 6 buttons, to the grid above, here's how they would look:

![The flow layout in Java](../../Images/Chapter-IV/Layouts/the_flow_layout.png)

So to start off, create a 3x3 grid of buttons. Set the height and width of the frame to be identical, so the height and width of the buttons are identical. The buttons should contain no text until they are clicked. When they are clicked they should change to X, and the button should be disabled (using the `setEnabled()` method). Then the computer takes its turn, and selects an (empty) button, turning its contents to O. Then the human goes again until either the person or the computer wins (or there is a draw), at which point use `JOptionPane` to display a message and disable all buttons.

To create the artifical intelligence i.e. to calculate what the computer does, use the following algorithm:
1. If the centre button is empty, the computer selects it.
2. Otherwise the computer checks the corner buttons in turn, to see if any of them are empty. If it finds an empty button, it selects it.
3. Otherwise it checks all the other buttons to find an empty button to select.
4. If there are no empty buttons, then it is a draw and a message is displayed announcing the draw.

## Stage 2: The Border Layout
Layouts also apply to panels. Previously we have only used frames, but a frame is the entire space taken up by the program. But what if you want to put many different thing on one frame in various different places. To so this you could also use the `JPanel`. A JPanel can be seen as a "mini-frame". In most ways, these panels work the same as frames, and can do the same things as frames. They also work the same as most components (which you haven't met any of yet). Therefore you can add them to the frame, colour them, resize them etc.

```java
JPanel panel = new JPanel();
panel.setLayout(new FlowLayout());

JButton btn = new JButton("The is a button");
JButton btn2 = new JButton("This is another button");
panel.add(btn);
panel.add(btn2);

add(panel);
```

Here a `JPanel` is declared and initialised and two buttons are added to it. The whole panel (including the buttons) are then added to the frame. So you can have a panel which uses a flow layout, added to the bottom of a border layout, which is exactly what we are going to do.

![The border layout](../../Images/Chapter-IV/Layouts/border_layout.png)

A border layout allows you to place your elements into five different regions as shown below. You can use relatively the same code as you did for the flow layout, but bear in mind that you must give the component the name NORTH, SOUTH etc.  

```java
//this is what the buttons should look like, respective of their positions
JButton component1 = new JButton("NORTH");

setLayout(new BorderLayout());
add(component1, BorderLayout.NORTH);
add(component2, BorderLayout.SOUTH);
add(component3, BorderLayout.EAST);
add(component4, BorderLayout.WEST);
add(component5, BorderLayout.CENTER);
```

You task is to modify your existing code, to utilise a grid layout, flow layout and a border layout. You will need to change the frame to use a border layout consisting of two panels, one at the centre and one at the bottom. The panel at the centre will use a grid layout and contain the grid of buttons you made in Stage 1. The panel at the bottom will use a flow layout and contain a `Reset` button, to reset the game.

[We've made passing mentions, but now it's time to study JTextFields in full &rarr;](./Part-VI:-Text-Fields.html)
