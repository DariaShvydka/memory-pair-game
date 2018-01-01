> SPECIFICATION

We have the two squares ("default" and "color") slide up to reveal the matching color and slide down to hide it. Two color squares will be wrapped in a "drawer" div, which will be wrapped in a another div that will act as a "window". The "window" is needed to act as a mask revealing what is inside the area of the "window".

The "drawer" slide up and down via the magic of CSS. Normally the "drawer" will align it's top edge with the top of the "window". When we added the "flip" class it slide up revealing the "color" div. Remove the class and it will slide back down again.

We have a list of class names for the "color" classes named "square-1" - "square-9".
 we also can to get click/taps on a Game Square when they occur, and keep track of the state of each Game Square.



The state of a Game:
* open or closed: closed and we see the upper "default" div, or open and we see the lower "color" div.
* locked or unlocked: Locked will identify a square as having been matched. In this case we can ignore clicks/taps, and the square stays open.


Todo: 
1. Define the structure of the DOM in HTML. 
2. Create general CSS and styles for classes that will be added using JS.
3. Create some matching styles for «сolor» сards.
4. Make a list of class names for the «color» classes named "square-1" - "square-9" in the new variable.
5. Create an object that represents a game-square.
6. Adding four methods to object GameSquare with prototypes: Handle event; Reset Game; Locker, when we find a match; Setter Color.
7. Edit object GameSquare – add set color.
8. Make an empty array to hold all the GameSquare objects.
9. Define a set up function to initialize each DOM element and its color. Then call that function.
10. Create a shuffle array.
11. Create a function, that returns an array with two copies of each color, 16 of color class names in 8 pairs.
12. Edit set up function to get random colors.
13. Add a var to keep track of the first square you click.
14. Define a check function, that compare the colors of the first and the second squares clicked to lock or close them both.
15. Edit handle event and call inside check function.
16. Make reseting function, that will close all squares and randomize all colors of cards.
17. Сall reseting function when the button is clicked.
18. Create function, that assign and randomize new colors after reset.
19. Add chic and shine to styles, show how much I love CSS.
20. profit.
