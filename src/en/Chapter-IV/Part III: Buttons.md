Buttons
===

In our next application, the buttons application, we have to be able to receive user input i.e. button presses. We will use the `JButton` class. The imports required for this application will be:

```java
import java.awt.FlowLayout;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import javax.swing.JFrame;
import javax.swing.JButton;
import javax.swing.JLabel;
```

Here is the code, copy it:

```java
public class Buttons extends JFrame implements ActionListener {
    JButton btn1 = new JButton("Button 1");
    JButton btn2 = new JButton("Button 2");
	JLabel label = new JLabel("No buttons have been clicked", JLabel.CENTER);

    public static void main(String[] args) {
       new Buttons();
    }

    public Buttons() {
        btn1.addActionListener(this);
	    btn2.addActionListener(this);

        add(btn1);
	    add(btn2);
	    add(label);

        setLayout(new FlowLayout());
	    setSize(300, 100);
	    setTitle("Buttons");
	    setVisible(true);
	    setDefaultCloseOperation(EXIT_ON_CLOSE);
	}

    public void actionPerformed(ActionEvent e) {
        if(e.getSource() == btn1) {
            label.setText("btn1 was clicked");
        } else if(e.getSource() == btn2) {
            label.setText("btn2 was clicked");
        }
    }
}
```

Notice the `implements ActionListener`. Don't worry about that now. Just think of it as a different kind of `extends`. Rather than inheriting all the methods of the class in front of it, `implements` means that the class will contain the methods mandated by the thing in front of it. In this case it is the `actionPerformed()` method, which you do not call. By setting the ActionListener of `btn1` and `btn2` to `this` i.e. the current instance of `Buttons`, you are saying whenever `btn1` or `btn2` are clicked, you want them to pass on the event to the current instance of `Buttons`. The `e` variable stores information about the event. `getSource()` will return the button that was pressed.

Finally, the `setText()` method on the label allows you to dynamically change the text.

These are what should be outputted at the start; when the first button is clicked; and when the second button is clicked:

![The box when none of the buttons are clicked](../../Images/Chapter-IV/Buttons/Buttons_none_clicked.png)

![What happens when button 1 is clicked](../../Images/Chapter-IV/Buttons/btn1_clicked.png)

![What happens when button 2 is clicked](../../Images/Chapter-IV/Buttons/btn2_clicked.png)

### Ex 1
Use what you have been taught here to create a random number generator that generates a number between 1 to 100 when a button is pressed.

## Adding Images
These buttons are all well and good, but to be honest, they don't look very good. For that reason, it's time to find out how to add images to buttons. You do this in much the same way that you add images to labels, using ImageIcons. So, to do this you would include the following code:

```java
ImageIcon image = new ImageIcon("cute cat picture.jpg");

button = new JButton(image);
```

Doing this will set the button to have an image on it instead of text. Add a panel and a text field (you will learn about these later), and you can get something like this:

![CUTE KITTEN BUTTON!!!!!!](../../Images/Chapter-IV/Buttons/image_buttons.png)

And yes, you have permission to scream 'CUUUUUUUUTTTTEEEEE' in a very high-pitched voice.

### Ex 2
Make a JButton yourself. Have it change a label from "No buttons pressed" to "The button has been pressed" using the ActionListener. If, you want a challenge, add more than one button or make them contain pictures.

N.B. not all pictures require a tag of 'cute'.

### Ex 3
Create 3 check boxes with custom names, and use ActionListener to display an appropriate message depending on which box has been checked.

## Calling another class
Another thing you can do with a button is display another frame on screen when it is clicked. So, for example, if I wanted a red panel to appear when I clicked a button, what should I do? Well, the first thing is to create the button and add an ActionListener, but that goes without saying. What you have to do beyond that is something like the following:

```java
public void actionPerformed(ActionEvent e) {
	RedPanel red = new RedPanel();
	red.setVisible(true);
}
```

That code will call another class, or another file in the same folder to put it in other words, and set it to be visible. This particular file is called `RedPanel`, and I gave it the identifier `red`. However, this file needs to exist, and it can be like the following:

```java
public class RedPanel extends JDialog {

	public RedPanel() {
		setSize(200,200);
		setVisible(true);
		getContentPane().setBackground(Color.RED);
		setDefaultCloseOperation(DISPOSE_ON_CLOSE);
		setTitle("RedPanel");
	}
}
```
The astute will notice two things different with this. 1) There is no main method. This is because it is being called from another class, so that main method was the first to be looked at by the computer. Therefore it is not needed. 2) The class extends `JDialog`, not JFrame. This is just something that you have to accept - a JFrame would not work, so we use JDialog. Using this something like this can be made:

![Red panel button](../../Images/Chapter-IV/Buttons/calling_panel.png)

[I hope you've been listening - we've got a challenge coming up &rarr;](./Part-IV:-Temperature.html)
