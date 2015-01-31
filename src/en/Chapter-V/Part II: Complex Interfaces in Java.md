Complex Interfaces
===

## JSplitPane
You have known how to put an image onto the screen and add scroll bars to it if it is too big since Chapter IV part II. But, what if you want to put two images on to the screen next to each other, and want to be able to dictate just how much space each image takes up? For that purpose you can use a `JSplitPane`. This is a pane that contains two images and has a functionality with which you can change how much of the screen each image takes. To do this you will have to import `javax.swing.JSplitPane`, and will have to declare a new `JSplitPane`. Inside the parameters however, you will have to add some other things, including scroll bars (because otherwise you will not be able to dictate how much of each picture you see). The declaration will end up looking like this:

```java
JSplitPane split = new JSplitPane(JSplitPane.HORIZONTAL_SPLIT, new JScrollPane(label1), new JScrollPane(label2));
//where 'label1' and 'label2' are predeclared labels.
```

Then, in the constructor, you set those labels to be your images of choice and add the split pane to the JFrame. This particular piece of code, along with all of the other things needed for it to function, creates this:

![A horizontally split pane](../../Images/Chapter-V/Complex_Interfaces/horizontal_split.png)

You could also change the `HORIZONTAL_SPLIT` to `VERTICAL_SPLIT`, but that would not be very good for our penguins health:

![A vertically split pane](../../Images/Chapter-V/Complex_Interfaces/vertical_split.png)

He seems to now have a massive mound of rock instead of a body.

You may notice when you create the split pane that the middle bar is immediately placed on the left side of the frame. You won't see this in the pictures below because I have moved that bar by dragging it, but that is not always an acceptable solution. Luckily, there is a way to change the position of the bar by default. To do so you will have to use the following code:

```java
split.setResizableWeight(0.5);
//where 'split' is the split pane declared earlier
```

Bear in mind that the 0.5 used in this example is not a necessity and can be changed. This changing is pretty intuitive if I tell you that 0.5 represents the middle of the frame.

## JTabbedPane
Assume you have two windows, and wish to be able to switch between them at will, because they have different pieces of information for example. To do this you could use a variety of things, but one of the better ones is a `JTabbedPane`. This is not the most useful way of doing this - it would be far more useful to use the card layout. However, I think that this looks slightly better. To use a JTabbedPane you have to declare and instantiate a `JTabbedPane`, as you would do with anything else. Then you have to create two panels and two labels (or two of what you were going to put on the tabs). Then add as many tab panes as you want. Finally, add these panels to the JTabbedPane. You do this as normal, i.e. like this:

```java
tabbedPane.add("First pane", panel1);
//where 'tabbedPane' is the name of the JTabbedPane, 'panel1' is the name of the panel and '"First pane"' is what will be displayed on the tab itself
tabbedPane.add("Second pane", panel2);
add(tabbedPane);
```

This will create the following if you were to put labels on the JPanels:

![A tabbed pane](../../Images/Chapter-V/Complex_Interfaces/tabbedpane.png)

### Ex 1
Create your own `JTabbedPane` with two tabs, one with a message on it and one with a button that creates a message upon clicking.

## JInternalFrame
Next on the list of random trinkets is the `JInternalFrame`. As the name suggests this is a frame inside of a frame, or, quite literally, an internal frame. To do this you will need the following imports:

```java
import javax.swing.JDesktopPane;
import javax.swing.JFrame;
import javax.swing.JInternalFrame;
```

You need JFrame and JInternalFrame for obvious reasons, and you need the DesktopPane for reasons that you need not delve in to. Be satisfied with the knowledge that it is necessary. To set up your internal frame, you will have to extend your JFrame as usual and then declare a DesktopPane and a JInternalFrame, with the parameters for the JInternalFrame containing the title of the internal frame. Then, inside the constructor use the following code, where 'frame' is the identifier of the JInternalFrame and 'desktop' is the identifier of, you guessed it, the DesktopPane:

```java
frame.setSize(320,240);
frame.setVisible(true);

frame.setMaximizable(true);;
//can be maximised
frame.setIconifiable(true);
//can be reduced to an icon
frame.setResizable(true);
//can be resized
frame.setClosable(true);
//can be shut down
frame.setDefaultCloseOperation(DISPOSE_ON_CLOSE);

desktop.add(frame);
add(desktop);
```

Set up the main JFrame as usual and you can get something like this:

![A JInternalFrame](../../Images/Chapter-V/Complex_Interfaces/internal_frame2.png)

As a point of reference, if you were to not use the code from `setMaximizable` to `setClosable`, you would get the following:

![A worse JInternalFrame](../../Images/Chapter-V/Complex_Interfaces/internal_frame1.png)

## JSlider
So, in the part labelled 'Listeners', the ChangeListener was explained in the context of JSliders. Now, you will find out how to make them. A JSlider is exactly what you think it is, and needs to be added to a JFrame, which I shouldn't have to tell you to extend by now. This is an example of declaring a JSlider:

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

These sliders can be added to ChangeListeners and you can create something like the following which changes the colour of a label based on the value of the slider:

