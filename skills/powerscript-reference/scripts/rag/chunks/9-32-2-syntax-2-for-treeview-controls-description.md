# 9.32.2 Syntax 2: For TreeView controls Description Occurs when the user is dragging an object within the control. Event ID

Table 9.87:



|Event ID|Objects|
|---|---|
|pbm_tvndragwithin|TreeView|



Arguments



Table 9.88:



|Argument|Description|
|---|---|
|source|DragObject by value (a reference to the control being dragged)|
|handle|Long (a reference to the ListView item under the pointer in the TreeView control)|



Return Values Long. Return code choices (specify in a RETURN statement):



- 0 -- Continue processing Usage Obsolete functions




You no longer need to call the DraggedObject function in a drag event. Use the source argument instead.



Examples



This example changes the background color of the TreeView when a DragObject enters its border:



This.BackColor = RGB(128, 0, 128)



See also



DragDrop DragEnter DragLeave
