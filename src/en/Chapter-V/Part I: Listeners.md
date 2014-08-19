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
// where 'component' could be the identifier of a button or any other component
```

The method `.addActionListener()` accepts any object that implements the interface `ActionListener`. Because it implements the interface `ActionListener` the event-emitting component knows the object will implement the method `actionPerformed(ActionEvent e)`.


Overall, the `ActionListener` listens for events i.e. the clicking of a button. The listener then executes any code within the block `actionPerformed(ActionEvent e)`.

## ChangeListener
The ChangeListener is the next listener to discover. This listener is used to, rather unimaginably, listen for a change. Shock horror it is named sensibly!!!! This can be used mainly with the `JSlider`, as you will discover in the next part. A slider is a visual representation of changing a value. This listener can therefore be used to detect a change in values and execute a block of code. On that note this is the syntax required:

```java
component.addChangeListener(new ChangeListener() {
//where 'component' is the identifier of a component, possibly a slider
    public void stateChanged(ChangeEvent e) {
        //code
    }
});
```

I will not be giving an example of this working, because you will meet this exact code when you meet JSliders. Bear in mind that if you use the above code, you do not need to implement ChangeListener. So, as a final recap, the ChangeListener listens for a change in a value and executes some code when it finds it.

## MouseListener
The MouseListener is yet another sensibly named listener which listens for the mouse doing something. This particular listener has a lot of methods to implement, namely the following:

```java
public void mouseClicked(MouseEvent e) {

}
public void mouseEntered(MouseEvent e) {

}
public void mouseExited(MouseEvent e) {

}
public void mousePressed(MouseEvent e) {

}
public void mouseReleased(MouseEvent e) {

}
```

You by no means have to memorise these, when you create the listener Eclipse will give you the choice to let it implement them for you. What I mean by 'create the listener' is when you use the following code:

```java
public class event implements MouseListener {
	public void mouseClicked(MouseEvent e) {
	
	}
}
```

The astute will notice the class in the previous piece of code, which is something that I haven't explored yet. That is simply another method, that I have created with the specific purpose of comtaining the listener. You then add the component's listener to this method i.e.:

```java
event e = new event();
//where 'event' is the name of the method (it does not have to be 'event')
panel.addMouseListener(e);
//where 'panel' is the name of a JPanel
```

 This is another way to add a listener to a component. After quite a sufficient detour, let's get back to the 5 methods earlier. These methods also do not all have to be used, mostly you will want to use the `mouseClicked` method, which activates when you click the mouse. The others  work as follows: `mouseEntered` is when a mouse pointer enters a component; `mouseExited` is when the mouse leaves a component; `mousePressed`is when the mouse is held on a component and `mouseReleased` is when the mouse is released from being held on a component.

So, what is the point of this? Well, the mouse listener can be used for a multitude of programs. For example, if you wanted to close a component when a mouse clicks twice, you can use `ClickCount()` inside of a mouse listener. Or, you could use it in the context of changing a frame's colour, you could use code similar to this:

```java
public class colours extends JFrame{
	JPanel panel = new JPanel();
	
	public colours() {
		panel.setBackground(newColour());
		add(panel);
		
		rgb e = new rgb();
		panel.addMouseListener(e);
		
		setDefaultCloseOperation(EXIT_ON_CLOSE);
		setVisible(true);
		setSize(300,300);
		setTitle("Random Colours!");
	}
	
	public Color newColour() {
		int r = (int) (Math.random()*256);
		int g = (int) (Math.random()*256);
		int b = (int) (Math.random()*256);
		return(new Color(r, g, b));
	}
	
	public class rgb implements MouseListener {

		public void mouseClicked(MouseEvent e) {
			panel.setBackground(randomColour());
			
			
		}
		
		public void mouseEntered(MouseEvent e) {
			
		}

		public void mouseExited(MouseEvent e) {
			
		}

		public void mousePressed(MouseEvent e) {
			
		}

		public void mouseReleased(MouseEvent e) {
			
		}

	}
	
	public static void main (String[] args) {
		new colours();
	}
```

This will create a frame that changes colour everytime it gets clicked.

[If you think what you've seen so far is complex - you've got a surprise waiting for you &rarr;](./Part II: Complex Interfaces.html)
