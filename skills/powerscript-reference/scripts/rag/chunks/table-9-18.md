# Table 9.18:

|Argument|Description|
|---|---|
|index|Integer by value (the index of the ListView item being dragged)|



Return Values Long. Return code choices (specify in a RETURN statement): 0 -- Continue processing Usage



BeginDrag and BeginRightDrag events occur when the user presses the mouse button and drags, whether or not dragging is enabled. To enable dragging, you can:



- • Set the DragAuto property to true. If the ListView's DragAuto property is true, a drag operation begins automatically when the user clicks.
- • Call the Drag function. If DragAuto is false, then in the BeginRightDrag event script, the programmer can call the Drag function to begin the drag operation.




Dragging a ListView item onto another control causes its standard drag events (DragDrop, DragEnter, DragLeave, and DragWithin) to occur. The standard drag events occur for ListView when another control is dragged within the borders of the ListView.



Examples See the example for the BeginDrag event. It is also effective for the BeginRightDrag event. See also BeginDrag DragDrop DragEnter DragLeave DragWithin



- 9.7.2 Syntax 2: For TreeView controls Description




Occurs when the user presses the right mouse button in the TreeView control and begins dragging. Event ID
