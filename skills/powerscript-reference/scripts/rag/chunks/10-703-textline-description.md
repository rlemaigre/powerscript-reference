# 10.703 TextLine Description

Obtains the text of the line that contains the insertion point. TextLine works for controls that can contain multiple lines.



Applies to DataWindow, EditMask, MultiLineEdit, and RichTextEdit controls Syntax



editname.TextLine ( )



- Table 10.877:




|Argument|Description|
|---|---|
|editname|The name of the DataWindow control, EditMask, MultiLineEdit, or RichTextEdit control in which you want the text on the line that contains the insertion point|



Return value String. Returns the text on the line with the insertion point in editname. If an error occurs, TextLine returns the empty string (""). If editname is null, TextLine returns null. Usage



If editname is a DataWindow control, then TextLine reports information about the edit control over the current row and column.



Examples



In the MultiLineEdit mle_state, if the insertion point is on line 4 and its text is North Carolina, then this example sets linetext to North Carolina:



string linetext linetext = mle_state.TextLine()



If the insertion point is on a line whose text is Y in the MultiLineEdit mle_contact, then some processing takes place:



IF mle_contact.TextLine() = "Y" THEN ...



See also SelectedItem SelectTextLine
