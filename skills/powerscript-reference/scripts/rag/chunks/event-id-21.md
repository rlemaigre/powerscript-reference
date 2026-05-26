# Event ID

- Table 9.160:



|Event ID|Objects|
|---|---|
|pbm_lbuttondown|Window|



Arguments



- Table 9.161:




|Argument|Description|
|---|---|
|flags|UnsignedLong by value (the modifier keys and mouse buttons that are pressed).<br><br>Values are:<br><br>• 1 -- Left mouse button<br>• 2 -- Right mouse button<br>• 4 -- Shift key<br>• 8 -- Ctrl key<br>• 16 -- Middle mouse button<br>|



|Argument|Description|
|---|---|
| |In the MouseDown event, the left mouse button is always down, so 1 is always summed in the value of flags. For an explanation of flags, see Syntax 2 of MouseMove.<br><br>|
|xpos|Integer by value (the distance of the pointer from the left edge of the window's workspace in pixels).|
|ypos|Integer by value (the distance of the pointer from the top of the window's workspace in pixels).|



Return Values Long. Return code choices (specify in a RETURN statement): 0 -- Continue processing Examples



- Example 1



This code in the MouseDown event displays the window coordinates of the pointer as reported in the xpos and ypos arguments:



sle_2.Text = "Position of Pointer is: " + & String(xpos) + "," + String(ypos)



- Example 2




This code in the MouseDown event checks the value of the flags argument, and reports which modifier keys are pressed in the SingleLineEdit sle_modkey:



CHOOSE CASE flags CASE 1



sle_mkey.Text = "No modifier keys pressed" CASE 5



sle_mkey.Text = "SHIFT key pressed" CASE 9



sle_mkey.Text = "CONTROL key pressed" CASE 13



sle_mkey.Text = "SHIFT and CONTROL keys pressed" END CHOOSE



See also Clicked MouseMove MouseUp



- 9.69 MouseMove The MouseMove event has different arguments for different objects:


- Table 9.162:




|Object|See|
|---|---|
|RichTextEdit control|Syntax 1<br><br>|



|Object|See|
|---|---|
|Window|Syntax 2<br><br>|
