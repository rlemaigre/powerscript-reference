# Table 9.20:

|Argument|Description|
|---|---|
|handle|Long by value (the handle of the TreeView item being dragged)|



Return Values Long. Return code choices (specify in a RETURN statement): 0 -- Continue processing Usage



BeginDrag and BeginRightDrag events occur when the user presses the mouse button and drags, whether or not dragging is enabled. To enable dragging, you can:



- • Set the DragAuto property to true. If the ListView's DragAuto property is true, a drag operation begins automatically when the user clicks.
- • Call the Drag function. If DragAuto is false, then in the BeginRightDrag event script, the programmer can call the Drag function to begin the drag operation.




The user cannot drag a highlighted item. Dragging a TreeView item onto another control causes its standard drag events (DragDrop, DragEnter, DragLeave, and DragWithin) to occur. The standard drag events occur for TreeView when another control is dragged within the borders of the TreeView.



Examples See the example for the BeginDrag event. See also BeginDrag DragDrop DragEnter DragLeave DragWithin



- 9.8 BeginSync Description Occurs at the beginning of the synchronization. Event ID
