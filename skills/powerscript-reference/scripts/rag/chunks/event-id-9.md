# Event ID

- Table 9.76:



|Event ID|Objects|
|---|---|
|pbm_tvndragdrop|TreeView|



Arguments



- Table 9.77:




|Argument|Description|
|---|---|
|source|DragObject by value (a reference to the control being dragged)|
|handle|Long by value (the handle of the target TreeView item)|



Return Values Long. Return code choices (specify in a RETURN statement): 0 -- Continue processing Usage Obsolete functions You no longer need to call the DraggedObject function in a drag event. Use the source argument instead. Examples This example inserts the dragged object as a child of the TreeView item it is dropped upon:



TreeViewItem ltv_1 This.GetItem(handle, ltv_1) This.SetDropHighlight(handle) This.InsertItemFirst(handle, itvi_drag_object) This.ExpandItem(handle) This.SetRedraw(TRUE)



See also DragEnter DragLeave DragWithin



- 9.29.3 Syntax 3: For windows and other controls Description




Occurs when the user drags an object onto the control and releases the mouse button to drop the object.
