Listeners
===

As an introduction, an **event listener** is something that listens for a certain action and then executes some code if that action takes place. You have alredy met the `ActionListener` and `ChangeListener`, but there are many others.

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

		RGB e = new RGB();
		panel.addMouseListener(e);

		setDefaultCloseOperation(EXIT_ON_CLOSE);
		setVisible(true);
		setSize(300,300);
		setTitle("Random Colours!");
	}

	public Color newColour() {
		int R = (int) (Math.random()*256);
		int G = (int) (Math.random()*256);
		int B = (int) (Math.random()*256);
		return(new Color(R, G, B));
	}

	public class RGB implements MouseListener {

		public void mouseClicked(MouseEvent e) {
			panel.setBackground(newColour());


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

## KeyListener
When you play a game, more often than not the keys are used to control the character or sprite. Sometimes the mouse is used to control the game, but that is rarer. If you want to replicate this, you would have to use a KeyListener. First and foremost, before you do anything else, you will have to add the KeyListener to a panel that has been added to the JFrame. This will mean that the panel now has a KeyListener, but you should know that by now. But, you will also have to use the `setFocusable()` method on the panel, and set it to true. This actually lets the KeyListener work. With that out of the way, KeyListener has three methods, which are listed below:

```java
public void keyPressed(KeyEvent e) {

}

public void keyTyped(KeyEvent e) {

}

public void keyReleased(KeyEvent e) {

}
```

I may not have mentioned it, but these don't need to be wrapped in anything and are stand-alone. They should therefore be out of both the constructor and main method. Of the methods above, the top one (keyPressed) is the msot common, and activates on any key being pressed. `keyTyped` works when a key is typed, and only works when there is a valid Unicode character. In other words that one is mostly used for actual letters. Finally `keyReleased` is invoked when the key id let go of. So, the computer would execute the methods in this order:

```java
keyPressed
keyTyped //if the key is a letter
keyReleased
```

However, you most likely want to know what keys are being pressed, and respond accordingly. Each key in Java has its own unique code, which you are not expected to know. As a result you will probably have to look them up if you wish to use them. The way to use them is to first find out what the key's code was. You could do so by setting an integer variable to be the value of the key, by using:

```java
int keyin = e.getKeyCode();
//this would be done inside of the relevant method
```

You would then have to use an if statement to check if the right key has been pressed, and if so, react.To do this you will need to compare `keyin` to the right key code, and you do so as follows:

```java
if (keyin == KeyEvent.VK_UP) {
	//code
}
```

That if statement checked if the key pressed was the up arrow key, but equally you could use any other by replacing `VK_UP`. I will not be listing all of them, as it will take too long, but you can find them out on Oracle's website under the page on KeyEvent. Just know that the names are usually sensible, for example the other arrows keys are called `VK_RIGHT`,`VK_LEFT` and `VK_DOWN`.

[Complex Layouts &rarr;](./Part-III:-Complex-Layouts.html)
