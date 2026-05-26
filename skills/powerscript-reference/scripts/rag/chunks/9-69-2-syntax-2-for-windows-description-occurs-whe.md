# 9.69.2 Syntax 2: For windows Description Occurs when the pointer is moved within the window. Event ID

- Table 9.164:



|Event ID|Objects|
|---|---|
|pbm_mousemove|Window|



Arguments



- Table 9.165:




|Argument|Description|
|---|---|
|flags|UnsignedLong by value (the modifier keys and mouse buttons that are pressed).<br><br>Values are:|



|Argument|Description|
|---|---|
| |• 1 -- Left mouse button<br>• 2 -- Right mouse button<br>• 4 -- Shift key<br>• 8 -- Ctrl key<br>• 16 -- Middle mouse button Flags is the sum of all the buttons and keys that are pressed.<br>|
|xpos|Integer by value (the distance of the pointer from the left edge of the window's workspace in pixels).|
|ypos|Integer by value (the distance of the pointer from the top of the window's workspace in pixels).|



Return Values Long. Return code choices (specify in a RETURN statement): 0 -- Continue processing Usage



Because flags is a sum of button and key numbers, you can find out what keys are pressed by subtracting the largest values one by one and checking the value that remains. For example:



- • If flags is 5, the Shift key (4) and the left mouse button (1) are pressed.
- • If flags is 14, the Ctrl key (8), the Shift key (4), and the right mouse button (2) are pressed. This code handles all the buttons and keys (the local boolean variables are initialized to false by default):




boolean lb_left_button, lb_right_button boolean lb_middle_button, lb_Shift_key, lb_control_key integer li_flags



- li_flags = flags IF li_flags 15 THEN




// Middle button is pressed lb_middle_button = TRUE li_flags = li_flags - 16



END IF IF li_flags 7 THEN



// Control key is pressed lb_control_key = TRUE li_flags = li_flags - 8



END IF IF li_flags > 3 THEN



// Shift key is pressed lb_Shift_key = TRUE



li_flags = li_flags - 4 END IF IF li_flags > 1 THEN



// Right button is pressed lb_lb_right_button = TRUE li_flags = li_flags - 2



END IF IF li_flags = 1 THEN lb_left_button = TRUE



Most controls in a window do not capture MouseMove events -- the MouseMove event is not mapped by default. If you want the window's MouseMove event to be triggered when the mouse moves over a control, you must map a user-defined event to the pbm_mousemove event for the control. The following code in the control's user-defined MouseMove event triggers the window's MouseMove event:



Parent.EVENT MouseMove(0, Parent.PointerX(), Parent.PointerY())
