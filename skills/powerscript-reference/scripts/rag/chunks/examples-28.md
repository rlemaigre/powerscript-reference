# Examples

This example moves a ListView item from one ListView to another. ilvi_dragged_object is a window instance variable whose type is ListViewItem. To copy the item, omit the code that deletes it from the source ListView.



This code is in the BeginDrag event script of the source ListView:



// If the ListView's DragAuto property is FALSE This.Drag(Begin!)



This.GetItem(This.SelectedIndex(), & ilvi_dragged_object)



// To copy, rather than move, omit these two lines This.DeleteItem(This.SelectedIndex()) This.Arrange()



This code is in the DragDrop event of the target ListView:



This.AddItem(ilvi_dragged_object) This.Arrange()



See also BeginRightDrag DragDrop DragEnter DragLeave DragWithin



- 9.4.2 Syntax 2: For TreeView controls Description




Occurs when the user presses the left mouse button on a label in the TreeView control and begins dragging.
