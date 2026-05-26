# Arguments

- Table 9.83:



|Argument|Description|
|---|---|
|source|DragObject by value (a reference to the control being dragged)|



Return Values Long. Return code choices (specify in a RETURN statement): 0 -- Continue processing Usage Obsolete functions You no longer need to call the DraggedObject function in a drag event. Use the source argument instead. Examples



This example checks the name of the control being dragged, and if it is, cb_1 it cancels the drag operation:



IF ClassName(source) = "cb_1" THEN



cb_1.Drag(Cancel!) END If



This example for a Picture control's DragDrop event removes its own border when another Picture control (the source) is dragged beyond its boundaries:



IF source.TypeOf() = Picture! THEN



This.Border = TRUE END IF



See also



DragDrop DragEnter DragWithin



- 9.32 DragWithin The DragWithin event has different arguments for different objects:


- Table 9.84:




|Object|See|
|---|---|
|ListBox, PictureListBox, ListView, and Tab controls|Syntax 1<br><br>|



|TreeView control|Syntax 2|
|---|---|
|Windows and other controls|Syntax 3<br><br>|



For information about the DataWindow control's DragWithin event, see Section 8.18, “DragWithin” in DataWindow Reference.



- 9.32.1 Syntax 1: For ListBox, PictureListBox, ListView, and Tab controls Description Occurs when the user is dragging an object within the control. Event ID


- Table 9.85:



|Event ID|Objects|
|---|---|
|pbm_lbndragwithin|ListBox, PictureListBox|
|pbm_lvndragwithin|ListView|
|pbm_tcndragwithin|Tab|



Arguments



- Table 9.86:




|Argument|Description|
|---|---|
|source|DragObject by value (a reference to the control being dragged)|
|index|Integer by value (a reference to the ListView item under the pointer in the ListView control)|



Return Values Long. Return code choices (specify in a RETURN statement): 0 -- Continue processing Usage Obsolete functions You no longer need to call the DraggedObject function in a drag event. Use the source argument instead. Examples



This example changes the background color of the ListView when a DragObject enters its border:



This.BackColor = RGB(128, 0, 128)
