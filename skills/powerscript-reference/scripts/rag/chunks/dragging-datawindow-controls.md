# Dragging DataWindow controls

The Clicked event of a DataWindow control occurs when the user presses the mouse button, not when the mouse button is released. If you place Drag(Begin!) in a DataWindow control's Clicked event, releasing the mouse button ends the drag. To achieve the same behavior as with other controls, define a user-defined event for the DataWindow control called lbuttonup and map it to the pbm_lbuttonup event ID. Then place the following code in the lbuttonup event script (ib_dragflag is a boolean instance variable):



IF NOT ib_dragflag THEN this.Drag(Begin!) ib_dragflag = TRUE



ELSE



ib_dragflag = FALSE END IF



To make something happen when the user drags a control onto a target object, write scripts for one or more of the target's drag events (DragDrop, DragEnter, DragLeave, and DragWithin).
