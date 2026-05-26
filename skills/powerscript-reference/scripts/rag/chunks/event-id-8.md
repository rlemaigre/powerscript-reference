# Event ID

- Table 9.70:



|Event ID|Objects|
|---|---|
|pbm_lbuttondblclk|Window|



Arguments



- Table 9.71:




|Argument|Description|
|---|---|
|flags|UnsignedLong by value (the modifier keys and mouse buttons that are pressed).<br><br>Values are:<br><br>• 1 -- Left mouse button<br>• 2 -- Right mouse button<br>• 4 -- Shift key<br>• 8 -- Ctrl key<br>• 16 -- Middle mouse button<br><br><br>In the Clicked event, the left mouse button is being released, so 1 is not summed in the value of flags.<br><br>For an explanation of flags, see Syntax 2 of MouseMove.<br><br>|
|xpos|Integer by value (the distance of the pointer from the left edge of the window's workspace in pixels).|
|ypos|Integer by value (the distance of the pointer from the top of the window's workspace in pixels).|



Return Values Long. Return code choices (specify in a RETURN statement):



0 -- Continue processing Usage



The xpos and ypos arguments provide the same values the functions PointerX and PointerY return when you call them for the window.



See also Clicked MouseDown MouseMove MouseUp RButtonDown



- 9.28.4 Syntax 4: For other controls Description Occurs when the user double-clicks on the control. Event ID


- Table 9.72:




|Event ID|Objects|
|---|---|
|pbm_bndoubleclicked|Graph, OLE, Picture, PictureHyperLink, StaticText, StaticHyperLink|
|pbm_cbndblclk|DropDownListBox, DropDownPictureListBox|
|pbm_lbuttondblclk|DatePicker, MonthCalendar|
|pbm_prndoubleclicked|HProgressBar, VProgressBar|
|pbm_rendoubleclicked|RichTextEdit|



Arguments None Return Values Long. Return code choices (specify in a RETURN statement): 0 -- Continue processing Usage



The DoubleClicked event for DropDownListBoxes is only active when the Always Show List property is on.



See also Clicked RButtonDown



- 9.29 DragDrop The DragDrop event has different arguments for different objects:


- Table 9.73:



|Object|See|
|---|---|
|ListBox, PictureListBox, ListView, and Tab controls<br><br>|Syntax 1|
|TreeView control|Syntax 2|
|Windows and other controls|Syntax 3<br><br>|



For information about the DataWindow control's DragDrop event, see the Section 8.15, “DragDrop” in DataWindow Reference.



- 9.29.1 Syntax 1: For ListBox, PictureListBox, ListView, and Tab controls Description




Occurs when the user drags an object onto the control and releases the mouse button to drop the object.



Event ID



- Table 9.74:



|Event ID|Objects|
|---|---|
|pbm_lbndragdrop|ListBox, PictureListBox|
|pbm_lvndragdrop|ListView|
|pbm_tcndragdrop|Tab|



Arguments



- Table 9.75:




|Argument|Description|
|---|---|
|source|DragObject by value (a reference to the control being dragged)|
|index|Integer by value (the index of the target ListView item)|



Return Values Long. Return code choices (specify in a RETURN statement): 0 -- Continue processing Usage Obsolete functions You no longer need to call the DraggedObject function in a drag event. Use the source argument instead.



Examples For ListView controls, see the example for BeginDrag. This example inserts the dragged ListView item:



This.AddItem(ilvi_dragged_object) This.Arrange( )



See also BeginDrag BeginRightDrag DragEnter DragLeave DragWithin



- 9.29.2 Syntax 2: For TreeView controls Description




Occurs when the user drags an object onto the control and releases the mouse button to drop the object.
