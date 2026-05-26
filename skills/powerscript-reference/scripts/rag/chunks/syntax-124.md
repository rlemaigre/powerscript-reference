# Syntax

editname.SelectText ( start, length )



- Table 10.713:




|Argument|Description|
|---|---|
|editname|The name of the DataWindow, EditMask, InkEdit, MultiLineEdit, SingleLineEdit, DropDownListBox, or DropDownPictureListBox control in which you want to select text.|
|start|A long specifying the position at which you want to start the selection.|
|length|A long specifying the number of characters you want to select. If length is 0, no text is selected but PowerBuilder moves the insertion point to the location specified in start.|



Return value Integer for DataWindow and list boxes, Long for other controls. Returns the number of characters selected. If an error occurs, SelectText returns -1. Usage



If the control does not have the focus when you call SelectText, then the text is not highlighted until the control has focus. To set focus on the control so that the selected text is highlighted, call the SetFocus function.
