# Usage

When a control's DragAuto property is true, a drag operation begins when the user presses a mouse button.



Obsolete functions You no longer need to call the DraggedObject function in a drag event. Use the source argument instead. Examples



- Example 1



In this example, the code in the DoubleClicked event for the DataWindow dw_orddetail starts a drag operation:



IF dw_orddetail.GetRow() > 0 THEN dw_orddetail.Drag(Begin!) This.DragIcon = "dragitem.ico"



END IF



Then, in the DragDrop event for a trashcan Picture control, this code deletes the row the user clicked and dragged from the DataWindow control:



long ll_currow dwitemstatus ldwis_delrow



ll_currow = dw_orddetail.GetRow( )



// Save the row's status flag for later use ldwis_delrow = dw_orddetail.GetItemStatus &



(ll_currow, 0, Primary!)



// Now, delete the current row from dw_orddetail dw_orddetail.DeleteRow(0)



- Example 2




This example for a trashcan Picture control's DragDrop event checks whether the source of the drag operation is a DataWindow. If so, it asks the user whether to delete the current row in the source DataWindow:



DataWindow ldw_Source Long ll_RowToDelete Integer li_Choice



IF source.TypeOf() = DataWindow! THEN



ldw_Source = source ll_RowToDelete = ldw_Source.GetRow()



IF ll_RowToDelete > 0 THEN li_Choice = MessageBox("Delete", & "Delete this row?", Question!, YesNo!, 2) IF li_Choice = 1 THEN ldw_Source.DeleteRow(ll_RowToDelete) END IF



ELSE



Beep(1) END IF



ELSE



Beep(1) END IF



See also DragEnter DragLeave DragWithin



- 9.30 DragEnter Description Occurs when the user is dragging an object and enters the control. Event ID


- Table 9.80:



|Event ID|Objects|
|---|---|
|pbm_bndragenter|CheckBox, CommandButton, Graph, InkEdit, InkPicture, Picture, PictureHyperlink, PictureButton, RadioButton|
|pbm_cbndragenter|DropDownListBox, DropDownPictureListBox|
|pbm_dragenter|DatePicker, MonthCalendar|
|pbm_dwndragente|rDataWindow|
|pbm_endragenter|SingleLineEdit, EditMask, MultiLineEdit, StaticText, StaticHyperLink|
|pbm_lbndragenter|ListBox, PictureListBox|
|pbm_lvndragenter|ListView|
|pbm_omndragente|OLEr|
|pbm_prndragenter|HProgressBar, VProgressBar|
|pbm_rendragenter|RichTextEdit|
|pbm_sbndragenter|HScrollBar, HTrackBar, VScrollBar, VTrackBar|
|pbm_tcndragenter|Tab|
|pbm_tvndragenter|TreeView|
|pbm_uondragente|rUserObject|
|pbm_dragenter|Window|



Arguments



- Table 9.81:




|Argument|Description|
|---|---|
|source|DragObject by value (a reference to the control being dragged)|



Return Values Long. Return code choices (specify in a RETURN statement):



0 -- Continue processing Usage Obsolete functions You no longer need to call the DraggedObject function in a drag event. Use the source argument instead. Examples



This example for a Picture control's DragDrop event adds a border to itself when another Picture control (the source) is dragged within its boundaries:



IF source.TypeOf() = Picture! THEN



This.Border = TRUE END IF



See also DragDrop DragLeave DragWithin



- 9.31 DragLeave Description Occurs when the user is dragging an object and leaves the control. Event ID


- Table 9.82:




|Event ID|Objects|
|---|---|
|pbm_bndragleave|CheckBox, CommandButton, Graph, InkEdit, InkPicture, Picture, PictureHyperLink, PictureButton, RadioButton|
|pbm_cbndragleav|eDropDownListBox, DropDownPictureListBox|
|pbm_dragleave|DatePicker, MonthCalendar|
|pbm_dwndragleav|DataWindowe|
|pbm_endragleave|SingleLineEdit, EditMask, MultiLineEdit, StaticText, StaticHyperLink|
|pbm_lbndragleave|ListBox, PictureListBox|
|pbm_lvndragleave|ListView|
|pbm_omndragleav|OLEe|
|pbm_prndragleave|HProgressBar, VProgressBar|
|pbm_rendragleave|RichTextEdit|
|pbm_sbndragleave|HScrollBar, HTrackBar, VScrollBar, VTrackBar|
|pbm_tcndragleave|Tab|
|pbm_tvndragleave|TreeView|
|pbm_uondragleav|eUserObject|



|Event ID|Objects|
|---|---|
|pbm_dragleave|Window|
