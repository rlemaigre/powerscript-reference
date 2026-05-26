# Event ID

- Table 9.32:



|Event ID|Objects|
|---|---|
|pbm_lbuttonclk|Window|
|pbm_lbuttondwn|HProgressBar, VProgressBar|



Arguments



- Table 9.33:




|Argument|Description|
|---|---|
|flags|UnsignedLong by value (the modifier keys and mouse buttons that are pressed).<br><br>Values are:<br><br>• 1 -- Left mouse button<br>• 2 -- Right mouse button (windows only)<br>• 4 -- Shift key<br>• 8 -- Ctrl key<br>• 16 -- Middle mouse button (windows only)<br><br><br>In the Clicked event for windows, the left mouse button is being released, so 1 is not summed in the value of flags.<br><br>For an explanation of flags, see Syntax 2 of MouseMove.<br><br>|
|xpos|Integer by value (the distance of the pointer from the left edge of the window workspace or control in pixels).|
|ypos|Integer by value (the distance of the pointer from the top of the window's workspace or control in pixels).|



The Clicked event occurs when the user presses the mouse button down in progress bars and when the user releases the mouse button in windows.



If the user clicks on a control or menu in a window, that object (rather than the window) gets a Clicked event. No Clicked event occurs when the user clicks the window's title bar.



When the user clicks on a window, the window's MouseDown and MouseUp events also occur.



When the user clicks on a visible disabled control or an invisible enabled control, the window gets a Clicked event.
