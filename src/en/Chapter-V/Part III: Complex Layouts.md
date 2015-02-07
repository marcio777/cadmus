Complex Layouts
===

In Chapter IV, I mentioned four basic layouts, but they are not the only ones.

## The Card Layout
This layout allows for two panels to occupy the same place. This is not the only way, but is the best. As a point of reference, the least experienced will use JFrames, the more experienced will use JTabbedPanes (which you will experience in Complex Interfaces) but the best will use this. To use a card layout, you have to actually declare and instantiate it - which is brand new for a layout. As a reminder:

```java
CardLayout cl = new CardLayout();
```

So, to use the card layout, you have to have a few things. Firstly, you need the panels, but you need one more than you will be showing. In other words, if you plan to house three panels in the same place, you need to declare four. This fourth extra panel is the container for all the other panels. Once you have that, you need the components to put in the panels, and I will be using buttons so I can change the panels. Then you will need the following code:

```java
cont.setLayout(cl);
//the container panel has the card layout assigned to it.
cont.add(panel1, "1");
//'cont' is the container panel, 'panel1' is the panel's name and '"1"' is the identifier for the card layout.
cont.add(panel2, "2");
cont.add(panel3, "3");
cl.show(cont, "1");
//the card layout will show the container panel with the panel with the identifier '"1"' first.
add(cont);
//adds the container panel to the JFrame.
```

Once you have that, you have to actually make the buttons switch the panels. So, add ActionListeners to each, and use the following code, which includes the `show()` method:

```java
btn1.addActionListener(new ActionListener() {
  public void actionPerformed(ActionEvent e) {
    cl.show(cont, "2");
    //show the second
  }
});
```

This is for the first button which, when pressed, will show the second panel. This is easily replicable by simply including the container panel (otherwise known as the parent component) and the identifier of the panel. You can create something like this using this, and you'll just have to believe me that this was all done at once using the same space.

![Card layout panel 1](../../Images/Chapter-IV/Layouts/first_panel.png)
![Card layout panel 2](../../Images/Chapter-IV/Layouts/second_panel.png)
![Card layout panel 3](../../Images/Chapter-IV/Layouts/third_panel.png)

## The GridBagLayout
The most powerful, and most weirdly named, layout, the GridBagLayout. This is, most definitely, the most powerful layout, and it sets the frame up as a grid, like a gridlayout but gives far more adaptability. Before we get ahead of ourselves however, we have to know how to use the basics of this layout. First you have to set the layout to be `GridBagLayout()`, but you also have to declare the following:

```java
GridBagConstraints gc = new GridBagConstraints();
```

You will have to remember `gc` because that is what you manipulate and then you add he components to that. Bear in mind that `gc` is just an identifier, so you can replace it with anything. So, for example, if I had 4 buttons and wanted to have 2 on the top row, 1 on the middle-left and 1 on the bottom-right, I would use the following:

```java
gc.gridx = 0;
gc.gridy = 0;
add(btn1, gc);

gc.gridx = 1;
gc.gridy = 0;
add(btn2, gc);

gc.gridx = 0;
gc.gridy = 2;
add(btn3, gc);

gc.gridx = 1;
gc.gridy = 3;
add(btn4, gc);
```

The code above should mean nothing to you but is actually very simple. I mentioned that GridBagLayout works based off of grid co-ordinates, and that is what the whole business with `gridx` and `gridy` is doing. `gridx = 0` and `gridy = 0` refers to the top left corner of the frame. Setting `gridx` to 1 would move it over one on the x axis; setting `gridy` to 1 would move it down one on the y axis. Also, it must be noted that when you add the component to the JFrame or JPanel, you must add it to the GridBagConstraints at the same time. So, instead of `add(btn4)`, you have to use `add(btn4, gc)`. It would be useful to remember that GridBagConstraints are also position-sensitive. Therefore you should add the button directly after you set the location. The fact that it is position-sensitive will become important later. Anyway, the above code will create the following:

![Basic gridbaglayout](../../Images/Chapter-IV/Layouts/gridbag1.png)

You will notice that there are some problems with that frame. In other words, it doesn't look good. The first thing to do is to fix the differing sizes of the buttons. You can do this using `.fill`. To use this you need to do the following;

```java
gc.fill = 1;
//forces the components to fill the grid spaces they are assigned to

gc.fill = GridBagConstraints.VERTICAL;
//forces the components to be the same height

gc.fill = GridBagConstraints.HORIZONTAL
//forces the components to be the same width
```

Using either the top one or the bottom two, you can fix the button size and make it look like the following picture:

![Same size button gridbaglayout](../../Images/Chapter-IV/Layouts/gridbag2.png)

Now, I've decided that I don't want all the buttons to be touching eachother, but I still want them to be the same size. So, I can use `.insets`:

```java
gc.insets = new Insets(5,5,5,5);
//5,5,5,5 means 5 pixels of padding on each side
```

The following layout of buttons are therefore created:

![Padded gridbaglayout](../../Images/Chapter-IV/Layouts/gridbag3.png)

And finally, I've now decided that I want the third button to be the size of two buttons lengthwise. Therefore I will need it to fill up two columns. To do this you need to set the width of the component (or indeed the height if you want the buttons or component to span rows) :

```java
gc.gridwidth = 2;
//sets the width of the component to be 2 columns

gc.gridheight = 2;
//I didn't use this, but would set the height of the component to be 2 rows.
```

Finally, and I prefer this layout of buttons to the first time we used GridBagLayout, this is what a combination of the above can achieve:

![Different sized buttons in a gridbaglayout](../../Images/Chapter-IV/Layouts/gridbag4.png)

[Finally, some extra things &rarr;](./Part-IV:-Extra-Things.html)
