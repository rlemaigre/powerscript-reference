# Examples

These statements set which_control equal to the datatype of the control that is currently being dragged, and then set ls_text_value to the text property of the dragged control:



SingleLineEdit sle_which CommandButton cb_which string ls_text_value DragObject which_control



which_control = DraggedObject() CHOOSE CASE TypeOf(which_control) CASE CommandButton!



cb_which = which_control ls_text_value = cb_which.Text



CASE SingleLineEdit! sle_which = which_control ls_text_value = sle_which.Text



END CHOOSE



See also Drag TypeOf



- 10.132 Draw Description Draws a picture control at a specified location in the current window. Applies to Picture controls Syntax picture.Draw ( xlocation, ylocation )


- Table 10.160:




|Argument|Description|
|---|---|
|picture|The name of the picture control you want to draw in the current window|
|xlocation|The x coordinate of the location (in PowerBuilder units) at which you want to draw the picture|
|ylocation|The y coordinate of the location (in PowerBuilder units) at which you want to draw the picture|



Return value Integer.



- Returns 1 if it succeeds and -1 if an error occurs. If any argument's value is null, Draw returns null. The return value is usually not used. Usage




Using the Draw function is faster and produces less flicker than successively changing the X property of a picture. This is because the Draw function draws directly on the window rather than recreating a small window with the picture in it for each change. Therefore, use Draw to draw pictures in animation.



To create animation, you can place a picture outside the visible portion of the window and then use the Draw function to draw it at different locations in the window. However, the image remains at all the positions where you draw it. If you change the position by small increments, each new drawing of the picture covers up most of the previous image.



Using Draw does not change the position of the picture control -- it just displays the control's image at the specified location. Use the Move function to actually change the position of the control.