![A Slider at no value](../../Images/Chapter-V/Complex_Interfaces/slider1.png)
![A Slider at a low value](../../Images/Chapter-V/Complex_Interfaces/slider2.png)
![A Slider at a high value](../../Images/Chapter-V/Complex_Interfaces/slider3.png)

## JToolBar
A useful tool is the JToolBar. It is exactly what it says on the tin, it is a toolbar which can have various components put onto it. To create a JToolBar you have to declare and instantiate it as usual. The, inside the main constructor, you add components to the toolbar. Bear in mind that this is position-sensitive - if you add a button, then a text field then a label, then the button will be on the left, then the text field, then the label on the right. You can therefore make something like the following:

![The various toolbar positions](../../Images/Chapter-V/Complex_Interfaces/toolbar_positions.png)

As you will notice from the pictures, you can move this toolbar about by default and even separate it from the frame it is in. This may not be preferable however, so you can naturally stop this. To do so just add this to your constructor: 

```java
tools.setFloatable(false);
//where 'tools' is the name of the toolbar
```

Using that, the following would be outputted:

![A non-floatable toolbar](../../Images/Chapter-V/Complex_Interfaces/non-floatable_toolbar.png)

Finally you can separate the components in a JToolbar using the following code:

```java
tools.addSeparator();
```

Bear in mind that this is position sensitive, so you place this inbetween the additions of the two components you want to separate. The following is therefore possible:

![A separated toolbar](../../Images/Chapter-V/Complex_Interfaces/separated_toolbar.png)

## JMenu
The title of this portion is not strictly correct, because this covers three things, the `JMenuBar`, the `JMenu` and the `JMenuItem`. However these all coalesce into one menu. What I mean by menu is the bar at the very top of the screen when you enter Eclipse or Microsoft Word i.e the bar that contains File and Edit and Help etc. To do this you will first need to declare and instantiate a new JMenuBar. Then in the constructor you need the following:

```java
	setJMenuBar(menu);
	//where 'menu' is the name of the JMenuBar
```
	
This sets the menubar up, but it currently has nothing in it. So, you need to add JMenus. These are the actual buttons that you click in order to display the drop-down. To do this you need to declare JMenus and name them, then add them to the JMenuBar. As if you need a reminder, this is how you would do it:

```java
JMenu file = new JMenu("File");
JMenu edit = new JMenu("Edit");

menu.add(file);
menu.add(edit);
```

This would create the following, but notice the lack of items. That is our next job:

![ A menu bar with titles](../../Images/Chapter-V/Complex_Interfaces/menu&bar.png)

The items are easy to add, as you shall see. You simply create a JMenuItem, name it like you did with a JMenu and then add it to the respective JMenu. Bear in mind that, once again, it is position-sensitive, so you have to add them in order. If you want the line between the items that you see in most menus, just include this:

```java
component.addSeparator();
```

As you did with the toolbar. Once again, put it in the right place. So, if you have followed me, you could create something like this, which I have unashamedly copied from Eclipse's menu itself:

![A menubar with items](../../Images/Chapter-V/Complex_Interfaces/menuitems.png)

## JTable
In our quest to discover more complex components, we find the JTable. This is exactly as it sounds - it is a table. You will need a JTable and a ScrollPane, which you have met before. This ScrollPane is simply for use if the table has too much data in it. First thing you will need to do it set a flow layout. Then you need two arrays, one for the column names and one for the actual contents. These are the arrays that I used:

```java
String[] columnnames = {"Name","Age", "Gender"};

Object[] [] data = {
	{"Bob", "30", "Male"},
	{"Susan", "46", "Female"},
	{"Patrick", "22", "Male"},
	{"Samantha", "72", "Female"}
};
```

The second array looks more complicated, and that's because it is an array of arrays. Each of the arrays inside of the data arrays represents a row, and the contents represents the data. To actually make the table, now that you have the things inside of it, you will need the following lines of code:

```java
table1 = new JTable(data, columnnames);
//yes you have to create the data before the titles
table1.setPreferredScrollableViewportSize(new Dimension(500,50));
//creates the size of the table
table1.setFillsViewportHeight(true);
//Don't ask why this is here, it just is
table1.setEnabled(false);
//the table is editable if this is not used
```

Now just add the table to the scrollpane and add the scrollpane to the JFrame, and you will create something like this:

![A JTable](../../Images/Chapter-V/Complex_Interfaces/JTable.png)

## JProgressBar
You will have seen a lot of progress bars before because they are commonly used to show how much of a task is completed. These are also only mainly used on loading screens. As a result the one I will be telling you about today and showing you will be on a JWindow, which acts as a basic loading screen. However, this is the **only** time you should ever used JWindow. It is a horrible component that you will want to never give the time of day. With that warning out of the way, onto the JProgressBar.

The JProgressbar is reasonably simple to use in itself, you only need to declare and instantiate it. The difficult part comes in the form of the Timer that is needed for the JProgressBar to actually work. This is the code for a JProgressBar that works fully, and it's explained underneath:

