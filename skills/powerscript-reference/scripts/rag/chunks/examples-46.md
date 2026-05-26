# Examples

This code in the MouseMove event causes a meter OLE custom control to rise and fall continually as the mouse pointer is moved up and down in the window workspace:



This.uf_setmonitor(ypos, ole_verticalmeter, & This.WorkspaceHeight() )



Uf_setmonitor is a window function that scales the pixels to the range of the gauge. It accepts three arguments: the vertical position of the mouse pointer, an OLECustomControl reference, and the maximum range of the mouse pointer for scaling purposes:



double ld_gaugemax, ld_gaugemin double ld_gaugerange, ld_value



// Ranges for monitor-type control ld_gaugemax = ocxitem.Object.MaxValue ld_gaugemin = ocxitem.Object.MinValue ld_gaugerange = ld_gaugemax - ld_gaugemin



// Horizontal position of mouse within window ld_value = data * ld_gaugerange / range + ld_gaugemin



// Set gauge ocxitem.Object.Value = Round(ld_value, 0)



RETURN 1



The OLE custom control also has a MouseMove event. This code in that event keeps the gauge responding when the pointer is over the gauge. (You need to pass values for the arguments that are usually handled by the system; the mouse position values are specified in relation to the parent window.) For example:



Parent.EVENT MouseMove(0, Parent.PointerX(), & Parent.PointerY())



See also Clicked MouseDown MouseUp



- 9.70 MouseUp The MouseUp event has different arguments for different objects:


- Table 9.166:



|Object|See|
|---|---|
|RichTextEdit control|Syntax 1|
|Window|Syntax 2<br><br>|



- 9.70.1 Syntax 1: For RichTextEdit controls Description Occurs when the user releases the left mouse button in a RichTextEdit control. Event ID



Table 9.167:



|Event ID|Objects|
|---|---|
|pbm_renlbuttonup|RichTextEdit|



Arguments None Return Values Long. Return code choices (specify in a RETURN statement): 0 -- Continue processing Usage A Clicked event also occurs when the mouse button is released. Examples



The following code in a RichTextEdit control's MouseUp event assigns text to the SingleLineEdit sle_1 when the user releases the left mouse button:



- sle_1.Text = "Mouse Up" See also Clicked MouseDown MouseMove


- 9.70.2 Syntax 2: For windows Description






Occurs when the user releases the left mouse button in an unoccupied area of the window (any area with no visible enabled object).
