# Syntax

editname.SelectedLength ( )



- Table 10.700:




|Argument|Description|
|---|---|
|editname|The name of the DataWindow, EditMask, MultiLineEdit, SingleLineEdit, RichTextEdit, DropDownListBox, or DropDownPictureListBox control in which you want the length of the selected text.<br><br>For a DataWindow, it reports the length of the selected text in the edit control over the current row and column.|



Return value Integer for DataWindow, InkEdit, and list boxes, Long for other controls. Returns the length of the selected text in editname. If no text is selected, SelectedLength returns 0. If an error occurs, it returns -1. If editname is null, SelectedLength returns null. Usage



Except for text in rich text controls, the characters that make up a line ending (produced by typing Ctrl+Enter or Enter) can be different on different platforms. On Windows, it is a carriage return plus a line feed and equals two characters when calculating the length. On other platforms, a line ending is a single character. A line that has wrapped has no line-ending character. For DropDownListBox and DropDownPictureListBox controls, SelectedLength returns -1 if the control's AllowEdit property is set to false.
