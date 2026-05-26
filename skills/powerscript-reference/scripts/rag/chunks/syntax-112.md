# Syntax

editname.ReplaceText (string )



- Table 10.647:




|Argument|Description|
|---|---|
|editname|The name of the DataWindow, EditMask, InkEdit, MultiLineEdit, SingleLineEdit, RichTextEdit, DropDownListBox, or DropDownPictureListBox control in which you want to replace the selected string.<br><br>In a DataWindow control, the text is replaced in the edit control over the current row and column.|
|string|The string that replaces the selected text.|



Return value Integer for DataWindow, InkEdit, and list boxes, Long for other controls. For InkEdit, returns 1 for success and -1 if an error occurs. For other controls, returns the number of characters in string and -1 if an error occurs. If any argument's value is null, ReplaceText returns null. Usage



If there is no selection, ReplaceText inserts the replacement text at the cursor position. In a RichTextEdit control, the selection can include pictures.
