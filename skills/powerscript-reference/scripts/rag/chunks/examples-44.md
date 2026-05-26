# Examples

This code in the LineUp event causes the thumb to move up when the user clicks on the up arrow of the vertical scroll bar and displays the resulting position in the StaticText control st_1:



IF This.Position < This.MinPosition + 1 THEN



This.Position = MinPosition ELSE



This.Position = This.Position - 1 END IF st_1.Text = "LineUp " + String(This.Position)



See also LineDown LineLeft LineRight PageUp



- 9.66 LoseFocus Description Occurs just before a control loses focus (before it becomes inactive). Event ID


- Table 9.156:




|Event ID|Description|
|---|---|
|pbm_controltypek|illfocusUserObject (standard visual user objects only)|
|pbm_bnkillfocus|CheckBox, CommandButton, Graph, OLE, Picture, PictureHyperLink, PictureButton, RadioButton, StaticText, StaticHyperLink|
|pbm_cbnkillfocus|DropDownListBox, DropDownPictureListBox|
|pbm_dwnkillfocus|DataWindow|
|pbm_enkillfocus|SingleLineEdit, EditMask, MultiLineEdit|
|pbm_killfocus|HProgressBar, VProgressBar, DatePicker, MonthCalendar, InkEdit, InkPicture|
|pbm_lbnkillfocus|ListBox, PictureListBox|
|pbm_lvnkillfocus|ListView|
|pbm_renkillfocus|RichTextEdit|
|pbm_sbnkillfocus|HScrollBar, HTrackBar, VScrollBar, VTrackBar|



|Event ID|Description|
|---|---|
|pbm_tcnkillfocus|Tab|
|pbm_tvnkillfocus|TreeView|



Arguments None Return Values Long. Return code choices (specify in a RETURN statement): 0 -- Continue processing Usage



Write a script for a control's LoseFocus event if you want some processing to occur when the user changes focus to another control.



For controls that contain editable text, losing focus can also cause a Modified event to occur. In a RichTextEdit control, a LoseFocus event occurs when the user clicks on the control's toolbar. The control does not actually lose focus.



Because the MessageBox function grabs focus, you should not use it when focus is changing, such as in a LoseFocus event. Instead, you might display a message in the window's title or a MultiLineEdit.