```java
t = new Timer(100, new ActionListener() {
	public void actionPerformed(ActionEvent e) {
		count ++;
		bar.setValue(count);
		if(bar.getValue() < 100) {
			bar.setValue(bar.getValue() + 1);
		}
		if(bar.getValue() == 100) {
			JOptionPane.showMessageDialog(null, "100% loading has been achieved");
			System.exit(0);
		}
	}
});
t.start();
bar.setStringPainted(true);
```

That certainly looks complicated. The first line states that `t` (which is the identifier of a Timer that I declared earlier) is a new Timer, with values of 100 and an ActionListener. The value of 100 is basically how many numbers the timer has to get through, and it therefore dictates the speed of the timer. If the number is 1000, then the progressbar that works off of this timer will run slower; if the number is 50 then it will run faster. Then the `actionPerformed()` method is created, as usual, and inside it `count ++` is run. `count` is an integer I set to 0 earlier. Then `bar` (which is the identifier of a JProgressBar I declared earlier) is set to the value of count, which is 1. Then an if statement is run. If the value of `bar` (which is 1) is less than 100, then the value of bar will be set the the current value + 1, which is 2. This will happen every time the timer goes up, so count will go up with it. 

Then, another if statement is declared. This time, if the value of `bar` is 100, then a JOptionPane with the message "100% loading has been achieved" will appear, and when the close button is clicked, the program will end thanks to `System.exit(0)`. After all that is set, the timer is started via `t.start()`. And finally, `bar.setStringPainted(true)` is added, which displays the number that the progressbar is at, and dynamically updates it. 

That is a very long explanantion but it all coalesces into this:

![Progress bar halfway](../../Images/Chapter-V/Complex_Interfaces/halfway_progress.png)

![Finished progress bar](../../Images/Chapter-V/Complex_Interfaces/finished_progress.png)

## JToolTip
Before telling you how to use JToolTips, I first want to reinforce what a tool tip is. You know whenever you hold the mouse cursor over a button, and sometimes a little text box appears telling you what it is? That is an example of a tool tip, and they can be constructed in Java too. For demonstratory purposes, I am going to be adding my tool tip to a button. However, bear in mind that you can add tool tips to almost every component there is. With that in mind, let me tell you that it is really easy to make tool tips. To do so you simply add this to your code:

```java
btn.setToolTipText("This is a button");
//where 'btn' is the identifier of a button
```

And that is that. The tool tip will now display whenever you hold your mouse over the button. If you are using this and are worried that it hasn't worked, hold your mouse over the component a bit longer because you may have just moved the mouse off of the component too soon. With that in mind, here is an example (you may not be able to see my cursor, but it is hovering over the button):

![A JToolTip](../../Images/Chapter-V/Complex_Interfaces/tooltip.png)

## JPopupMenu
Right click right now. As you can see, a menu comes up with a variety of items on it. That is a pop-up menu. You create these as usual, i.e. you declare and instantiate them as normal. But there is something different about them. Firstly, you use `JMenuItem` to create the items on the pop-up menu. If you have forgotten, you use them like this:

```java
JMenuItem cut = new JMenuItem("Cut");
popupmenu.add(cut);
//where 'popupmenu' is the identifier of a pop-up menu
```

So, that's how you add items, and the line between them is created using `addSeparator()`, as before. I mentioned something different you have to do with pop-up menus. You basically have to add them to various components. If you add it to the JFrame however, something weird will happen which I will leave for you to discover. Similarly if you add it normally to a component it will not work. So, how do you add them? Well, what you have to do is use the `setComponentPopupMenu()` method. I would advise using this on a panel that covers the whole JFrame, but you can add it to specific components. Just as a visual representation, the code would look like this:

```java
panel.setComponentPopupMenu(popupmenu);
//where 'panel' is the name of a JPanel and 'popupmenu' is the name of a JPopupMenu
```

That will add the pop-up menu to the panel or component in question, and once you've added the items you can create something like this:

![A pop-up menu](../../Images/Chapter-V/Complex_Interfaces/popup.png)

## JColorChooser
As a first and foremost, I have not mispelled colour in the title, but am using the official syntax for java, which spells colour in that way. Moving on, a JColorChooser is very difficult to explain without the use of an image. Nevertheless I will try, but if you can't visualise what I am, then don't worry as there will be a picture later. A colour chooser is a pre-formatted component that you choose colours from. As for what it looks like, if you've ever used a program with a 'more colours' option, then that will bring up one form or another of colour chooser. You'll recognise it when you see it. To create these you use the following code:

```java
Color colour = (Color.WHITE);
colour = JColorChooser.showDialog(null, "A colour chooser!!", colour);
```

The first line is the declaration and instantiation of a `Color`, which has been set to white. The second line, the important one, sets `colour` to be the value of a JColorChooser with the parameters `null` (which is just there); `"A colour chooser!!"` (which is the title of the colour chooser) and `colour` (which is the colour the chooser starts with i.e. white). I would put the second line inside an ActionListener connected to a button, because you can then click the button to bring up the JColorChooser. Now that's explained, here is the elusive JColorChooser:

![A colour chooser](../../Images/Chapter-V/Complex_Interfaces/colourchooser.png)

[Finally, some extra things &rarr;](./Part-III:-Extra-Things.html)
