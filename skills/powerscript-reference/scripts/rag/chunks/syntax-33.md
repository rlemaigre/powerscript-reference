# Syntax

controlname.Cut ( )



- Table 10.114:




|Argument|Description|
|---|---|
|controlname|The name of the DataWindow, InkEdit, MultiLineEdit, SingleLineEdit, RichTextEdit, DropDownListBox, DropDownPictureListBox, or OLE control containing the text or object to be cut.<br><br>If controlname is a DataWindow, text is cut from the edit control over the current row and column. If controlname is a DropDownListBox or DropDownPictureListBox, the AllowEdit property must be true.|



Return value Integer for DataWindow, InkEdit, and list boxes, Long for other controls. For editable controls, Cut returns the number of characters that were cut from controlname and stored in the clipboard. If no text is selected, no characters are cut and Cut returns 0. If an error occurs, Cut returns -1. For OLE controls, Cut returns 0 if it succeeds and one of the following negative values if an error occurs:



- -1 -- Container is empty
- -2 -- Cut failed
- -9 -- Other error If controlname is null, Cut returns null. Usage




To select text for deleting, the user can use the mouse or keyboard. You can also call the SelectText function in a script. For RichTextEdit controls, there are several additional functions for selecting text: SelectTextAll, SelectTextLine, and SelectTextWord.



To insert the contents of the clipboard into a control, use the Paste function. To delete selected text or an OLE object but not store it in the clipboard, use the Clear function.



Cutting an OLE object breaks any connections between it and its source file or storage, just



- as Clear does. Examples




Assuming the selected text in mle_emp_address is Temporary, this statement deletes Temporary from mle_emp_address, stores it in the clipboard, and returns 9:



mle_emp_address.Cut()



This example cuts the OLE object in the OLE control ole_1 and puts it on the clipboard:



integer result result = ole_1.Cut()



See also Copy Clear ClearAll Clipboard DeleteItem Paste



- 10.94 DataCount Description Reports the number of data points in the specified series in a graph. Applies to




Graph controls in windows and user objects, and graphs in DataWindow controls and DataStore objects
