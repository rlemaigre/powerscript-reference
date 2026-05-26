# Event ID

- Table 9.168:



|Event ID|Objects|
|---|---|
|pbm_lbuttonup|Window|



Arguments



- Table 9.169:




|Argument|Description|
|---|---|
|flags|UnsignedLong by value (the modifier keys and mouse buttons that are pressed).<br><br>Values are:<br><br>• 1 -- Left mouse button<br>• 2 -- Right mouse button<br>• 4 -- Shift key<br>• 8 -- Ctrl key<br>• 16 -- Middle mouse button<br><br><br>In the MouseUp event, the left mouse button is being released, so 1 is not summed in the value of flags. For an explanation of flags, see Syntax 2 of MouseMove.<br><br>|
|xpos|Integer by value (the distance of the pointer from the left edge of the window's workspace in pixels).|
|ypos|Integer by value (the distance of the pointer from the top of the window's workspace in pixels).|



Return Values Long. Return code choices (specify in a RETURN statement): 0 -- Continue processing Usage A Clicked event also occurs when the mouse button is released. Examples



- Example 1




This code in the window's MouseUp event displays in the SingleLineEdit sle_2 the window coordinates of the pointer when the button is released as reported in the xpos and ypos arguments.



- sle_2.Text = "Position of Pointer is: " + &




String(xpos) + "," + String(ypos)



- Example 2




This code in the window's MouseUp event checks the value of the flags argument and reports which modifier keys are pressed in the SingleLineEdit sle_modkey.



CHOOSE CASE flags CASE 0



sle_mkey.Text = "No modifier keys pressed" CASE 4



sle_mkey.Text = "SHIFT key pressed" CASE 8



sle_mkey.Text = "CONTROL key pressed" CASE 12



sle_mkey.Text = "SHIFT and CONTROL keys pressed" END CHOOSE



See also Clicked MouseDown MouseMove
