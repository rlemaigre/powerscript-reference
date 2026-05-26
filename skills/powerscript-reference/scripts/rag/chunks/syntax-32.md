# Syntax

objectref.Copy ( )



- Table 10.106:




|Argument|Description|
|---|---|
|objectref|One of the following:<br><br>• The name of the DataWindow control, EditMask, InkEdit, MultiLineEdit, SingleLineEdit, RichTextEdit, DropDownListBox or DropDownPictureListBox containing the text you want to copy to the clipboard.<br>• The name of the OLE control or the fully qualified name of a OLE DWObject within a DataWindow control that contains the object you want to copy to the clipboard.<br><br><br>The fully qualified name for a DWObject has this syntax:<br><br>dwcontrol.Object.dwobjectname<br><br>If objectref is a DataWindow, text is copied from the edit control over the current row and column. If objectref is a DropDownListBox or DropDownPictureListBox, its AllowEdit property must be true.|



Return value Integer for DataWindow, InkEdit, and list boxes, Long for other controls. For RichTextEdit controls, Copy returns a long. For other edit controls and OLE objects, Copy returns an integer. For edit controls, Copy returns the number of characters that were copied to the clipboard. If no text is selected in objectref, no characters are copied and Copy returns 0. If an error occurs, Copy returns -1.



For OLE controls and OLE DWObjects, Copy returns 0 if it succeeds and one of the following negative values if an error occurs:



- -1 -- Container is empty
- -2 -- Copy Failed
- -9 -- Other error If objectref is null, Copy returns null. Usage




To select text for copying, the user can use the mouse or keyboard. You can also call the SelectText function in a script. For RichTextEdit controls, there are several additional functions for selecting text: SelectTextAll, SelectTextLine, and SelectTextWord.



To insert the contents of the clipboard into a control, use the Paste function. Copy does not delete the selected text or OLE object. To delete the data, use the Clear or Cut function. Examples



Assuming the selected text in mle_emp_address is Temporary Address, these statements copy Temporary Address from mle_emp_address to the clipboard and store 17 in copy_amt:



integer copy_amt copy_amt = mle_emp_address.Copy()



This example copies the OLE object in the OLE control ole_1 to the clipboard:



integer result result = ole_1.Copy()



See also Clear Clipboard Cut Paste ReplaceText SelectText
