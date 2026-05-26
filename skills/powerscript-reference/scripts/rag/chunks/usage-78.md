# Usage

PosA replaces the functionality that Pos had in DBCS environments in PowerBuilder 9. In SBCS environments, Pos, PosW, and PosA return the same results.



- 10.465 PosW (obsolete) Description Finds one string within another string. This function is obsolete. It has the same behavior as Pos in all environments. Syntax PosW ( string1, string2 {, start } )

- 10.466 Position Reports the position of the insertion point in an editable control.


- Table 10.586:



|To report|Use|
|---|---|
|The position of the insertion point in any editable control (except RichTextEdit)|Syntax 1|
|The position of the insertion point or the start and end of selected text in a RichTextEdit control or a DataWindow whose object has the RichTextEdit presentation style|Syntax 2<br><br>|



- 10.466.1 Syntax 1: For editable controls, except RichTextEdit Description Determines the position of the insertion point in an edit control. Applies to




DataWindow, EditMask, InkEdit, MultiLineEdit, SingleLineEdit, or DropDownListBox, DropDownPictureListBox controls



Syntax



editname.Position ( )



- Table 10.587:




|Argument|Description|
|---|---|
|editname|The name of the DataWindow control, EditMask, InkEdit, MultiLineEdit, SingleLineEdit, or DropDownListBox, or DropDownPictureListBox control in which you want to find the location of the insertion point|



Integer for DataWindow, InkEdit, and list boxes, Long for other controls. Returns the location of the insertion point in editname if it succeeds and -1 if an error occurs. If editname is null, Position returns null. Usage



Position reports the position number of the character immediately following the insertion point. For example, Position returns 1 if the cursor is at the beginning of editname. If text is selected in editname, Position reports the number of the first character of the selected text.



In a DataWindow control, Position reports the insertion point's position in the edit control over the current row and column.
