# Return value

- Integer. Returns 1 if it succeeds and -1 if an error occurs. If any argument's value is null, PopMenu returns null. Usage




If the menu object is not associated with the window so that it was opened when the window was opened, you must use CREATE to allocated memory for the menu (see the last example).



If the Visible property of the menu is false, you must make the menu visible before you can display it as a pop-up menu.



The coordinates you specify for PopMenu are relative to the active window. In an MDI application, the coordinates are relative to the frame window, which is the active window. To display a menu at the cursor position, call PointerX and PointerY for the active window (the frame window in an MDI application) to get the coordinates of the cursor. (See the examples.)
