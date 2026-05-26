# Event ID

- Table 9.7:



|Event ID|Objects|
|---|---|
|pbm_tvnbegindrag|TreeView|



Arguments



- Table 9.8:




|Argument|Description|
|---|---|
|handle|Long by value (handle of the TreeView item being dragged)|



Return Values Long. Return code choices (specify in a RETURN statement): 0 -- Continue processing Usage



BeginDrag and BeginRightDrag events occur when the user presses the mouse button and drags, whether or not dragging is enabled. To enable dragging, you can:



- • Set the DragAuto property to true. If the TreeView's DragAuto property is true, a drag operation begins automatically when the user clicks.
- • Call the Drag function. If DragAuto is false, then in the BeginDrag event script, the programmer can call the Drag function to begin the drag operation.




The user cannot drag a highlighted item. Dragging a TreeView item onto another control causes the control's standard drag events (DragDrop, DragEnter, DragLeave, and DragWithin) to occur. The standard drag events occur for TreeView when another control is dragged within the borders of the TreeView. Examples



This example moves the first TreeView item in the source TreeView to another TreeView when the user drags there. itvi_dragged_object is a window instance variable whose type is TreeViewItem. To copy the item, omit the code that deletes it from the source TreeView.



This code is in the BeginDrag event script of the source TreeView:



long itemnum // If the TreeView's DragAuto property is FALSE This.Drag(Begin!) itemnum = 1 This.GetItem(itemnum, itvi_dragged_object) // To copy, rather than move, omit these two lines This.DeleteItem(itemnum) This.SetRedraw(TRUE)



This code is in the DragDrop event of the target TreeView:



This.InsertItemLast(0, itvi_dragged_object) This.SetRedraw(TRUE)



Instead of deleting the item from the source TreeView immediately, consider deleting it after the insertion in the DragDrop event succeeds.



See also BeginRightDrag DragDrop DragEnter DragLeave



DragWithin



- 9.5 BeginLabelEdit The BeginLabelEdit event has different arguments for different objects:


- Table 9.9:



|Object|See|
|---|---|
|ListView control|Syntax 1|
|TreeView control|Syntax 2<br><br>|



- 9.5.1 Syntax 1: For ListView controls Description Occurs when the user clicks on the label of an item after selecting the item. Event ID


- Table 9.10:



|Event ID|Objects|
|---|---|
|pbm_lvnbeginlabeledit|ListView|



Arguments



- Table 9.11:




|Argument|Description|
|---|---|
|index|Integer by value (the index of the selected ListView item)|



Return Values Long. Return code choices (specify in a RETURN statement):



- 0 -- Allow editing of the label
- 1 -- Prevent editing of the label Usage




When editing is allowed, a box appears around the label with the text highlighted. The user can replace or change the existing text.
