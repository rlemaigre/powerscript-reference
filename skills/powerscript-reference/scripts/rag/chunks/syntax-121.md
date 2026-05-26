# Syntax

editname.SelectedStart ( )



- Table 10.703:




|Argument|Description|
|---|---|
|editname|The name of the DataWindow, EditMask, MultiLineEdit, SingleLineEdit, RichTextEdit, DropDownListBox, or DropDownPictureListBox control in which you want to determine the starting position of selected text.<br><br>For a DataWindow, it reports the starting position in the edit control over the current row and column.|



Return value Long. Returns the starting position of the selected text in editname. If no text is selected, SelectedStart returns the position of the character immediately following the insertion point. If an error occurs, SelectedStart returns -1. If editname is null, SelectedStart returns null. Usage



For all controls except RichTextEdit, SelectedStart counts from the start of the text and includes spaces and line endings.



For RichTextEdit controls, SelectedStart counts from the start of the line on which the selection begins. The start is at the opposite end of the selection from the insertion point. For example, if the user dragged back to make the selection, the start of the selection is at the end of the highlighted text and the insertion point is before the start. Use the Position function to get information about the start and end of the selection.
